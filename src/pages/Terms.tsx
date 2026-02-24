export function Terms() {
  return (
    <div className="min-h-screen pt-20 bg-dark text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          By engaging Kypex-Tech, you agree to these terms. Our engagements are governed by mutually executed statements
          of work or master service agreements. Until executed, all proposals are non-binding.
        </p>
        <h2 className="text-xl font-semibold text-white mt-6">Use of Site</h2>
        <p>Do not misuse the site or attempt to access it using methods other than the interface we provide.</p>
        <h2 className="text-xl font-semibold text-white mt-6">Engagements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Scope, pricing, and timelines are defined in the SOW/MSA.</li>
          <li>Client will provide timely access to information and stakeholders.</li>
          <li>Intellectual property ownership is defined per engagement; absent other terms, work-for-hire applies after full payment.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-6">Confidentiality</h2>
        <p>Both parties will protect confidential information and use it solely for the engagement.</p>
        <h2 className="text-xl font-semibold text-white mt-6">Liability</h2>
        <p>To the maximum extent permitted by law, indirect or consequential damages are excluded.</p>
        <h2 className="text-xl font-semibold text-white mt-6">Governing Law</h2>
        <p>Unless otherwise agreed, engagements are governed by the laws of South Africa.</p>
        <p className="text-sm text-gray-400">Questions? Email legal@kypextech.co.za.</p>
      </div>
    </div>
  );
}
