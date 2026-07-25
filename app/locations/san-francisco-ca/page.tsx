import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Medical Near San Francisco, CA | Get MedReception',
  description: 'Serving patients from San Francisco and surrounding CA communities. Expert psychiatric care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Other Medical Near San Francisco, CA | Get MedReception',
    description: 'Serving patients from San Francisco and surrounding CA communities. Expert psychiatric care is closer than you think.',
    url: 'https://getmedreception.com/locations/san-francisco-ca',
    siteName: 'Get MedReception',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SanFranciscoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8 font-light">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">San Francisco, CA</span>
          </nav>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Other Medical Near San Francisco, CA
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl font-light leading-relaxed">
            Serving patients from San Francisco and surrounding CA communities. Expert psychiatric care is closer than you think.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
          >
            Schedule in San Francisco
          </Link>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving the San Francisco Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Located conveniently for San Francisco residents, Get MedReception serves patients throughout the Bay Area with comprehensive psychiatric care. Whether you're commuting from the Financial District, Mission, Pacific Heights, or any San Francisco neighborhood, our practice offers accessible mental health services that fit your schedule. Many of our San Francisco patients appreciate the short drive and ample parking compared to downtown medical facilities.
            </p>
            <p>
              Patients from San Francisco choose Get MedReception for our personalized approach to psychiatric care, shorter wait times than large hospital systems, and flexible appointment scheduling including evenings and weekends. We also offer telehealth appointments for San Francisco residents who prefer virtual care or have difficulty traveling. Our team accepts most major insurance plans serving the San Francisco area.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">San Francisco, CA Service Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to San Francisco Patients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-medium text-[var(--color-ink)] mb-4">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive psychiatric assessments for San Francisco patients seeking accurate diagnosis and personalized treatment planning.
              </p>
              <Link href="/services/psychiatric-evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-medium text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication management with regular monitoring and adjustments to optimize treatment outcomes for San Francisco residents.
              </p>
              <Link href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl font-medium text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual psychiatric care for San Francisco patients who prefer online appointments from the comfort of their home or office.
              </p>
              <Link href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-6">
            San Francisco residents can access the same quality psychiatric care through secure video appointments. Our telehealth services are perfect for busy professionals, those with mobility challenges, or anyone who prefers the convenience of virtual care. We accept most major insurance plans for telehealth visits, and many San Francisco patients find it easier to fit appointments into their schedule without commute time.
          </p>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed">
            Simply use your smartphone, tablet, or computer to connect with our experienced psychiatric team from anywhere in San Francisco or the surrounding Bay Area.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-medium text-[var(--color-ink)] mb-4">
                How far is Get MedReception from San Francisco?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located within easy driving distance of San Francisco, typically 20-35 minutes depending on your starting neighborhood and traffic conditions. Many San Francisco patients find the drive straightforward via major highways, and appreciate our ample free parking compared to downtown medical facilities.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-medium text-[var(--color-ink)] mb-4">
                What are the best directions from San Francisco to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From most San Francisco neighborhoods, take US-101 or I-280 south following signs toward our location. Detailed driving directions are provided when you schedule your appointment, and our staff is happy to help with specific route guidance based on your starting point. Public transit options are also available for San Francisco commuters.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-medium text-[var(--color-ink)] mb-4">
                Do you offer telehealth for San Francisco residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for all San Francisco patients. Virtual appointments provide the same quality psychiatric care through secure video conferencing. This is an excellent option for follow-up medication management visits, busy professionals who want to save commute time, or anyone who prefers virtual care. Most insurance plans cover telehealth at the same rate as in-person visits.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-medium text-[var(--color-ink)] mb-4">
                Is parking available for San Francisco patients visiting your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide ample free parking directly at our facility—a welcome change from the parking challenges many San Francisco patients face at downtown medical offices. Our office is also wheelchair accessible and designed to accommodate patients with mobility needs. If you have specific accessibility questions, please contact our office when scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Get Expert Care from San Francisco
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join the many San Francisco residents who trust Get MedReception for their psychiatric care needs. Schedule your appointment today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}