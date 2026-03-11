import { NextResponse } from 'next/server';
import { getAllSurveyResponses } from '@/models/SurveyResponse';
import { SurveyAnalytics } from '@/types/survey';

export const dynamic = 'force-dynamic';

const roundToTwo = (value: number) => Math.round(value * 100) / 100;

function sortCountEntries(counts: Record<string, number>) {
  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

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
          therapyModalities: [],
          topBarriers: [],
          preferredFormats: [],
          averageShameFrequency: 0,
          averageShameIntensity: 0,
          topShameSources: [],
          topShameEmotions: [],
        },
      });
    }

    const ageDistribution: Record<string, number> = {};
    const reasonsCount: Record<string, number> = {};
    const modalitiesCount: Record<string, number> = {};
    const barriersCount: Record<string, number> = {};
    const formatsCount: Record<string, number> = {};
    const shameSourcesCount: Record<string, number> = {};
    const shameEmotionsCount: Record<string, number> = {};

    let attendedTherapy = 0;
    let totalStigma = 0;
    let totalWillingness = 0;
    let willingnessCount = 0;
    let totalShameFrequency = 0;
    let shameFrequencyCount = 0;
    let totalShameIntensity = 0;
    let shameIntensityCount = 0;

    for (const response of responses) {
      totalStigma += response.perceivedStigma;
      ageDistribution[response.age] = (ageDistribution[response.age] || 0) + 1;

      if (response.hasAttendedTherapy) {
        attendedTherapy += 1;
      }

      if (response.willingnessToRecommend !== undefined) {
        totalWillingness += response.willingnessToRecommend;
        willingnessCount += 1;
      }

      if (response.shameFrequency !== undefined) {
        totalShameFrequency += response.shameFrequency;
        shameFrequencyCount += 1;
      }

      if (response.shameIntensity !== undefined) {
        totalShameIntensity += response.shameIntensity;
        shameIntensityCount += 1;
      }

      response.reasonsForTherapy?.forEach((reason) => {
        reasonsCount[reason] = (reasonsCount[reason] || 0) + 1;
      });

      response.therapistModalities?.forEach((modality) => {
        modalitiesCount[modality] = (modalitiesCount[modality] || 0) + 1;
      });

      response.barriers?.forEach((barrier) => {
        barriersCount[barrier] = (barriersCount[barrier] || 0) + 1;
      });

      if (response.preferredFormat) {
        formatsCount[response.preferredFormat] = (formatsCount[response.preferredFormat] || 0) + 1;
      }

      response.shameSources?.forEach((source) => {
        shameSourcesCount[source] = (shameSourcesCount[source] || 0) + 1;
      });

      response.shameEmotions?.forEach((emotion) => {
        shameEmotionsCount[emotion] = (shameEmotionsCount[emotion] || 0) + 1;
      });
    }

    const totalResponses = responses.length;
    const therapyAttendanceRate = (attendedTherapy / totalResponses) * 100;
    const averageStigmaScore = totalStigma / totalResponses;
    const averageWillingnessToRecommend = willingnessCount > 0 ? totalWillingness / willingnessCount : 0;
    const averageShameFrequency = shameFrequencyCount > 0 ? totalShameFrequency / shameFrequencyCount : 0;
    const averageShameIntensity = shameIntensityCount > 0 ? totalShameIntensity / shameIntensityCount : 0;

    const topReasonsForTherapy = sortCountEntries(reasonsCount)
      .map(({ label, count }) => ({ reason: label, count }))
      .slice(0, 5);

    const therapyModalities = sortCountEntries(modalitiesCount)
      .map(({ label, count }) => ({ modality: label, count }));

    const topBarriers = sortCountEntries(barriersCount)
      .map(({ label, count }) => ({ barrier: label, count }))
      .slice(0, 5);

    const preferredFormats = sortCountEntries(formatsCount)
      .map(({ label, count }) => ({ format: label, count }));

    const topShameSources = sortCountEntries(shameSourcesCount)
      .map(({ label, count }) => ({ source: label, count }));

    const topShameEmotions = sortCountEntries(shameEmotionsCount)
      .map(({ label, count }) => ({ emotion: label, count }));

    const analytics: SurveyAnalytics = {
      totalResponses,
      therapyAttendanceRate: roundToTwo(therapyAttendanceRate),
      averageStigmaScore: roundToTwo(averageStigmaScore),
      averageWillingnessToRecommend: roundToTwo(averageWillingnessToRecommend),
      ageDistribution,
      topReasonsForTherapy,
      therapyModalities,
      topBarriers,
      preferredFormats,
      averageShameFrequency: roundToTwo(averageShameFrequency),
      averageShameIntensity: roundToTwo(averageShameIntensity),
      topShameSources,
      topShameEmotions,
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
