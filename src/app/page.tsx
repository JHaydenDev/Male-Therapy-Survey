import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #1f2a44, #162033)'}}>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4">
            <span className="text-5xl sm:text-6xl">🧠</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4" style={{color: '#e7eef5'}}>
            Your Mental Health Matters
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 px-4" style={{color: '#b8c5d6'}}>
            <strong>Male Insight Project</strong> is a comprehensive platform for men's mental health education and support.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4" style={{color: '#b8c5d6'}}>
            Share your therapy experiences anonymously, access evidence-based resources, and help us break down barriers to mental health care for men.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/survey"
              className="text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-md hover:opacity-90 w-full sm:w-auto"
              style={{backgroundColor: '#2d8c8c'}}
            >
              Take the Survey
            </Link>
            <Link
              href="/insights"
              className="px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors border-2 shadow-md hover:opacity-90 w-full sm:w-auto"
              style={{color: '#2d8c8c', borderColor: '#2d8c8c', backgroundColor: 'transparent'}}
            >
              View Insights
            </Link>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#1f2a44'}}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#5f6c7b'}}>
              🔒 Anonymous
            </h3>
            <p style={{color: '#b8c5d6'}}>
              Your responses are completely anonymous. We don&apos;t collect any personally 
              identifiable information.
            </p>
          </div>
          
          <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#1f2a44'}}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#5f6c7b'}}>
              📊 Real-Time Data
            </h3>
            <p style={{color: '#b8c5d6'}}>
              See live insights and analytics from all survey responses in our interactive 
              dashboard.
            </p>
          </div>
          
          <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#1f2a44'}}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: '#5f6c7b'}}>
              💬 Make an Impact
            </h3>
            <p style={{color: '#b8c5d6'}}>
              Your voice matters. Help reduce stigma and improve mental health resources 
              for men everywhere.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4" style={{color: '#e7eef5'}}>
            Why This Matters: The Data
          </h2>
          <p className="text-center mb-8 sm:mb-12" style={{color: '#b8c5d6'}}>
            Men face unique barriers to mental health care. Here's what the evidence shows:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#1f2a44', borderTop: '4px solid #2d8c8c'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#2d8c8c'}}>
                9.2M
              </p>
              <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                U.S. men experience mental illness annually (NIMH)
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#1f2a44', borderTop: '4px solid #3f6e8a'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#3f6e8a'}}>
                3.5x
              </p>
              <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                Men more likely to die by suicide (CDC)
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#1f2a44', borderTop: '4px solid #5f6c7b'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#5f6c7b'}}>
                28%
              </p>
              <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                Men seek mental health treatment (vs. 37% of women)
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-lg shadow-md" style={{backgroundColor: '#1f2a44', borderTop: '4px solid #2d8c8c'}}>
              <p className="text-3xl sm:text-4xl font-bold mb-2" style={{color: '#2d8c8c'}}>
                Gap
              </p>
              <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                9% difference in help-seeking between men and women
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-lg" style={{backgroundColor: 'rgba(45, 140, 140, 0.12)', borderLeft: '4px solid #2d8c8c'}}>
            <h3 className="text-lg sm:text-xl font-bold mb-4" style={{color: '#e7eef5'}}>
              Why the Gap?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                  <strong style={{color: '#e7eef5'}}>Stigma:</strong> Fear of judgment or weakness
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                  <strong style={{color: '#e7eef5'}}>Masculine Norms:</strong> Pressure to "tough it out"
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                  <strong style={{color: '#e7eef5'}}>Access Issues:</strong> Cost, time, availability
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base" style={{color: '#b8c5d6'}}>
                  <strong style={{color: '#e7eef5'}}>Awareness:</strong> Not recognizing symptoms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Multiple Paths */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12" style={{color: '#e7eef5'}}>
            What Would You Like to Do?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Path 1: Assess */}
            <div className="p-6 sm:p-8 rounded-lg shadow-lg" style={{backgroundColor: '#1f2a44', borderTop: '4px solid #2d8c8c'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{color: '#2d8c8c'}}>
                🎯 Assess Your Needs
              </h3>
              <p className="mb-6" style={{color: '#b8c5d6'}}>
                Understand where you stand with a quick mental health assessment and get personalized recommendations.
              </p>
              <Link
                href="/quiz"
                className="inline-block px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{backgroundColor: '#2d8c8c', color: '#e7eef5'}}
              >
                Take Assessment
              </Link>
            </div>

            {/* Path 2: Learn */}
            <div className="p-6 sm:p-8 rounded-lg shadow-lg" style={{backgroundColor: '#1f2a44', borderTop: '4px solid #3f6e8a'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{color: '#3f6e8a'}}>
                📚 Learn About Therapy
              </h3>
              <p className="mb-6" style={{color: '#b8c5d6'}}>
                Explore different therapy types, understand how they work, and prepare for your first session.
              </p>
              <Link
                href="/therapy-comparison"
                className="inline-block px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{backgroundColor: '#3f6e8a', color: '#e7eef5'}}
              >
                Explore Types
              </Link>
            </div>

            {/* Path 3: Support */}
            <div className="p-6 sm:p-8 rounded-lg shadow-lg" style={{backgroundColor: '#1f2a44', borderTop: '4px solid #5f6c7b'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{color: '#5f6c7b'}}>
                🤝 Get Immediate Help
              </h3>
              <p className="mb-6" style={{color: '#b8c5d6'}}>
                In crisis or need support now? Connect with crisis resources and find immediate assistance.
              </p>
              <Link
                href="/resources"
                className="inline-block px-6 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{backgroundColor: '#5f6c7b', color: '#e7eef5'}}
              >
                Find Resources
              </Link>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="text-center p-6 sm:p-8 rounded-lg shadow-lg" style={{background: 'linear-gradient(to right, #1f2a44, #3f6e8a, #2d8c8c)'}}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: '#e7eef5'}}>
              Help Us Understand & Change This
            </h2>
            <p className="text-base sm:text-lg mb-6" style={{color: '#e7eef5'}}>
              Your anonymous responses help us identify barriers, improve resources, and create real change in men's mental health.
            </p>
            <Link
              href="/survey"
              className="inline-block px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-opacity hover:opacity-90"
              style={{backgroundColor: '#162033', color: '#e7eef5'}}
            >
              Take the Survey Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
