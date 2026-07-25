import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light leading-tight">
            Built by a Surgeon Who Understands Your Practice
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            A physician-founded solution designed for the real challenges of medical practice management
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className="lg:col-span-3 lg:pr-12">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                MedReception AI was founded by Paul Toomey, MD, a practicing surgeon who experienced firsthand the challenges of managing patient communications while delivering excellent clinical care. After seeing too many patients fall through the cracks due to missed calls and scheduling bottlenecks, he set out to build a solution that would work seamlessly within the real constraints of medical practice.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Our AI receptionist is designed with deep understanding of clinical workflow, HIPAA compliance requirements, and the nuances of patient communication. Unlike generic chatbots or overseas call centers, MedReception AI speaks the language of healthcare and integrates naturally with your existing systems. The result is a solution that feels like an extension of your practice, not a corporate workaround.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                We believe every medical practice deserves technology that works as hard as its physicians. MedReception AI handles routine communications with precision, allowing your clinical team to focus on what matters most: delivering outstanding patient care.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-6">
                  Credentials & Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Physician-Founded & Operated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">HIPAA-Compliant Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Built for Medical Practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Real Clinical Workflow Understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Enterprise-Grade Security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">24/7 Monitoring & Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-primary)] mb-16">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Clinical Accuracy First
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Built with medical protocols and patient safety as the foundation. Every feature is designed to maintain the clinical standards you demand while improving operational efficiency.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Seamless Integration
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Works with your existing practice management systems and workflows. No forced software changes or staff retraining—just plug-and-play efficiency that adapts to how you work.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Patient-Centered Experience
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Provides the human touch patients expect with the reliability they deserve. Our AI communicates naturally, handles sensitive information with care, and never leaves anyone waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a conversation with Dr. Toomey to discuss how MedReception AI can transform your practice communications.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}