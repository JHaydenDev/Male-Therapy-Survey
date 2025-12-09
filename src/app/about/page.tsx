export default function AboutPage() {
  return (
    <div className="min-h-screen py-6 sm:py-12" style={{background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)'}}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-lg shadow-md p-5 sm:p-8" style={{backgroundColor: '#2a1a3f'}}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
            About This Project
          </h1>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" style={{color: '#f0e6ff'}}>
                Our Mission
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                The Men&apos;s Mental Health Survey aims to understand and address the unique 
                challenges men face when seeking mental health support. By collecting anonymous 
                data about experiences with therapy, we hope to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Reduce the stigma surrounding men&apos;s mental health</li>
                <li>Identify common barriers preventing men from seeking help</li>
                <li>Highlight the benefits and effectiveness of therapy</li>
                <li>Inform policy makers and mental health organizations</li>
                <li>Create a community of shared experiences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Why This Matters
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                Mental health challenges affect millions of men worldwide, yet many suffer in 
                silence due to cultural expectations, stigma, and lack of awareness. Research 
                shows that:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Men are significantly less likely to seek help for mental health issues</li>
                <li>Traditional masculinity norms can prevent men from expressing vulnerability</li>
                <li>Men often wait until they&apos;re in crisis before seeking support</li>
                <li>Early intervention can dramatically improve outcomes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                How It Works
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                This platform uses a simple, anonymous survey to collect data about men&apos;s 
                experiences with mental health therapy. The data is:
              </p>
              <ol className="list-decimal pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Collected anonymously with no personally identifiable information</li>
                <li>Stored securely in a MongoDB database</li>
                <li>Analyzed in real-time to generate insights</li>
                <li>Displayed publicly through interactive visualizations</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Technology Stack
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                This application is built with modern web technologies:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li><strong>Next.js</strong> - React framework for server-side rendering</li>
                <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
                <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
                <li><strong>MongoDB</strong> - NoSQL database for data storage</li>
                <li><strong>Recharts</strong> - Composable charting library</li>
                <li><strong>Vercel</strong> - Deployment platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Get Involved
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                You can contribute to this initiative by:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Taking the survey and sharing your experiences</li>
                <li>Sharing this project with others who might benefit</li>
                <li>Using the insights to inform conversations about men&apos;s mental health</li>
                <li>Supporting mental health organizations in your community</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Resources
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                If you or someone you know is struggling with mental health issues, 
                these resources can help:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
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
