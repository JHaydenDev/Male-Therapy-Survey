'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const closeDropdown = () => setOpenDropdown(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    <nav ref={navRef} className="text-white shadow-lg" style={{ background: 'linear-gradient(to right, #1f2a44, #2d8c8c)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center py-3 md:py-0 md:h-16 gap-4 md:gap-0">
          <Link href="/" className="text-xl sm:text-2xl font-bold whitespace-nowrap md:absolute md:left-4 flex items-center gap-2">
            <Image src="/mip-logo.svg" alt="Male Insight Project logo" width={28} height={28} priority />
            <span style={{ color: '#e7eef5' }}>Male Insight Project</span>
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ borderBottom: pathname === item.href ? '2px solid white' : 'none', paddingBottom: '2px' }}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                id="resources-btn"
                className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={openDropdown === 'resources'}
                aria-controls="resources-menu"
                onClick={() => toggleDropdown('resources')}
                onKeyDown={(e) => { if (e.key === 'Escape') closeDropdown(); }}
              >Resources ▼</button>
              {openDropdown === 'resources' && (
                <div
                  id="resources-menu"
                  role="menu"
                  aria-labelledby="resources-btn"
                  className="absolute left-0 top-full pt-2 z-10"
                  onKeyDown={(e) => { if (e.key === 'Escape') closeDropdown(); }}
                >
                  <div className="rounded-lg shadow-lg py-2 min-w-max" style={{ backgroundColor: '#162033' }}>
                    {resourceNav.map((item) => (
                      <Link key={item.href} href={item.href} role="menuitem" className="block px-4 py-2 text-sm transition-colors" style={{ color: '#e7eef5' }} onClick={closeDropdown}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {supportNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium hover:opacity-80 transition-opacity">
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                id="more-btn"
                className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={openDropdown === 'more'}
                aria-controls="more-menu"
                onClick={() => toggleDropdown('more')}
                onKeyDown={(e) => { if (e.key === 'Escape') closeDropdown(); }}
              >More ▼</button>
              {openDropdown === 'more' && (
                <div
                  id="more-menu"
                  role="menu"
                  aria-labelledby="more-btn"
                  className="absolute right-0 top-full pt-2 z-10"
                  onKeyDown={(e) => { if (e.key === 'Escape') closeDropdown(); }}
                >
                  <div className="rounded-lg shadow-lg py-2 min-w-max" style={{ backgroundColor: '#162033' }}>
                    {infoNav.map((item) => (
                      <Link key={item.href} href={item.href} role="menuitem" className="block px-4 py-2 text-sm transition-colors" style={{ color: '#e7eef5' }} onClick={closeDropdown}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex gap-2">
            <Link href="/survey" className="px-3 py-2 rounded-md text-xs font-medium transition-colors" style={{ backgroundColor: pathname === '/survey' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)' }}>Survey</Link>
            <Link href="/insights" className="px-3 py-2 rounded-md text-xs font-medium transition-colors" style={{ backgroundColor: pathname === '/insights' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)' }}>Insights</Link>
            <Link href="/resources" className="px-3 py-2 rounded-md text-xs font-medium transition-colors" style={{ backgroundColor: pathname === '/resources' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)' }}>Help</Link>
            <div className="relative">
              <button onClick={() => setOpenDropdown(openDropdown === 'mobile' ? null : 'mobile')} className="px-3 py-2 rounded-md text-xs font-medium hover:opacity-80 transition-opacity">Menu</button>
              {openDropdown === 'mobile' && (
                <div className="absolute right-0 top-full mt-1 rounded-lg shadow-lg py-2 min-w-max z-10" style={{ backgroundColor: '#162033' }}>
                  {[...resourceNav, ...supportNav, ...infoNav].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-xs transition-colors" style={{ color: '#e7eef5' }} onClick={() => setOpenDropdown(null)}>
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
