import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Terms of Service | MedReception AI',
  description: 'SMS messaging terms and conditions for MedReception AI services.',
}

export default function SMSTermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-cormorant text-5xl font-bold text-white mb-6">
            SMS Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Application-to-Person (A2P) Messaging Terms & Conditions
          </p>
          
          <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-2xl p-6 max-w-xl mx-auto mt-8 text-[var(--color-ink)]">
            <p className="font-semibold mb-2">Quick Reference</p>
            <p className="text-sm leading-relaxed">
              Text <strong>STOP</strong> to unsubscribe | Text <strong>HELP</strong> for help | Message and data rates may apply | Message frequency varies
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Program Description
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                MedReception AI offers SMS messaging services to provide appointment reminders, service updates, and relevant healthcare administration information to subscribed users.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Opt-In and Consent
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                By providing your mobile phone number and opting in to receive SMS messages from MedReception AI, you expressly consent to receive automated text messages at the phone number you provided. Consent is not a condition of purchase.
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                You may opt-in through web forms, during onboarding, or by texting a keyword to our designated short code or phone number.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Message Frequency
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                Message frequency varies based on your engagement and service usage. You may receive up to 4 messages per month. Additional messages may be sent during periods of high activity or critical updates.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Message and Data Rates
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                Message and data rates may apply based on your mobile carrier plan. MedReception AI does not charge for SMS messages, but your carrier's standard messaging rates will apply. Please contact your mobile carrier for pricing details.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                How to Opt-Out
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                You may opt-out of receiving SMS messages at any time by replying <strong>STOP</strong>, <strong>END</strong>, <strong>CANCEL</strong>, <strong>UNSUBSCRIBE</strong>, or <strong>QUIT</strong> to any message you receive from us.
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                After opting out, you will receive one final confirmation message. You will not receive further messages unless you re-opt-in.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Help and Support
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                For assistance, reply <strong>HELP</strong> to any message or contact us at:
              </p>
              <ul className="list-disc list-inside text-[var(--color-ink)] ml-4 space-y-2">
                <li>Contact us: https://www.medreception.ai/book</li>
                <li>Website: getmedreception.com/contact</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Supported Carriers
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                Our SMS services are available on the following carriers:
              </p>
              <ul className="list-disc list-inside text-[var(--color-ink)] ml-4 space-y-2">
                <li>AT&T</li>
                <li>Verizon Wireless</li>
                <li>T-Mobile</li>
                <li>Sprint</li>
                <li>Boost Mobile</li>
                <li>U.S. Cellular</li>
                <li>And other major carriers</li>
              </ul>
              <p className="text-[var(--color-ink)] leading-relaxed mt-4">
                Carriers are not liable for delayed or undelivered messages.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Privacy and Data Use
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                We respect your privacy. Your mobile phone number and related information will be used in accordance with our Privacy Policy. We do not sell or share your phone number with third parties for marketing purposes.
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                For full details, please review our Privacy Policy at getmedreception.com/privacy.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Terms Updates
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                MedReception AI reserves the right to modify these SMS Terms at any time. Changes will be posted on this page and will become effective immediately. Continued participation in the SMS program after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="mb-12 animate-fade-up">
              <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
                Contact Information
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                For questions about these SMS Terms, please contact:
              </p>
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl p-6">
                <p className="text-[var(--color-ink)] font-semibold mb-2">MedReception AI</p>
                <p className="text-[var(--color-ink)] mb-1">Contact us: https://www.medreception.ai/book</p>
                <p className="text-[var(--color-ink)]">Website: getmedreception.com</p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-muted)]">
                Last Updated: January 2025
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}