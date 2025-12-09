'use client';

import { useState } from 'react';

type BarrierType = 'cost' | 'stigma' | 'masculine' | 'logistics' | 'awareness' | 'distrust' | 'privacy';

interface BarrierInfo {
  title: string;
  description: string;
  commonInMen: string;
  solutions: string[];
  resources: { label: string; url: string }[];
}

const barriers: Record<BarrierType, BarrierInfo> = {
  cost: {
    title: 'Cost of Therapy',
    description: 'Financial barriers to accessing mental health care',
    commonInMen:
      'Men are less likely to have health insurance or discuss mental health with doctors, leading to delayed care that becomes more expensive later.',
    solutions: [
      'Check if your health insurance covers mental health (usually does)',
      'Many therapists offer sliding scale fees based on income',
      'Community mental health centers often charge on a sliding scale',
      'Online therapy platforms (BetterHelp, Talkspace) are often more affordable',
      'Universities/colleges often offer free counseling to students',
      'Employee Assistance Programs (EAP) through work usually offer 3-6 free sessions',
      'Some nonprofits offer free or low-cost therapy',
    ],
    resources: [
      { label: 'SAMHSA Find Treatment', url: 'https://www.samhsa.gov/find-help/national-helpline' },
      { label: 'NAMI Helpline', url: 'https://www.nami.org' },
      { label: 'HRSA Find Health Centers', url: 'https://findahealthcenter.hrsa.gov/' },
    ],
  },
  stigma: {
    title: 'Social Stigma',
    description: 'Fear of being judged for having mental health issues or seeing a therapist',
    commonInMen:
      "Men face pressure to 'tough it out.' Seeking help is often seen as weakness, even though therapy is a sign of strength and self-awareness.",
    solutions: [
      'Remember: 1 in 5 adults experience mental illness - you\'re not alone',
      'Therapy is like going to the gym for your mind - professional training helps',
      'Many successful men (athletes, celebrities, CEOs) openly discuss therapy',
      'Focus on your health, not others\' opinions',
      'Start by talking to one trusted person',
      'Join support groups to see others facing similar challenges',
      'Research shows therapy works - it\'s evidence-based medicine',
    ],
    resources: [
      { label: 'Mental Health America', url: 'https://www.mhanational.org' },
      { label: 'NAMI Stigma-Free Campaign', url: 'https://www.nami.org/stigmafree' },
      { label: 'Men and Therapy Resources', url: 'https://www.apa.org/science/about/psa/men-mental-health' },
    ],
  },
  masculine: {
    title: 'Masculine Norms & Pressure',
    description: 'Cultural expectations to be tough, self-reliant, and not show emotion',
    commonInMen:
      'Traditional masculinity teaches men to suppress emotions, be independent, and solve problems alone. This isolation increases mental health risks.',
    solutions: [
      'True strength includes vulnerability and asking for help',
      'Emotional awareness is a skill that improves relationships and health',
      'Healthy masculinity means being authentic, not conforming to stereotypes',
      'Men who express emotions actually report better mental health outcomes',
      'Your wellbeing is more important than proving toughness',
      'Role models like athletes, actors, and leaders increasingly show vulnerability',
      'Therapy helps you define your own values instead of external pressure',
    ],
    resources: [
      {
        label: 'APA Psychology of Men & Masculinity',
        url: 'https://www.apa.org/science/about/psa/men-mental-health',
      },
      { label: 'Man Enough Podcast', url: 'https://www.theman-enough.org' },
      {
        label: 'Psychology Today: Men and Therapy',
        url: 'https://www.psychologytoday.com/us/basics/masculinity',
      },
    ],
  },
  logistics: {
    title: 'Logistics & Access',
    description: 'Time constraints, scheduling difficulties, or lack of available providers',
    commonInMen:
      'Work demands, caregiving responsibilities, or transportation issues can make therapy scheduling difficult.',
    solutions: [
      'Online therapy offers flexibility (early morning, evening, weekends)',
      'Many therapists now offer virtual sessions',
      'Some therapists specialize in brief, intensive therapy',
      'Group sessions are often more flexible than individual sessions',
      'Use breaks/lunch to do virtual sessions from work/car',
      'Discuss scheduling with your therapist - they often work with you',
      'Telehealth removes commute time and location barriers',
    ],
    resources: [
      { label: 'BetterHelp (Online Therapy)', url: 'https://www.betterhelp.com' },
      { label: 'Talkspace (Online Therapy)', url: 'https://www.talkspace.com' },
      { label: 'Psychology Today Therapist Finder', url: 'https://www.psychologytoday.com' },
    ],
  },
  awareness: {
    title: 'Lack of Awareness',
    description: 'Not knowing where to start or how to find help',
    commonInMen:
      'Many men don\'t know the difference between therapists, counselors, and psychiatrists, or how to find one.',
    solutions: [
      'Psychology Today has a searchable therapist directory with specialties',
      'Insurance websites list in-network providers',
      'SAMHSA National Helpline: 1-800-662-4357 for referrals',
      'Ask your doctor for a referral',
      'Employee Assistance Programs (through work) often do the matching',
      'Many therapists offer free initial consultation calls',
      'NAMI (National Alliance on Mental Illness) provides education and resources',
    ],
    resources: [
      { label: 'Psychology Today', url: 'https://www.psychologytoday.com' },
      { label: 'SAMHSA Helpline', url: 'https://www.samhsa.gov' },
      { label: 'NAMI Resources', url: 'https://www.nami.org' },
    ],
  },
  distrust: {
    title: 'Distrust of Mental Health System',
    description: 'Skepticism about whether therapy works or fear of being misunderstood',
    commonInMen:
      'Some men worry therapy won\'t work, they\'ll be judged, or providers won\'t understand their specific issues.',
    solutions: [
      'Research shows therapy is effective - look at meta-analyses and outcome studies',
      'Find a therapist who specializes in men\'s issues or your specific concern',
      'Get referrals from trusted sources (friends, doctors, online reviews)',
      'A good therapist should make you feel heard and respected',
      'It\'s okay to try a different therapist if the fit isn\'t right',
      'Telepsychiatry platforms vet and train their providers',
      'Many therapists are men - seek them out if you\'d feel more comfortable',
    ],
    resources: [
      {
        label: 'Therapy Works: Research Evidence',
        url: 'https://www.apa.org/science/about/psa/therapy-works',
      },
      { label: 'Find Therapists Specializing in Men', url: 'https://www.psychologytoday.com' },
      { label: 'Mental Health America Info', url: 'https://www.mhanational.org' },
    ],
  },
  privacy: {
    title: 'Privacy Concerns',
    description: 'Worry about confidentiality or who might find out',
    commonInMen:
      'Men often worry about stigma at work or in their community if therapy records are discovered.',
    solutions: [
      'Therapy is confidential by law (with rare exceptions for imminent danger)',
      'Your therapist cannot tell your employer, family, or anyone without consent',
      'HIPAA protects your medical privacy',
      'Online therapy adds an extra layer - records are encrypted',
      'You control who knows about your therapy (you can keep it private)',
      'Many therapists have private practices with secure systems',
      'Ask about their privacy practices during the initial consultation',
    ],
    resources: [
      { label: 'HIPAA Privacy Rules', url: 'https://www.hhs.gov/hipaa/index.html' },
      {
        label: 'Therapist Confidentiality Laws',
        url: 'https://www.apa.org/science/about/psa/confidentiality',
      },
      { label: 'Secure Online Therapy', url: 'https://www.betterhelp.com' },
    ],
  },
};

export default function BarriersPage() {
  const [selectedBarrier, setSelectedBarrier] = useState<BarrierType>('stigma');
  const [checkedBarriers, setCheckedBarriers] = useState<BarrierType[]>([]);

  const toggleBarrier = (barrier: BarrierType) => {
    setCheckedBarriers((prev) =>
      prev.includes(barrier) ? prev.filter((b) => b !== barrier) : [...prev, barrier]
    );
  };

  const barrierList: { id: BarrierType; emoji: string; label: string }[] = [
    { id: 'stigma', emoji: '😕', label: 'Social Stigma' },
    { id: 'masculine', emoji: '💪', label: 'Masculine Norms' },
    { id: 'cost', emoji: '💰', label: 'Cost of Care' },
    { id: 'logistics', emoji: '⏰', label: 'Time & Access' },
    { id: 'awareness', emoji: '❓', label: 'Not Sure Where to Start' },
    { id: 'distrust', emoji: '🤔', label: 'Skeptical About Therapy' },
    { id: 'privacy', emoji: '🔒', label: 'Privacy Concerns' },
  ];

  const current = barriers[selectedBarrier];

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Barriers to Mental Health Care
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            Identify what's holding you back and find practical solutions to overcome them.
          </p>
        </div>

        {/* Checklist Section */}
        <div className="mb-8 sm:mb-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
            Which barriers affect you? (Select all that apply)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {barrierList.map((b) => (
              <label
                key={b.id}
                className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: checkedBarriers.includes(b.id)
                    ? 'rgba(130, 77, 191, 0.2)'
                    : 'transparent',
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedBarriers.includes(b.id)}
                  onChange={() => toggleBarrier(b.id)}
                  className="w-5 h-5"
                />
                <span className="text-lg">{b.emoji}</span>
                <span style={{ color: '#f0e6ff' }}>{b.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
          {barrierList.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBarrier(b.id)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedBarrier === b.id ? 'shadow-lg' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: selectedBarrier === b.id ? '#824dbf' : '#2a1a3f',
                color: '#f0e6ff',
                border: selectedBarrier === b.id ? '2px solid #f0e6ff' : '1px solid #824dbf',
              }}
            >
              {b.emoji} <span className="hidden sm:inline ml-1">{b.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Barrier Details */}
        <div className="space-y-6 sm:space-y-8">
          <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#824dbf' }}>
              {current.title}
            </h2>
            <p className="text-base sm:text-lg mb-4" style={{ color: '#c9b5e6' }}>
              {current.description}
            </p>
            <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
              <p className="text-sm sm:text-base" style={{ color: '#f0e6ff' }}>
                <strong>Why this is common in men:</strong> {current.commonInMen}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
                Solutions & Strategies
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {current.solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-base" style={{ color: '#c9b5e6' }}>
                    <span style={{ color: '#824dbf', fontWeight: 'bold', minWidth: '24px' }}>✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
              Related Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {current.resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-lg transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)', color: '#f0e6ff' }}
                >
                  <div className="font-medium">{resource.label}</div>
                  <div className="text-xs mt-1" style={{ color: '#c9b5e6' }}>
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
            Your Action Plan
          </h3>
          {checkedBarriers.length > 0 ? (
            <div className="space-y-3">
              <p style={{ color: '#c9b5e6' }}>Based on the barriers you selected, here are your next steps:</p>
              <ol className="list-decimal list-inside space-y-2" style={{ color: '#c9b5e6' }}>
                <li>Review the solutions for each barrier you selected above</li>
                <li>Pick ONE barrier to address first - don't try to fix everything at once</li>
                <li>Choose ONE solution from that barrier and try it this week</li>
                <li>Take our Risk Assessment Quiz to identify other areas needing support</li>
                <li>Explore Therapy Type Comparison to understand which approach might work for you</li>
              </ol>
            </div>
          ) : (
            <p style={{ color: '#c9b5e6' }}>
              Check the barriers above that are holding you back to get a personalized action plan.
            </p>
          )}
        </div>

        {/* Next Steps Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/quiz"
            className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
          >
            Take Risk Assessment Quiz
          </a>
          <a
            href="/therapy-comparison"
            className="p-4 sm:p-5 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
          >
            Explore Therapy Types
          </a>
        </div>
      </div>
    </div>
  );
}
