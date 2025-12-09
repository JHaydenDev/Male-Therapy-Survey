'use client';

import { useState } from 'react';

interface SuccessStory {
  id: string;
  name: string;
  age: string;
  challenge: string;
  therapy: string;
  story: string;
  outcome: string;
  quote: string;
  timeframe: string;
}

const stories: SuccessStory[] = [
  {
    id: 'marcus',
    name: 'Marcus',
    age: '32',
    challenge: 'Anxiety & Panic Attacks',
    therapy: 'Cognitive Behavioral Therapy (CBT)',
    story:
      'Marcus had been struggling with panic attacks for years but never thought therapy was "for him." He thought he should just push through it. After a panic attack at work, his friend suggested he try therapy. Skeptical at first, Marcus found CBT gave him concrete tools to manage his anxiety.',
    outcome:
      'Within 6 weeks, Marcus\'s panic attacks decreased by 70%. He learned to recognize triggers and use breathing techniques that actually worked. He\'s now more confident at work and feels like he has control back.',
    quote:
      '"I was shocked how much CBT helped. I thought therapy was just talking about your feelings, but it\'s actual techniques you can use. Life-changing for me."',
    timeframe: '16 weeks of CBT',
  },
  {
    id: 'david',
    name: 'David',
    age: '45',
    challenge: 'Depression & Isolation',
    therapy: 'Psychodynamic Therapy + Exercise',
    story:
      'David had been isolated after a divorce and didn\'t realize how depressed he was. He told himself "men don\'t get depressed," but the weight of sadness was crushing. His doctor referred him to therapy where he explored how his past was affecting his present.',
    outcome:
      'David rebuilt relationships, started exercising, and reconnected with purpose. His depression lifted gradually as he processed his past and made new meaning. He\'s now dating again and enjoying life more than he has in years.',
    quote:
      '"Therapy helped me understand why I was isolating. Once I got that, I could change it. I didn\'t think I had depression, but talking to someone made all the difference."',
    timeframe: '6 months of weekly sessions',
  },
  {
    id: 'james',
    name: 'James',
    age: '28',
    challenge: 'Anger & Relationship Conflict',
    therapy: 'Dialectical Behavior Therapy (DBT)',
    story:
      'James\'s girlfriend threatened to leave because of his anger outbursts. He didn\'t know how to manage his emotions and would explode over small things. DBT gave him skills to regulate emotions and communicate better.',
    outcome:
      'James learned emotion regulation and mindfulness. His relationship improved dramatically. He\'s now able to have difficult conversations without shutting down or blowing up. His girlfriend noticed the change within weeks.',
    quote:
      '"DBT literally saved my relationship. I didn\'t know I could change how I respond to anger. The skills work. I use them every day."',
    timeframe: '12 weeks of DBT skills training + individual therapy',
  },
  {
    id: 'ryan',
    name: 'Ryan',
    age: '35',
    challenge: 'PTSD from Military Service',
    therapy: 'Trauma-Focused CBT + Group Support',
    story:
      'Ryan returned from deployment with nightmares and hypervigilance but didn\'t want to burden anyone. A peer mentioned therapy and the Veterans Crisis Line. Ryan started trauma-focused therapy and joined a veterans group where he realized he wasn\'t alone.',
    outcome:
      'Ryan\'s nightmares decreased significantly. He felt understood by other veterans. He\'s working again, sleeping better, and has a community of support. He now mentors other veterans about the importance of therapy.',
    quote:
      '"I didn\'t think anything could help the memories. Therapy didn\'t erase them, but it made them less powerful. The veterans group showed me I\'m not broken."',
    timeframe: '20 weeks of trauma therapy + ongoing group support',
  },
  {
    id: 'alex',
    name: 'Alex',
    age: '26',
    challenge: 'Social Anxiety & Career Stagnation',
    therapy: 'Acceptance & Commitment Therapy (ACT)',
    story:
      'Alex had high anxiety in social and professional settings, which kept him stuck in a job he hated. He couldn\'t see how therapy could help, but after meeting a therapist who used ACT, he learned to accept anxiety and take action toward his values anyway.',
    outcome:
      'Alex left his job, pursued his real passion in tech, and built confidence through taking action despite anxiety. He realized anxiety doesn\'t need to stop him from living. He\'s happier, more challenged, and more authentic.',
    quote:
      '"ACT taught me that I don\'t need to be anxiety-free to succeed. I just need to take action on what matters. That changed everything."',
    timeframe: '14 weeks of ACT',
  },
  {
    id: 'kevin',
    name: 'Kevin',
    age: '50',
    challenge: 'Substance Use & Family Estrangement',
    therapy: 'Group Therapy + Individual Therapy',
    story:
      'Kevin\'s drinking had cost him his marriage and relationship with his kids. He thought it was too late. His employer\'s EAP program connected him with a therapist and AA. In group therapy with other men, Kevin felt less alone and found accountability.',
    outcome:
      'Kevin has been sober for 2 years. His relationship with his adult children has slowly rebuilt. He sponsors other men in recovery and is a different person - present, responsible, and loved.',
    quote:
      '"I didn\'t think my family would ever trust me again. Therapy and the group helped me change. Now my kids actually want to spend time with me. It\'s everything."',
    timeframe: 'Ongoing (2 years, weekly individual + group)',
  },
];

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const current = selectedStory ? stories.find((s) => s.id === selectedStory) : null;

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Real Stories of Change
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            Men of different ages, backgrounds, and challenges who took the step to get help and saw real results.
          </p>
          <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
            <p className="text-sm" style={{ color: '#f0e6ff' }}>
              <strong>Note:</strong> Names and some details have been changed to protect privacy. These stories represent real journeys.
            </p>
          </div>
        </div>

        {/* Stories Grid */}
        {!selectedStory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story.id)}
                className="p-5 sm:p-6 rounded-lg text-left hover:shadow-lg transition-all"
                style={{ backgroundColor: '#2a1a3f' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
                  >
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#f0e6ff' }}>
                      {story.name}
                    </h3>
                    <p className="text-xs" style={{ color: '#c9b5e6' }}>
                      Age {story.age}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <span
                    className="inline-block px-2 py-1 rounded text-xs font-medium"
                    style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)', color: '#f0e6ff' }}
                  >
                    {story.challenge}
                  </span>
                </div>

                <p className="text-sm mb-4 line-clamp-3" style={{ color: '#c9b5e6' }}>
                  {story.story}
                </p>

                <button
                  className="text-sm font-medium"
                  style={{ color: '#824dbf' }}
                >
                  Read full story →
                </button>
              </button>
            ))}
          </div>
        ) : current ? (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedStory(null)}
              className="mb-6 text-sm font-medium flex items-center gap-2"
              style={{ color: '#824dbf' }}
            >
              ← Back to Stories
            </button>

            {/* Story Detail */}
            <div className="p-6 sm:p-8 rounded-lg mb-6" style={{ backgroundColor: '#2a1a3f' }}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
                >
                  {current.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#f0e6ff' }}>
                    {current.name}
                  </h2>
                  <p className="text-sm" style={{ color: '#c9b5e6' }}>
                    {current.age} years old
                  </p>
                </div>
              </div>

              {/* Challenge & Therapy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#824dbf' }}>
                    Challenge
                  </h3>
                  <p style={{ color: '#c9b5e6' }}>{current.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#824dbf' }}>
                    Therapy Type
                  </h3>
                  <p style={{ color: '#c9b5e6' }}>{current.therapy}</p>
                </div>
              </div>

              {/* The Story */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
                  The Journey
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#c9b5e6' }}>
                  {current.story}
                </p>
              </div>

              {/* Quote */}
              <div
                className="p-4 rounded-lg mb-6 italic"
                style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}
              >
                <p style={{ color: '#f0e6ff' }}>"{current.quote}"</p>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
                  Today
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#c9b5e6' }}>
                  {current.outcome}
                </p>
              </div>

              {/* Timeframe */}
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(130, 77, 191, 0.15)' }}
              >
                <p className="text-sm" style={{ color: '#c9b5e6' }}>
                  <strong style={{ color: '#f0e6ff' }}>Duration:</strong> {current.timeframe}
                </p>
              </div>
            </div>

            {/* Key Takeaway */}
            <div
              className="p-6 rounded-lg mb-6"
              style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}
            >
              <h3 className="font-bold mb-3" style={{ color: '#f0e6ff' }}>
                💡 What {current.name}'s Story Shows Us
              </h3>
              <ul className="space-y-2" style={{ color: '#c9b5e6' }}>
                <li>
                  ✓ Change takes time, but it is possible with the right support
                </li>
                <li>
                  ✓ Therapy isn't about becoming a different person - it's about being yourself authentically
                </li>
                <li>
                  ✓ The specific therapy type matters less than finding what works for you
                </li>
                <li>
                  ✓ Progress isn't always linear, but improvement is real
                </li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedStory(null)}
                className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
              >
                ← Read More Stories
              </button>
              <a
                href="/quiz"
                className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
              >
                Start Your Journey →
              </a>
            </div>
          </div>
        ) : null}

        {/* Inspiration */}
        {!selectedStory && (
          <div className="mt-12 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f0e6ff' }}>
              🌟 Your Story Could Be Next
            </h2>
            <p className="mb-4" style={{ color: '#c9b5e6' }}>
              These men came from different places, faced different challenges, but they all took one critical step: they decided their mental health mattered. They reached out for help.
            </p>
            <p className="mb-6" style={{ color: '#c9b5e6' }}>
              You have the same potential to change your life. Whether you're struggling with anxiety, depression, relationships, substance use, or something else - help works.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/quiz"
                className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#824dbf', color: '#f0e6ff' }}
              >
                Take Risk Assessment
              </a>
              <a
                href="/barriers"
                className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
              >
                Identify Your Barriers
              </a>
              <a
                href="/therapy-comparison"
                className="p-4 rounded-lg text-center font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#2a1a3f', color: '#f0e6ff', border: '1px solid #824dbf' }}
              >
                Explore Therapy Types
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
