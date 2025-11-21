'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const THERAPY_YES = 'yes';
const THERAPY_NO = 'no';

export default function SurveyPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    age: '',
    hasAttendedTherapy: '',
    reasonsForTherapy: [] as string[],
    reasonsAgainstTherapy: [] as string[],
    willingnessToRecommend: 5,
    perceivedStigma: 5,
    mostHelpfulAspect: '',
    barriers: [] as string[],
    preferredFormat: '',
    additionalComments: '',
  });

  const handleCheckboxChange = (field: 'reasonsForTherapy' | 'reasonsAgainstTherapy' | 'barriers', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          age: formData.age,
          hasAttendedTherapy: formData.hasAttendedTherapy === THERAPY_YES,
          reasonsForTherapy: formData.hasAttendedTherapy === THERAPY_YES ? formData.reasonsForTherapy : undefined,
          reasonsAgainstTherapy: formData.hasAttendedTherapy === THERAPY_NO ? formData.reasonsAgainstTherapy : undefined,
          willingnessToRecommend: formData.hasAttendedTherapy === THERAPY_YES ? formData.willingnessToRecommend : undefined,
          perceivedStigma: formData.perceivedStigma,
          mostHelpfulAspect: formData.hasAttendedTherapy === THERAPY_YES ? formData.mostHelpfulAspect : undefined,
          barriers: formData.barriers.length > 0 ? formData.barriers : undefined,
          preferredFormat: formData.preferredFormat || undefined,
          additionalComments: formData.additionalComments || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit survey');
      }

      router.push('/insights');
    } catch (err) {
      setError('Failed to submit survey. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Men&apos;s Mental Health Survey
          </h1>
          <p className="text-gray-600 mb-8">
            This anonymous survey helps us understand men&apos;s experiences with mental health therapy. 
            Your honest responses will contribute to reducing stigma and improving mental health resources.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Age Group */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                1. What is your age group? <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select an age group</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65+">65+</option>
              </select>
            </div>

            {/* Therapy Attendance */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                2. Have you ever attended therapy or counseling? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    required
                    type="radio"
                    name="hasAttendedTherapy"
                    value="yes"
                    checked={formData.hasAttendedTherapy === THERAPY_YES}
                    onChange={(e) => setFormData({ ...formData, hasAttendedTherapy: e.target.value })}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    required
                    type="radio"
                    name="hasAttendedTherapy"
                    value="no"
                    checked={formData.hasAttendedTherapy === THERAPY_NO}
                    onChange={(e) => setFormData({ ...formData, hasAttendedTherapy: e.target.value })}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Conditional questions for those who attended therapy */}
            {formData.hasAttendedTherapy === THERAPY_YES && (
              <>
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    3. What were your main reasons for seeking therapy? (Select all that apply)
                  </label>
                  <div className="space-y-2">
                    {['Anxiety', 'Depression', 'Stress management', 'Relationship issues', 'Trauma', 'Work-related stress', 'Other'].map(reason => (
                      <label key={reason} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.reasonsForTherapy.includes(reason)}
                          onChange={() => handleCheckboxChange('reasonsForTherapy', reason)}
                          className="mr-2"
                        />
                        {reason}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    4. On a scale of 1-10, how likely would you be to recommend therapy to other men?
                  </label>
                  <div className="flex items-center gap-4">
                    <span>1 (Not likely)</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.willingnessToRecommend}
                      onChange={(e) => setFormData({ ...formData, willingnessToRecommend: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                    <span>10 (Very likely)</span>
                    <span className="font-bold text-blue-600">{formData.willingnessToRecommend}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    5. What aspect of therapy did you find most helpful?
                  </label>
                  <textarea
                    value={formData.mostHelpfulAspect}
                    onChange={(e) => setFormData({ ...formData, mostHelpfulAspect: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Share your experience..."
                  />
                </div>
              </>
            )}

            {/* Conditional questions for those who haven't attended therapy */}
            {formData.hasAttendedTherapy === THERAPY_NO && (
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  3. What are your main reasons for not seeking therapy? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['Cost', 'Time constraints', 'Stigma/embarrassment', 'Don\'t think I need it', 'Don\'t know where to start', 'Prefer to handle it myself', 'Other'].map(reason => (
                    <label key={reason} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.reasonsAgainstTherapy.includes(reason)}
                        onChange={() => handleCheckboxChange('reasonsAgainstTherapy', reason)}
                        className="mr-2"
                      />
                      {reason}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Perceived Stigma */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {formData.hasAttendedTherapy === THERAPY_YES ? '6' : '4'}. On a scale of 1-10, how much stigma do you feel exists around men seeking therapy? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <span>1 (No stigma)</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.perceivedStigma}
                  onChange={(e) => setFormData({ ...formData, perceivedStigma: parseInt(e.target.value) })}
                  className="flex-1"
                />
                <span>10 (High stigma)</span>
                <span className="font-bold text-blue-600">{formData.perceivedStigma}</span>
              </div>
            </div>

            {/* Barriers */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {formData.hasAttendedTherapy === THERAPY_YES ? '7' : '5'}. What barriers prevent men from seeking mental health support? (Select all that apply)
              </label>
              <div className="space-y-2">
                {['Financial', 'Cultural/social expectations', 'Fear of judgment', 'Lack of awareness', 'Limited accessibility', 'Distrust of healthcare system'].map(barrier => (
                  <label key={barrier} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.barriers.includes(barrier)}
                      onChange={() => handleCheckboxChange('barriers', barrier)}
                      className="mr-2"
                    />
                    {barrier}
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred Format */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {formData.hasAttendedTherapy === THERAPY_YES ? '8' : '6'}. What format of therapy would you prefer or find most accessible?
              </label>
              <select
                value={formData.preferredFormat}
                onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a format</option>
                <option value="In-person">In-person</option>
                <option value="Online video">Online video</option>
                <option value="Phone">Phone</option>
                <option value="Text-based">Text-based</option>
                <option value="Group therapy">Group therapy</option>
                <option value="No preference">No preference</option>
              </select>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                {formData.hasAttendedTherapy === THERAPY_YES ? '9' : '7'}. Any additional thoughts or experiences you&apos;d like to share?
              </label>
              <textarea
                value={formData.additionalComments}
                onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Your thoughts are valuable to us..."
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Survey'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
