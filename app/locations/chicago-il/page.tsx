import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Chicago, IL | Get MedReception',
  description: 'Expert Other Medical care serving Chicago, IL and surrounding communities. Convenient location and telehealth options available. Schedule your appointment today.',
  openGraph: {
    title: 'Other Medical Near Chicago, IL | Get MedReception',
    description: 'Expert Other Medical care serving Chicago, IL and surrounding communities. Convenient location and telehealth options available.',
    url: 'https://getmedreception.com/locations/chicago-il',
    siteName: 'Get MedReception',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ChicagoILPage() {
  return (
    <main className="min-h-screen">
      
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <a href="/locations" className="hover:text-white transition-colors">Locations</a>
            <span>›</span>
            <span className="text-white">Chicago, IL</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-6 animate-fade-up">
            Other Medical Near Chicago, IL
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl animate-fade-up">
            Serving patients from Chicago and surrounding IL communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 animate-fade-up"
          >
            Schedule in Chicago
          </a>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 animate-fade-up">
            Serving the Chicago Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 mb-12 animate-fade-up">
            <p>
              Our practice is conveniently located to serve patients throughout Chicago and the greater Illinois area. Whether you're coming from the Loop, North Side, South Side, or surrounding suburbs like Evanston, Oak Park, Cicero, or Naperville, we're easily accessible via major highways and public transportation. Most Chicago residents find us within a comfortable 20-45 minute commute.
            </p>
            
            <p>
              Patients from Chicago choose Get MedReception because we combine clinical excellence with genuine accessibility. Unlike crowded urban clinics with months-long wait times, we prioritize prompt scheduling and personalized attention. For those who prefer to avoid the commute entirely, we offer comprehensive telehealth services that bring expert psychiatric care directly to your home or office anywhere in Illinois.
            </p>
          </div>
          
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-semibold">Serving Chicago, IL</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Services Available to Chicago Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Psychiatric Evaluations
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6">
                Comprehensive mental health assessments for accurate diagnosis and personalized treatment planning for Chicago residents.
              </p>
              <a href="/services/psychiatric-evaluations" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6">
                Expert psychiatric medication prescribing and monitoring to optimize your mental health treatment outcomes.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6">
                Secure video appointments from the comfort of your Chicago home or office, with full insurance coverage.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          
          <div className="space-y-4 text-lg text-[var(--color-ink)]/80">
            <p>
              We understand that traveling to appointments can be challenging for busy Chicago professionals, parents juggling multiple responsibilities, or anyone dealing with mobility concerns or difficult weather conditions. That's why we offer comprehensive telehealth services to all Illinois residents.
            </p>
            
            <p>
              Our secure video appointments provide the same quality psychiatric care you'd receive in person—from initial evaluations to ongoing medication management and therapy. Most major insurance plans cover telehealth visits at the same rate as in-office appointments, and our team can verify your coverage before your first session.
            </p>
            
            <p className="font-semibold text-[var(--color-ink)]">
              Schedule a telehealth appointment and receive expert care without leaving Chicago.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is your practice from downtown Chicago?
              </h3>
              <p className="text-[var(--color-ink)]/70 text-lg">
                Our office is easily accessible from downtown Chicago and all surrounding neighborhoods. Most patients from the Loop, River North, or West Loop area report a 25-35 minute drive via I-90 or I-290, depending on traffic. We're also accessible via the CTA and Metra lines, with convenient parking available on-site.
              </p>
            </div>

            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What are the best directions from Chicago?
              </h3>
              <p className="text-[var(--color-ink)]/70 text-lg">
                From downtown Chicago, take I-90/94 West and follow signs toward your destination. We recommend using Google Maps or Waze for real-time traffic updates, especially during rush hours (7-9 AM and 4-6 PM). Public transit riders can reach us via [specific CTA/Metra lines]. Detailed directions will be provided when you schedule your appointment.
              </p>
            </div>

            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Chicago residents?
              </h3>
              <p className="text-[var(--color-ink)]/70 text-lg">
                Yes! We offer full telehealth services to all patients throughout Illinois, including Chicago. Our secure video platform allows you to meet with our psychiatric providers from your home, office, or any private location with internet access. Telehealth appointments are available for evaluations, medication management, and therapy sessions, and are typically covered by insurance at the same rate as in-person visits.
              </p>
            </div>

            <div className="border-b border-[var(--color-border)] pb-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is your office accessible and is parking available?
              </h3>
              <p className="text-[var(--color-ink)]/70 text-lg">
                Absolutely. Our facility is fully ADA-accessible with wheelchair ramps, accessible restrooms, and ground-floor exam rooms. We provide free on-site parking with designated accessible spaces close to the entrance. If you have specific accessibility needs or concerns, please let us know when scheduling so we can ensure your visit is as comfortable as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6">
            Get Expert Care from Chicago
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you prefer in-person visits or telehealth, we're here to provide the psychiatric care you deserve.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>

    </main>
  )
}