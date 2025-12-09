'use client';

import { useState } from 'react';

interface PreparationSection {
  id: string;
  title: string;
  emoji: string;
  content: string[];
}

const sections: PreparationSection[] = [
  {
    id: 'before-first',
    title: 'Before Your First Session',
    emoji: '📋',
    content: [
      '✓ Confirm the appointment time, location, and if it\'s in-person or virtual',
      '✓ Plan to arrive 10-15 minutes early to fill out intake forms',
      '✓ Note what brought you to therapy (main concerns, stressors, symptoms)',
      '✓ Write down important life events or changes (job loss, breakups, family issues)',
      '✓ List any medications or supplements you\'re taking',
      '✓ Write 2-3 goals for therapy (what you want to improve)',
      '✓ Prepare your insurance card if you need it for billing',
      '✓ Clear your schedule - don\'t rush before or after the session',
      '✓ Identify a safe space at home to attend virtual sessions (if applicable)',
      '✓ Test your internet/video if it\'s a virtual session',
    ],
  },
  {
    id: 'mindset',
    title: 'Mental Preparation',
    emoji: '🧠',
    content: [
      '✓ Remember: Therapy is a confidential, judgment-free space',
      '✓ Be open-minded - your therapist has helped many people',
      '✓ Know that the first session is mostly information gathering',
      '✓ It\'s normal to feel nervous or uncertain - share that with your therapist',
      '✓ You\'re in control - you can ask questions anytime',
      '✓ Progress isn\'t always linear - some weeks are harder than others',
      '✓ Finding the right therapist can take time (it\'s okay to try others)',
      '✓ Therapy works best when you\'re willing to be honest',
      '✓ Set realistic expectations - change takes weeks/months, not sessions',
      '✓ Self-compassion is important - you\'re taking a positive step',
    ],
  },
  {
    id: 'questions-to-ask',
    title: 'Questions to Ask Your Therapist',
    emoji: '❓',
    content: [
      'What is your experience working with men and my specific issue?',
      'What therapy approach do you use (CBT, psychodynamic, ACT, etc.)?',
      'How often will we meet, and for how long (typical duration)?',
      'What should I expect in our first few sessions?',
      'How do you measure progress?',
      'What\'s your policy on cancellations or missed appointments?',
      'Do you prescribe medication, or would I see a psychiatrist separately?',
      'How do you handle confidentiality? (exceptions: safety risk, abuse, court order)',
      'What should I do if I\'m in crisis between sessions?',
      'How do you integrate homework or assignments between sessions?',
      'What are your fees, and does your insurance billing work with my plan?',
      'How will we know when therapy is complete or goals are met?',
    ],
  },
  {
    id: 'journaling',
    title: 'Journaling Prompts to Write Before First Session',
    emoji: '📝',
    content: [
      '1. What\'s the main issue bringing you to therapy right now?',
      '2. When did you first notice this problem? What triggered it?',
      '3. How is it affecting your work, relationships, sleep, health?',
      '4. What have you already tried to fix it?',
      '5. What are you hoping therapy will help you achieve?',
      '6. What scares you most about getting help?',
      '7. What does a "successful" outcome look like to you?',
      '8. What do you want your therapist to know about you?',
      '9. What are your biggest strengths or resilience factors?',
      '10. Describe a time you felt proud of yourself or overcame something hard.',
    ],
  },
  {
    id: 'during-session',
    title: 'During the First Session',
    emoji: '💬',
    content: [
      '✓ Introduce yourself and share what brought you there',
      '✓ Be honest - the more vulnerable you are, the more therapy can help',
      '✓ Share both struggles AND strengths/successes',
      '✓ Ask clarifying questions if the therapist suggests something unclear',
      '✓ Notice how you feel around your therapist - do you feel heard?',
      '✓ It\'s okay to have emotions - crying, anger, or frustration is normal',
      '✓ If something doesn\'t feel right, you can mention it',
      '✓ Ask about homework or practice between sessions',
      '✓ Schedule your next appointment before you leave',
      '✓ Don\'t worry about sharing your whole life story - it takes time',
    ],
  },
  {
    id: 'after-session',
    title: 'After the Session',
    emoji: '🌟',
    content: [
      '✓ Journal about how you felt during and after the session',
      '✓ Notice any insights or shifts in perspective',
      '✓ Complete any homework or assignments suggested',
      '✓ Be patient with yourself - change takes time',
      '✓ If you noticed red flags (feeling judged, ignored, etc.), find a new therapist',
      '✓ Track any changes in mood, sleep, or relationships',
      '✓ Keep notes on topics/patterns you want to explore',
      '✓ Remember: Therapy often feels harder before it gets easier',
      '✓ Allow yourself to process emotions that come up',
      '✓ If you\'re in crisis, call 988 (Suicide & Crisis Lifeline) or 911',
    ],
  },
  {
    id: 'tips',
    title: 'Pro Tips for Getting the Most Out of Therapy',
    emoji: '💡',
    content: [
      '1. Consistency matters - regular sessions are more effective than sporadic ones',
      '2. Show up on time and prepared to engage honestly',
      '3. Do the homework - the work between sessions is where real change happens',
      '4. Be specific about problems instead of vague ("I\'m stressed" vs. "My boss yells at me daily")',
      '5. Track what works - notice which strategies actually help you',
      '6. Communicate openly - tell your therapist if something isn\'t working',
      '7. Practice self-compassion - you\'re doing hard work, be kind to yourself',
      '8. Connect therapy to your life - how do the tools apply to your daily situations?',
      '9. Give it time - most people see progress within 4-6 weeks',
      '10. Remember: The therapist is a guide, but YOU\'re doing the work',
    ],
  },
];

export default function PreparationPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('before-first');

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Session Preparation Guide
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            How to get the most out of therapy from your first session onward.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4 sm:space-y-5">
          {sections.map((section) => (
            <div key={section.id} className="rounded-lg overflow-hidden" style={{ backgroundColor: '#2a1a3f' }}>
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-4 sm:p-6 text-left flex items-center gap-3 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: expandedSection === section.id ? 'rgba(130, 77, 191, 0.15)' : 'transparent' }}
              >
                <span className="text-2xl">{section.emoji}</span>
                <div className="flex-grow">
                  <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#f0e6ff' }}>
                    {section.title}
                  </h2>
                </div>
                <span style={{ color: '#824dbf', fontSize: '1.5rem' }}>
                  {expandedSection === section.id ? '−' : '+'}
                </span>
              </button>

              {expandedSection === section.id && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-opacity-10" style={{ borderColor: '#824dbf' }}>
                  <ul className="space-y-3 mt-4">
                    {section.content.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm sm:text-base flex gap-3"
                        style={{ color: '#c9b5e6' }}
                      >
                        <span style={{ color: '#824dbf', minWidth: '20px', fontWeight: 'bold' }}>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
            🌟 Key Takeaway
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            Therapy is a collaborative process. Your therapist is a trained guide, but <strong style={{ color: '#f0e6ff' }}>you</strong> are the expert on your own life. The more honest, open, and engaged you are, the more you'll benefit. Don't be afraid to speak up if something isn't working, ask questions, or try a different therapist if the fit isn't right. Remember: seeking help is strength, and you deserve support.
          </p>
        </div>

        {/* Resources Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/therapy-comparison"
            className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
          >
            ← Back to Therapy Types
          </a>
          <a
            href="/conversation-starters"
            className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
          >
            Conversation Starters →
          </a>
        </div>
      </div>
    </div>
  );
}
