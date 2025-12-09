import { NextRequest, NextResponse } from 'next/server';
import { getResearchArticles } from '@/models/ResearchArticle';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const tag = searchParams.get('tag') || undefined;
    const source = searchParams.get('source') || undefined;
    const monthsParam = searchParams.get('months');
    const limitParam = searchParams.get('limit');
    const skipParam = searchParams.get('skip');

    const months = monthsParam ? Number(monthsParam) : undefined;
    const limit = limitParam ? Number(limitParam) : undefined;
    const skip = skipParam ? Number(skipParam) : undefined;

    const { items, total } = await getResearchArticles({ tag, source, months, limit, skip });

    return NextResponse.json({ data: items, total });
  } catch (error) {
    console.error('Error fetching research articles', error);
    return NextResponse.json({ error: 'Failed to fetch research articles' }, { status: 500 });
  }
}
