import { NextResponse } from 'next/server';
import { getAllSurveyResponses } from '@/models/SurveyResponse';
import { SurveyAnalytics } from '@/types/survey';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const responses = await getAllSurveyResponses();
    
    if (responses.length === 0) {
      return NextResponse.json({ 
        success: true, 
        data: {
          totalResponses: 0,
          therapyAttendanceRate: 0,
          averageStigmaScore: 0,
          averageWillingnessToRecommend: 0,
          ageDistribution: {},
          topReasonsForTherapy: [],
          topBarriers: [],
          preferredFormats: [],
        } 
      });
    }
    
    // Calculate analytics
    const totalResponses = responses.length;
    const attendedTherapy = responses.filter(r => r.hasAttendedTherapy).length;
    const therapyAttendanceRate = (attendedTherapy / totalResponses) * 100;
    
    const totalStigma = responses.reduce((sum, r) => sum + r.perceivedStigma, 0);
    const averageStigmaScore = totalStigma / totalResponses;
    
    const responsesWithWillingness = responses.filter(r => r.willingnessToRecommend !== undefined);
    const totalWillingness = responsesWithWillingness.reduce((sum, r) => sum + (r.willingnessToRecommend || 0), 0);
    const averageWillingnessToRecommend = responsesWithWillingness.length > 0 
      ? totalWillingness / responsesWithWillingness.length 
      : 0;
    
    // Age distribution
    const ageDistribution: { [key: string]: number } = {};
    responses.forEach(r => {
      ageDistribution[r.age] = (ageDistribution[r.age] || 0) + 1;
    });
    
    // Top reasons for therapy
    const reasonsCount: { [key: string]: number } = {};
    responses.forEach(r => {
      if (r.reasonsForTherapy) {
        r.reasonsForTherapy.forEach(reason => {
          reasonsCount[reason] = (reasonsCount[reason] || 0) + 1;
        });
      }
    });
    const topReasonsForTherapy = Object.entries(reasonsCount)
      .map(([reason, count]) => ({ reason, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    
    // Top barriers
    const barriersCount: { [key: string]: number } = {};
    responses.forEach(r => {
      if (r.barriers) {
        r.barriers.forEach(barrier => {
          barriersCount[barrier] = (barriersCount[barrier] || 0) + 1;
        });
      }
    });
    const topBarriers = Object.entries(barriersCount)
      .map(([barrier, count]) => ({ barrier, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    
    // Preferred formats
    const formatsCount: { [key: string]: number } = {};
    responses.forEach(r => {
      if (r.preferredFormat) {
        formatsCount[r.preferredFormat] = (formatsCount[r.preferredFormat] || 0) + 1;
      }
    });
    const preferredFormats = Object.entries(formatsCount)
      .map(([format, count]) => ({ format, count }))
      .sort((a, b) => b.count - a.count);
    
    const analytics: SurveyAnalytics = {
      totalResponses,
      therapyAttendanceRate: Math.round(therapyAttendanceRate * 100) / 100,
      averageStigmaScore: Math.round(averageStigmaScore * 100) / 100,
      averageWillingnessToRecommend: Math.round(averageWillingnessToRecommend * 100) / 100,
      ageDistribution,
      topReasonsForTherapy,
      topBarriers,
      preferredFormats,
    };
    
    return NextResponse.json({ success: true, data: analytics });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
