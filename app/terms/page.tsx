import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | MedReception AI',
  description: 'Terms of Service for MedReception AI services.',
}

export default function TermsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-cormorant text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90">
            Effective Date: January 1, 2025
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Please read these Terms of Service carefully before using MedReception AI services. By accessing or using our website and services, you agree to be bound by these terms.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              By accessing getmedreception.com and engaging with our services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              2. Description of Services
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              MedReception AI provides medical reception and administrative support services to healthcare practices. Our website describes available services, pricing, and features. Information provided on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              3. Not Emergency Care
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              MedReception AI services are not intended for emergency medical situations. If you are experiencing a medical emergency, immediately call 911 or your local emergency services. Our services do not replace emergency medical care or urgent clinical assessment.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              4. No Insurance Billing or Medical Advice
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              MedReception AI does not provide medical advice, diagnosis, treatment, or insurance billing services directly to patients. We provide administrative support services to healthcare providers. Any medical decisions remain the sole responsibility of licensed healthcare professionals and their patients.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              5. HIPAA Compliance
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              MedReception AI is committed to maintaining the privacy and security of protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and applicable regulations. We implement appropriate administrative, physical, and technical safeguards to protect PHI. Business Associate Agreements (BAAs) are executed with healthcare providers as required by law.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              To the fullest extent permitted by law, MedReception AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount paid by you for services in the twelve months preceding the claim.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              7. Modifications to Terms
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              MedReception AI reserves the right to modify these Terms of Service at any time. We will notify users of material changes via email or website notice. Continued use of our services after modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              8. Governing Law
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States and the state in which MedReception AI operates, without regard to conflict of law principles. Any disputes arising under these terms shall be resolved in the appropriate courts of that jurisdiction.
            </p>

            <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
              9. Contact Information
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-8">
              <p className="text-[var(--color-ink)] font-semibold mb-2">MedReception AI</p>
              <p className="text-[var(--color-muted)]">Contact us: https://www.medreception.ai/book</p>
              <p className="text-[var(--color-muted)]">Website: getmedreception.com</p>
            </div>

            <p className="text-sm text-[var(--color-muted)] mt-12 pt-8 border-t border-[var(--color-border)]">
              Last Updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}