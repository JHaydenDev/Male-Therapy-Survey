import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)'}}>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4">
            <span className="text-5xl sm:text-6xl">🧠</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4" style={{color: '#f0e6ff'}}>
            Your Mental Health Matters
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 px-4" style={{color: '#c9b5e6'}}>
            <strong>MentalWell</strong> is a comprehensive platform for men's mental health education and support.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4" style={{color: '#c9b5e6'}}>
            Share your therapy experiences anonymously, access evidence-based resources, and help us break down barriers to mental health care for men.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/survey"
              className="text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-md hover:opacity-90 w-full sm:w-auto"
              style={{backgroundColor: '#824dbf'}}
            >
              Take the Survey
            </Link>
            <Link
              href="/insights"
              className="px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors border-2 shadow-md hover:opacity-90 w-full sm:w-auto"
              style={{color: '#824dbf', borderColor: '#824dbf', backgroundColor: 'transparent'}}
            >
              View Insights
            </Link>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#9e7263'}}>
              🔒 Anonymous
            </h3>
            <p style={{color: '#c9b5e6'}}>
              Your responses are completely anonymous. We don&apos;t collect any personally 
              identifiable information.
            </p>
          </div>
          
          <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#9e7263'}}>
              📊 Real-Time Data
            </h3>
            <p style={{color: '#c9b5e6'}}>
              See live insights and analytics from all survey responses in our interactive 
              dashboard.
            </p>
          </div>
          
          <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f'}}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#9e7263'}}>
              💬 Make an Impact
            </h3>
            <p style={{color: '#c9b5e6'}}>
              Your voice matters. Help reduce stigma and improve mental health resources 
              for men everywhere.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4" style={{color: '#f0e6ff'}}>
            Why This Matters: The Data
          </h2>
          <p className="text-center mb-8 sm:mb-12" style={{color: '#c9b5e6'}}>
            Men face unique barriers to mental health care. Here's what the evidence shows:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f', borderTop: '4px solid #824dbf'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#824dbf'}}>
                9.2M
              </p>
              <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                U.S. men experience mental illness annually (NIMH)
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f', borderTop: '4px solid #733ba0'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#733ba0'}}>
                3.5x
              </p>
              <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                Men more likely to die by suicide (CDC)
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f', borderTop: '4px solid #9e7263'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#9e7263'}}>
                28%
              </p>
              <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                Men seek mental health treatment (vs. 37% of women)
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#2a1a3f', borderTop: '4px solid #442574'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#442574'}}>
                Gap
              </p>
              <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                9% difference in help-seeking between men and women
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-lg" style={{backgroundColor: 'rgba(130, 77, 191, 0.1)', borderLeft: '4px solid #824dbf'}}>
            <h3 className="text-lg sm:text-xl font-bold mb-4" style={{color: '#f0e6ff'}}>
              Why the Gap?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                  <strong style={{color: '#f0e6ff'}}>Stigma:</strong> Fear of judgment or weakness
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                  <strong style={{color: '#f0e6ff'}}>Masculine Norms:</strong> Pressure to "tough it out"
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                  <strong style={{color: '#f0e6ff'}}>Access Issues:</strong> Cost, time, availability
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base" style={{color: '#c9b5e6'}}>
                  <strong style={{color: '#f0e6ff'}}>Awareness:</strong> Not recognizing symptoms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Multiple Paths */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12" style={{color: '#f0e6ff'}}>
            What Would You Like to Do?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Path 1: Assess */}
            <div className="p-6 sm:p-8 rounded-lg shadow-lg" style={{backgroundColor: '#2a1a3f', borderTop: '4px solid #824dbf'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{color: '#824dbf'}}>
                🎯 Assess Your Needs
              </h3>
              <p className="mb-6" style={{color: '#c9b5e6'}}>
                Understand where you stand with a quick mental health assessment and get personalized recommendations.
              </p>
              <Link
                href="/quiz"
                className="inline-block px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{backgroundColor: '#824dbf', color: '#f0e6ff'}}
              >
                Take Assessment
              </Link>
            </div>

            {/* Path 2: Learn */}
            <div className="p-6 sm:p-8 rounded-lg shadow-lg" style={{backgroundColor: '#2a1a3f', borderTop: '4px solid #733ba0'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{color: '#733ba0'}}>
                📚 Learn About Therapy
              </h3>
              <p className="mb-6" style={{color: '#c9b5e6'}}>
                Explore different therapy types, understand how they work, and prepare for your first session.
              </p>
              <Link
                href="/therapy-comparison"
                className="inline-block px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{backgroundColor: '#733ba0', color: '#f0e6ff'}}
              >
                Explore Types
              </Link>
            </div>

            {/* Path 3: Support */}
            <div className="p-6 sm:p-8 rounded-lg shadow-lg" style={{backgroundColor: '#2a1a3f', borderTop: '4px solid #9e7263'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{color: '#9e7263'}}>
                🤝 Get Immediate Help
              </h3>
              <p className="mb-6" style={{color: '#c9b5e6'}}>
                In crisis or need support now? Connect with crisis resources and find immediate assistance.
              </p>
              <Link
                href="/resources"
                className="inline-block px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{backgroundColor: '#9e7263', color: '#f0e6ff'}}
              >
                Find Resources
              </Link>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="text-center p-6 sm:p-8 rounded-lg shadow-lg" style={{background: 'linear-gradient(to right, #442574, #733ba0, #824dbf)'}}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
              Help Us Understand & Change This
            </h2>
            <p className="text-base sm:text-lg mb-6" style={{color: '#f0e6ff'}}>
              Your anonymous responses help us identify barriers, improve resources, and create real change in men's mental health.
            </p>
            <Link
              href="/survey"
              className="inline-block px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-opacity hover:opacity-90"
              style={{backgroundColor: '#1a0f2e', color: '#f0e6ff'}}
            >
              Take the Survey Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
