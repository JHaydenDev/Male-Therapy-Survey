'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { SurveyAnalytics } from '@/types/survey';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6'];

export default function InsightsPage() {
  const [analytics, setAnalytics] = useState<SurveyAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAnalytics();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      if (!response.ok) throw new Error('Failed to fetch analytics');
      const data = await response.json();
      setAnalytics(data.data);
      setError('');
    } catch (err) {
      setError('Failed to load analytics. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading insights...</p>
        </div>
      </div>
    );
  }

  if (error || !analytics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 text-red-600 p-6 rounded-lg">
          {error || 'No data available'}
        </div>
      </div>
    );
  }

  // Prepare data for charts
  const ageData = Object.entries(analytics.ageDistribution).map(([age, count]) => ({
    age,
    count,
  }));

  const therapyAttendanceData = [
    { name: 'Attended Therapy', value: analytics.therapyAttendanceRate },
    { name: 'Not Attended', value: 100 - analytics.therapyAttendanceRate },
  ];

  const reasonsData = analytics.topReasonsForTherapy.map(item => ({
    name: item.reason,
    count: item.count,
  }));

  const barriersData = analytics.topBarriers.map(item => ({
    name: item.barrier,
    count: item.count,
  }));

  const formatsData = analytics.preferredFormats.map(item => ({
    name: item.format,
    value: item.count,
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Live Insights Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time analytics from anonymous survey responses
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {analytics.totalResponses}
            </div>
            <div className="text-gray-600">Total Responses</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {analytics.therapyAttendanceRate.toFixed(1)}%
            </div>
            <div className="text-gray-600">Attended Therapy</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {analytics.averageStigmaScore.toFixed(1)}/10
            </div>
            <div className="text-gray-600">Avg. Perceived Stigma</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {analytics.averageWillingnessToRecommend.toFixed(1)}/10
            </div>
            <div className="text-gray-600">Avg. Willingness to Recommend</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Age Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Age Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Therapy Attendance */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Therapy Attendance Rate
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={therapyAttendanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {therapyAttendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Reasons for Therapy */}
          {reasonsData.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Top Reasons for Seeking Therapy
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={reasonsData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Top Barriers */}
          {barriersData.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Top Barriers to Seeking Help
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barriersData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Preferred Therapy Formats */}
          {formatsData.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preferred Therapy Formats
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={formatsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Refresh indicator */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          Data refreshes automatically every 30 seconds
        </div>
      </div>
    </div>
  );
}
