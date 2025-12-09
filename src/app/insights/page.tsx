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
    // Refresh data every hour
    const interval = setInterval(fetchAnalytics, 3600000);
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
      <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderColor: '#824dbf'}}></div>
          <p style={{color: '#c9b5e6'}}>Loading insights...</p>
        </div>
      </div>
    );
  }

  if (error || !analytics) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)'}}>
        <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(200, 50, 50, 0.1)', color: '#ff6b6b'}}>
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

  const modalitiesData = analytics.therapyModalities.map(item => ({
    name: item.modality,
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
    <div className="min-h-screen py-8 sm:py-12" style={{background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)'}}>
      <div className="container mx-auto px-4">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{color: '#f0e6ff'}}>
            Live Insights Dashboard
          </h1>
          <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
            Real-time analytics from anonymous survey responses
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <div className="text-2xl sm:text-3xl font-bold mb-2" style={{color: '#824dbf'}}>
              {analytics.totalResponses}
            </div>
            <div className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>Total Responses</div>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <div className="text-2xl sm:text-3xl font-bold mb-2" style={{color: '#9e7263'}}>
              {analytics.therapyAttendanceRate.toFixed(1)}%
            </div>
            <div className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>Attended Therapy</div>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <div className="text-2xl sm:text-3xl font-bold mb-2" style={{color: '#824dbf'}}>
              {analytics.averageStigmaScore.toFixed(1)}/10
            </div>
            <div className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>Avg. Perceived Stigma</div>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <div className="text-2xl sm:text-3xl font-bold mb-2" style={{color: '#733ba0'}}>
              {analytics.averageWillingnessToRecommend.toFixed(1)}/10
            </div>
            <div className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>Avg. Willingness to Recommend</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Age Distribution */}
          <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
              Age Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#824dbf" />
                <XAxis dataKey="age" stroke="#c9b5e6" />
                <YAxis stroke="#c9b5e6" />
                <Tooltip contentStyle={{backgroundColor: 'rgba(26, 15, 46, 0.95)', border: '1px solid rgba(130, 77, 191, 0.5)', color: '#f0e6ff', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}} cursor={{fill: 'rgba(130, 77, 191, 0.15)'}} wrapperStyle={{color: '#f0e6ff'}} />
                <Bar dataKey="count" fill="#824dbf" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Therapy Attendance */}
          <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
              Therapy Attendance Rate
            </h2>
            <ResponsiveContainer width="100%" height={250}>
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
                <Tooltip contentStyle={{backgroundColor: 'rgba(26, 15, 46, 0.95)', border: '1px solid rgba(130, 77, 191, 0.5)', color: '#ffffff', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', fontSize: '14px', fontWeight: '500'}} cursor={{fill: 'rgba(130, 77, 191, 0.15)'}} wrapperStyle={{color: '#ffffff'}} labelStyle={{color: '#ffffff'}} itemStyle={{color: '#ffffff'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Reasons for Therapy */}
          {reasonsData.length > 0 && (
            <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
                Top Reasons for Seeking Therapy
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={reasonsData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#824dbf" />
                  <XAxis type="number" stroke="#c9b5e6" style={{fontSize: '12px'}} />
                  <YAxis dataKey="name" type="category" width={100} stroke="#c9b5e6" style={{fontSize: '11px'}} />
                  <Tooltip contentStyle={{backgroundColor: 'rgba(26, 15, 46, 0.95)', border: '1px solid rgba(130, 77, 191, 0.5)', color: '#f0e6ff', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}} cursor={{fill: 'rgba(130, 77, 191, 0.15)'}} wrapperStyle={{color: '#f0e6ff'}} />
                  <Bar dataKey="count" fill="#9e7263" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Therapy Modalities */}
          {modalitiesData.length > 0 && (
            <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
                Therapy Modalities Used
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={modalitiesData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#824dbf" />
                  <XAxis type="number" stroke="#c9b5e6" style={{fontSize: '12px'}} />
                  <YAxis dataKey="name" type="category" width={150} stroke="#c9b5e6" style={{fontSize: '11px'}} />
                  <Tooltip contentStyle={{backgroundColor: 'rgba(26, 15, 46, 0.95)', border: '1px solid rgba(130, 77, 191, 0.5)', color: '#f0e6ff', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}} cursor={{fill: 'rgba(130, 77, 191, 0.15)'}} wrapperStyle={{color: '#f0e6ff'}} />
                  <Bar dataKey="count" fill="#824dbf" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Top Barriers */}
          {barriersData.length > 0 && (
            <div className="p-4 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
                Top Barriers to Seeking Help
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barriersData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#824dbf" />
                  <XAxis type="number" stroke="#c9b5e6" style={{fontSize: '12px'}} />
                  <YAxis dataKey="name" type="category" width={100} stroke="#c9b5e6" style={{fontSize: '11px'}} />
                  <Tooltip contentStyle={{backgroundColor: 'rgba(26, 15, 46, 0.95)', border: '1px solid rgba(130, 77, 191, 0.5)', color: '#f0e6ff', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}} cursor={{fill: 'rgba(130, 77, 191, 0.15)'}} wrapperStyle={{color: '#f0e6ff'}} />
                  <Bar dataKey="count" fill="#733ba0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Preferred Therapy Formats */}
          {formatsData.length > 0 && (
            <div className="p-4 sm:p-6 rounded-lg shadow-md lg:col-span-2" style={{backgroundColor: '#2a1a3f'}}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
                Preferred Therapy Formats
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={formatsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#824dbf" />
                  <XAxis dataKey="name" stroke="#c9b5e6" />
                  <YAxis stroke="#c9b5e6" />
                  <Tooltip contentStyle={{backgroundColor: 'rgba(26, 15, 46, 0.95)', border: '1px solid rgba(130, 77, 191, 0.5)', color: '#f0e6ff', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}} cursor={{fill: 'rgba(130, 77, 191, 0.15)'}} wrapperStyle={{color: '#f0e6ff'}} />
                  <Bar dataKey="value" fill="#442574" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Refresh indicator */}
        <div className="mt-8 text-center text-sm" style={{color: '#9e7263'}}>
          Data refreshes automatically every hour
        </div>
      </div>
    </div>
  );
}
