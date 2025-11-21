export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About This Project
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                The Men&apos;s Mental Health Survey aims to understand and address the unique 
                challenges men face when seeking mental health support. By collecting anonymous 
                data about experiences with therapy, we hope to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Reduce the stigma surrounding men&apos;s mental health</li>
                <li>Identify common barriers preventing men from seeking help</li>
                <li>Highlight the benefits and effectiveness of therapy</li>
                <li>Inform policy makers and mental health organizations</li>
                <li>Create a community of shared experiences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why This Matters
              </h2>
              <p className="text-gray-700 mb-4">
                Mental health challenges affect millions of men worldwide, yet many suffer in 
                silence due to cultural expectations, stigma, and lack of awareness. Research 
                shows that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Men are significantly less likely to seek help for mental health issues</li>
                <li>Traditional masculinity norms can prevent men from expressing vulnerability</li>
                <li>Men often wait until they&apos;re in crisis before seeking support</li>
                <li>Early intervention can dramatically improve outcomes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-700 mb-4">
                This platform uses a simple, anonymous survey to collect data about men&apos;s 
                experiences with mental health therapy. The data is:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Collected anonymously with no personally identifiable information</li>
                <li>Stored securely in a MongoDB database</li>
                <li>Analyzed in real-time to generate insights</li>
                <li>Displayed publicly through interactive visualizations</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-gray-700 mb-4">
                This application is built with modern web technologies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Next.js</strong> - React framework for server-side rendering</li>
                <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
                <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
                <li><strong>MongoDB</strong> - NoSQL database for data storage</li>
                <li><strong>Recharts</strong> - Composable charting library</li>
                <li><strong>Vercel</strong> - Deployment platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get Involved
              </h2>
              <p className="text-gray-700 mb-4">
                You can contribute to this initiative by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Taking the survey and sharing your experiences</li>
                <li>Sharing this project with others who might benefit</li>
                <li>Using the insights to inform conversations about men&apos;s mental health</li>
                <li>Supporting mental health organizations in your community</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Resources
              </h2>
              <p className="text-gray-700 mb-4">
                If you or someone you know is struggling with mental health issues, 
                these resources can help:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>National Suicide Prevention Lifeline:</strong> 988 (US)
                </li>
                <li>
                  <strong>Crisis Text Line:</strong> Text HOME to 741741
                </li>
                <li>
                  <strong>SAMHSA National Helpline:</strong> 1-800-662-4357
                </li>
                <li>
                  <strong>Men&apos;s Health Network:</strong> menshealthnetwork.org
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
