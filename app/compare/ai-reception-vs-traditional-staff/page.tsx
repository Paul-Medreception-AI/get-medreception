import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Reception vs. Traditional Front Desk Staff: Which is Right for Your Practice? | Get MedReception',
  description: 'Compare AI reception systems with traditional front desk staff. Learn about effectiveness, cost, scalability, and which solution is right for your medical practice.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8 text-[var(--color-light)] opacity-90">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <a href="/resources" className="hover:text-white transition-colors">Resources</a>
            <span>›</span>
            <span className="text-white">Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            AI Reception vs. Traditional Front Desk Staff: Which is Right for Your Practice?
          </h1>
          <p className="text-xl text-[var(--color-light)] max-w-3xl mx-auto leading-relaxed">
            An evidence-based comparison to help you make the best staffing decision for your medical practice
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-16">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white/20">AI Reception System</div>
              <div className="p-6 font-semibold border-l border-white/20">Traditional Front Desk Staff</div>
            </div>

            {/* Availability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Availability</div>
              <div className="p-6 border-l border-[var(--color-border)]">24/7/365 with zero downtime or breaks</div>
              <div className="p-6 border-l border-[var(--color-border)]">Limited to business hours; requires coverage for breaks, sick days, vacation</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Cost Structure</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Fixed monthly subscription ($299-$799); predictable, no overtime or benefits</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">$35,000-$55,000 annual salary per FTE, plus benefits (20-30%), payroll taxes, training costs</div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Scalability</div>
              <div className="p-6 border-l border-[var(--color-border)]">Instant; handles unlimited simultaneous calls during peak times</div>
              <div className="p-6 border-l border-[var(--color-border)]">Requires hiring and training additional staff; 4-8 weeks onboarding</div>
            </div>

            {/* Consistency */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Service Consistency</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">100% consistent responses; follows protocols every time without variation</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Variable; depends on mood, energy, training retention, and individual performance</div>
            </div>

            {/* Call Handling */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Call Handling Capacity</div>
              <div className="p-6 border-l border-[var(--color-border)]">Unlimited concurrent calls; zero hold times</div>
              <div className="p-6 border-l border-[var(--color-border)]">1-2 calls at a time; patients experience hold times during peak hours</div>
            </div>

            {/* Data & Reporting */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Data & Reporting</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Automatic call analytics, transcripts, appointment tracking, trend analysis</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Manual tracking; limited visibility into call volume, outcomes, or patient satisfaction metrics</div>
            </div>

            {/* Integration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">EHR Integration</div>
              <div className="p-6 border-l border-[var(--color-border)]">Direct API integration with major EHR systems; automatic data sync</div>
              <div className="p-6 border-l border-[var(--color-border)]">Manual data entry; prone to transcription errors and delays</div>
            </div>

            {/* Compliance */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">HIPAA Compliance</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Built-in compliance features; encrypted communications; automatic audit trails</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Requires ongoing training, monitoring, and enforcement; human error risk</div>
            </div>

            {/* Human Touch */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Personal Connection</div>
              <div className="p-6 border-l border-[var(--color-border)]">Natural language processing; empathetic responses; improving but not fully human</div>
              <div className="p-6 border-l border-[var(--color-border)]">Genuine human empathy; ability to read emotional nuance and adapt flexibly</div>
            </div>

            {/* Complex Situations */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Complex Problem-Solving</div>
              <div className="p-6 border-l border-[var(--color-border)]">Excellent for routine tasks; escalates complex issues to staff</div>
              <div className="p-6 border-l border-[var(--color-border)]">Superior judgment for unusual situations; can creatively solve novel problems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* AI Reception Deep Dive */}
          <div className="mb-20 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[var(--color-accent)]/10 rounded-lg">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  AI Reception Systems: Modern Efficiency
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
              <p className="text-lg leading-relaxed mb-6">
                AI reception systems represent a fundamental shift in how medical practices handle patient communication. These systems use advanced natural language processing to understand patient needs, schedule appointments, answer common questions, and route urgent matters appropriately—all without human intervention. The technology has matured significantly, with modern systems achieving 95%+ accuracy in intent recognition and patient satisfaction scores comparable to human receptionists.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                The core advantage is operational efficiency. AI systems never need breaks, never call in sick, and handle unlimited simultaneous conversations during peak call times. For practices experiencing high call volumes (especially during Monday mornings or seasonal flu surges), this eliminates the persistent problem of missed calls and patients placed on hold. The system maintains perfect consistency in following protocols, never forgetting to collect insurance information or verify patient demographics.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                From a financial perspective, AI reception offers predictable costs that scale without adding headcount. Practices pay a fixed monthly subscription regardless of call volume, eliminating the escalating costs of hiring, training, benefits, and managing additional staff as the practice grows. The data analytics capabilities provide unprecedented visibility into call patterns, appointment booking rates, and common patient questions—insights that inform both operational and clinical decisions.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-[var(--color-primary)]">Best suited for:</strong> High-volume practices, multi-location organizations, practices with extended or after-hours needs, cost-conscious operations prioritizing efficiency, and practices experiencing staffing challenges or high turnover.
              </p>
            </div>
          </div>

          {/* Traditional Staff Deep Dive */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[var(--color-primary)]/10 rounded-lg">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  Traditional Front Desk Staff: The Human Touch
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
              <p className="text-lg leading-relaxed mb-6">
                Traditional front desk staff remain the gold standard for practices where human connection is paramount. Skilled receptionists bring emotional intelligence, cultural competency, and adaptive problem-solving that AI systems cannot fully replicate. They recognize returning patients by voice, remember personal details that build rapport, and intuitively know when a caller needs extra reassurance or urgent attention beyond what protocols dictate.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                The value of human staff becomes most apparent in complex or emotionally charged situations. When a patient is confused about their treatment plan, anxious about an upcoming procedure, or dealing with sensitive insurance issues, human receptionists provide nuanced communication that adapts in real-time. They can pick up on vocal cues indicating distress, navigate language barriers with empathy, and exercise judgment in situations that fall outside standard protocols.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                For smaller practices, traditional staff often wear multiple hats beyond answering phones—checking patients in, managing the waiting room environment, handling cash payments, and serving as the practice's face and personality. This multifunctionality can make dedicated reception staff more cost-effective than they initially appear. Experienced receptionists also build institutional knowledge about patient histories, provider preferences, and office dynamics that enhance overall practice efficiency.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-[var(--color-primary)]">Best suited for:</strong> Small practices valuing personal relationships, specialties dealing with sensitive or complex patient needs (oncology, mental health, pediatrics), practices with in-person check-in needs, and organizations where staff perform multiple roles beyond phone duties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-4">
              How to Decide What's Right for Your Practice
            </h2>
            <p className="text-center text-[var(--color-muted)] mb-12 text-lg">
              Use this framework to guide your decision-making process
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Choose AI Reception */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--color-accent)]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">
                    Choose AI Reception if:
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You receive high call volumes with frequent hold times or missed calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You need 24/7 availability for scheduling or patient inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Staffing costs are straining your budget or you face high turnover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You're expanding locations or services and need scalable support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Most patient interactions are routine (scheduling, prescription refills, FAQs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You want detailed analytics on call patterns and operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You prioritize consistency and protocol adherence over personal touch</span>
                  </li>
                </ul>
              </div>

              {/* Choose Traditional Staff */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">
                    Choose Traditional Staff if:
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Personal relationships with patients are central to your practice identity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You handle sensitive, complex, or emotionally charged patient situations frequently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your front desk staff perform multiple in-person duties beyond phone work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your patient demographic prefers or requires human interaction (elderly, non-tech-savvy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Call volume is manageable and doesn't require after-hours coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have low staff turnover and a strong, experienced reception team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You value staff flexibility to handle unpredictable or unusual situations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-[var(--color-accent)]">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Hybrid Approach: The Best of Both Worlds</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Many practices find success combining AI reception for after-hours coverage, overflow calls, and routine tasks—while keeping human staff for complex situations, in-person duties, and high-touch patient interactions. This maximizes efficiency while preserving the personal touch where it matters most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 text-lg">
            Common questions about choosing the right reception solution
          </p>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                <span>Will patients accept talking to an AI instead of a human?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Patient acceptance of AI reception systems is remarkably high—typically 85-90% satisfaction in medical practices. Most patients care more about getting quick, accurate answers and scheduling appointments efficiently than whether they're speaking to a human or AI. The technology has advanced to sound natural and empathetic, and patients appreciate never being placed on hold or reaching voicemail. For the minority who prefer human interaction, hybrid models can seamlessly transfer calls to staff when requested.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                <span>What happens to my current front desk staff if I implement AI reception?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most practices don't replace staff—they redeploy them to higher-value activities. Front desk employees can focus on in-person patient care, insurance verification, complex problem resolution, care coordination, and other tasks that require human judgment. Some practices use AI to handle after-hours calls and overflow, allowing existing staff to work more manageable hours without the stress of constant phone interruptions. The result is often happier, more engaged employees doing more meaningful work.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                <span>How long does it take to implement an AI reception system?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Implementation typically takes 2-4 weeks from contract signing to going live. This includes configuring the system with your practice information, scheduling rules, and protocols; integrating with your EHR and phone system; training staff on oversight and escalation procedures; and conducting testing to ensure accuracy. This is dramatically faster than hiring and fully training new human staff, which typically takes 6-12 weeks before they reach full productivity.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                <span>Can AI reception handle medical emergencies and urgent situations?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, with proper configuration. AI systems are programmed to recognize emergency keywords and symptoms (chest pain, difficulty breathing, severe bleeding, suicidal ideation, etc.) and immediately direct callers to call 911 or go to the emergency room. For urgent but non-emergency situations, the system can instantly page on-call providers, schedule same-day appointments, or transfer calls to clinical staff. The AI's advantage is that it never misses critical indicators due to distraction or fatigue—it's always 100% alert to emergency language.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                <span>What's the true ROI comparison between AI and traditional staff?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>The ROI equation depends on your practice size and call volume. A full-time receptionist costs $45,000-$70,000 annually when including salary, benefits, payroll taxes, training, and turnover costs. AI reception costs $3,600-$9,600 annually, representing 85-93% cost savings. However, the ROI extends beyond direct costs: practices typically see 20-30% more appointments booked due to 24/7 availability and zero missed calls, reduced no-show rates through automated reminders, and improved staff productivity when freed from constant phone interruptions. Most practices achieve full ROI within 2-4 months.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Discuss Your Options With Our Team
          </h2>
          <p className="text-xl text-[var(--color-light)] mb-10 leading-relaxed max-w-2xl mx-auto">
            Not sure which approach is right for your practice? Schedule a consultation to review your specific needs, call volumes, and budget—and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Schedule Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="/demo" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/30"
            >
              See AI Demo
            </a>
          </div>
          <p className="text-sm text-[var(--color-light)] mt-6 opacity-90">
            Free consultation · No obligation · Custom recommendations
          </p>
        </div>
      </section>

    </main>
  )
}