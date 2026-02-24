function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-2 text-gray-300 text-base">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Terms() {
  const lastUpdated = '24 February 2026';

  return (
    <div className="min-h-screen pt-20 bg-dark text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last Updated: {lastUpdated}</p>
        <p>
          By accessing or engaging Kypex-Tech ("Company", "we", "our", or "us"), you agree to these Terms of Service.
          All service engagements are governed by a mutually executed Master Services Agreement (MSA), Statement of Work
          (SOW), or other written agreement. Until executed, proposals, estimates, and discussions are non-binding.
        </p>

        <Section title="1. Use of Website">
          <List
            items={[
              'Do not misuse or attempt unauthorized access.',
              'Do not interfere with security features.',
              'Do not introduce malicious code.',
              'Do not scrape or extract data without permission.',
            ]}
          />
          <p>We reserve the right to restrict access for violations.</p>
        </Section>

        <Section title="2. Engagement Terms">
          <p>Scope, pricing, timelines, and deliverables are defined in the applicable agreement.</p>
          <List
            items={[
              'Provide timely access to necessary information.',
              'Designate decision-makers.',
              'Fulfill payment obligations.',
              'Cooperate in good faith throughout the engagement.',
            ]}
          />
          <p>Delays caused by client inaction may result in revised timelines.</p>
        </Section>

        <Section title="3. Payment Terms">
          <p>Invoices are payable according to the terms outlined in the executed agreement. Failure to pay may result in suspension or termination of services.</p>
        </Section>

        <Section title="4. Intellectual Property">
          <List
            items={[
              'Custom deliverables become the property of the client upon full payment, unless otherwise stated.',
              'Pre-existing tools, methodologies, frameworks, and proprietary assets remain the property of Kypex-Tech.',
              'Open-source components remain subject to their respective licenses.',
            ]}
          />
        </Section>

        <Section title="5. Confidentiality">
          <p>Both parties agree to protect confidential information and use it solely for purposes of the engagement. Confidentiality obligations survive termination.</p>
        </Section>

        <Section title="6. Warranties and Disclaimers">
          <p>Services are provided in accordance with the governing agreement. Except as expressly stated, services are provided "as is" without implied warranties of merchantability or fitness for a particular purpose.</p>
        </Section>

        <Section title="7. Limitation of Liability">
          <List
            items={[
              'Indirect, incidental, or consequential damages are excluded to the maximum extent permitted by law.',
              'Aggregate liability shall not exceed the total fees paid in the twelve (12) months preceding the claim under the applicable agreement.',
            ]}
          />
        </Section>

        <Section title="8. Force Majeure">
          <p>
            Neither party shall be liable for delays or failure to perform due to events beyond reasonable control,
            including natural disasters, infrastructure failures, government actions, or force majeure events.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>Termination rights and procedures are defined in the governing agreement. Outstanding fees remain payable upon termination.</p>
        </Section>

        <Section title="10. Governing Law">
          <p>Unless otherwise agreed in writing, these Terms are governed by the laws of South Africa.</p>
        </Section>

        <Section title="11. Dispute Resolution">
          <p>Parties agree to attempt good-faith resolution before initiating formal legal proceedings.</p>
        </Section>

        <Section title="12. Modifications">
          <p>We may update these Terms from time to time. Continued use of services constitutes acceptance of revised Terms.</p>
        </Section>

        <Section title="13. Contact">
          <p>
            Legal inquiries: <a className="text-primary" href="mailto:legal@kypextech.co.za">legal@kypextech.co.za</a>
          </p>
        </Section>
      </div>
    </div>
  );
}
