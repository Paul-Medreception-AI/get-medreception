import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In-House Scheduling vs. Automated AI Systems: Pros and Cons | Get MedReception',
  description: 'Compare in-house scheduling with AI automation. Understand effectiveness, costs, time commitment, and which approach is best for your medical practice.',
  openGraph: {
    title: 'In-House Scheduling vs. Automated AI Systems: Pros and Cons',
    description: 'Compare in-house scheduling with AI automation. Understand effectiveness, costs, time commitment, and which approach is best for your medical practice.',
    url: 'https://getmedreception.com/compare/manual-scheduling-vs-ai-automation',
    type: 'article',
  },
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            In-House Scheduling vs. Automated AI Systems: Pros and Cons
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive comparison to help medical practices choose the right scheduling approach for their unique needs
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold">
                Feature
              </div>
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold text-center">
                In-House Scheduling
              </div>
              <div className="bg-[var(--color-primary)] text-white p-6 font-semibold text-center">
                AI Automation
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Availability
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Business hours only (8am-5pm)
              </div>
              <div className="bg-white p-6 text-center">
                24/7/365 coverage
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Response Time
              </div>
              <div className="bg-white p-6 text-center">
                Varies (hold times, callbacks)
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Instant response
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Staffing Costs
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                $35,000-$45,000 per FTE annually
              </div>
              <div className="bg-white p-6 text-center">
                Flat monthly rate
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Scalability
              </div>
              <div className="bg-white p-6 text-center">
                Requires additional staff
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Handles unlimited volume
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Human Touch
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Personal interaction
              </div>
              <div className="bg-white p-6 text-center">
                Natural language AI
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Error Rate
              </div>
              <div className="bg-white p-6 text-center">
                Human error possible
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Consistent accuracy
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                No-Show Rate
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                15-30% average
              </div>
              <div className="bg-white p-6 text-center">
                Reduced with auto-reminders
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Implementation
              </div>
              <div className="bg-white p-6 text-center">
                Hiring & training (4-8 weeks)
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Setup in 2-3 days
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Sick Days & PTO
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Coverage gaps required
              </div>
              <div className="bg-white p-6 text-center">
                No downtime
              </div>

              <div className="bg-white p-6 font-semibold text-[var(--color-ink)]">
                Best For
              </div>
              <div className="bg-white p-6 text-center">
                Small practices, complex cases
              </div>
              <div className="bg-[var(--color-cream)] p-6 text-center">
                Growing practices, high volume
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <article className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              In-House Scheduling: The Traditional Approach
            </h2>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              In-house scheduling has been the standard in healthcare for decades. A dedicated receptionist or team of front-desk staff handles phone calls, manages the appointment calendar, processes patient inquiries, and coordinates with clinical staff. This human-centered approach offers personal interaction and the ability to handle complex, nuanced situations that may require judgment calls.
            </p>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              The strengths of in-house scheduling lie in relationship-building and context awareness. Experienced staff members get to know regular patients, understand the nuances of your practice's workflow, and can make real-time decisions when unusual situations arise. They can pick up on vocal cues that might indicate urgency, provide empathetic responses during stressful moments, and coordinate with multiple departments when needed.
            </p>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              However, this approach comes with inherent limitations. Staff are only available during business hours, leaving after-hours calls to voicemail. Training new employees takes weeks, turnover creates disruption, and sick days require coverage. The cost structure includes salaries, benefits, training time, and workspace. As practice volume grows, you need to hire additional staff proportionally, creating a direct relationship between patient volume and overhead costs.
            </p>
          </article>

          <article className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              AI Automation: The Modern Solution
            </h2>
            
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              Automated AI scheduling systems represent a fundamental shift in how medical practices manage appointments. These systems use natural language processing to understand patient requests, access your practice management system in real-time, and book appointments instantly—24 hours a day, 7 days a week. Modern AI has advanced to the point where most patients cannot distinguish between speaking with a well-trained AI and a human receptionist.
            </p>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              The core advantage of AI automation is scalability without proportional cost increase. Whether you receive 10 calls per day or 200, the system handles them simultaneously with consistent accuracy. There are no hold times, no voicemails, and no missed opportunities. The system never calls in sick, never needs vacation coverage, and doesn't require ongoing training. Implementation typically takes 2-3 days rather than the weeks required to hire and train new staff.
            </p>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              AI systems excel at routine scheduling tasks—the bread and butter of practice operations. They integrate directly with your existing practice management software, send automated reminders to reduce no-shows, and provide detailed analytics on call patterns and booking trends. The cost structure is predictable and typically represents 60-80% savings compared to full-time staff. While AI may not replace the human touch for highly complex or emotionally sensitive situations, most practices find that 85-95% of scheduling tasks are handled perfectly by automation, freeing human staff to focus on the cases that truly require personal attention.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide What's Right for Your Practice
            </h2>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose In-House Scheduling If:
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your practice is small (under 50 appointments/week) with predictable call volume</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You handle highly specialized cases requiring extensive patient education during booking</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your patient demographic strongly prefers traditional phone interaction (though this is increasingly rare)</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You have existing staff with capacity and no plans to grow patient volume</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Budget allows for $40,000+ annually per full-time scheduling staff member</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose AI Automation If:
              </h3>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You're experiencing growth and need to handle increasing call volume without hiring</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Patients frequently call outside business hours or you're missing opportunities</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Staff turnover or sick days create scheduling disruptions</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You want to reduce no-show rates with automated reminders and confirmations</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cost efficiency is important—you want predictable monthly expenses vs. full-time salaries</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your scheduling needs are straightforward and routine (most medical practices)</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--color-muted)]">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You want data and analytics on call patterns, peak times, and booking trends</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">Reality Check:</strong> Most modern medical practices benefit from a hybrid approach—AI handles routine scheduling 24/7, while human staff focus on complex cases, patient care coordination, and relationship management. This combination provides the best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Will patients know they're speaking with AI?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Modern AI scheduling systems use natural language processing that sounds remarkably human. Studies show that 85-90% of patients cannot distinguish between AI and human receptionists for routine scheduling tasks. Most practices don't see patient concerns once the system is properly configured, and patient satisfaction often increases due to instant response times and 24/7 availability.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What happens if a patient has a complex question the AI can't handle?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Quality AI systems include intelligent escalation protocols. When the system detects a question outside its scope—such as complex medical inquiries, insurance issues, or unusual scheduling scenarios—it seamlessly transfers the caller to a human staff member or schedules a callback. Most systems handle 85-95% of calls autonomously, escalating only the situations that genuinely require human judgment.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>How long does it take to implement AI scheduling vs. hiring new staff?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                AI implementation typically takes 2-3 days for basic integration with your practice management system, followed by a week of fine-tuning. You're fully operational within 10-14 days. In contrast, hiring a new receptionist involves posting job ads (1-2 weeks), interviewing (1-2 weeks), onboarding (1 week), and training (2-4 weeks)—a total timeline of 6-9 weeks, plus the ongoing risk of turnover requiring you to repeat the process.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What's the real cost comparison over a year?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                A full-time receptionist costs $35,000-$45,000 in salary, plus benefits (20-30%), payroll taxes (7.65%), training time, and workspace costs—totaling $50,000-$65,000 annually. AI scheduling systems typically range from $500-$2,000 per month ($6,000-$24,000 annually) with no additional costs, representing 60-80% savings. The ROI is even more dramatic when you consider that AI handles unlimited volume, while human staff capacity is finite.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Can AI systems integrate with our existing practice management software?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes. Modern AI scheduling platforms integrate with virtually all major practice management systems including Epic, Cerner, athenahealth, DrChrono, Kareo, AdvancedMD, and dozens of others. Integration allows the AI to check real-time availability, book appointments directly into your calendar, update patient records, and send automated confirmations and reminders—all without staff intervention. Setup typically requires API credentials and takes less than an hour.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light text-white mb-6">
            Ready to Explore AI Scheduling for Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your specific scheduling challenges and explore whether automation is the right fit for your practice. No pressure, just informed conversation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}