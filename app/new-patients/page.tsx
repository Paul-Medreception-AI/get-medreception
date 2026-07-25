import Link from 'next/link'

export const metadata = {
  title: 'New Patients | Get MedReception',
  description: 'Everything you need to know before your first visit. New patient information, forms, what to bring, and what to expect.',
}

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            New Patients
          </h1>
          <p className="text-xl text-white/90 animate-fade-up" style={{animationDelay: '100ms'}}>
            Everything you need to know before your first visit
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)] animate-fade-up">
            Your First Visit
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{animationDelay: '0ms'}}>
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Schedule
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your appointment online through our patient portal or call our office. We'll find a time that works with your schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Complete Paperwork
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arrive 15 minutes early to complete intake forms, or fill them out online before your visit to save time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Initial Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive assessment with your provider lasting 60-90 minutes. We take time to understand your health history and current concerns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{animationDelay: '300ms'}}>
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">04</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Together we'll create a personalized care plan tailored to your specific needs, goals, and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-ink)] animate-fade-up">
            What to Bring
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0ms'}}>
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">
                  Photo ID & Insurance Card
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Valid government-issued identification and current insurance information. We'll make copies for your file.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '50ms'}}>
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">
                  Medication List
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Complete list of current medications, supplements, and vitamins with dosages. Include both prescription and over-the-counter items.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">
                  Prior Medical Records
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If available, bring recent test results, imaging reports, or records from previous providers relevant to your visit.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '150ms'}}>
              <div className="flex-shrink-0 mt-1">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">
                  Emergency Contact Information
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Name and phone number of someone we can reach in case of an emergency during your care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
            Patient Forms
          </h2>
          <p className="text-[var(--color-muted)] mb-8 text-lg">
            Forms are available at our office or can be completed at your first appointment. If you prefer to complete paperwork in advance, please arrive 15 minutes early.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)]">New Patient Intake Form</h3>
                <p className="text-[var(--color-muted)] text-sm">Complete medical history and current health information</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)]">Consent for Treatment</h3>
                <p className="text-[var(--color-muted)] text-sm">Standard authorization for medical care and procedures</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)]">HIPAA Authorization</h3>
                <p className="text-[var(--color-muted)] text-sm">Privacy practices and health information release permissions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)]">Financial Responsibility Agreement</h3>
                <p className="text-[var(--color-muted)] text-sm">Insurance and payment policy acknowledgment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)] animate-fade-up">
            Telehealth Visits
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '100ms'}}>
            Virtual appointments available for follow-up visits and certain consultations
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0ms'}}>
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Device Requirements
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Computer, tablet, or smartphone with camera and microphone. Stable internet connection recommended. Compatible with most modern browsers.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Privacy & Security
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Find a quiet, private space for your appointment. Our platform is HIPAA-compliant and encrypted end-to-end to protect your health information.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                How to Join
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                You'll receive a secure link via email before your appointment. Click to join at your scheduled time—no software download required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-ink)] animate-fade-up">
            Office Policies
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0ms'}}>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Cancellation Policy
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We require 24 hours advance notice for appointment cancellations or rescheduling. This allows us to offer the time slot to other patients who need care. Late cancellations may be subject to a fee.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '100ms'}}>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Late Arrivals
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                If you arrive more than 15 minutes late for your appointment, we may need to reschedule to ensure quality care for all patients. Please call if you're running late—we'll do our best to accommodate you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '200ms'}}>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Missed Appointments
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                No-show appointments without prior notice may result in a missed appointment fee. Repeated no-shows may affect your ability to schedule future appointments with our practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up" style={{animationDelay: '100ms'}}>
            Have questions about becoming a new patient? We're here to help.
          </p>
          <div className="animate-fade-up" style={{animationDelay: '200ms'}}>
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}