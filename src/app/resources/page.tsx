'use client';

import { useState } from 'react';

type ResourceCategory = 'suicide' | 'substance' | 'relationship' | 'general' | 'military' | 'lgbtq';

interface Resource {
  name: string;
  number?: string;
  website?: string;
  description: string;
  available: string;
  icon: string;
}

const resources: Record<ResourceCategory, Resource[]> = {
  suicide: [
    {
      name: '988 Suicide & Crisis Lifeline',
      number: '988',
      website: 'https://988lifeline.org',
      description: 'Free, confidential support for people in suicidal crisis. Call, text, or chat 24/7.',
      available: '24/7',
      icon: '📞',
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      website: 'https://www.crisistextline.org',
      description: 'Text-based crisis support for emotional distress.',
      available: '24/7',
      icon: '💬',
    },
    {
      name: 'International Association for Suicide Prevention',
      website: 'https://www.iasp.info/resources/Crisis_Centres/',
      description: 'Directory of crisis centers worldwide.',
      available: 'Global',
      icon: '🌍',
    },
  ],
  substance: [
    {
      name: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      website: 'https://www.samhsa.gov/find-help/national-helpline',
      description: 'Free, confidential, 24/7 treatment referral and information for substance abuse.',
      available: '24/7',
      icon: '☎️',
    },
    {
      name: 'Alcoholics Anonymous (AA)',
      website: 'https://www.aa.org',
      description: 'Peer support meetings for alcohol recovery. Available in most communities.',
      available: 'Ongoing meetings',
      icon: '👥',
    },
    {
      name: 'Narcotics Anonymous (NA)',
      website: 'https://www.na.org',
      description: 'Peer support meetings for substance abuse recovery.',
      available: 'Ongoing meetings',
      icon: '👥',
    },
  ],
  relationship: [
    {
      name: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      website: 'https://www.thehotline.org',
      description: 'Support for people experiencing domestic violence or abuse.',
      available: '24/7',
      icon: '💚',
    },
    {
      name: 'Psychology Today Therapist Finder',
      website: 'https://www.psychologytoday.com',
      description: 'Search for therapists specializing in relationship issues, couples therapy.',
      available: 'Online directory',
      icon: '🔍',
    },
    {
      name: 'Gottman Institute',
      website: 'https://www.gottman.com',
      description: 'Research-based approaches to relationship and couples therapy.',
      available: 'Online resources & referrals',
      icon: '💑',
    },
  ],
  general: [
    {
      name: 'NAMI Helpline (National Alliance on Mental Illness)',
      number: '1-800-950-6264',
      website: 'https://www.nami.org',
      description: 'Information, support, and peer-to-peer resources for mental health.',
      available: 'Mon-Fri 10am-10pm ET',
      icon: '🤝',
    },
    {
      name: 'Psychology Today',
      website: 'https://www.psychologytoday.com',
      description: 'Therapist finder, articles, and mental health resources.',
      available: '24/7 Online',
      icon: '📚',
    },
    {
      name: 'BetterHelp',
      website: 'https://www.betterhelp.com',
      description: 'Online therapy platform connecting you with licensed therapists.',
      available: '24/7 Messaging',
      icon: '💻',
    },
    {
      name: 'Talkspace',
      website: 'https://www.talkspace.com',
      description: 'Online therapy and psychiatry services.',
      available: '24/7 Messaging',
      icon: '📱',
    },
  ],
  military: [
    {
      name: 'Veterans Crisis Line',
      number: '988 then press 1',
      website: 'https://www.veteranscrisisline.net',
      description: 'Free, confidential crisis support for veterans and their families.',
      available: '24/7',
      icon: '🎖️',
    },
    {
      name: 'Military OneSource',
      number: '1-800-342-9647',
      website: 'https://www.militaryonesource.mil',
      description: 'Free counseling and support for active duty, reserve, and guard families.',
      available: '24/7',
      icon: '🪖',
    },
    {
      name: 'Real Warriors',
      website: 'https://www.realwarriors.net',
      description: 'Peer support and resources for military mental health.',
      available: 'Online resources',
      icon: '⚡',
    },
  ],
  lgbtq: [
    {
      name: 'The Trevor Project',
      number: '1-866-488-7386',
      website: 'https://www.thetrevorproject.org',
      description: 'Crisis support specifically for LGBTQ+ youth. Call, text, or chat 24/7.',
      available: '24/7',
      icon: '🏳️‍🌈',
    },
    {
      name: 'PFLAG',
      website: 'https://pflag.org',
      description: 'Support for LGBTQ+ individuals and their families.',
      available: 'Support groups & online',
      icon: '❤️',
    },
    {
      name: 'Trans Lifeline',
      number: '877-565-8860',
      website: 'https://translifeline.org',
      description: 'Crisis support and peer support for transgender individuals.',
      available: '24/7',
      icon: '⭐',
    },
  ],
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('suicide');

  const categories: { id: ResourceCategory; label: string; emoji: string }[] = [
    { id: 'suicide', label: 'Suicidal Crisis', emoji: '🆘' },
    { id: 'substance', label: 'Substance Abuse', emoji: '🚨' },
    { id: 'relationship', label: 'Relationship Issues', emoji: '💔' },
    { id: 'general', label: 'General Mental Health', emoji: '🧠' },
    { id: 'military', label: 'Military/Veterans', emoji: '🎖️' },
    { id: 'lgbtq', label: 'LGBTQ+ Support', emoji: '🏳️‍🌈' },
  ];

  return (
    <div className="min-h-screen py-6 sm:py-12" style={{ background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#f0e6ff' }}>
            Crisis Resources & Support
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#c9b5e6' }}>
            Immediate help is available. Choose a category below to find resources for your situation.
          </p>
          <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
            <p className="text-sm" style={{ color: '#f0e6ff' }}>
              <strong>In immediate danger?</strong> Call 911 or go to your nearest emergency room.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id ? 'shadow-lg' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: selectedCategory === cat.id ? '#824dbf' : '#2a1a3f',
                color: '#f0e6ff',
                border: selectedCategory === cat.id ? '2px solid #f0e6ff' : '1px solid #824dbf',
              }}
            >
              {cat.emoji} <span className="hidden sm:inline ml-1">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {resources[selectedCategory].map((resource, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-lg shadow-md"
              style={{ backgroundColor: '#2a1a3f' }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl sm:text-3xl">{resource.icon}</span>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#f0e6ff' }}>
                    {resource.name}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1" style={{ color: '#c9b5e6' }}>
                    {resource.available}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base mb-4" style={{ color: '#c9b5e6' }}>
                {resource.description}
              </p>

              <div className="flex flex-col gap-2">
                {resource.number && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm" style={{ color: '#9e7263' }}>
                      📞 Call/Text:
                    </span>
                    <a
                      href={`tel:${resource.number.replace(/\D/g, '')}`}
                      className="text-sm sm:text-base font-mono font-bold hover:underline"
                      style={{ color: '#9e7263' }}
                    >
                      {resource.number}
                    </a>
                  </div>
                )}
                {resource.website && (
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'rgba(130, 77, 191, 0.2)', color: '#f0e6ff' }}
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#2a1a3f' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#f0e6ff' }}>
            When to Reach Out
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#824dbf' }}>
                🚨 Call 988 or 911 if you:
              </h3>
              <ul className="text-sm sm:text-base space-y-1" style={{ color: '#c9b5e6' }}>
                <li>• Are having thoughts of suicide</li>
                <li>• Feel out of control or unable to cope</li>
                <li>• Are in danger of harming yourself or others</li>
                <li>• Are experiencing a severe mental health crisis</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#824dbf' }}>
                💬 Text or chat if you:
              </h3>
              <ul className="text-sm sm:text-base space-y-1" style={{ color: '#c9b5e6' }}>
                <li>• Need to talk but can't call right now</li>
                <li>• Are dealing with intense emotions</li>
                <li>• Want to explore options before an emergency</li>
                <li>• Need support at an unconventional hour</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#824dbf' }}>
                📞 Call a general helpline if you:
              </h3>
              <ul className="text-sm sm:text-base space-y-1" style={{ color: '#c9b5e6' }}>
                <li>• Want information about mental health services</li>
                <li>• Need help finding a therapist</li>
                <li>• Have questions about treatment options</li>
                <li>• Want to talk to someone trained in mental health</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-lg text-center" style={{ backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf' }}>
          <p className="text-base sm:text-lg" style={{ color: '#f0e6ff' }}>
            <strong>Reaching out is a sign of strength.</strong> You deserve support, and help is available right now.
          </p>
        </div>
      </div>
    </div>
  );
}
