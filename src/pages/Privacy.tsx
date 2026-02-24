export function Privacy() {
  return (
    <div className="min-h-screen pt-20 bg-dark text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p>
          Kypex-Tech is a remote-first, cloud-native organization. We collect only the information necessary to deliver
          services, respond to inquiries, and improve our products. We do not sell personal data.
        </p>
        <h2 className="text-xl font-semibold text-white mt-6">What We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Contact details you provide (name, email, phone, company).</li>
          <li>Project context shared via forms or consultations.</li>
          <li>Usage and analytics data from our website.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-6">How We Use Data</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To respond to inquiries and deliver requested services.</li>
          <li>To improve site performance and security.</li>
          <li>To meet legal and compliance obligations (e.g., POPIA, GDPR).</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-6">Security</h2>
        <p>
          We employ encryption in transit, access controls, and least-privilege principles across our systems. Sensitive
          submissions are routed through priority review channels.
        </p>
        <h2 className="text-xl font-semibold text-white mt-6">Your Rights</h2>
        <p>To request access, correction, or deletion of your data, contact privacy@kypextech.co.za.</p>
      </div>
    </div>
  );
}
