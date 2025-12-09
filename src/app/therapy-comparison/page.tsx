'use client';

import { useState } from 'react';

interface TherapyModality {
  id: string;
  name: string;
  acronym: string;
  overview: string;
  bestFor: string[];
  howItWorks: string;
  menEffectiveness: string;
  duration: string;
  costTypical: string;
  whatToExpect: string[];
  pros: string[];
  cons: string[];
}

const modalities: TherapyModality[] = [
  {
    id: 'cbt',
    name: 'Cognitive Behavioral Therapy',
    acronym: 'CBT',
    overview:
      'CBT focuses on the connection between thoughts, feelings, and behaviors. It helps you identify unhelpful thinking patterns and replace them with more realistic ones.',
    bestFor: ['Depression', 'Anxiety', 'PTSD', 'Stress management', 'Panic disorders', 'OCD'],
    howItWorks:
      'You work with your therapist to identify negative thought patterns, understand how they affect your behavior, and develop new ways of thinking and responding.',
    menEffectiveness:
      'One of the most research-backed therapies for men. Men often appreciate the concrete, action-oriented approach. Studies show 60-80% improvement rates for depression and anxiety in men.',
    duration: 'Typically 12-20 sessions (3-6 months)',
    costTypical: '$100-250 per session (often covered by insurance)',
    whatToExpect: [
      'Collaborative relationship with your therapist',
      'Homework assignments between sessions (practice new skills)',
      'Focus on specific problems and achievable goals',
      'Learning tools you can use on your own',
      'Noticeable progress within 4-6 weeks',
    ],
    pros: [
      'Evidence-based with decades of research',
      'Structured and time-limited',
      'Practical skills you can use immediately',
      'Works well for multiple conditions',
      'Can transition to self-guided therapy',
      'Available online or in-person',
    ],
    cons: [
      'Requires active participation and homework',
      'May feel too clinical or formulaic for some',
      'Not ideal if you prefer talking without structure',
      'May take time to identify core beliefs',
    ],
  },
  {
    id: 'act',
    name: 'Acceptance & Commitment Therapy',
    acronym: 'ACT',
    overview:
      'ACT helps you accept difficult thoughts and emotions while committing to actions aligned with your values. It\'s about psychological flexibility and living meaningfully.',
    bestFor: ['Anxiety', 'Depression', 'Chronic pain', 'Addiction', 'Stress', 'Life purpose'],
    howItWorks:
      'Instead of fighting negative thoughts, you learn to observe them without judgment and then take action toward what matters most to you.',
    menEffectiveness:
      'Growing research shows ACT works well for men, especially those who resist traditional "talk therapy." The focus on action and values resonates with many men.',
    duration: 'Typically 12-16 sessions (3-4 months)',
    costTypical: '$100-250 per session (insurance coverage varies)',
    whatToExpect: [
      'Learning to observe thoughts without fighting them',
      'Identifying your core values',
      'Taking action even when anxiety or doubt is present',
      'Metaphors and experiential exercises',
      'Shift in perspective rather than symptom elimination',
    ],
    pros: [
      'Works for anxiety, depression, and chronic conditions',
      'Focuses on action and values (appeals to goal-oriented men)',
      'Teaches flexibility rather than control',
      'Growing research base',
      'Often shorter than traditional therapy',
    ],
    cons: [
      'Requires acceptance of uncomfortable feelings',
      'Less familiar than CBT (fewer therapists)',
      'May feel abstract initially',
      'Best for those willing to try new approaches',
    ],
  },
  {
    id: 'psychodynamic',
    name: 'Psychodynamic Therapy',
    acronym: 'PDT',
    overview:
      'Explores how past experiences, relationships, and unconscious patterns shape your current feelings and behaviors. It\'s about understanding the "why" behind your struggles.',
    bestFor: ['Depression', 'Relationship issues', 'Trauma', 'Self-esteem', 'Life patterns', 'Identity'],
    howItWorks:
      'Through conversation and reflection, you explore patterns in your relationships, family history, and past experiences to understand current struggles more deeply.',
    menEffectiveness:
      'Men often benefit from exploring how masculinity socialization affects their mental health. Helps address underlying emotions beneath "tough" facades.',
    duration: 'Typically 20+ sessions (can be open-ended)',
    costTypical: '$150-300+ per session (insurance may cover limited sessions)',
    whatToExpect: [
      'Deep exploration of your personal history',
      'Less structured than CBT',
      'Focus on relationships and patterns',
      'Insight-building about yourself',
      'Gradual change rather than quick fixes',
    ],
    pros: [
      'Addresses root causes, not just symptoms',
      'Great for relationship and identity issues',
      'Helps understand family patterns',
      'Offers deep insight into yourself',
      'Works well for men exploring emotions',
    ],
    cons: [
      'Takes longer to see results',
      'Can feel less structured or goal-focused',
      'May require longer-term commitment',
      'Not ideal if you want quick symptom relief',
      'Requires comfort with ambiguity',
    ],
  },
  {
    id: 'dbt',
    name: 'Dialectical Behavior Therapy',
    acronym: 'DBT',
    overview:
      'Originally designed for borderline personality disorder, DBT combines CBT principles with mindfulness and acceptance. It emphasizes managing intense emotions and improving relationships.',
    bestFor: [
      'Emotional regulation issues',
      'Self-harm/suicidal thoughts',
      'Relationship conflicts',
      'Anger management',
      'Substance abuse',
    ],
    howItWorks:
      'You learn four main skills: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness through individual therapy and skills training groups.',
    menEffectiveness:
      'Emerging research shows DBT helps men with anger, impulsivity, and relationship problems. The skills-based approach appeals to practical-minded men.',
    duration: 'Typically 6-12 months (1 year commitment)',
    costTypical: '$200-400 per week (individual + group)',
    whatToExpect: [
      'Individual therapy once/week',
      'Skills training group (teaches concrete skills)',
      'Phone coaching between sessions',
      'Learning mindfulness and emotion regulation',
      'Focus on changing behaviors and managing crises',
    ],
    pros: [
      'Very effective for emotional regulation',
      'Comprehensive (individual + group + coaching)',
      'Strong research support',
      'Teaches concrete, practical skills',
      'Good for crisis management',
    ],
    cons: [
      'Time-intensive (group + individual sessions)',
      'Not needed for mild symptoms',
      'Can be expensive',
      'Requires commitment to attendance',
      'Group component not for everyone',
    ],
  },
  {
    id: 'couples',
    name: 'Couples/Relationship Therapy',
    acronym: 'EFT or IMAGO',
    overview:
      'Helps couples improve communication, resolve conflict, and strengthen emotional connection. Individual mental health also improves through healthier relationships.',
    bestFor: ['Relationship conflict', 'Communication issues', 'Infidelity recovery', 'Intimacy problems', 'Co-parenting struggles'],
    howItWorks:
      'Both partners work with a therapist to understand patterns, improve communication, and rebuild connection. Often includes teaching conflict resolution skills.',
    menEffectiveness:
      'Men often benefit greatly from learning to express emotions and listen without "fixing." Improves overall mental health through stronger relationships.',
    duration: 'Typically 12-20 sessions (3-6 months)',
    costTypical: '$150-300+ per session (often covered by insurance)',
    whatToExpect: [
      'Both partners present (usually)',
      'Learning new communication patterns',
      'Understanding each other\'s perspective',
      'Therapist helps mediate and teach skills',
      'Homework to practice new ways of relating',
    ],
    pros: [
      'Addresses root of many mental health issues (relationships)',
      'Teaches practical communication skills',
      'Both partners understand each other better',
      'Often prevents individual therapy need',
      'Strengthens relationship foundation',
    ],
    cons: [
      'Requires both partners willing to participate',
      'Can be uncomfortable initially',
      'Works best when both people committed',
      'May reveal issues that need individual work',
    ],
  },
  {
    id: 'group',
    name: 'Group Therapy',
    acronym: 'Various modalities',
    overview:
      'Multiple people meet with a therapist to address similar issues. Provides peer support, reduces isolation, and offers diverse perspectives.',
    bestFor: ['Addiction recovery', 'Support for specific conditions', 'Reducing isolation', 'Learning from others', 'Social anxiety'],
    howItWorks:
      'A therapist facilitates discussion among group members. You share experiences, get feedback, and learn from others facing similar challenges.',
    menEffectiveness:
      'Men often appreciate the normalization of struggle ("I\'m not the only one"). Peer support is powerful. Costs less than individual therapy.',
    duration: 'Ongoing (weekly meetings)',
    costTypical: '$20-60 per session (much cheaper than individual)',
    whatToExpect: [
      ' Meeting with 6-12 people with similar issues',
      'Taking turns sharing experiences',
      'Feedback and support from peers',
      'Learning from others\' strategies',
      'Therapist guidance and structure',
    ],
    pros: [
      'Much more affordable',
      'Powerful peer support and reduced isolation',
      'Learn from diverse perspectives',
      'Accountability from group members',
      'Often combined with individual therapy',
    ],
    cons: [
      'Less privacy (confidentiality in groups)',
      'Less personalized attention',
      'Group dynamics can be unpredictable',
      'Less effective alone for severe symptoms',
      'Requires comfort in groups',
    ],
  },
  {
    id: 'medication',
    name: 'Medication Management',
    acronym: 'Psychiatry',
    overview:
      'Working with a psychiatrist or psychiatric nurse to use medications (antidepressants, anti-anxiety, mood stabilizers) to manage mental health symptoms.',
    bestFor: ['Depression', 'Anxiety disorders', 'Bipolar disorder', 'ADHD', 'PTSD', 'Severe symptoms'],
    howItWorks:
      'A psychiatrist evaluates your symptoms, prescribes appropriate medication, and monitors effectiveness and side effects through regular check-ins.',
    menEffectiveness:
      'Medications work well for many men, especially when combined with therapy. Men often prefer this "medical" approach to talking therapy.',
    duration: 'Ongoing (months to years)',
    costTypical: '$150-300+ for appointments; medications $10-300/month',
    whatToExpect: [
      'Initial evaluation appointment (1-2 hours)',
      'Regular follow-up visits (monthly to quarterly)',
      'Time for medication to work (2-4 weeks)',
      'Possible adjustment of dosage/medication',
      'Discussion of side effects and concerns',
    ],
    pros: [
      'Can be very effective for moderate to severe symptoms',
      'Relatively quick symptom relief (compared to therapy alone)',
      'Allows you to engage in therapy more effectively',
      'Option if therapy alone isn\'t working',
      'Well-researched and FDA-approved options',
    ],
    cons: [
      'Not cure - ongoing management',
      'Possible side effects',
      'Finding right medication can take time',
      'Cost can be high',
      'Stigma around medication for some men',
      'Works best combined with therapy',
    ],
  },
];

export default function TherapyComparisonPage() {
  const [selectedModality, setSelectedModality] = useState<string>('cbt');
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);

  const current = modalities.find((m) => m.id === selectedModality);

  const toggleComparison = (id: string) => {
    setSelectedForComparison((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Therapy Type Comparison
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            Understand different therapy approaches and what works best for specific issues. All are evidence-based and effective.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
          {modalities.map((modality) => (
            <button
              key={modality.id}
              onClick={() => {
                setSelectedModality(modality.id);
                setCompareMode(false);
                setSelectedForComparison([]);
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedModality === modality.id && !compareMode ? 'shadow-lg' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor:
                  selectedModality === modality.id && !compareMode ? '#824dbf' : '#2a1a3f',
                color: '#f0e6ff',
                border: selectedModality === modality.id && !compareMode ? '2px solid #f0e6ff' : '1px solid #824dbf',
              }}
            >
              <span className="hidden sm:inline">{modality.name}</span>
              <span className="sm:hidden">{modality.acronym}</span>
            </button>
          ))}
        </div>

        {/* Compare Toggle */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setCompareMode(!compareMode)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: compareMode ? '#824dbf' : '#2a1a3f',
              color: '#f0e6ff',
              border: compareMode ? '2px solid #f0e6ff' : '1px solid #824dbf',
            }}
          >
            {compareMode ? '✓ Comparison Mode' : 'Compare Therapies'}
          </button>
        </div>

        {/* Comparison Mode - Checkboxes */}
        {compareMode && (
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: '#f0e6ff' }}>
              Select up to 3 therapies to compare:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {modalities.map((m) => (
                <label
                  key={m.id}
                  className="flex items-center gap-2 p-3 rounded cursor-pointer hover:opacity-80"
                  style={{
                    backgroundColor: selectedForComparison.includes(m.id)
                      ? 'rgba(130, 77, 191, 0.2)'
                      : 'transparent',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedForComparison.includes(m.id)}
                    onChange={() => {
                      if (selectedForComparison.includes(m.id)) {
                        setSelectedForComparison(selectedForComparison.filter((id) => id !== m.id));
                      } else if (selectedForComparison.length < 3) {
                        toggleComparison(m.id);
                      }
                    }}
                    className="w-4 h-4"
                  />
                  <span style={{ color: '#f0e6ff', fontSize: '0.9rem' }}>{m.acronym}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {compareMode && selectedForComparison.length > 0 && (
          <div className="mb-8 overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full text-sm" style={{ backgroundColor: '#2a1a3f' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)' }}>
                  <th className="p-3 text-left font-semibold" style={{ color: '#f0e6ff' }}>
                    Aspect
                  </th>
                  {selectedForComparison.map((id) => {
                    const m = modalities.find((mod) => mod.id === id);
                    return (
                      <th key={id} className="p-3 text-left font-semibold" style={{ color: '#f0e6ff' }}>
                        {m?.acronym}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Duration', key: 'duration' },
                  { label: 'Typical Cost', key: 'costTypical' },
                  { label: 'For Men: Effectiveness', key: 'menEffectiveness' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderTop: '1px solid rgba(130, 77, 191, 0.2)' }}>
                    <td className="p-3 font-semibold" style={{ color: '#824dbf' }}>
                      {row.label}
                    </td>
                    {selectedForComparison.map((id) => {
                      const m = modalities.find((mod) => mod.id === id);
                      return (
                        <td key={id} className="p-3 text-sm" style={{ color: '#c9b5e6' }}>
                          {m ? (m as any)[row.key] : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Single Modality View */}
        {!compareMode && current && (
          <div className="space-y-6 sm:space-y-8">
            {/* Overview */}
            <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#824dbf' }}>
                {current.name}
              </h2>
              <p className="text-sm mb-4" style={{ color: '#c9b5e6' }}>
                {current.acronym} • {current.duration}
              </p>
              <p className="text-base sm:text-lg mb-4" style={{ color: '#f0e6ff' }}>
                {current.overview}
              </p>

              <div className="p-4 rounded-lg mt-4" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
                <p className="text-sm sm:text-base" style={{ color: '#f0e6ff' }}>
                  <strong>For Men:</strong> {current.menEffectiveness}
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                How It Works
              </h3>
              <p className="text-base sm:text-lg mb-4" style={{ color: '#c9b5e6' }}>
                {current.howItWorks}
              </p>
            </div>

            {/* Best For */}
            <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                Best For
              </h3>
              <div className="flex flex-wrap gap-2">
                {current.bestFor.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-lg text-sm"
                    style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)', color: '#f0e6ff' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                What to Expect
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {current.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-base" style={{ color: '#c9b5e6' }}>
                    <span style={{ color: '#824dbf', minWidth: '20px' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#10b981' }}>
                  ✓ Pros
                </h3>
                <ul className="space-y-2">
                  {current.pros.map((pro, idx) => (
                    <li key={idx} className="text-sm sm:text-base" style={{ color: '#c9b5e6' }}>
                      • {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#f59e0b' }}>
                  ⚠ Cons
                </h3>
                <ul className="space-y-2">
                  {current.cons.map((con, idx) => (
                    <li key={idx} className="text-sm sm:text-base" style={{ color: '#c9b5e6' }}>
                      • {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cost & Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#f0e6ff' }}>
                  ⏱ Duration
                </h3>
                <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
                  {current.duration}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#f0e6ff' }}>
                  💰 Typical Cost
                </h3>
                <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
                  {current.costTypical}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
            Next Steps
          </h3>
          <p className="mb-4" style={{ color: '#c9b5e6' }}>
            Ready to get started? Here's what to do:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6" style={{ color: '#c9b5e6' }}>
            <li>Review the therapy types that interest you</li>
            <li>Consider which approach aligns with your personality (action-oriented, insight-focused, etc.)</li>
            <li>Take the Risk Assessment Quiz to identify your needs</li>
            <li>Talk to your doctor for referrals or visit Psychology Today therapist finder</li>
            <li>Ask potential therapists about their experience with men and your specific issue</li>
          </ol>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/quiz"
              className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
            >
              Take Risk Assessment Quiz
            </a>
            <a
              href="/preparation"
              className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
            >
              Session Preparation Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
