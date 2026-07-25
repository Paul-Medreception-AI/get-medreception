import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Retention Strategies in an Increasingly Competitive Market | Get MedReception',
  description: 'Discover evidence-based patient retention strategies to build loyalty, improve satisfaction, and grow your medical practice in today\'s competitive healthcare landscape.',
  keywords: 'patient retention, healthcare marketing, patient loyalty, medical practice growth, patient satisfaction, healthcare competition',
  openGraph: {
    title: 'Patient Retention Strategies in an Increasingly Competitive Market',
    description: 'Evidence-based strategies to retain patients and build lasting relationships in competitive healthcare markets.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Get MedReception Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8 justify-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span>›</span>
            <span className="text-white/90">Article</span>
          </div>

          {/* Category */}
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-white/70">Practice Management</span>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Patient Retention Strategies in an Increasingly Competitive Market
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Dr. MedReception Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            In today's healthcare landscape, acquiring a new patient costs five to seven times more than retaining an existing one. Yet many medical practices focus their energy almost exclusively on attracting new patients while their current patient base quietly slips away. With rising competition from telehealth platforms, retail clinics, and an abundance of provider options, patient loyalty can no longer be taken for granted—it must be earned, nurtured, and continuously reinforced.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news? Patient retention is one of the most controllable aspects of practice growth. While you can't control insurance reimbursements or market forces, you can control the experience you deliver. This article explores evidence-based strategies that transform one-time visitors into lifelong patients and turn satisfied patients into enthusiastic advocates for your practice.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the Patient Retention Crisis
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research shows that the average healthcare practice loses 15-20% of its patient base annually. This "silent attrition" happens gradually—patients move, switch insurance, or simply choose another provider after a less-than-stellar experience. The financial impact is staggering: a practice with 2,000 active patients losing 20% annually must attract 400 new patients just to maintain current volume, before any growth occurs.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What's driving this shift? Patients today have unprecedented access to information and alternatives. They research providers online, read reviews, compare costs, and expect consumer-grade experiences. A single missed appointment reminder, long wait time, or billing confusion can send them searching for alternatives. Meanwhile, newer market entrants—from urgent care chains to app-based services—have built their entire models around convenience and experience.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The stakes extend beyond revenue. High patient turnover disrupts continuity of care, reduces clinical outcomes, and increases the administrative burden of constantly onboarding new patients. Conversely, retained patients tend to be more compliant with treatment plans, refer others more frequently, and generate higher lifetime value through consistent care engagement.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Patient Experience Foundation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patient retention begins the moment someone contacts your practice. Every interaction—from phone calls to check-in, clinical encounters to billing follow-up—either strengthens or weakens the relationship. Studies consistently show that patients value experience factors as much as clinical expertise when deciding whether to return.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">First impressions matter immensely.</strong> Research from the Beryl Institute found that 70% of patient perception is formed before they ever see a clinician. This means your front desk staff, office environment, and scheduling process carry enormous weight. A warm greeting, minimal wait times, and clear communication about what to expect set the tone for the entire relationship.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The clinical encounter itself remains central. Patients who feel heard, respected, and involved in their care decisions are significantly more likely to return. Simple behaviors make a profound difference: sitting down during the visit, maintaining eye contact, asking open-ended questions, and explaining diagnoses in plain language. One study found that physicians who spent just three additional minutes on patient communication saw a 19% increase in patient loyalty scores.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Patients don't leave because of clinical outcomes alone—they leave because they don't feel valued, heard, or remembered in the process."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Strategic Communication That Builds Loyalty
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consistent, personalized communication is one of the highest-impact retention strategies. Between visits, patients often feel disconnected from their healthcare providers. Strategic touchpoints keep your practice top-of-mind and demonstrate ongoing commitment to patient wellbeing.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Appointment reminders</strong> reduce no-shows by 20-30% while also serving as gentle retention tools. But don't stop at transactional reminders. Send personalized recall messages for preventive care, follow-up on recent visits to check recovery progress, and share relevant health information based on patient conditions or seasons (flu shots in fall, allergy management in spring).
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Birthday messages, anniversary-of-care acknowledgments, and thank-you notes after referrals create emotional connections that transcend the clinical relationship. These gestures require minimal investment but generate disproportionate loyalty returns. Consider implementing a structured communication calendar that ensures patients hear from your practice beyond appointment scheduling.
          </p>

          <div className="my-8">
            <h3 className="text-[var(--color-ink)] font-semibold text-lg mb-4">Effective Communication Touchpoints:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">24-48 hour appointment confirmations via patient's preferred channel (text, email, or call)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Post-visit follow-up within 48 hours for complex diagnoses or procedures</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Quarterly wellness newsletters with personalized health tips based on patient profiles</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Annual care reviews summarizing health progress and upcoming preventive needs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Re-engagement campaigns for patients who haven't visited in 12+ months</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Leveraging Technology Without Losing the Human Touch
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Technology should enhance—not replace—human connection in healthcare. Patient portals, online scheduling, and automated communications improve convenience, but only when implemented thoughtfully. The goal is to remove friction from administrative tasks while preserving meaningful personal interactions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Patient portals</strong> with robust functionality drive engagement and retention. Practices that offer lab results access, prescription refills, secure messaging, and educational resources see 15-25% higher retention rates than those with limited digital tools. However, portal adoption requires active promotion and training—don't assume patients will discover features on their own.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Online scheduling is now table stakes, not a differentiator. Patients expect to book appointments 24/7 without phone calls. But go further: implement real-time availability calendars, same-day appointment options for urgent needs, and flexible cancellation policies that show respect for patients' time. Each convenience factor reduces barriers to continued engagement.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telehealth has permanently changed patient expectations around access. Offering virtual visits for follow-ups, minor concerns, and chronic disease management signals that you value patient convenience. Practices that adopted hybrid models (in-person and virtual options) during the pandemic retained patients at significantly higher rates than those that resisted change.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Creating a Culture of Service Excellence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patient retention is a team sport. Every staff member—from schedulers to medical assistants to billing specialists—influences whether patients return. Organizations with strong service cultures invest in training, empower employees to solve problems, and measure patient experience metrics consistently.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Empower your team</strong> to address patient concerns immediately rather than escalating every issue. When a staff member can waive a late fee, reschedule without penalty, or expedite a prescription refill, problems get resolved before they become relationship-ending frustrations. Service recovery—how you handle mistakes—often creates stronger loyalty than error-free experiences.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Regular training on communication skills, empathy, and service standards keeps these priorities front-of-mind. Role-playing difficult scenarios, reviewing patient feedback as a team, and celebrating examples of exceptional service reinforce the behaviors that drive retention. Consider making patient experience metrics part of staff evaluations and compensation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Monitor key indicators like appointment no-show rates, patient satisfaction scores, online review ratings, and patient turnover percentages. When metrics decline, investigate root causes quickly. Is one provider or staff member generating complaints? Has a process change inadvertently created friction? Data-driven adjustments prevent small problems from becoming systemic retention issues.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building Community Beyond Transactions
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most loyal patients view their healthcare provider as a trusted partner in long-term wellbeing, not just a transactional service. Practices that foster community connections and demonstrate investment in patient success beyond the exam room build deeper loyalty.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Educational programming</strong>—whether in-person workshops, webinars, or content libraries—positions your practice as a health resource rather than just a sick-care destination. Topics might include nutrition classes, stress management techniques, chronic disease self-management, or condition-specific support groups. These programs generate touchpoints between visits while delivering genuine value.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Community involvement through health fairs, screenings, or sponsorships raises visibility while demonstrating commitment to population health. Patients who see your practice actively improving community wellbeing develop stronger emotional connections to your brand and mission.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Loyalty programs, while less common in healthcare than retail, can reinforce positive behaviors. Simple recognition systems—like acknowledging patients who consistently attend preventive visits or achieve health milestones—create motivation for continued engagement. The key is authenticity; any program must genuinely support patient health rather than feeling manipulative.
          </p>

          <div className="my-8">
            <h3 className="text-[var(--color-ink)] font-semibold text-lg mb-4">Quick Wins for Immediate Impact:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Call patients within 24 hours if lab results require attention—don't wait for their next visit</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Reduce wait times by reviewing scheduling patterns and adjusting appointment lengths</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Implement post-visit satisfaction surveys and respond personally to negative feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Train staff to use patients' names consistently throughout every interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Simplify billing statements and proactively address questions before they become disputes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Create a system for documenting patient preferences and personal details in your EMR</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Path Forward
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patient retention in a competitive market isn't about gimmicks or aggressive marketing—it's about consistently delivering exceptional experiences that make patients want to return. It requires intentional focus on every touchpoint, empowered staff who can solve problems, technology that enhances rather than complicates, and genuine commitment to patient wellbeing beyond revenue generation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The practices that thrive in the coming years will be those that recognize retention as a strategic priority, not an afterthought. Start by measuring your current retention rate, identifying your biggest friction points, and implementing one or two high-impact strategies immediately. Small improvements compound over time: a 5% increase in retention can boost practice profitability by 25-95% according to research from Bain & Company.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Most importantly, remember that behind every retention statistic is a person who chose to trust you with their health. Honor that trust with experiences worthy of loyalty, and the business results will follow naturally. Your current patients are your greatest asset—invest in keeping them engaged, satisfied, and enthusiastic about referring others to your care.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Get MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based insights and compassionate care guidance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Improving Patient Communication in Your Practice</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Effective communication strategies that enhance patient satisfaction and clinical outcomes.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Measuring Patient Satisfaction: Key Metrics That Matter</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Essential KPIs and measurement strategies for tracking patient experience and practice performance.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Digital Tools for Modern Medical Practices</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Technology solutions that streamline operations while maintaining the personal touch patients value.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help you build lasting patient relationships.</p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}