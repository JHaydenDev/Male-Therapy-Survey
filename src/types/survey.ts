export interface SurveyResponse {
  _id?: string;
  age: string;
  hasAttendedTherapy: boolean;
  reasonsForTherapy?: string[];
  reasonsAgainstTherapy?: string[];
  willingnessToRecommend?: number;
  perceivedStigma: number;
  mostHelpfulAspect?: string;
  barriers?: string[];
  preferredFormat?: string;
  additionalComments?: string;
  // Shame-related fields
  shameFrequency?: number;
  shameIntensity?: number;
  shameSources?: string[];
  shameEmotions?: string[];
  shameExperience?: string;
  createdAt: Date;
}

export interface SurveyAnalytics {
  totalResponses: number;
  therapyAttendanceRate: number;
  averageStigmaScore: number;
  averageWillingnessToRecommend: number;
  ageDistribution: { [key: string]: number };
  topReasonsForTherapy: { reason: string; count: number }[];
  topBarriers: { barrier: string; count: number }[];
  preferredFormats: { format: string; count: number }[];
  // Shame-related analytics
  averageShameFrequency: number;
  averageShameIntensity: number;
  topShameSources: { source: string; count: number }[];
  topShameEmotions: { emotion: string; count: number }[];
}
