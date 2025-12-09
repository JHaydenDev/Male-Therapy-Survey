'use client';

import { useState } from 'react';

interface QuizAnswer {
  questionId: string;
  score: number;
}

interface RiskResult {
  level: 'low' | 'moderate' | 'high';
  score: number;
  maxScore: number;
  percentage: number;
  message: string;
  recommendations: string[];
}

const questions = [
  {
    id: 'stress',
    category: 'Work & Stress',
    question: 'How often do you feel overwhelmed by work or life responsibilities?',
    options: [
      { label: 'Rarely or never', score: 0 },
      { label: 'Sometimes (1-2 times/week)', score: 1 },
      { label: 'Often (3-5 times/week)', score: 2 },
      { label: 'Almost constantly', score: 3 },
    ],
  },
  {
    id: 'isolation',
    category: 'Social Connection',
    question: 'How many close friends or family members do you talk to regularly?',
    options: [
      { label: '5 or more people', score: 0 },
      { label: '2-4 people', score: 1 },
      { label: '1 person', score: 2 },
      { label: 'Nobody - I feel isolated', score: 3 },
    ],
  },
  {
    id: 'sleep',
    category: 'Physical Health',
    question: 'How many nights per week do you get adequate sleep (7-9 hours)?',
    options: [
      { label: '5-7 nights', score: 0 },
      { label: '3-4 nights', score: 1 },
      { label: '1-2 nights', score: 2 },
      { label: '0 nights - I struggle with sleep', score: 3 },
    ],
  },
  {
    id: 'substance',
    category: 'Substance Use',
    question: 'How often do you use alcohol, cannabis, or other substances to cope with stress?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Occasionally (1-2 times/month)', score: 1 },
      { label: 'Regularly (weekly)', score: 2 },
      { label: 'Daily or almost daily', score: 3 },
    ],
  },
  {
    id: 'emotions',
    category: 'Emotional Health',
    question: 'How comfortable are you expressing emotions or asking for help?',
    options: [
      { label: 'Very comfortable', score: 0 },
      { label: 'Somewhat comfortable', score: 1 },
      { label: 'Uncomfortable - I keep things bottled up', score: 2 },
      { label: 'Very uncomfortable - I never ask for help', score: 3 },
    ],
  },
  {
    id: 'anxiety',
    category: 'Mental Health',
    question: 'How often do you experience anxiety, panic, or persistent worry?',
    options: [
      { label: 'Rarely', score: 0 },
      { label: 'Sometimes', score: 1 },
      { label: 'Often', score: 2 },
      { label: 'Almost constantly - it affects my daily life', score: 3 },
    ],
  },
  {
    id: 'depression',
    category: 'Mental Health',
    question: 'How often do you feel sad, hopeless, or lack interest in activities you usually enjoy?',
    options: [
      { label: 'Rarely', score: 0 },
      { label: 'Sometimes', score: 1 },
      { label: 'Often', score: 2 },
      { label: 'Almost constantly', score: 3 },
    ],
  },
  {
    id: 'exercise',
    category: 'Physical Health',
    question: 'How many days per week do you engage in physical activity?',
    options: [
      { label: '5-7 days', score: 0 },
      { label: '3-4 days', score: 1 },
      { label: '1-2 days', score: 2 },
      { label: 'No regular physical activity', score: 3 },
    ],
  },
  {
    id: 'relationships',
    category: 'Relationships',
    question: 'Are you experiencing significant conflict in your relationships?',
    options: [
      { label: 'No major conflicts', score: 0 },
      { label: 'Minor conflicts that come and go', score: 1 },
      { label: 'Ongoing tension or disagreements', score: 2 },
      { label: 'Serious conflicts affecting my wellbeing', score: 3 },
    ],
  },
  {
    id: 'masculinity',
    category: 'Gender Norms',
    question: 'Do you feel pressure to conform to traditional masculinity (being tough, not showing emotion)?',
    options: [
      { label: 'Not at all', score: 0 },
      { label: 'A little pressure', score: 1 },
      { label: 'Moderate pressure', score: 2 },
      { label: 'Significant pressure - it limits my wellbeing', score: 3 },
    ],
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [therapyModalities, setTherapyModalities] = useState<string[]>([]);
  const [hasAttendedTherapy, setHasAttendedTherapy] = useState<boolean | null>(null);

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === questionId);
      if (existing) {
        return prev.map((a) => (a.questionId === questionId ? { ...a, score } : a));
      }
      return [...prev, { questionId, score }];
    });
  };

  const calculateResult = (): RiskResult | null => {
    if (answers.length !== questions.length) return null;

    const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    let level: 'low' | 'moderate' | 'high' = 'low';
    let message = '';
    let recommendations: string[] = [];

    if (percentage < 33) {
      level = 'low';
      message =
        'Your assessment suggests you have good mental health overall. Keep up the positive habits and continue supporting your wellbeing.';
      recommendations = [
        'Continue regular exercise and social connections',
        'Maintain healthy sleep habits',
        'Consider therapy as preventive care, not just crisis response',
        'Help others by sharing healthy coping strategies',
      ];
    } else if (percentage < 66) {
      level = 'moderate';
      message =
        'Your assessment suggests some areas of concern. Consider reaching out for support and making positive changes.';
      recommendations = [
        'Talk to someone you trust about what you\'re experiencing',
        'Consider scheduling an appointment with a therapist or counselor',
        'Focus on one area (sleep, exercise, social connection) to improve',
        'Reach out to a crisis helpline if things feel overwhelming: 988',
        'Explore therapy options tailored to your needs',
      ];
    } else {
      level = 'high';
      message =
        'Your assessment suggests you may benefit from professional support. Please reach out to a mental health professional or crisis resource.';
      recommendations = [
        '⚠️ If you\'re in immediate danger, call 911 or go to the emergency room',
        'Call 988 (Suicide & Crisis Lifeline) to talk to someone now',
        'Schedule an urgent appointment with a therapist or psychiatrist',
        'Talk to your primary care doctor about mental health support',
        'Consider inpatient or intensive outpatient programs if crisis resources recommend it',
        'Build a support network of trusted friends and family',
      ];
    }

    return {
      level,
      score: totalScore,
      maxScore,
      percentage,
      message,
      recommendations,
    };
  };

  const handleSubmit = () => {
    if (answers.length === questions.length) {
      setShowResults(true);
    }
  };

  const result = showResults ? calculateResult() : null;
  const progress = (answers.length / questions.length) * 100;

  if (showResults && result) {
    const riskColors = {
      low: { bg: 'rgba(16, 185, 129, 0.1)', border: '#10b981', text: '#10b981' },
      moderate: { bg: 'rgba(245, 158, 11, 0.1)', border: '#f59e0b', text: '#f59e0b' },
      high: { bg: 'rgba(239, 68, 68, 0.1)', border: '#ef4444', text: '#ef4444' },
    };

    const colors = riskColors[result.level];

    return (
      <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Results */}
          <div className="mb-8 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: colors.bg, border: `2px solid ${colors.border}` }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">
                {result.level === 'low' ? '✅' : result.level === 'moderate' ? '⚠️' : '🆘'}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: colors.text }}>
                {result.level === 'low'
                  ? 'Low Risk'
                  : result.level === 'moderate'
                    ? 'Moderate Risk'
                    : 'High Risk'}
              </h1>
            </div>
            <p className="text-base sm:text-lg mb-4" style={{ color: '#f0e6ff' }}>
              {result.message}
            </p>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2" style={{ color: '#c9b5e6' }}>
                <span>Risk Assessment Score</span>
                <span className="font-bold" style={{ color: colors.text }}>
                  {result.score} / {result.maxScore} ({Math.round(result.percentage)}%)
                </span>
              </div>
              <div style={{ backgroundColor: '#1a0f2e', borderRadius: '8px', overflow: 'hidden', height: '12px' }}>
                <div
                  style={{
                    width: `${result.percentage}%`,
                    backgroundColor: colors.text,
                    height: '100%',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
              Recommended Next Steps
            </h2>
            <ul className="space-y-3">
              {result.recommendations.map((rec, idx) => (
                <li key={idx} className="flex gap-3 text-sm sm:text-base" style={{ color: '#c9b5e6' }}>
                  <span className="text-lg flex-shrink-0 mt-1">→</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Therapy Modalities Question */}
          {hasAttendedTherapy === null && (
            <div className="mb-8 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                Have you attended therapy before?
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={() => setHasAttendedTherapy(true)}
                  className="flex-1 px-4 py-3 rounded-lg font-medium transition-all"
                  style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
                >
                  Yes
                </button>
                <button
                  onClick={() => setHasAttendedTherapy(false)}
                  className="flex-1 px-4 py-3 rounded-lg font-medium transition-all"
                  style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* Therapy Modalities Selection */}
          {hasAttendedTherapy === true && (
            <div className="mb-8 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                Which therapy types have you tried?
              </h2>
              <div className="space-y-2">
                {[
                  'Cognitive Behavioral Therapy (CBT)',
                  'Psychodynamic Therapy',
                  'Acceptance & Commitment Therapy (ACT)',
                  'Dialectical Behavior Therapy (DBT)',
                  'Couples/Relationship Therapy',
                  'Group Therapy',
                  'Medication Management',
                  'Other',
                ].map((modality) => (
                  <label key={modality} className="flex items-center gap-3 p-2 cursor-pointer hover:opacity-80">
                    <input
                      type="checkbox"
                      checked={therapyModalities.includes(modality)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setTherapyModalities([...therapyModalities, modality]);
                        } else {
                          setTherapyModalities(therapyModalities.filter((m) => m !== modality));
                        }
                      }}
                      className="w-4 h-4"
                    />
                    <span style={{ color: '#f0e6ff' }}>{modality}</span>
                  </label>
                ))}
              </div>
              <p className="mt-4 text-sm" style={{ color: '#c9b5e6' }}>
                Selected: {therapyModalities.length > 0 ? therapyModalities.join(', ') : 'None yet'}
              </p>
            </div>
          )}

          {/* Resources Links */}
          {result && (
            <div className="space-y-6">
              {result.level === 'low' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="/therapy-comparison"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
                  >
                    Explore Therapy Types
                  </a>
                  <a
                    href="/conversation-starters"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
                  >
                    Help a Friend
                  </a>
                  <a
                    href="/survey"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
                  >
                    Share Your Story
                  </a>
                </div>
              )}

              {result.level === 'moderate' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="/barriers"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
                  >
                    Identify Your Barriers
                  </a>
                  <a
                    href="/therapy-comparison"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
                  >
                    Find the Right Therapy
                  </a>
                  <a
                    href="/preparation"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
                  >
                    Prepare for Therapy
                  </a>
                </div>
              )}

              {result.level === 'high' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="/resources"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#ef4444', color: '#f0e6ff' }}
                  >
                    🆘 Crisis Resources NOW
                  </a>
                  <a
                    href="/therapy-comparison"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
                  >
                    Schedule Therapy This Week
                  </a>
                  <a
                    href="/conversation-starters"
                    className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
                  >
                    Tell Someone You Trust
                  </a>
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => {
              setAnswers([]);
              setShowResults(false);
              setHasAttendedTherapy(null);
              setTherapyModalities([]);
            }}
            className="w-full px-4 py-3 rounded-lg font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Male Mental Health Risk Assessment
          </h1>
          <p className="text-base sm:text-lg mb-6" style={{ color: '#c9b5e6' }}>
            This quiz helps identify areas of your life that may need support. It's confidential and takes about 5 minutes.
            Answer honestly for the most accurate assessment.
          </p>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm mb-2" style={{ color: '#c9b5e6' }}>
              <span>Progress</span>
              <span>
                {answers.length} of {questions.length} questions answered
              </span>
            </div>
            <div style={{ backgroundColor: '#1a0f2e', borderRadius: '8px', overflow: 'hidden', height: '12px' }}>
              <div
                style={{
                  width: `${progress}%`,
                  backgroundColor: '#824dbf',
                  height: '100%',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6 sm:space-y-8">
          {questions.map((q, idx) => {
            const answered = answers.find((a) => a.questionId === q.id);
            return (
              <div key={q.id} className="p-5 sm:p-6 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded text-xs sm:text-sm font-bold"
                    style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)', color: '#f0e6ff' }}
                  >
                    {idx + 1} / {questions.length}
                  </span>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: '#c9b5e6' }}>
                    {q.category}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#f0e6ff' }}>
                  {q.question}
                </h2>
                <div className="space-y-2">
                  {q.options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleAnswer(q.id, option.score)}
                      className={`w-full p-3 sm:p-4 text-left rounded-lg font-medium transition-all ${
                        answered && answered.score === option.score
                          ? 'shadow-md'
                          : 'hover:opacity-80'
                      }`}
                      style={{
                        backgroundColor:
                          answered && answered.score === option.score ? '#824dbf' : '#1a0f2e',
                        color: '#f0e6ff',
                        border:
                          answered && answered.score === option.score
                            ? '2px solid #f0e6ff'
                            : '1px solid #824dbf',
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={answers.length !== questions.length}
          className="w-full mt-8 px-6 py-4 rounded-lg font-bold text-lg transition-all"
          style={{
            backgroundColor: answers.length === questions.length ? '#824dbf' : '#442574',
            color: '#f0e6ff',
            opacity: answers.length === questions.length ? 1 : 0.5,
            cursor: answers.length === questions.length ? 'pointer' : 'not-allowed',
          }}
        >
          {answers.length === questions.length
            ? 'Get My Results'
            : `Answer all ${questions.length} questions to continue`}
        </button>
      </div>
    </div>
  );
}
