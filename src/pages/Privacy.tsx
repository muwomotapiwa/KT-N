function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-2 text-gray-300 text-base">{children}</div>
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-white mt-2">{children}</h3>;
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

export function Privacy() {
  const lastUpdated = '24 February 2026';

  return (
    <div className="min-h-screen pt-20 bg-dark text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last Updated: {lastUpdated}</p>
        <p>
          Kypex-Tech ("Company", "we", "our", or "us") is a remote-first, cloud-native technology organization. We are
          committed to protecting personal information in accordance with applicable data protection laws, including the
          Protection of Personal Information Act (POPIA) and, where applicable, the General Data Protection Regulation
          (GDPR). We collect only what is necessary to deliver services, respond to inquiries, maintain security, and
          improve our offerings. We do not sell personal data.
        </p>

        <Section title="1. Data Controller">
          Kypex-Tech acts as a data controller for personal data collected through our website and during
          pre-contractual engagements. For client service engagements, roles (controller/processor) are defined within
          the applicable agreement.
        </Section>

        <Section title="2. Information We Collect">
          <SubTitle>Information You Provide</SubTitle>
          <List
            items={[
              'Full name',
              'Email address',
              'Phone number',
              'Company name and role',
              'Project details shared through forms, consultations, or correspondence',
            ]}
          />
          <SubTitle>Technical and Usage Data</SubTitle>
          <List items={['IP address', 'Device and browser information', 'Website interaction analytics', 'Cookies and similar tracking technologies']} />
          <p>We limit collection to what is reasonably necessary for legitimate business purposes.</p>
        </Section>

        <Section title="3. Legal Basis for Processing">
          <List
            items={[
              'Consent (for example, newsletter subscriptions)',
              'Contractual necessity (service delivery)',
              'Legal obligations',
              'Legitimate business interests (security, analytics, service improvement)',
            ]}
          />
        </Section>

        <Section title="4. How We Use Personal Data">
          <List
            items={[
              'Respond to inquiries',
              'Deliver requested services',
              'Manage client relationships',
              'Improve website functionality and security',
              'Monitor and prevent fraud or misuse',
              'Comply with legal and regulatory requirements',
            ]}
          />
        </Section>

        <Section title="5. Data Sharing and Third Parties">
          <p>We may share information with trusted service providers such as:</p>
          <List
            items={[
              'Cloud hosting platforms',
              'Analytics providers',
              'Communication and collaboration tools',
              'Payment processors (where applicable)',
            ]}
          />
          <p>All third-party providers are contractually required to maintain appropriate confidentiality and security safeguards.</p>
          <p>We do not sell, rent, or trade personal data.</p>
        </Section>

        <Section title="6. International Data Transfers">
          As a remote-first organization, data may be processed in multiple jurisdictions. Where cross-border transfers
          occur, appropriate safeguards are implemented in accordance with applicable data protection laws.
        </Section>

        <Section title="7. Data Retention">
          We retain personal data only for as long as necessary to fulfill service obligations, comply with legal
          requirements, resolve disputes, and enforce agreements. When no longer required, data is securely deleted or
          anonymized.
        </Section>

        <Section title="8. Security Measures">
          <List
            items={[
              'Encryption in transit (TLS)',
              'Role-based access controls',
              'Least-privilege principles',
              'Multi-factor authentication',
              'Continuous monitoring practices',
            ]}
          />
          <p>While no system is completely secure, we take commercially reasonable steps to protect personal data.</p>
        </Section>

        <Section title="9. Cookies and Tracking">
          Our website may use cookies and similar technologies to improve user experience, analyze traffic, and enhance
          security monitoring. You may control cookie preferences through your browser settings.
        </Section>

        <Section title="10. Your Rights">
          <p>Depending on jurisdiction, you may have the right to:</p>
          <List
            items={[
              'Request access to your personal data',
              'Request correction of inaccurate data',
              'Request deletion of your data',
              'Object to or restrict processing',
              'Withdraw consent (where applicable)',
              'Lodge a complaint with a supervisory authority',
            ]}
          />
          <p>
            To exercise these rights, contact: <a className="text-primary" href="mailto:privacy@kypextech.co.za">privacy@kypextech.co.za</a>
          </p>
        </Section>

        <Section title="11. Children's Privacy">
          Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal
          data from minors.
        </Section>

        <Section title="12. Policy Updates">
          We may update this Privacy Policy periodically. Continued use of our services after updates constitutes
          acceptance of the revised policy.
        </Section>
      </div>
    </div>
  );
}
