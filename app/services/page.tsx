import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Get MedReception',
  description: 'AI Receptionist Built by a Practicing Surgeon - 24/7 call answering, appointment scheduling, and patient intake for medical practices.',
}

export default function ServicesPage() {
  const services = [
    {
      name: "24/7 Call Answering",
      description: "Never miss a patient call again. Our AI receptionist answers every call instantly, day or night, ensuring patients always reach your practice when they need care.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
    {
      name: "Appointment Scheduling",
      description: "Automated booking that syncs with your existing calendar. Patients can schedule, reschedule, and confirm appointments without staff intervention.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    },
    {
      name: "Patient Intake & Triage",
      description: "Collect essential patient information and route urgent cases appropriately. Streamline your front-office workflow while maintaining clinical quality.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Quick Integration",
      description: "We connect MedReception AI to your phone system and calendar in under 48 hours. No complex software installations or staff training required—just a simple technical setup that works with your existing infrastructure."
    },
    {
      number: "02",
      title: "Custom Configuration",
      description: "We tailor the AI to your practice's specific needs, protocols, and scheduling preferences. From call scripts to appointment types, every detail is configured to match how your practice actually operates."
    },
    {
      number: "03",
      title: "Immediate Results",
      description: "Your AI receptionist begins handling calls, booking appointments, and capturing patient information right away. Monitor performance through your dashboard and adjust settings as your practice evolves."
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › Services
          </div>
          <h1 className="font-cormorant text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Comprehensive AI-powered solutions designed specifically for medical practices by a practicing surgeon
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Built by a physician who understands the real workflow of medical practice, every feature is designed to solve actual challenges your front office faces daily.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[var(--color-light)]">
                  {service.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                  {service.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  {service.description}
                </p>
                <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Get started with MedReception AI in three simple steps
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up">
                <div className="lg:px-8">
                  <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-0 w-px h-32 bg-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Schedule a demo to see how MedReception AI can transform your practice
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            See How It Works
          </Link>
        </div>
      </section>
    </main>
  )
}