export default function EthicsPage() {
  return (
    <div className="min-h-screen py-6 sm:py-12" style={{background: 'linear-gradient(to bottom, #2a1a3f, #1a0f2e)'}}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-lg shadow-md p-5 sm:p-8" style={{backgroundColor: '#2a1a3f'}}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{color: '#f0e6ff'}}>
            Ethics & Privacy
          </h1>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" style={{color: '#f0e6ff'}}>
                Privacy First
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                Your privacy is our top priority. This survey is completely anonymous, and 
                we take extensive measures to protect your identity:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>No names, email addresses, or identifying information is collected</li>
                <li>No IP addresses or device fingerprints are stored</li>
                <li>No cookies or tracking mechanisms are used</li>
                <li>All data is aggregated and cannot be traced back to individuals</li>
                <li>You can close the browser at any time without submitting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Data Collection & Use
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                We collect the following information through the survey:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Age group (not exact age)</li>
                <li>Whether you have attended therapy</li>
                <li>Reasons for seeking or not seeking therapy</li>
                <li>Perceived stigma levels</li>
                <li>Barriers to accessing mental health care</li>
                <li>Preferred therapy formats</li>
                <li>Optional comments and experiences</li>
              </ul>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                This data is used exclusively for:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Generating aggregate statistics and insights</li>
                <li>Understanding trends in men&apos;s mental health</li>
                <li>Identifying common barriers and solutions</li>
                <li>Public education about mental health stigma</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Data Security
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                Your survey responses are protected through:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Secure HTTPS encryption for all data transmission</li>
                <li>MongoDB database with secure authentication</li>
                <li>Environment variables for sensitive credentials</li>
                <li>Regular security updates and monitoring</li>
                <li>No sharing of raw data with third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Voluntary Participation
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                Participation in this survey is completely voluntary:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>You can choose not to answer any question</li>
                <li>You can stop the survey at any time</li>
                <li>There is no penalty for not participating</li>
                <li>You can skip optional questions</li>
                <li>Your decision to participate or not will not affect any services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Informed Consent
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                By submitting the survey, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>You have read and understood this privacy policy</li>
                <li>You understand the survey is anonymous</li>
                <li>You consent to your anonymous responses being used for research and education</li>
                <li>You understand the data will be displayed publicly in aggregate form</li>
                <li>You are at least 18 years old</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Limitations
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                Please be aware of the following limitations:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>This survey is for research purposes only</li>
                <li>It is not a substitute for professional mental health care</li>
                <li>Results should not be used for medical diagnosis</li>
                <li>We cannot provide individual counseling or therapy</li>
                <li>If you&apos;re in crisis, please contact emergency services immediately</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Ethical Standards
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                This project adheres to ethical research standards:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>Respect for persons and autonomy</li>
                <li>Beneficence - maximizing benefits and minimizing harm</li>
                <li>Justice - fair distribution of benefits and burdens</li>
                <li>Transparency in data collection and use</li>
                <li>Commitment to reducing stigma and improving mental health access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#f0e6ff'}}>
                Contact & Questions
              </h2>
              <p className="mb-4" style={{color: '#c9b5e6'}}>
                While we cannot identify individual responses, if you have questions about:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{color: '#c9b5e6'}}>
                <li>How your data is being used</li>
                <li>The ethical standards of this research</li>
                <li>Privacy concerns</li>
                <li>Technical issues with the survey</li>
              </ul>
              <p className="mt-4" style={{color: '#c9b5e6'}}>
                Please understand that due to the anonymous nature of this survey, we cannot 
                delete or modify individual responses after submission.
              </p>
            </section>

            <div className="border-l-4 p-4 mt-8" style={{backgroundColor: 'rgba(130, 77, 191, 0.1)', borderColor: '#824dbf'}}>
              <p className="font-semibold mb-2" style={{color: '#f0e6ff'}}>
                Important Notice
              </p>
              <p style={{color: '#c9b5e6'}}>
                If you are experiencing a mental health crisis, please contact emergency services 
                (911) or the National Suicide Prevention Lifeline at 988 immediately. This survey 
                is not designed to provide crisis intervention or immediate mental health support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
