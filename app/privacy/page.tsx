import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MedReception AI',
  description: 'Privacy Policy for MedReception AI - How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-[var(--color-light)]">Effective Date: January 1, 2025</p>
        </div>
      </div>

      <div className="bg-white max-w-4xl mx-auto px-6 py-16 my-12 rounded-lg shadow-sm">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
            At MedReception AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Who We Are</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            MedReception AI provides virtual receptionist services for medical practices. We help healthcare providers manage appointment scheduling, patient inquiries, and administrative communications. Our website, getmedreception.com, serves as an informational resource and contact point for prospective clients.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Information We Collect</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            When you contact us through our website or inquiry forms, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-6 space-y-2">
            <li>Name and contact information (email address, phone number)</li>
            <li>Practice name and type of medical services</li>
            <li>Service interest and inquiry details</li>
            <li>Communication preferences</li>
          </ul>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6 font-medium">
            We do NOT collect Protected Health Information (PHI) or patient medical records through our website or initial inquiry process.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">SMS Messaging</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            If you provide your phone number and consent to receive text messages, we may send you SMS communications regarding:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Service information and updates</li>
            <li>Appointment scheduling and confirmations</li>
            <li>Important account notifications</li>
          </ul>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            By providing your phone number and opting in, you consent to receive automated text messages. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            For complete SMS messaging terms, please see our <a href="/sms-terms" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors underline">SMS Terms and Conditions</a>.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">How We Use Your Information</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-6 space-y-2">
            <li>Respond to your inquiries and provide information about our services</li>
            <li>Process service requests and maintain client relationships</li>
            <li>Send communications about our services (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Data Security</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">HIPAA Notice</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            MedReception AI provides services to healthcare providers and may handle Protected Health Information (PHI) in the course of delivering virtual receptionist services. However, PHI is handled exclusively through secure, HIPAA-compliant systems and patient portals—never through our public website or general inquiry forms. When we act as a Business Associate under HIPAA, we maintain separate Business Associate Agreements with covered entities and implement all required safeguards for PHI handling, storage, and transmission.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Third-Party Services</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            We may use third-party service providers to help us operate our website and deliver our services. These providers are contractually obligated to protect your information and use it only for the purposes we specify. We do not sell your personal information to third parties.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Cookies and Tracking</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Your Rights</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-[var(--color-muted)] leading-relaxed mb-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal obligations)</li>
            <li>Opt out of marketing communications</li>
            <li>Object to or restrict certain processing of your information</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Children's Privacy</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Changes to This Privacy Policy</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">Contact Us</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-[var(--color-cream)] p-6 rounded-lg mb-6">
            <p className="text-[var(--color-ink)] font-medium mb-2">MedReception AI</p>
            <p className="text-[var(--color-muted)]">Email: privacy@getmedreception.com</p>
            <p className="text-[var(--color-muted)]">Website: getmedreception.com</p>
          </div>
        </div>
      </div>

      <footer className="bg-[var(--color-dark)] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/privacy" className="text-[var(--color-light)] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[var(--color-light)] hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/sms-terms" className="text-[var(--color-light)] hover:text-white transition-colors">
              SMS Terms
            </a>
          </div>
          <p className="text-[var(--color-muted)] text-sm">
            © 2025 MedReception AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}