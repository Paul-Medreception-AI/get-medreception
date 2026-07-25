import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near New York, NY | Get MedReception',
  description: 'Expert Other Medical care serving New York, NY and surrounding communities. Schedule your appointment today with Get MedReception.',
  openGraph: {
    title: 'Other Medical Near New York, NY | Get MedReception',
    description: 'Expert Other Medical care serving New York, NY and surrounding communities.',
    url: 'https://getmedreception.com/locations/new-york-ny',
    siteName: 'Get MedReception',
    locale: 'en_US',
    type: 'website',
  },
}

export default function NewYorkNYPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>New York, NY</span>
          </nav>

          {/* Heading */}
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near New York, NY
          </h1>
          
          <p className="text-xl mb-10 opacity-90 max-w-3xl leading-relaxed">
            Serving patients from New York and surrounding NY communities. Expert psychiatric care is closer than you think.
          </p>

          {/* CTA Button */}
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule in New York
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-8 text-center">
            Serving the New York Area
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Get MedReception proudly serves patients throughout New York, NY and the surrounding communities. Whether you're commuting from Manhattan, Brooklyn, Queens, the Bronx, or nearby neighborhoods, our practice offers convenient access to comprehensive psychiatric care. We understand the unique healthcare needs of New York residents and have designed our services to accommodate your busy lifestyle, with flexible scheduling options and minimal wait times.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              Patients from New York choose Get MedReception because of our patient-centered approach, experienced providers, and commitment to personalized treatment plans. We also recognize that not everyone can make the drive—that's why we offer comprehensive telehealth services for eligible New York residents, bringing expert psychiatric care directly to your home or office. Our goal is to make high-quality mental health care accessible, regardless of where you are in the New York area.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)]">
            <div className="text-center">
              <svg 
                className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">New York, NY Service Area</p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-12 text-center">
            Services Available to New York Patients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg 
                className="w-12 h-12 text-[var(--color-accent)] mb-6" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                Comprehensive mental health assessments to understand your unique needs and develop personalized treatment plans.
              </p>
              <a 
                href="/services/psychiatric-evaluation" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg 
                className="w-12 h-12 text-[var(--color-accent)] mb-6" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                Expert psychiatric medication prescribing and monitoring to optimize your treatment outcomes and minimize side effects.
              </p>
              <a 
                href="/services/medication-management" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg 
                className="w-12 h-12 text-[var(--color-accent)] mb-6" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                Convenient virtual appointments from the comfort of your home, offering the same quality care as in-person visits.
              </p>
              <a 
                href="/services/telehealth" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up border border-[var(--color-border)]">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-primary)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              For New York residents who prefer the convenience of virtual care or have difficulty traveling to our office, Get MedReception offers comprehensive telehealth services. Our secure, HIPAA-compliant video platform allows you to receive the same high-quality psychiatric care from the comfort and privacy of your own home.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Telehealth appointments are ideal for medication management, follow-up visits, and ongoing therapy sessions. Most major insurance plans cover telehealth services for New York patients, and our team will work with you to verify your coverage and benefits. Schedule your virtual consultation today and experience the ease of modern psychiatric care.
            </p>
          </div>
          <div className="text-center mt-8">
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Schedule Telehealth Visit
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                How far is Get MedReception from New York, NY?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Get MedReception is conveniently located to serve patients throughout the New York metropolitan area. Depending on your specific location in New York and current traffic conditions, most patients find our office easily accessible within a short commute. We're well-connected by major highways and public transportation routes, making it simple for New York residents to reach us for appointments.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                What are the best directions from New York to your office?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                From New York, our office is accessible via major highways and arterial roads. We recommend using GPS navigation for real-time traffic updates and the most efficient route. If you're using public transportation, several bus and subway lines serve the area near our practice. For specific directions based on your starting point in New York, please contact our office and our staff will be happy to provide detailed guidance.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Do you offer telehealth for New York residents?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for eligible patients in New York, NY. Our virtual appointments provide the same level of care as in-person visits and are perfect for medication management, therapy sessions, and follow-up consultations. Telehealth is especially convenient for patients with busy schedules, transportation challenges, or those who simply prefer the comfort of receiving care at home. Most insurance plans cover telehealth services—contact us to verify your coverage.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Is parking available for New York patients visiting your office?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Yes, we provide convenient parking options for all our patients, including those traveling from New York. Our facility offers accessible parking close to the entrance, including designated spaces for patients with mobility needs. The parking area is well-lit and secure for your peace of mind. If you have specific accessibility requirements or questions about parking, please let us know when scheduling your appointment so we can ensure your visit is as comfortable as possible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from New York
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Quality psychiatric care is just a short trip away. Schedule your appointment today and take the first step toward better mental health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>

    </main>
  )
}