'use client';

import { useState } from 'react';

interface ConversationCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  starters: {
    opener: string;
    whyItWorks: string;
    followUp: string[];
    dosDonts: { dos: string[]; donts: string[] };
  }[];
}

const categories: ConversationCategory[] = [
  {
    id: 'yourself',
    title: 'Starting with Yourself',
    emoji: '🪞',
    description: 'How to recognize when you need help and take that first step',
    starters: [
      {
        opener: '"I\'ve realized I need some help with my mental health. I\'ve been struggling with [anxiety/depression/stress] and I want to do something about it."',
        whyItWorks: 'Direct and honest. You\'re taking responsibility for your wellbeing.',
        followUp: [
          'Take the first step: look up a therapist or call your doctor',
          'Tell someone close to you what you\'re working on',
          'Be patient with the process - finding the right fit takes time',
          'Journal about your goals for therapy',
        ],
        dosDonts: {
          dos: [
            'Be honest about how you\'re feeling',
            'Frame it as self-care, not weakness',
            'Share your specific concerns (sleep, relationships, work)',
            'Be open to trying different approaches',
          ],
          donts: [
            'Wait until things are critical',
            'Feel like you need to have it all figured out',
            'Apologize for needing help',
            'Give up if the first therapist isn\'t the right fit',
          ],
        },
      },
      {
        opener: '"I\'ve noticed [specific symptom] and it\'s starting to affect my [work/relationships/daily life]. I think I should talk to someone professionally about it."',
        whyItWorks:
          'Specific and action-oriented. You\'re identifying the problem and solution.',
        followUp: [
          'Ask people you trust for therapist recommendations',
          'Contact your insurance to find in-network providers',
          'Schedule an appointment this week',
          'Prepare your history for the first session',
        ],
        dosDonts: {
          dos: [
            'Be specific about symptoms and impact',
            'Ask for support in finding a therapist',
            'Set a concrete timeline for action',
            'Track improvements as you go',
          ],
          donts: [
            'Be vague or minimize your struggles',
            'Feel ashamed about seeking help',
            'Expect immediate results',
            'Give up after one bad session',
          ],
        },
      },
    ],
  },
  {
    id: 'friends-family',
    title: 'With Close Friends & Family',
    emoji: '👨‍👩‍👦',
    description: 'How to share what you\'re going through with people you trust',
    starters: [
      {
        opener: '"I\'ve been dealing with some stuff mentally and I want to be honest with you about it. I\'m seeing a therapist and it\'s helping. I wanted you to know because you matter to me."',
        whyItWorks:
          'Builds trust and removes secrecy. Shows strength in being vulnerable with people you care about.',
        followUp: [
          'Give them context: "I\'m working on [specific goal]"',
          'Let them know how they can support you',
          'Update them on progress periodically',
          'Thank them for being there',
        ],
        dosDonts: {
          dos: [
            'Choose someone you trust',
            'Be honest but not overshare',
            'Tell them specifically how they can help',
            'Keep them updated on your progress',
          ],
          donts: [
            'Dump all your problems on them',
            'Make them responsible for your healing',
            'Expect them to understand therapy',
            'Use it as an excuse for bad behavior',
          ],
        },
      },
      {
        opener: '"I\'ve realized I\'ve been pretty withdrawn lately because I\'ve been struggling. I\'m getting help for it now, but I wanted to explain because our friendship matters to me."',
        whyItWorks:
          'Explains behavior changes and rebuilds connection after withdrawing.',
        followUp: [
          'Be specific about what you\'ve been struggling with',
          'Apologize for withdrawing if appropriate',
          'Make plans to reconnect',
          'Invite them to be part of your recovery',
        ],
        dosDonts: {
          dos: [
            'Explain behavior changes',
            'Take responsibility for withdrawal',
            'Reconnect actively',
            'Share victories as you have them',
          ],
          donts: [
            'Make them feel guilty',
            'Demand they be your therapist',
            'Share details they don\'t want to know',
            'Use it as manipulation',
          ],
        },
      },
      {
        opener: '"I\'ve been thinking a lot about my mental health and I realize I need to make some changes. I\'m going to start therapy and I wanted you to know because you\'ve been important to me."',
        whyItWorks:
          'Positions therapy as growth, not crisis. Shows self-awareness and commitment.',
        followUp: [
          'Share your therapy goals if you\'re comfortable',
          'Ask for specific support (checking in, doing activities)',
          'Be consistent with follow-up',
          'Celebrate progress together',
        ],
        dosDonts: {
          dos: [
            'Frame it as growth, not defeat',
            'Be proud of taking action',
            'Ask for specific types of support',
            'Celebrate milestones together',
          ],
          donts: [
            'Act embarrassed or ashamed',
            'Dismiss their concerns if they have them',
            'Expect them to do the work for you',
            'Compare your journey to others',
          ],
        },
      },
    ],
  },
  {
    id: 'coworkers-boss',
    title: 'With Coworkers & Boss',
    emoji: '💼',
    description: 'How to discuss mental health in professional settings',
    starters: [
      {
        opener: '"I\'m managing some health matters that may affect my performance short-term. I have support in place and I\'m working on it, but wanted to give you a heads up."',
        whyItWorks:
          'Professional, doesn\'t overshare, shows you\'re handling it responsibly.',
        followUp: [
          'Provide realistic timeline for improvement',
          'Offer solutions (flexible hours, adjusted deadlines)',
          'Keep them updated on progress',
          'Thank them for understanding',
        ],
        dosDonts: {
          dos: [
            'Keep it brief and professional',
            'Focus on impact and solutions',
            'Provide realistic timeline',
            'Show you\'re taking action',
          ],
          donts: [
            'Over-explain or share details',
            'Make it sound like an excuse',
            'Expect them to be your therapist',
            'Use it to avoid responsibility',
          ],
        },
      },
      {
        opener: '"I\'m making some changes to support my wellbeing, including therapy. It may occasionally affect my schedule, but I wanted to be upfront about it."',
        whyItWorks: 'Normalizes therapy, sets boundary, stays professional.',
        followUp: [
          'Clarify any schedule impacts',
          'Show commitment to work quality',
          'Be consistent and reliable',
          'Don\'t make a bigger deal of it than necessary',
        ],
        dosDonts: {
          dos: [
            'Be matter-of-fact',
            'Show you\'re handling it professionally',
            'Maintain work quality',
            'Respect their boundaries too',
          ],
          donts: [
            'Share diagnosis or symptoms',
            'Make it about personal friendship',
            'Use it as excuse for poor work',
            'Bring personal life into work conversations repeatedly',
          ],
        },
      },
    ],
  },
  {
    id: 'supporting-others',
    title: 'Supporting Others (When They Share)',
    emoji: '🤝',
    description: 'How to respond when someone else opens up about mental health',
    starters: [
      {
        opener: '"Thanks for trusting me with this. That took courage. How can I support you?"',
        whyItWorks:
          'Validates their vulnerability, offers support without taking over.',
        followUp: [
          'Listen without judgment',
          'Ask what specific support they need',
          'Don\'t try to fix it - that\'s therapy\'s job',
          'Check in periodically',
        ],
        dosDonts: {
          dos: [
            'Listen without interrupting',
            'Ask what they need from you',
            'Share similar experiences if relevant',
            'Normalize their feelings',
            'Be consistent in your support',
          ],
          donts: [
            'Try to be their therapist',
            'Share unsolicited advice',
            'Minimize their struggles',
            'Make it about you',
            'Break their confidence',
          ],
        },
      },
      {
        opener: '"I notice you\'ve seemed down lately. Is everything okay? I care about you and I\'m here if you want to talk."',
        whyItWorks:
          'Invites conversation without pressure. Shows you\'ve noticed and care.',
        followUp: [
          'Give them space to respond',
          'Don\'t push if they\'re not ready',
          'Share resources if they ask',
          'Respect their timeline',
        ],
        dosDonts: {
          dos: [
            'Create safe space for conversation',
            'Respect their pace',
            'Offer resources gently',
            'Remember they\'re the expert on themselves',
            'Follow up later',
          ],
          donts: [
            'Push them to talk',
            'Tell them what they should do',
            'Gossip about it',
            'Expect them to be grateful',
            'Give up if they don\'t open up immediately',
          ],
        },
      },
      {
        opener: '"Going to therapy is a brave choice. I think that\'s great and I support you. Let me know if you need anything."',
        whyItWorks: 'Affirms their decision, removes shame, offers non-invasive support.',
        followUp: [
          'Let them share (or not) about therapy without pushing',
          'Celebrate their commitment to themselves',
          'Be consistent in your support',
          'Normalize mental health care',
        ],
        dosDonts: {
          dos: [
            'Affirm their courage',
            'Keep it brief and positive',
            'Follow their lead on discussion',
            'Be proud of them',
            'Normalize therapy',
          ],
          donts: [
            'Ask for details about therapy',
            'Suggest different therapies',
            'Act surprised or concerned',
            'Make it weird',
            'Expect updates',
          ],
        },
      },
    ],
  },
  {
    id: 'difficult-moments',
    title: 'In Difficult Moments',
    emoji: '🆘',
    description: 'What to say when someone is in crisis or very struggling',
    starters: [
      {
        opener: '"I\'m worried about you. I want you to reach out to someone who can help - therapist, doctor, or crisis line. Can I help you do that right now?"',
        whyItWorks: 'Direct, caring, action-oriented. Doesn\'t diagnose, offers concrete help.',
        followUp: [
          'Have crisis numbers ready: 988 (Suicide & Crisis Lifeline)',
          'Offer to sit with them while they call',
          'Don\'t leave them alone if it\'s immediate danger',
          'Call 911 if they\'re in immediate danger',
        ],
        dosDonts: {
          dos: [
            'Express concern directly',
            'Suggest professional help',
            'Offer concrete support',
            'Take threats seriously',
            'Call 911 if needed',
          ],
          donts: [
            'Minimize their pain',
            'Try to fix it yourself',
            'Judge them',
            'Leave them alone if in danger',
            'Keep it secret if they mention suicide/self-harm',
          ],
        },
      },
      {
        opener: '"I can\'t fix this, but you\'re not alone. Professionals can help in ways I can\'t. Let\'s get you to someone who can."',
        whyItWorks: 'Honest about your limits, points toward real help.',
        followUp: [
          'Respect their autonomy while being persistent',
          'Offer to help find resources',
          'Stay involved after they get professional help',
          'Follow up regularly',
        ],
        dosDonts: {
          dos: [
            'Be honest about limits',
            'Be persistent about getting help',
            'Involve other people if needed',
            'Stay involved after they get help',
            'Practice self-care (supporting someone in crisis is hard)',
          ],
          donts: [
            'Pretend you can handle it alone',
            'Enable avoidance of professional help',
            'Shame them for being in crisis',
            'Distance yourself',
            'Burn yourself out',
          ],
        },
      },
    ],
  },
];

export default function ConversationStartersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('yourself');
  const [expandedStarter, setExpandedStarter] = useState<number | null>(0);

  const current = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Conversation Starters
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            How to talk about mental health and therapy with yourself, friends, family, and coworkers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setExpandedStarter(0);
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id ? 'shadow-lg' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: selectedCategory === cat.id ? '#824dbf' : '#2a1a3f',
                color: '#f0e6ff',
                border: selectedCategory === cat.id ? '2px solid #f0e6ff' : '1px solid #824dbf',
              }}
            >
              {cat.emoji} <span className="hidden sm:inline ml-1">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Category Content */}
        {current && (
          <div className="space-y-4 sm:space-y-6">
            {/* Category Description */}
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
              <p className="text-base sm:text-lg" style={{ color: '#f0e6ff' }}>
                {current.description}
              </p>
            </div>

            {/* Conversation Starters */}
            {current.starters.map((starter, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: '#2a1a3f' }}
              >
                {/* Opener Header */}
                <button
                  onClick={() => setExpandedStarter(expandedStarter === idx ? null : idx)}
                  className="w-full p-4 sm:p-6 text-left hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: expandedStarter === idx ? 'rgba(130, 77, 191, 0.15)' : 'transparent',
                  }}
                >
                  <p className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#824dbf' }}>
                    "{starter.opener}"
                  </p>
                  <p className="text-sm" style={{ color: '#c9b5e6' }}>
                    {starter.whyItWorks}
                  </p>
                  <div className="mt-2 text-right">
                    <span style={{ color: '#824dbf', fontSize: '1.5rem' }}>
                      {expandedStarter === idx ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedStarter === idx && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-opacity-10" style={{ borderColor: '#824dbf' }}>
                    {/* Follow-up */}
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3" style={{ color: '#f0e6ff' }}>
                        💬 Follow-up Ideas:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {starter.followUp.map((idea, i) => (
                          <li key={i} className="text-sm flex gap-2" style={{ color: '#c9b5e6' }}>
                            <span style={{ color: '#824dbf' }}>→</span>
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dos and Donts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#10b981' }}>
                          ✓ Do's
                        </h4>
                        <ul className="space-y-2">
                          {starter.dosDonts.dos.map((doItem, i) => (
                            <li key={i} className="text-sm" style={{ color: '#c9b5e6' }}>
                              ✓ {doItem}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#f59e0b' }}>
                          ✗ Don'ts
                        </h4>
                        <ul className="space-y-2">
                          {starter.dosDonts.donts.map((dontItem, i) => (
                            <li key={i} className="text-sm" style={{ color: '#c9b5e6' }}>
                              ✗ {dontItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Key Points */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
            🗣 General Principles for All Conversations
          </h2>
          <ul className="space-y-3" style={{ color: '#c9b5e6' }}>
            <li className="flex gap-3 text-sm sm:text-base">
              <span style={{ color: '#824dbf' }}>1.</span>
              <span>
                <strong style={{ color: '#f0e6ff' }}>Authenticity:</strong> Use your own words. These are templates, not scripts.
              </span>
            </li>
            <li className="flex gap-3 text-sm sm:text-base">
              <span style={{ color: '#824dbf' }}>2.</span>
              <span>
                <strong style={{ color: '#f0e6ff' }}>Timing:</strong> Choose a calm, private moment. Not over text or when emotions are high.
              </span>
            </li>
            <li className="flex gap-3 text-sm sm:text-base">
              <span style={{ color: '#824dbf' }}>3.</span>
              <span>
                <strong style={{ color: '#f0e6ff' }}>Honesty:</strong> Be genuine. People can tell if you\'re not being real.
              </span>
            </li>
            <li className="flex gap-3 text-sm sm:text-base">
              <span style={{ color: '#824dbf' }}>4.</span>
              <span>
                <strong style={{ color: '#f0e6ff' }}>Boundaries:</strong> You\'re not responsible for fixing anyone\'s mental health.
              </span>
            </li>
            <li className="flex gap-3 text-sm sm:text-base">
              <span style={{ color: '#824dbf' }}>5.</span>
              <span>
                <strong style={{ color: '#f0e6ff' }}>Self-Care:</strong> Protect your own mental health while supporting others.
              </span>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/preparation"
            className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
          >
            ← Session Preparation
          </a>
          <a
            href="/resources"
            className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
          >
            Crisis Resources →
          </a>
        </div>
      </div>
    </div>
  );
}
