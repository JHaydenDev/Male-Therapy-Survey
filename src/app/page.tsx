import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Men&apos;s Mental Health Matters
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Share your experiences with therapy anonymously and help us understand 
            the barriers and benefits of mental health care for men.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/survey"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Take the Survey
            </Link>
            <Link
              href="/insights"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600 shadow-md"
            >
              View Insights
            </Link>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              🔒 Anonymous
            </h3>
            <p className="text-gray-700">
              Your responses are completely anonymous. We don&apos;t collect any personally 
              identifiable information.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              📊 Real-Time Data
            </h3>
            <p className="text-gray-700">
              See live insights and analytics from all survey responses in our interactive 
              dashboard.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              💬 Make an Impact
            </h3>
            <p className="text-gray-700">
              Your voice matters. Help reduce stigma and improve mental health resources 
              for men everywhere.
            </p>
          </div>
        </div>

        {/* Statistics Preview */}
        <div className="mt-16 max-w-4xl mx-auto bg-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why This Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">3x</p>
              <p className="text-lg">
                Men are 3 times more likely to die by suicide than women
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">30%</p>
              <p className="text-lg">
                Only 30% of men seek help for mental health issues
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
