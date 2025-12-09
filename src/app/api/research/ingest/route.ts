import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { seedResearchArticlesIfEmpty } from '@/models/ResearchArticle';
import { ResearchArticle } from '@/types/research';

// Weekly ingest: seeds sample data if empty, then pulls recent papers from Europe PMC.
// Safe to run multiple times; uses upsert on doi/pmid/title+date to avoid duplicates.
export async function GET() {
  try {
    await seedResearchArticlesIfEmpty();
    const fetched = await fetchEuropePmcRecent();
    const upserted = await upsertArticles(fetched);

    return NextResponse.json({
      status: 'ok',
      fetched: fetched.length,
      upserted,
    });
  } catch (error) {
    console.error('Error running ingest', error);
    return NextResponse.json({ error: 'Failed ingest' }, { status: 500 });
  }
}

async function fetchEuropePmcRecent(): Promise<ResearchArticle[]> {
  const now = new Date();
  const start = new Date();
  // Broaden window to 24 months to increase hit rate
  start.setMonth(start.getMonth() - 24);

  const startStr = start.toISOString().slice(0, 10);
  const endStr = now.toISOString().slice(0, 10);

  // Broader query: men/male, mental health, therapy OR counseling, past 24 months
  const query = `(MENTAL HEALTH) AND (MEN OR MALE OR MASCULIN*) AND (THERAPY OR COUNSELING OR PSYCHOTHERAPY OR CBT) AND FIRST_PDATE:[${startStr} TO ${endStr}]`;
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=50&sort_date=y`;

  const res = await fetch(url);
  if (!res.ok) {
    console.warn('Europe PMC fetch failed', res.status);
    return [];
  }

  const data = await res.json();
  const results = data?.resultList?.result || [];

  return results.map((r: any): ResearchArticle => {
    const doi = r.doi || undefined;
    const pmid = r.pmid || undefined;
    const publishedAt = r.firstPublicationDate || r.pubYear ? new Date(r.firstPublicationDate || `${r.pubYear}-01-01`) : new Date();

    let link = r.fullTextUrlList?.fullTextUrl?.[0]?.url;
    if (!link && pmid) link = `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
    if (!link && doi) link = `https://doi.org/${doi}`;

    return {
      title: r.title || 'Untitled',
      summary: r.abstractText || r.title || 'No summary available.',
      source: r.journalTitle || r.bookOrReportDetails?.publisher || 'Unknown',
      link: link || 'https://europepmc.org',
      publishedAt,
      tags: buildTags(r),
      doi,
      pmid,
    };
  });
}

function buildTags(r: any): string[] {
  const tags = new Set<string>();
  if (r.journalTitle) tags.add(r.journalTitle);
  if (r.pubType) tags.add(r.pubType);
  if (r.authorString) tags.add('authors');
  return Array.from(tags).slice(0, 6);
}

async function upsertArticles(articles: ResearchArticle[]) {
  if (!articles.length) return 0;
  const db = await getDatabase();
  const col = db.collection<ResearchArticle>('research_articles');
  let upserted = 0;

  for (const article of articles) {
    const filter = buildFilter(article);
    const update = {
      ...article,
      createdAt: new Date(),
    };
    const res = await col.updateOne(filter, { $set: update }, { upsert: true });
    if (res.upsertedCount || res.modifiedCount) upserted += 1;
  }
  return upserted;
}

function buildFilter(article: ResearchArticle) {
  if (article.doi) return { doi: article.doi };
  if (article.pmid) return { pmid: article.pmid };
  return { title: article.title, publishedAt: article.publishedAt };
}
