import React from "react";

/**
 * Privacy Policy — configurable page component
 * -------------------------------------------------------------
 * Fill in the constants below with your organization's details.
 * This template is written for an Android app whose marketing
 * and analytics stack includes:
 *   - Vero Analytics      (behavioral/event tracking, in-app + web)
 *   - Customer.io          (lifecycle marketing, email/push/SMS)
 *   - Google Analytics     (usage analytics, Android Firebase SDK)
 *   - Smartlead.ai          (outbound email sequencing to leads/customers)
 *
 * This is a starting template, not legal advice. Have counsel
 * review before publishing, especially the GDPR/CCPA and
 * children's-privacy sections and your Play Store Data Safety form.
 */

const ORG = {
  name: "Acme Labs, Inc.",
  appName: "Acme",
  website: "https://www.acme.example",
  supportEmail: "privacy@acme.example",
  address: "123 Market Street, Suite 400, San Francisco, CA 94103, USA",
  effectiveDate: "July 24, 2026",
  dpoEmail: "dpo@acme.example", // omit/blank if not applicable
};

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-slate-200 py-10">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

const TOC: { id: string; title: string }[] = [
  { id: "overview", title: "1. Overview" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use-information", title: "3. How We Use Your Information" },
  { id: "third-party-services", title: "4. Third-Party Services We Use" },
  { id: "android-permissions", title: "5. Android Permissions" },
  { id: "sharing-and-disclosure", title: "6. Sharing and Disclosure" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "your-rights", title: "8. Your Rights and Choices" },
  { id: "security", title: "9. Security" },
  { id: "childrens-privacy", title: "10. Children's Privacy" },
  { id: "international-transfers", title: "11. International Data Transfers" },
  { id: "changes", title: "12. Changes to This Policy" },
  { id: "contact", title: "13. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {ORG.appName} — Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Effective date: {ORG.effectiveDate}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-[200px_1fr]">
        {/* Table of contents */}
        <nav aria-label="Table of contents" className="hidden md:block">
          <div className="sticky top-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              On this page
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-500 hover:text-slate-900"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Body */}
        <main>
          <p className="text-slate-700 leading-relaxed">
            {ORG.name} ("{ORG.appName}", "we", "us", or "our") built the{" "}
            {ORG.appName} Android application (the "App"). This policy
            explains what information we collect, why we collect it, and how
            it is used, shared, and protected when you install or use the
            App, visit {ORG.website}, or otherwise interact with us.
          </p>

          <Section id="overview" title="1. Overview">
            <p>
              We collect information to operate the App, provide customer
              support, communicate with you about your account and our
              services, and understand how the App is used so we can improve
              it. We use a small set of trusted third-party providers to do
              this — Vero Analytics, Customer.io, Google Analytics, and
              Smartlead.ai — each described in Section 4 below. We do not
              sell your personal information.
            </p>
          </Section>

          <Section
            id="information-we-collect"
            title="2. Information We Collect"
          >
            <p>
              <strong>Account and profile information.</strong> Name, email
              address, phone number (if provided), company name, and any
              other details you submit when you register or update your
              profile.
            </p>
            <p>
              <strong>Usage and device information.</strong> App interactions
              (screens viewed, features used, buttons tapped), session
              length, timestamps, device model, operating system version,
              language, IP address, and unique device or advertising
              identifiers.
            </p>
            <p>
              <strong>Communications data.</strong> Records of emails,
              in-app messages, or push notifications we send you, along with
              engagement signals such as opens, clicks, and unsubscribes.
            </p>
            <p>
              <strong>Customer and lead data (B2B context).</strong> If our
              customers use the App to manage their own contacts or leads,
              we may process names, business email addresses, job titles,
              and outreach activity on their behalf.
            </p>
            <p>
              <strong>Support data.</strong> Information you share with us
              when you contact support, including message content and
              attachments.
            </p>
          </Section>

          <Section
            id="how-we-use-information"
            title="3. How We Use Your Information"
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide, maintain, and secure the App</li>
              <li>Personalize your experience and remember preferences</li>
              <li>
                Send transactional messages (account, billing, security
                notices)
              </li>
              <li>
                Send marketing communications, product updates, and
                onboarding sequences, where you have consented or as
                otherwise permitted by law
              </li>
              <li>
                Measure feature adoption, retention, and performance to guide
                product decisions
              </li>
              <li>Detect, investigate, and prevent fraud or misuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section id="third-party-services" title="4. Third-Party Services We Use">
            <p>
              We rely on the following processors to deliver core
              functionality. Each provider only receives the data needed to
              perform its function, under a data-processing agreement.
            </p>

            <div className="mt-4 space-y-6">
              <div className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">
                  Vero Analytics
                </h3>
                <p className="mt-1 text-sm">
                  Used for in-app event tracking and behavioral analytics
                  (e.g., feature usage, funnel completion). Data shared
                  typically includes a device/user identifier, event names
                  and properties, and timestamps. This helps us understand
                  how the App is used and where the experience can be
                  improved.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">Customer.io</h3>
                <p className="mt-1 text-sm">
                  Used for lifecycle marketing and transactional messaging —
                  email, push notifications, and/or SMS. Data shared
                  typically includes contact details (email, phone),
                  behavioral event data, and message engagement history, used
                  to trigger and personalize messages such as onboarding
                  flows, product updates, and re-engagement campaigns.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">
                  Google Analytics (Firebase)
                </h3>
                <p className="mt-1 text-sm">
                  Used for App usage analytics via the Firebase SDK for
                  Android. Data shared typically includes device information,
                  advertising identifiers, app interactions, and
                  approximate/coarse location derived from IP address. You
                  can review Google's own privacy practices at{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="underline"
                  >
                    policies.google.com/privacy
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">
                  Smartlead.ai
                </h3>
                <p className="mt-1 text-sm">
                  Used for outbound email sequencing to prospective and
                  existing customers as part of our sales and marketing
                  outreach. Data shared typically includes business contact
                  details (name, email, company) and email engagement data
                  (opens, replies, bounces) needed to run and measure
                  outreach campaigns.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              We periodically review this list as our stack evolves. The
              current version of this policy always reflects the providers
              in active use.
            </p>
          </Section>

          <Section id="android-permissions" title="5. Android Permissions">
            <p>
              The App may request the following Android permissions. We
              request only what is needed for the related feature to work,
              and each is optional unless noted.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Internet / Network state</strong> — required to
                sync data and load content.
              </li>
              <li>
                <strong>Notifications (POST_NOTIFICATIONS)</strong> — to
                deliver push messages via Customer.io; you can disable this
                in system settings at any time.
              </li>
              <li>
                <strong>Camera / Photos</strong> — only if you use features
                such as profile photo upload or document scanning.
              </li>
              <li>
                <strong>Location (coarse)</strong> — only if used for
                region-based content; the App does not request precise
                background location.
              </li>
              <li>
                <strong>Advertising ID</strong> — used by Google Analytics
                for aggregated, non-precise usage measurement.
              </li>
            </ul>
            <p>
              A complete, current list of requested permissions is always
              visible on our Google Play Store listing and in the App's
              system settings page on your device.
            </p>
          </Section>

          <Section
            id="sharing-and-disclosure"
            title="6. Sharing and Disclosure"
          >
            <p>We share information only in the following circumstances:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                With the service providers named in Section 4, to operate
                and improve the App
              </li>
              <li>
                With professional advisors (legal, accounting) where
                necessary
              </li>
              <li>
                In connection with a merger, acquisition, or asset sale,
                with continuity of protection under this policy
              </li>
              <li>
                When required by law, regulation, legal process, or
                enforceable governmental request
              </li>
              <li>With your direction or consent</li>
            </ul>
            <p>We do not sell personal information to third parties.</p>
          </Section>

          <Section id="data-retention" title="7. Data Retention">
            <p>
              We retain personal information for as long as your account is
              active or as needed to provide the App, comply with legal
              obligations, resolve disputes, and enforce agreements.
              Analytics and marketing engagement data is generally retained
              for up to 24 months from the last activity, after which it is
              deleted or aggregated so it no longer identifies you. You can
              request earlier deletion — see Section 8.
            </p>
          </Section>

          <Section id="your-rights" title="8. Your Rights and Choices">
            <p>
              Depending on where you live, you may have rights to access,
              correct, export, or delete your personal information, and to
              object to or restrict certain processing, including marketing.
              This applies, for example, to residents of the EU/EEA and UK
              under the GDPR, and to California residents under the CCPA/CPRA.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Marketing opt-out:</strong> use the unsubscribe link
                in any marketing email, or adjust notification settings
                in-app; transactional messages will continue as needed to
                operate your account.
              </li>
              <li>
                <strong>Access / deletion requests:</strong> email{" "}
                {ORG.supportEmail}; we will verify your identity and respond
                within the timeframe required by applicable law.
              </li>
              <li>
                <strong>Do Not Track / Global Privacy Control:</strong> where
                legally required, we honor recognized opt-out signals.
              </li>
            </ul>
          </Section>

          <Section id="security" title="9. Security">
            <p>
              We use industry-standard safeguards — encryption in transit,
              access controls, and regular review of our vendor
              relationships — to protect your information. No system is
              perfectly secure; if we become aware of an incident affecting
              your data, we will notify affected users and relevant
              authorities as required by law, and share the steps we're
              taking to resolve it.
            </p>
          </Section>

          <Section id="childrens-privacy" title="10. Children's Privacy">
            <p>
              The App is not directed to children under 13 (or the minimum
              age required by your local law), and we do not knowingly
              collect personal information from them. If you believe a child
              has provided us with personal information, contact us at{" "}
              {ORG.supportEmail} and we will delete it promptly.
            </p>
          </Section>

          <Section
            id="international-transfers"
            title="11. International Data Transfers"
          >
            <p>
              Our service providers may process data in countries other than
              your own, including the United States. Where required, we rely
              on recognized transfer mechanisms such as Standard Contractual
              Clauses to protect data moved across borders.
            </p>
          </Section>

          <Section id="changes" title="12. Changes to This Policy">
            <p>
              We may update this policy as our App, stack, or legal
              obligations evolve. Material changes will be highlighted
              in-app or via email ahead of taking effect. The "Effective
              date" above always reflects the latest version.
            </p>
          </Section>

          <Section id="contact" title="13. Contact Us">
            <p>
              Questions about this policy or your data can be sent to:
            </p>
            <p>
              {ORG.name}
              <br />
              {ORG.address}
              <br />
              Email:{" "}
              <a href={`mailto:${ORG.supportEmail}`} className="underline">
                {ORG.supportEmail}
              </a>
              {ORG.dpoEmail && (
                <>
                  <br />
                  Data Protection contact:{" "}
                  <a href={`mailto:${ORG.dpoEmail}`} className="underline">
                    {ORG.dpoEmail}
                  </a>
                </>
              )}
            </p>
          </Section>

          <p className="pt-8 text-xs text-slate-400">
            This template is provided as a starting point and does not
            constitute legal advice. Confirm final language with counsel
            before publishing, and align the Google Play Data Safety form
            with the data practices described here.
          </p>
        </main>
      </div>
    </div>
  );
}