import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Male Insight Project | Anonymous Men\'s Mental Health Survey & Resources',
  description:
    'Male Insight Project is a men\'s mental health platform offering anonymous surveys, therapy guidance, risk assessment, and evidence-based resources.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <footer className="mt-16 border-t" style={{ backgroundColor: '#162033', borderColor: '#1f2a44' }}>
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#e7eef5' }}>
                  Male Insight Project
                </h3>
                <p style={{ color: '#b8c5d6' }} className="text-sm sm:text-base">
                  Supporting men&apos;s mental health through education, resources, and evidence-based guidance.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#e7eef5' }}>
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li><a href="/survey" style={{ color: '#2d8c8c' }} className="hover:opacity-80 transition-opacity">Survey</a></li>
                  <li><a href="/quiz" style={{ color: '#2d8c8c' }} className="hover:opacity-80 transition-opacity">Assessment</a></li>
                  <li><a href="/resources" style={{ color: '#2d8c8c' }} className="hover:opacity-80 transition-opacity">Crisis Resources</a></li>
                  <li><a href="/research" style={{ color: '#2d8c8c' }} className="hover:opacity-80 transition-opacity">Research</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#e7eef5' }}>
                  Developed By
                </h3>
                <p style={{ color: '#b8c5d6' }} className="text-sm sm:text-base mb-2">
                  <strong>Joseph Hayden</strong>
                </p>
                <p style={{ color: '#b8c5d6' }} className="text-xs sm:text-sm">
                  <a href="https://jhaydendevelopment.com" style={{ color: '#2d8c8c' }} className="hover:opacity-80 transition-opacity">JHayden Development</a>
                </p>
              </div>
            </div>

            <div className="border-t pt-6" style={{ borderColor: '#1f2a44' }}>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p style={{ color: '#5f6c7b' }} className="text-xs sm:text-sm text-center sm:text-left">
                  © 2025 Male Insight Project. All survey responses are anonymous and confidential.
                </p>
                <div className="flex gap-4 text-xs sm:text-sm">
                  <a href="/ethics" style={{ color: '#2d8c8c' }} className="hover:opacity-80 transition-opacity">Ethics</a>
                  <a href="/about" style={{ color: '#2d8c8c' }} className="hover:opacity-80 transition-opacity">About</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
