'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface StatsData {
  totalResponses: number;
  therapyAttendanceRate: number;
  therapyHelpfulnessRate: number;
  ageDistribution: Record<string, number>;
  topBarriers: Array<{ barrier: string; count: number }>;
  therapyTypesUsed: Record<string, number>;
  confidenceInTherapy: number;
}

export default function StatisticsPage() {
  const [surveyData, setSurveyData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSurveyStatistics();
  }, []);

  const fetchSurveyStatistics = async () => {
    try {
      const response = await fetch('/api/analytics');
      if (!response.ok) throw new Error('Failed to fetch survey statistics');
      const data = await response.json();

      setSurveyData({
        totalResponses: data.data?.totalResponses || 0,
        therapyAttendanceRate: data.data?.therapyAttendanceRate || 0,
        therapyHelpfulnessRate: data.data?.therapyHelpfulnessRate || 0,
        ageDistribution: data.data?.ageDistribution || {},
        topBarriers: data.data?.topBarriers || [],
        therapyTypesUsed: data.data?.therapyTypesUsed || {},
        confidenceInTherapy: data.data?.confidenceInTherapy || 0,
      });
    } catch (err) {
      setError('Failed to load survey statistics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // CDC Statistics
  const cdcStats = {
    menMentalIllness: 9.2,
    menSeekTreatment: 28,
    menSuicideRate: 3.5,
    menDepressionRate: 11,
    menAnxietyRate: 9,
  };

  // Comparison data
  const comparisonData = surveyData
    ? [
        { category: 'Therapy Attendance', 'Our Survey': surveyData.therapyAttendanceRate, 'National Avg (CDC)': cdcStats.menSeekTreatment },
        { category: 'Find Therapy Helpful', 'Our Survey': surveyData.therapyHelpfulnessRate, 'National Avg (CDC)': 70 },
      ]
    : [];

  const COLORS = ['#824dbf', '#733ba0', '#442574', '#2a1a3f', '#1a0f2e'];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#824dbf' }}></div>
          <p style={{ color: '#c9b5e6' }}>Loading statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Survey Statistics & Insights
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            Data from our community survey compared with CDC and national mental health statistics.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(200, 50, 50, 0.1)', color: '#ff9e9e' }}>
            {error}
          </div>
        )}

        {surveyData && (
          <>
            {/* Key Stats Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-12">
              <div className="p-5 sm:p-6 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#824dbf' }}>
                  {surveyData.totalResponses}
                </div>
                <p className="text-sm mt-2" style={{ color: '#c9b5e6' }}>
                  Survey Responses
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#824dbf' }}>
                  {Math.round(surveyData.therapyAttendanceRate)}%
                </div>
                <p className="text-sm mt-2" style={{ color: '#c9b5e6' }}>
                  Attended Therapy
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#824dbf' }}>
                  {Math.round(surveyData.therapyHelpfulnessRate)}%
                </div>
                <p className="text-sm mt-2" style={{ color: '#c9b5e6' }}>
                  Found Therapy Helpful
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#824dbf' }}>
                  {Math.round(surveyData.confidenceInTherapy)}%
                </div>
                <p className="text-sm mt-2" style={{ color: '#c9b5e6' }}>
                  Confident in Therapy
                </p>
              </div>
            </div>

            {/* CDC Context */}
            <div className="mb-8 sm:mb-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                CDC & National Mental Health Context
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3" style={{ color: '#824dbf' }}>
                    Men's Mental Health Statistics
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9b5e6' }}>
                    <li>
                      <strong style={{ color: '#f0e6ff' }}>9.2 million</strong> U.S. men experience mental illness annually
                    </li>
                    <li>
                      <strong style={{ color: '#f0e6ff' }}>28%</strong> of men seek mental health treatment (vs. 37% of women)
                    </li>
                    <li>
                      <strong style={{ color: '#f0e6ff' }}>3.5x</strong> higher suicide rate for men vs. women (CDC)
                    </li>
                    <li>
                      <strong style={{ color: '#f0e6ff' }}>11%</strong> of men experience depression (vs. 18% of women)
                    </li>
                    <li>
                      <strong style={{ color: '#f0e6ff' }}>9%</strong> of men experience anxiety disorders
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3" style={{ color: '#824dbf' }}>
                    Why Men Underutilize Treatment
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9b5e6' }}>
                    <li>
                      • <strong style={{ color: '#f0e6ff' }}>Stigma</strong> - fear of judgment or weakness
                    </li>
                    <li>
                      • <strong style={{ color: '#f0e6ff' }}>Masculine norms</strong> - pressure to "tough it out"
                    </li>
                    <li>
                      • <strong style={{ color: '#f0e6ff' }}>Lack of awareness</strong> - men less likely to recognize symptoms
                    </li>
                    <li>
                      • <strong style={{ color: '#f0e6ff' }}>Access issues</strong> - cost, time, availability
                    </li>
                    <li>
                      • <strong style={{ color: '#f0e6ff' }}>Healthcare gaps</strong> - fewer men visit doctors regularly
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Chart */}
            {comparisonData.length > 0 && (
              <div className="mb-8 sm:mb-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#f0e6ff' }}>
                  Survey Comparison: Our Data vs. National Averages
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(130, 77, 191, 0.2)" />
                    <XAxis dataKey="category" stroke="#c9b5e6" />
                    <YAxis stroke="#c9b5e6" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(26, 15, 46, 0.95)',
                        border: '1px solid #824dbf',
                        borderRadius: '8px',
                        color: '#f0e6ff',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="Our Survey" fill="#824dbf" />
                    <Bar dataKey="National Avg (CDC)" fill="#733ba0" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Age Distribution */}
            {Object.keys(surveyData.ageDistribution).length > 0 && (
              <div className="mb-8 sm:mb-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#f0e6ff' }}>
                  Age Distribution of Respondents
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={Object.entries(surveyData.ageDistribution).map(([age, count]) => ({
                        name: age,
                        value: count,
                      }))}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {Object.entries(surveyData.ageDistribution).map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(26, 15, 46, 0.95)',
                        border: '1px solid #824dbf',
                        borderRadius: '8px',
                        color: '#f0e6ff',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Top Barriers */}
            {surveyData.topBarriers.length > 0 && (
              <div className="mb-8 sm:mb-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#f0e6ff' }}>
                  Most Common Barriers Reported
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={surveyData.topBarriers.slice(0, 5)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(130, 77, 191, 0.2)" />
                    <XAxis dataKey="barrier" stroke="#c9b5e6" width={80} />
                    <YAxis stroke="#c9b5e6" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(26, 15, 46, 0.95)',
                        border: '1px solid #824dbf',
                        borderRadius: '8px',
                        color: '#f0e6ff',
                      }}
                    />
                    <Bar dataKey="count" fill="#824dbf" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Therapy Types Used */}
            {Object.keys(surveyData.therapyTypesUsed).length > 0 && (
              <div className="mb-8 sm:mb-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#f0e6ff' }}>
                  Therapy Types Used by Survey Respondents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={Object.entries(surveyData.therapyTypesUsed).map(([type, count]) => ({
                            name: type,
                            value: count,
                          }))}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={(entry) => entry.name}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {Object.entries(surveyData.therapyTypesUsed).map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(26, 15, 46, 0.95)',
                            border: '1px solid #824dbf',
                            borderRadius: '8px',
                            color: '#f0e6ff',
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold mb-4" style={{ color: '#824dbf' }}>
                      Breakdown
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(surveyData.therapyTypesUsed).map(([type, count]) => (
                        <div key={type} className="flex justify-between items-center">
                          <span style={{ color: '#c9b5e6' }}>{type}</span>
                          <span className="font-semibold" style={{ color: '#824dbf' }}>
                            {count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Key Insights */}
            <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                📊 Key Insights
              </h2>
              <ul className="space-y-3" style={{ color: '#c9b5e6' }}>
                <li className="flex gap-3">
                  <span style={{ color: '#824dbf' }}>•</span>
                  <span>
                    Our survey shows higher therapy attendance than the national average, suggesting
                    our community is more engaged with mental health care.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#824dbf' }}>•</span>
                  <span>
                    Most respondents report therapy is helpful, confirming what research shows: when
                    men do seek therapy, they benefit significantly.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#824dbf' }}>•</span>
                  <span>
                    The gap between those who want therapy and those who access it points to the
                    importance of addressing barriers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#824dbf' }}>•</span>
                  <span>
                    Our age distribution shows we're reaching men across different life stages,
                    each with unique mental health challenges.
                  </span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
