import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Los Angeles, CA | Get MedReception',
  description: 'Expert psychiatric care serving Los Angeles and surrounding CA communities. Convenient access to quality Other Medical services with telehealth options available.',
  openGraph: {
    title: 'Other Medical Near Los Angeles, CA | Get MedReception',
    description: 'Expert psychiatric care serving Los Angeles and surrounding CA communities.',
    url: 'https://getmedreception.com/locations/los-angeles-ca',
  },
}

export default function LosAngelesPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all cursor-pointer">Locations</span>
            <span className="mx-2">›</span>
            <span>Los Angeles, CA</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight animate-fade-up">
            Other Medical Near Los Angeles, CA
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl animate-fade-up leading-relaxed">
            Serving patients from Los Angeles and surrounding CA communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Schedule in Los Angeles
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Serving the Los Angeles Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12 animate-fade-up">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Get MedReception proudly serves patients throughout Los Angeles and the greater Southern California region. Whether you're commuting from downtown Los Angeles, the Westside, San Fernando Valley, or surrounding neighborhoods like Santa Monica, Beverly Hills, Pasadena, or Long Beach, our practice offers convenient access to comprehensive psychiatric care. Most Los Angeles residents can reach us within 20-45 minutes depending on traffic and your specific location.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Patients from Los Angeles choose Get MedReception because we combine the personalized attention of a dedicated practice with the expertise and resources typically found only at major medical centers. Unlike crowded local clinics with long wait times, we prioritize accessibility and continuity of care. For those who prefer to avoid the commute altogether, we offer comprehensive telehealth services that bring expert psychiatric care directly to your home or office anywhere in Los Angeles.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Los Angeles, CA and surrounding communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services Available to Los Angeles Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive diagnostic assessments to understand your mental health needs and develop personalized treatment plans tailored to Los Angeles patients.
              </p>
              <a href="/services/evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication services with ongoing monitoring and adjustment to ensure optimal outcomes for our Los Angeles area patients.
              </p>
              <a href="/services/medication" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Telehealth Appointments
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual visits from anywhere in Los Angeles. Receive the same quality care without the commute through secure video consultations.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-6 text-center">
            For Los Angeles residents who prefer the convenience of virtual care, Get MedReception offers comprehensive telehealth services. Receive the same expert psychiatric care from the comfort of your home or office without battling LA traffic.
          </p>
          <p className="text-[var(--color-ink)] leading-relaxed text-center">
            Our telehealth appointments are covered by most major insurance plans serving the Los Angeles area. Virtual visits are ideal for medication management follow-ups, routine consultations, and ongoing therapy sessions. Schedule your telehealth appointment today and experience quality psychiatric care on your terms.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is Get MedReception from Los Angeles?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently accessible from anywhere in Los Angeles, typically within 20-45 minutes depending on your specific location and traffic conditions. We serve patients from downtown LA, the Westside, San Fernando Valley, South Bay, and all surrounding communities. For those who prefer not to travel, we also offer telehealth appointments.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What's the best way to get directions from Los Angeles?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                When you schedule your appointment, we'll provide detailed directions specific to your Los Angeles neighborhood. We recommend using GPS navigation apps like Google Maps or Waze for real-time traffic updates, which is especially helpful when traveling during LA rush hours. Public transportation options may also be available depending on your location—contact our office for specific transit information.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Los Angeles patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! Telehealth is an excellent option for Los Angeles residents. Our secure video appointments allow you to receive the same quality psychiatric care without the commute. Telehealth visits are covered by most insurance plans and are perfect for medication management, follow-up consultations, and therapy sessions. Many of our Los Angeles patients appreciate the flexibility telehealth provides in their busy schedules.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available for Los Angeles visitors?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient parking for all our patients, including those traveling from Los Angeles. Our facility is fully accessible and designed with patient comfort in mind. Detailed parking instructions will be provided when you schedule your appointment. If you have specific accessibility needs or questions about parking, please don't hesitate to contact our office in advance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 animate-fade-up">
            Get Expert Care from Los Angeles
          </h2>
          <p className="text-xl opacity-90 mb-8 animate-fade-up">
            Schedule your appointment today and experience compassionate, comprehensive psychiatric care.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Contact Us Today
          </a>
        </div>
      </section>

    </main>
  )
}