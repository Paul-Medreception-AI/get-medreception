import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual Assistants vs. AI Reception: Understanding the Difference | Get MedReception',
  description: 'Compare virtual assistants and AI reception systems for your medical practice. Understand the key differences in cost, capabilities, and which solution is right for your practice.',
}

export default function VirtualAssistantsVsAIReceptionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span>›</span>
            <span>Resources</span>
            <span>›</span>
            <span>Comparison</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Virtual Assistants vs. AI Reception: Understanding the Difference
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A comprehensive comparison to help you choose the right front desk solution for your medical practice
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-center text-[var(--color-ink)] mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white/20">Virtual Assistant</div>
              <div className="p-6 font-semibold border-l border-white/20">AI Reception</div>
            </div>

            {/* Availability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)]">Availability</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Business hours only (typically 8am-5pm)</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">24/7/365 including holidays and weekends</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)] bg-[var(--color-cream)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">$2,500-$4,000/month plus benefits and training</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">$299-$799/month flat rate, no additional costs</div>
            </div>

            {/* Call Handling Capacity */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)]">Call Handling Capacity</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">1 call at a time, wait times during busy periods</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Unlimited simultaneous calls, zero wait times</div>
            </div>

            {/* Consistency */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)] bg-[var(--color-cream)]">Consistency</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Variable (depends on training, mood, experience)</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">100% consistent every call, every time</div>
            </div>

            {/* Setup Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)]">Setup Time</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">2-4 weeks (hiring, onboarding, training)</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">24-48 hours from signup to live</div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)] bg-[var(--color-cream)]">Scalability</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Requires hiring additional staff</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Scales instantly with practice growth</div>
            </div>

            {/* HIPAA Compliance */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)]">HIPAA Compliance</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Requires training and ongoing monitoring</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Built-in compliance with encrypted storage</div>
            </div>

            {/* Sick Days / Coverage */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)] bg-[var(--color-cream)]">Sick Days / Coverage</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Requires backup coverage and time off management</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Never needs coverage, always available</div>
            </div>

            {/* EHR Integration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-medium text-[var(--color-ink)]">EHR Integration</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Manual data entry required</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Direct integration with automatic data sync</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-medium text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Practices needing complex judgment calls and varied tasks</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">High-volume scheduling, after-hours coverage, consistent patient experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Virtual Assistants: The Human Touch
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Virtual assistants are remote employees who handle administrative tasks for your medical practice from a different location. They bring human judgment, flexibility, and the ability to handle complex or unusual situations that may fall outside standard protocols. Virtual assistants can manage multiple types of tasks beyond phone calls, including email management, data entry, insurance verification, and other administrative duties.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The typical virtual assistant for medical practices has 2-5 years of healthcare administrative experience and requires 1-2 weeks of practice-specific training. They work set hours, usually aligned with your practice schedule, and cost between $2,500-$4,000 per month when factoring in wages, benefits, training time, and management overhead.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Virtual assistants excel in situations requiring nuance, empathy for complex patient concerns, and multi-tasking across different administrative systems. However, they can only handle one call at a time, are unavailable outside their scheduled hours, and quality can vary based on individual performance and training retention.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              AI Reception: 24/7 Automated Excellence
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              AI reception systems are sophisticated software solutions that use artificial intelligence and natural language processing to handle patient calls, schedule appointments, answer common questions, and integrate directly with your practice management system. Modern AI reception technology has advanced to the point where patients often cannot distinguish it from a human receptionist during routine interactions.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The key advantage of AI reception is scalability and consistency. The system can handle unlimited simultaneous calls, meaning no patient ever encounters a busy signal or waits on hold. It operates 24/7/365, capturing appointment requests and handling patient inquiries even at 2 AM on Christmas Day. Every interaction follows your exact protocols with perfect consistency, and the system learns and improves over time based on interaction patterns.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              AI reception is most effective for high-volume, routine interactions: appointment scheduling, cancellations, rescheduling, basic practice information, directions, and FAQs. Setup takes 24-48 hours and costs $299-$799 per month with no additional expenses. The system integrates directly with your EHR, eliminating double data entry. For situations requiring complex judgment or handling upset patients with unique concerns, calls can be seamlessly transferred to your human staff.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide: Choosing the Right Solution
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Choose a Virtual Assistant if:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Your practice handles a high volume of complex, non-routine patient inquiries that require human judgment</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You need someone to handle multiple administrative tasks beyond phone calls (insurance verification, detailed patient coordination)</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Your patient demographic strongly prefers talking to a human for all interactions</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You operate during standard business hours only and don't need after-hours coverage</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You have budget flexibility for $2,500-$4,000/month and can manage an employee relationship</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[var(--color-border)] pt-10">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                Choose AI Reception if:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">High call volume causes missed calls, busy signals, or long hold times during peak hours</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You need 24/7 availability for appointment scheduling and patient inquiries</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Most of your calls are routine (scheduling, rescheduling, basic questions about hours and services)</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You want to reduce front desk costs by 60-80% while improving service consistency</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You want immediate scalability without hiring and training new staff as your practice grows</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You need seamless EHR integration to eliminate double data entry</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-medium mb-2">💡 Hybrid Approach</p>
              <p className="text-[var(--color-muted)]">
                Many practices find the optimal solution is combining both: AI reception handles high-volume routine calls 24/7, while a part-time virtual assistant manages complex administrative tasks and serves as backup for situations requiring human judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
                <span>Can AI reception really sound natural enough that patients accept it?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes. Modern AI voice technology has advanced significantly in the past two years. Our system uses natural language processing trained on millions of medical practice conversations. In patient surveys, 87% of callers report satisfaction with the AI interaction quality, and most cannot distinguish it from a human receptionist during routine scheduling calls. For situations requiring complex empathy or judgment, the system seamlessly transfers to your human staff.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
                <span>What happens when a patient has a question the AI cannot answer?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The AI is programmed to recognize when a question is beyond its scope and will immediately transfer the call to your staff with context about what the patient needs. You can customize the system to transfer specific types of calls (urgent medical issues, billing disputes, complex scheduling) directly to appropriate team members. The AI also logs these interactions so you can update its knowledge base over time.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
                <span>Is a virtual assistant more cost-effective if they can do multiple tasks?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                It depends on your practice needs. If you need someone handling insurance verification, detailed patient coordination, and administrative tasks beyond phone management, a virtual assistant provides better value. However, if your primary pain point is phone coverage—especially after-hours and during peak times—AI reception costs 75% less and handles unlimited simultaneous calls. Many practices use AI for phones and a part-time VA for other administrative tasks, getting the best of both worlds at lower total cost than a full-time employee.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
                <span>How quickly can each solution be implemented?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                AI reception can be live within 24-48 hours. Setup involves configuring your practice information, integrating with your EHR, and customizing call flows—all of which can be done in one or two business days. Virtual assistants require 2-4 weeks: posting the job, interviewing candidates, completing hiring paperwork, and conducting practice-specific training. If you need immediate relief from missed calls or after-hours coverage, AI is the faster solution.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
                <span>Can I try AI reception before committing to replace my virtual assistant?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely. We recommend starting with AI reception for after-hours coverage only, which requires zero changes to your current daytime operations. This lets you see patient response, test the system with real calls, and measure appointment capture rates before making any staffing decisions. Many practices run this hybrid model indefinitely: AI handles nights and weekends, while human staff (or a virtual assistant) manages daytime calls and complex administrative tasks.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Still Not Sure Which Solution Is Right for Your Practice?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team. We'll review your call volume, patient demographics, and specific needs to recommend the best approach—whether that's AI reception, a virtual assistant, or a hybrid solution.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Discuss Your Options
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}