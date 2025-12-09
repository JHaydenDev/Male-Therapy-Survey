import { NextResponse } from 'next/server';
import { getHighlightedResearchArticles } from '@/models/ResearchArticle';

export async function GET() {
  try {
    const data = await getHighlightedResearchArticles(3);
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching research highlights', error);
    return NextResponse.json({ error: 'Failed to fetch research highlights' }, { status: 500 });
  }
}
