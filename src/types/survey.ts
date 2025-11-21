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
}
