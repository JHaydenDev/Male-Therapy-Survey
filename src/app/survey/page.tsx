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
    therapistModalities: [] as string[],
    reasonsAgainstTherapy: [] as string[],
    willingnessToRecommend: 5,
    perceivedStigma: 5,
    mostHelpfulAspect: '',
    barriers: [] as string[],
    preferredFormat: '',
    additionalComments: '',
  });

  const handleCheckboxChange = (field: 'reasonsForTherapy' | 'reasonsAgainstTherapy' | 'barriers' | 'therapistModalities', value: string) => {
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
          therapistModalities: formData.hasAttendedTherapy === THERAPY_YES ? formData.therapistModalities : undefined,
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
    <div className="min-h-screen py-6 sm:py-12" style={{background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)'}}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="rounded-lg shadow-md p-5 sm:p-8" style={{backgroundColor: '#2a1a3f'}}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
            Men&apos;s Mental Health Survey
          </h1>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{color: '#c9b5e6'}}>
            This anonymous survey helps us understand men&apos;s experiences with mental health therapy. 
            Your honest responses will contribute to reducing stigma and improving mental health resources.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Age Group */}
            <div>
              <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                1. What is your age group? <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full p-3 rounded-lg focus:ring-2 focus:border-transparent"
                style={{borderColor: '#824dbf', backgroundColor: '#1a0f2e', color: '#f0e6ff'}}
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
              <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
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
                  <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
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
                          style={{accentColor: '#824dbf'}}
                        />
                        {reason}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                    4. What therapy modalities did your therapist use? (Select all that apply, if known)
                  </label>
                  <div className="space-y-2">
                    {['Cognitive Behavioral Therapy (CBT)', 'Psychodynamic Therapy', 'Acceptance & Commitment Therapy (ACT)', 'Mindfulness-Based Therapy', 'Humanistic/Person-Centered', 'Solution-Focused Therapy', 'Other/Unknown'].map(modality => (
                      <label key={modality} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.therapistModalities.includes(modality)}
                          onChange={() => handleCheckboxChange('therapistModalities', modality)}
                          className="mr-2"
                          style={{accentColor: '#824dbf'}}
                        />
                        {modality}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                    5. On a scale of 1-10, how likely would you be to recommend therapy to other men?
                  </label>
                  <div className="flex items-center gap-4">
                    <span style={{color: '#c9b5e6'}}>1 (Not likely)</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.willingnessToRecommend}
                      onChange={(e) => setFormData({ ...formData, willingnessToRecommend: parseInt(e.target.value) })}
                      className="flex-1"
                      style={{accentColor: '#824dbf'}}
                    />
                    <span style={{color: '#c9b5e6'}}>10 (Very likely)</span>
                    <span className="font-bold" style={{color: '#824dbf'}}>{formData.willingnessToRecommend}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                    6. What aspect of therapy did you find most helpful?
                  </label>
                  <textarea
                    value={formData.mostHelpfulAspect}
                    onChange={(e) => setFormData({ ...formData, mostHelpfulAspect: e.target.value })}
                    className="w-full p-3 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{borderColor: '#824dbf', backgroundColor: '#1a0f2e', color: '#f0e6ff'}}
                    rows={3}
                    placeholder="Share your experience..."
                  />
                </div>
              </>
            )}
            {/* Conditional questions for those who haven't attended therapy */}
            {formData.hasAttendedTherapy === THERAPY_NO && (
              <div>
                <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
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
                        style={{accentColor: '#824dbf'}}
                      />
                      {reason}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {/* Perceived Stigma */}
            <div>
              <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                {formData.hasAttendedTherapy === THERAPY_YES ? '7' : '4'}. On a scale of 1-10, how much stigma do you feel exists around men seeking therapy? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <span style={{color: '#c9b5e6'}}>1 (No stigma)</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.perceivedStigma}
                  onChange={(e) => setFormData({ ...formData, perceivedStigma: parseInt(e.target.value) })}
                  className="flex-1"
                  style={{accentColor: '#824dbf'}}
                />
                <span style={{color: '#c9b5e6'}}>10 (High stigma)</span>
                <span className="font-bold" style={{color: '#824dbf'}}>{formData.perceivedStigma}</span>
              </div>
            </div>
            {/* Barriers */}
            <div>
              <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                {formData.hasAttendedTherapy === THERAPY_YES ? '8' : '5'}. What barriers prevent men from seeking mental health support? (Select all that apply)
              </label>
              <div className="space-y-2">
                {['Financial', 'Cultural/social expectations', 'Fear of judgment', 'Lack of awareness', 'Limited accessibility', 'Distrust of healthcare system'].map(barrier => (
                  <label key={barrier} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.barriers.includes(barrier)}
                      onChange={() => handleCheckboxChange('barriers', barrier)}
                      className="mr-2"
                      style={{accentColor: '#824dbf'}}
                    />
                    {barrier}
                  </label>
                ))}
              </div>
            </div>
            {/* Preferred Format */}
            <div>
              <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                {formData.hasAttendedTherapy === THERAPY_YES ? '9' : '6'}. What format of therapy would you prefer or find most accessible?
              </label>
              <select
                value={formData.preferredFormat}
                onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                className="w-full p-3 rounded-lg focus:ring-2 focus:border-transparent"
                style={{borderColor: '#824dbf', backgroundColor: '#1a0f2e', color: '#f0e6ff'}}
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
              <label className="block text-lg font-semibold mb-3" style={{color: '#f0e6ff'}}>
                {formData.hasAttendedTherapy === THERAPY_YES ? '10' : '7'}. Any additional thoughts or experiences you'd like to share?
              </label>
              <textarea
                value={formData.additionalComments}
                onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
                className="w-full p-3 rounded-lg focus:ring-2 focus:border-transparent"
                style={{borderColor: '#824dbf', backgroundColor: '#1a0f2e', color: '#f0e6ff'}}
                rows={4}
                placeholder="Your thoughts are valuable to us..."
              />
            </div>
            {error && (
              <div className="p-4 rounded-lg" style={{backgroundColor: 'rgba(200, 50, 50, 0.1)', color: '#ff6b6b'}}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors disabled:cursor-not-allowed"
              style={{backgroundColor: '#824dbf', opacity: submitting ? 0.6 : 1}}
            >
              {submitting ? 'Submitting...' : 'Submit Survey'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
