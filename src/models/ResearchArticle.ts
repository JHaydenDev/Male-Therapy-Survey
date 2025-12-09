import { getDatabase } from '@/lib/mongodb';
import { ResearchArticle, ResearchQuery } from '@/types/research';

const COLLECTION_NAME = 'research_articles';

const SAMPLE_ARTICLES: Omit<ResearchArticle, '_id' | 'createdAt'>[] = [
  {
    title: 'Global status report on mental health',
    summary: 'World Health Organization overview on mental health burden, service gaps, and recommended policy actions.',
    source: 'WHO',
    link: 'https://www.who.int/publications/i/item/9789240053663',
    publishedAt: new Date('2024-09-20'),
    tags: ['global', 'policy', 'access'],
    doi: undefined,
    pmid: undefined,
    featured: true,
  },
  {
    title: 'Mental health, suicide, and self-harm in men: recent trends',
    summary: 'Recent evidence synthesizing suicide and self-harm trends among men, highlighting risk factors and prevention strategies.',
    source: 'Lancet Psychiatry',
    link: 'https://www.thelancet.com/journals/lanpsy/home',
    publishedAt: new Date('2024-06-15'),
    tags: ['suicide', 'men', 'epidemiology'],
    doi: '10.1016/S2215-0366(24)00000-0',
    pmid: undefined,
    featured: true,
  },
  {
    title: 'Barriers to care for men seeking mental health services',
    summary: 'Survey of access barriers including stigma, cost, and availability with suggested intervention points.',
    source: 'APA Monitor',
    link: 'https://www.apa.org/monitor',
    publishedAt: new Date('2024-11-05'),
    tags: ['stigma', 'access', 'men'],
    doi: undefined,
    pmid: undefined,
    featured: true,
  },
  {
    title: 'Effectiveness of digital cognitive behavioral therapy for men',
    summary: 'Meta-analysis of digital CBT outcomes in male populations showing moderate-to-large effect sizes for depression and anxiety.',
    source: 'JAMA Psychiatry',
    link: 'https://jamanetwork.com/journals/jamapsychiatry',
    publishedAt: new Date('2024-08-10'),
    tags: ['digital health', 'cbt', 'outcomes'],
    doi: '10.1001/jamapsychiatry.2024.0000',
    pmid: undefined,
  },
  {
    title: 'Workplace interventions to reduce stigma in men',
    summary: 'Randomized programs in corporate settings reducing stigma and increasing help-seeking among male employees.',
    source: 'CDC',
    link: 'https://www.cdc.gov/mentalhealth',
    publishedAt: new Date('2024-07-18'),
    tags: ['stigma', 'workplace', 'prevention'],
    doi: undefined,
    pmid: undefined,
  },
];

export async function seedResearchArticlesIfEmpty() {
  const db = await getDatabase();
  const collection = db.collection<ResearchArticle>(COLLECTION_NAME);
  const count = await collection.countDocuments();
  if (count > 0) return { inserted: false, count };

  await collection.insertMany(
    SAMPLE_ARTICLES.map((article) => ({
      ...article,
      createdAt: new Date(),
    }))
  );
  return { inserted: true, count: SAMPLE_ARTICLES.length };
}

export async function getResearchArticles(query: ResearchQuery = {}) {
  await seedResearchArticlesIfEmpty();
  const db = await getDatabase();
  const collection = db.collection<ResearchArticle>(COLLECTION_NAME);

  const filter: Record<string, unknown> = {};

  applyMenMentalHealthFilter(filter);

  if (query.tag) {
    filter.tags = query.tag;
  }

  if (query.source) {
    filter.source = query.source;
  }

  if (query.months && query.months > 0) {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - query.months);
    filter.publishedAt = { $gte: cutoff };
  }

  const limit = Math.min(query.limit ?? 20, 50);
  const skip = Math.max(query.skip ?? 0, 0);

  const cursor = collection.find(filter).sort({ publishedAt: -1 }).skip(skip).limit(limit);
  const [items, total] = await Promise.all([cursor.toArray(), collection.countDocuments(filter)]);

  return {
    items: items.map((item) => ({
      ...item,
      _id: item._id?.toString(),
    })),
    total,
  };
}

export async function getHighlightedResearchArticles(limit = 3) {
  await seedResearchArticlesIfEmpty();
  const db = await getDatabase();
  const collection = db.collection<ResearchArticle>(COLLECTION_NAME);

  const filter: Record<string, unknown> = {};
  applyMenMentalHealthFilter(filter);

  // Prefer featured, but always return the most recent overall if there are enough newer papers.
  // This ensures new ingest results show up even if featured samples exist.
  const items = await collection
    .find(filter)
    .sort({ publishedAt: -1 })
    .limit(limit)
    .toArray();

  return items.map((item) => ({
    ...item,
    _id: item._id?.toString(),
  }));
}

function buildTags(r: any): string[] {
  const tags = new Set<string>();
  if (r.journalTitle) tags.add(r.journalTitle);
  if (r.pubType) tags.add(r.pubType);
  if (r.authorString) tags.add('authors');
  // Keyword hints
  tags.add('mental health');
  if (/men|male|masculin/i.test(r.title || '') || /men|male|masculin/i.test(r.abstractText || '')) {
    tags.add('men');
  }
  return Array.from(tags).slice(0, 8);
}

function applyMenMentalHealthFilter(filter: Record<string, unknown>) {
  filter.$or = [
    { title: { $regex: '(?i)(men|male|masculin)' } },
    { summary: { $regex: '(?i)(men|male|masculin)' } },
    { tags: { $regex: '(?i)(men|male|masculin)' } },
  ];
}
