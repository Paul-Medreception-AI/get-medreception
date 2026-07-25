import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Answering Service vs. AI Reception: Cost & Quality Comparison | Get MedReception',
  description: 'Compare traditional medical answering services with AI reception systems. Detailed analysis of costs, quality, features, and ROI to help you choose the right solution for your practice.',
  openGraph: {
    title: 'Medical Answering Service vs. AI Reception: Cost & Quality Comparison',
    description: 'Compare traditional medical answering services with AI reception systems. Detailed analysis of costs, quality, features, and ROI.',
    type: 'article',
  },
}

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all cursor-pointer">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Medical Answering Service vs. AI Reception: A Cost and Quality Comparison
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            An evidence-based analysis to help medical practices choose the right patient communication solution
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-6 border-r border-white/20">Feature</div>
              <div className="p-6 border-r border-white/20">Traditional Answering Service</div>
              <div className="p-6">AI Reception System</div>
            </div>

            {/* Monthly Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Monthly Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">$800–$2,500/month (varies by call volume)</div>
              <div className="p-6 border-l border-[var(--color-border)]">$199–$599/month (unlimited calls)</div>
            </div>

            {/* Setup Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Setup Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">2–4 weeks (training required)</div>
              <div className="p-6 border-l border-[var(--color-border)]">24–48 hours (automated setup)</div>
            </div>

            {/* Availability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Availability</div>
              <div className="p-6 border-l border-[var(--color-border)]">24/7 (human limitations may apply)</div>
              <div className="p-6 border-l border-[var(--color-border)]">24/7/365 (no downtime)</div>
            </div>

            {/* Consistency */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Response Consistency</div>
              <div className="p-6 border-l border-[var(--color-border)]">Variable (depends on operator training, fatigue, turnover)</div>
              <div className="p-6 border-l border-[var(--color-border)]">100% consistent (follows protocols exactly every time)</div>
            </div>

            {/* Call Handling Capacity */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Call Handling Capacity</div>
              <div className="p-6 border-l border-[var(--color-border)]">Limited (queue times during peak hours)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Unlimited (handles multiple calls simultaneously)</div>
            </div>

            {/* Integration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">EHR Integration</div>
              <div className="p-6 border-l border-[var(--color-border)]">Manual entry required (prone to errors)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Direct integration (automatic data sync)</div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Scalability</div>
              <div className="p-6 border-l border-[var(--color-border)]">Costs increase with volume</div>
              <div className="p-6 border-l border-[var(--color-border)]">Fixed cost regardless of volume</div>
            </div>

            {/* HIPAA Compliance */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">HIPAA Compliance</div>
              <div className="p-6 border-l border-[var(--color-border)]">Yes (requires BAA, regular audits)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Yes (built-in encryption, automatic compliance)</div>
            </div>

            {/* Data & Analytics */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Reporting & Analytics</div>
              <div className="p-6 border-l border-[var(--color-border)]">Basic call logs (limited insights)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Advanced analytics (call patterns, patient sentiment, ROI tracking)</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]/30">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Practices needing occasional overflow support</div>
              <div className="p-6 border-l border-[var(--color-border)]">High-volume practices seeking cost efficiency and automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-16 text-center animate-fade-up">
            Understanding Each Option
          </h2>

          {/* Traditional Answering Service */}
          <div className="mb-16 animate-fade-up">
            <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)] mb-6">
              Traditional Medical Answering Service
            </h3>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Medical answering services have been the standard solution for decades. They employ trained human operators who answer calls on behalf of your practice, typically routing urgent matters to on-call providers and taking messages for non-urgent requests. These services offer a personal touch and can handle complex conversations that require human judgment.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              However, traditional answering services face inherent challenges. Staff turnover means frequent retraining, and operators may not be familiar with your specific practice protocols. Cost structures typically include per-minute charges or tiered pricing based on call volume, making expenses unpredictable. During peak hours, callers may experience hold times, and overnight or weekend coverage often comes at premium rates.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Most suitable for practices with low call volumes (under 200 calls/month), those requiring highly nuanced patient conversations, or as supplementary overflow support during exceptionally busy periods. The human element can be valuable for geriatric practices or specialty clinics where personal connection is paramount.
            </p>
          </div>

          {/* AI Reception System */}
          <div className="animate-fade-up">
            <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)] mb-6">
              AI Reception System
            </h3>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              AI reception systems represent the evolution of practice communication technology. Using advanced natural language processing, these systems can understand patient requests, schedule appointments, answer common questions, and route urgent matters—all while maintaining HIPAA compliance and perfect consistency with your protocols. Modern AI receptionists sound natural, understand context, and can handle multiple calls simultaneously without any wait time.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The technology integrates directly with your existing practice management system, eliminating manual data entry and reducing errors. Every interaction is logged with detailed analytics, giving you insights into call patterns, patient concerns, and operational efficiency. Unlike human operators, AI systems never experience fatigue, never forget training, and apply your protocols with 100% consistency across every single interaction.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Best for practices with moderate to high call volumes (200+ calls/month), multi-location practices seeking standardization, growing practices looking to scale without proportional cost increases, or any practice prioritizing cost predictability and operational analytics. Particularly effective for appointment scheduling, prescription refill requests, and routing urgent vs. non-urgent calls.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] mb-8 text-center">
              How to Decide: Decision Framework
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Choose a Traditional Answering Service if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Your call volume is under 200 calls per month and unpredictable</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You need only occasional overflow support during lunch hours or staff absences</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Your patient demographic strongly prefers human interaction over technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You're comfortable with variable monthly costs that fluctuate with call volume</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Manual data entry and limited analytics are acceptable for your workflow</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Choose an AI Reception System if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You handle 200+ calls per month and need cost predictability</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You want zero hold times and the ability to handle multiple calls simultaneously</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Consistency in patient communication is critical across all interactions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You value direct EHR integration and automatic data synchronization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You're planning to scale your practice without proportionally increasing overhead</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Advanced analytics and insights into call patterns are important for optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">You need true 24/7/365 coverage with absolutely no downtime or holidays</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-2 border-[var(--color-accent)]">
              <p className="text-lg text-[var(--color-ink)] font-semibold mb-2">Consider a Hybrid Approach</p>
              <p className="text-[var(--color-muted)]">
                Some practices benefit from using AI for routine scheduling and FAQs while maintaining human answering services for complex or sensitive calls. This maximizes cost efficiency while preserving the human touch where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Cost Analysis */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-12 text-center animate-fade-up">
            Real Cost Analysis: 12-Month Projection
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Service Cost Breakdown */}
            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Traditional Answering Service</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">Base monthly fee</span>
                  <span className="font-semibold text-[var(--color-ink)]">$800</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">Per-minute charges (avg)</span>
                  <span className="font-semibold text-[var(--color-ink)]">$400</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">After-hours premium</span>
                  <span className="font-semibold text-[var(--color-ink)]">$300</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">Setup & training</span>
                  <span className="font-semibold text-[var(--color-ink)]">$500</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">12-Month Total</span>
                  <span className="text-2xl font-bold text-[var(--color-primary)]">$18,500</span>
                </div>
              </div>
              <p className="text-sm text-[var(--color-muted)] italic">
                *Costs increase with call volume. High-volume months can exceed $2,500.
              </p>
            </div>

            {/* AI System Cost Breakdown */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[var(--color-accent)] animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">AI Reception System</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">Monthly subscription</span>
                  <span className="font-semibold text-[var(--color-ink)]">$399</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">Unlimited calls</span>
                  <span className="font-semibold text-[var(--color-accent)]">$0</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">24/7 coverage</span>
                  <span className="font-semibold text-[var(--color-accent)]">Included</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <span className="text-[var(--color-muted)]">Setup & integration</span>
                  <span className="font-semibold text-[var(--color-accent)]">$0</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">12-Month Total</span>
                  <span className="text-2xl font-bold text-[var(--color-accent)]">$4,788</span>
                </div>
              </div>
              <div className="bg-[var(--color-accent)]/10 rounded-lg p-4">
                <p className="text-sm font-semibold text-[var(--color-accent)]">
                  Annual Savings: $13,712 (74% cost reduction)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg animate-fade-up">
            <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Hidden Costs of Traditional Services</h4>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Staff time</strong> spent reviewing message logs and correcting data entry errors (est. 5-10 hours/month)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Missed appointments</strong> due to communication errors or delayed message delivery</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Patient frustration</strong> from hold times during peak hours leading to reputation impact</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Retraining costs</strong> when service staff turnover occurs (typically 2-3x per year)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-[var(--color-cream)] rounded-xl p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can AI really handle sensitive medical calls as well as a human?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Modern medical AI systems are specifically designed and trained for healthcare communication, with built-in protocols for identifying urgent situations and escalating appropriately. They follow HIPAA compliance standards perfectly every time, never experience emotional fatigue, and maintain consistent empathy in their responses. For complex clinical decisions, AI systems are programmed to route calls to appropriate medical staff—they augment human judgment rather than replace it. Studies show patient satisfaction with AI reception is comparable to or higher than traditional services, primarily due to zero hold times and consistent quality.
              </div>
            </details>

            <details className="bg-[var(--color-cream)] rounded-xl p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                What happens if the AI doesn't understand a patient's request?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Advanced AI reception systems include multiple fallback protocols. First, they'll ask clarifying questions to better understand the request. If ambiguity persists, the system can escalate to a human staff member via transfer or message. Most systems also include a "speak to a person" option that patients can request at any time. In practice, modern natural language processing has become sophisticated enough that comprehension issues are rare—the AI can understand accents, medical terminology, and contextual nuances that would challenge older automated systems.
              </div>
            </details>

            <details className="bg-[var(--color-cream)] rounded-xl p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                How long does it take to switch from an answering service to AI?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most AI reception implementations take 24-48 hours for basic setup and 1-2 weeks for full integration with your EHR and practice management system. The transition process typically involves: (1) configuring your practice protocols and call routing rules, (2) integrating with your existing systems, (3) testing with your staff, and (4) a soft launch period where both systems run in parallel. This contrasts sharply with traditional answering services, which require 2-4 weeks of operator training and often experience quality inconsistencies during the onboarding period.
              </div>
            </details>

            <details className="bg-[var(--color-cream)] rounded-xl p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Do older patients struggle with AI reception systems?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Patient feedback across age groups shows that conversational AI is significantly more intuitive than traditional phone tree systems. Because modern AI uses natural conversation rather than "press 1 for appointments, press 2 for..." menus, older patients often find it easier to use. The system speaks clearly, can repeat information as needed, and patiently handles slower-paced conversations. Many practices report that their geriatric patients prefer AI reception because there are no hold times, the system never sounds rushed or impatient, and calls are handled efficiently without confusion about which button to press.
              </div>
            </details>

            <details className="bg-[var(--color-cream)] rounded-xl p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can I use both an answering service and AI reception together?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, and this hybrid approach is becoming increasingly popular. Many practices use AI reception for routine tasks—appointment scheduling, prescription refill requests, general inquiries—while maintaining a small-scale answering service for complex situations requiring human judgment. This maximizes cost savings (since the majority of calls are handled by AI) while preserving the human touch where it adds the most value. The key is establishing clear routing protocols so calls are directed to the appropriate resource based on their nature and complexity.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Modernize Your Practice Communication?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule a consultation to discuss which solution best fits your practice needs, call volume, and budget—or see how AI reception can transform your patient experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[var(--color-accent-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Discuss Your Options
            </a>
            <a 
              href="/demo" 
              className="inline-block bg-white text-[var(--color-primary)] font-semibold px-8 py-4 rounded-lg hover:bg-[var(--color-cream)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              See AI Reception Demo
            </a>
          </div>
          <p className="text-white/75 mt-6 text-sm">
            No commitment required • Free ROI analysis included
          </p>
        </div>
      </section>
    </main>
  )
}