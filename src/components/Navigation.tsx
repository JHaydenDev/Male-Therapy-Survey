'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const primaryNav = [
    { href: '/', label: 'Home' },
    { href: '/survey', label: 'Survey' },
    { href: '/insights', label: 'Insights' },
  ];

  const resourceNav = [
    { href: '/quiz', label: 'Risk Assessment' },
    { href: '/barriers', label: 'Identify Barriers' },
    { href: '/therapy-comparison', label: 'Therapy Types' },
    { href: '/preparation', label: 'Prepare for Therapy' },
    { href: '/conversation-starters', label: 'How to Talk' },
  ];

  const supportNav = [
    { href: '/resources', label: 'Crisis Resources' },
    { href: '/research', label: 'Research' },
  ];

  const infoNav = [
    { href: '/about', label: 'About' },
    { href: '/ethics', label: 'Ethics' },
  ];
  
  return (
    <nav className="bg-gradient-to-r from-accent-purple via-tertiary-purple to-secondary-purple text-white shadow-lg" style={{background: 'linear-gradient(to right, #442574, #733ba0, #824dbf)'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-center py-3 md:py-0 md:h-16 gap-4 md:gap-0">
          <Link href="/" className="text-xl sm:text-2xl font-bold whitespace-nowrap md:absolute md:left-4 flex items-center gap-2">
            <span style={{color: '#f0e6ff'}}>🧠 MentalWell</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {/* Primary */}
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{
                  borderBottom: pathname === item.href ? '2px solid white' : 'none',
                  paddingBottom: '2px'
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                Resources ▼
              </button>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="bg-gray-900 rounded-lg shadow-lg py-2 min-w-max">
                  {resourceNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-opacity-80 hover:bg-purple-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Support */}
            {supportNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}

            {/* Info */}
            <div className="relative group">
              <button className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                More ▼
              </button>
              <div className="absolute right-0 top-full pt-2 hidden group-hover:block">
                <div className="bg-gray-900 rounded-lg shadow-lg py-2 min-w-max">
                  {infoNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-opacity-80 hover:bg-purple-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex gap-2">
            <Link
              href="/survey"
              className="px-3 py-2 rounded-md text-xs font-medium transition-colors"
              style={{
                backgroundColor: pathname === '/survey' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
              }}
            >
              Survey
            </Link>
            <Link
              href="/insights"
              className="px-3 py-2 rounded-md text-xs font-medium transition-colors"
              style={{
                backgroundColor: pathname === '/insights' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
              }}
            >
              Insights
            </Link>
            <Link
              href="/resources"
              className="px-3 py-2 rounded-md text-xs font-medium transition-colors"
              style={{
                backgroundColor: pathname === '/resources' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
              }}
            >
              Help
            </Link>
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'mobile' ? null : 'mobile')}
                className="px-3 py-2 rounded-md text-xs font-medium hover:opacity-80 transition-opacity"
              >
                Menu
              </button>
              {openDropdown === 'mobile' && (
                <div className="absolute right-0 top-full mt-1 bg-gray-900 rounded-lg shadow-lg py-2 min-w-max z-10">
                  {[...resourceNav, ...supportNav, ...infoNav].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-xs hover:bg-purple-700 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
