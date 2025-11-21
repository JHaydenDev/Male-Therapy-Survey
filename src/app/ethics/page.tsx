export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ethics & Privacy
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy First
              </h2>
              <p className="text-gray-700 mb-4">
                Your privacy is our top priority. This survey is completely anonymous, and 
                we take extensive measures to protect your identity:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>No names, email addresses, or identifying information is collected</li>
                <li>No IP addresses or device fingerprints are stored</li>
                <li>No cookies or tracking mechanisms are used</li>
                <li>All data is aggregated and cannot be traced back to individuals</li>
                <li>You can close the browser at any time without submitting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Collection & Use
              </h2>
              <p className="text-gray-700 mb-4">
                We collect the following information through the survey:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Age group (not exact age)</li>
                <li>Whether you have attended therapy</li>
                <li>Reasons for seeking or not seeking therapy</li>
                <li>Perceived stigma levels</li>
                <li>Barriers to accessing mental health care</li>
                <li>Preferred therapy formats</li>
                <li>Optional comments and experiences</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This data is used exclusively for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Generating aggregate statistics and insights</li>
                <li>Understanding trends in men&apos;s mental health</li>
                <li>Identifying common barriers and solutions</li>
                <li>Public education about mental health stigma</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                Your survey responses are protected through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Secure HTTPS encryption for all data transmission</li>
                <li>MongoDB database with secure authentication</li>
                <li>Environment variables for sensitive credentials</li>
                <li>Regular security updates and monitoring</li>
                <li>No sharing of raw data with third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Voluntary Participation
              </h2>
              <p className="text-gray-700 mb-4">
                Participation in this survey is completely voluntary:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You can choose not to answer any question</li>
                <li>You can stop the survey at any time</li>
                <li>There is no penalty for not participating</li>
                <li>You can skip optional questions</li>
                <li>Your decision to participate or not will not affect any services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Informed Consent
              </h2>
              <p className="text-gray-700 mb-4">
                By submitting the survey, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You have read and understood this privacy policy</li>
                <li>You understand the survey is anonymous</li>
                <li>You consent to your anonymous responses being used for research and education</li>
                <li>You understand the data will be displayed publicly in aggregate form</li>
                <li>You are at least 18 years old</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Limitations
              </h2>
              <p className="text-gray-700 mb-4">
                Please be aware of the following limitations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>This survey is for research purposes only</li>
                <li>It is not a substitute for professional mental health care</li>
                <li>Results should not be used for medical diagnosis</li>
                <li>We cannot provide individual counseling or therapy</li>
                <li>If you&apos;re in crisis, please contact emergency services immediately</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ethical Standards
              </h2>
              <p className="text-gray-700 mb-4">
                This project adheres to ethical research standards:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Respect for persons and autonomy</li>
                <li>Beneficence - maximizing benefits and minimizing harm</li>
                <li>Justice - fair distribution of benefits and burdens</li>
                <li>Transparency in data collection and use</li>
                <li>Commitment to reducing stigma and improving mental health access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact & Questions
              </h2>
              <p className="text-gray-700 mb-4">
                While we cannot identify individual responses, if you have questions about:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>How your data is being used</li>
                <li>The ethical standards of this research</li>
                <li>Privacy concerns</li>
                <li>Technical issues with the survey</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Please understand that due to the anonymous nature of this survey, we cannot 
                delete or modify individual responses after submission.
              </p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-8">
              <p className="text-blue-900 font-semibold mb-2">
                Important Notice
              </p>
              <p className="text-blue-800">
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
