import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Communication Preferences Across Generational Cohorts | Get MedReception',
  description: 'Understanding how different generations prefer to communicate with healthcare providers helps improve patient engagement, satisfaction, and health outcomes.',
  keywords: 'patient communication, generational differences, healthcare communication, baby boomers, millennials, gen z healthcare, patient engagement',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Patient Communication Preferences Across Generational Cohorts
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. MedReception Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A 72-year-old patient calls your office at 8 AM sharp, frustrated that no one answers. Meanwhile, a 28-year-old messages through your patient portal at midnight, expecting a response by morning. A 55-year-old prefers email, while a 19-year-old college student wants to text. Same healthcare need, four completely different communication expectations.
            </p>
            <p className="mb-6">
              Understanding generational communication preferences isn't just about convenience—it's about delivering effective, patient-centered care that meets people where they are. When healthcare providers align their communication strategies with patient preferences, the results are remarkable: improved appointment attendance, better medication adherence, increased satisfaction scores, and ultimately, better health outcomes.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Generational Differences Matter in Healthcare
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Each generation grew up with different communication technologies and cultural norms that shaped how they prefer to exchange information. These preferences run deep—they're not just habits, but expectations that influence trust, comfort, and engagement with healthcare providers.
            </p>
            <p className="mb-6">
              Research published in the Journal of Medical Internet Research found that communication channel mismatches contribute significantly to patient dissatisfaction and disengagement. When patients can't reach their providers through their preferred method, they're more likely to delay care, miss appointments, or switch providers entirely.
            </p>
            <p className="mb-6">
              The stakes are particularly high in healthcare, where timely communication can literally save lives. A missed message about abnormal test results or a delayed response about medication side effects can have serious consequences. Meeting patients through their preferred channels isn't a luxury—it's a clinical imperative.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Silent Generation and Baby Boomers: Traditional Channels Remain King
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Patients born before 1965 overwhelmingly prefer traditional communication methods. Phone calls remain the gold standard for this cohort—they value the personal connection, the ability to ask follow-up questions in real-time, and the immediate confirmation that their message was received.
            </p>
            <p className="mb-6">
              This generation also appreciates face-to-face interactions and physical mail for important documents. They're more likely to arrive early for appointments, prefer printed after-visit summaries, and want their prescriptions called directly to their pharmacy rather than sent electronically.
            </p>
            <p className="mb-6">
              Key characteristics of Baby Boomer communication preferences include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strong preference for phone calls during business hours (typically 8 AM - 5 PM weekdays)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Appreciation for speaking with a live person rather than automated systems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Comfort with leaving detailed voicemail messages</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Trust in printed materials and written instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Preference for established, ongoing relationships with consistent staff members</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "When patients can communicate through their preferred channels, appointment attendance improves by up to 30%, and patient satisfaction scores increase significantly across all age groups."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Generation X: The Bridge Generation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Born between 1965 and 1980, Generation X straddles the analog and digital worlds. They're comfortable with technology but still value personal interaction. This generation is often juggling careers, aging parents, and their own children, making flexibility and efficiency their top priorities.
            </p>
            <p className="mb-6">
              Gen X patients appreciate options. They might prefer email for routine matters like appointment confirmations or prescription refills, but want the ability to call when issues are complex or urgent. They're early adopters of patient portals and appreciate the convenience of online scheduling, but they also want responsive human support when needed.
            </p>
            <p className="mb-6">
              This cohort values:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Multi-channel communication options (phone, email, and portal access)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Quick response times and efficient processes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Clear, concise written communication</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Self-service options like online bill pay and appointment scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Extended hours for communication outside traditional 9-5</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Millennials: Digital Natives Demanding Convenience
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Millennials (born 1981-1996) have high expectations for healthcare communication shaped by their experiences with technology in every other aspect of their lives. If they can order groceries, manage their finances, and book travel from their phones, they expect the same convenience from their healthcare providers.
            </p>
            <p className="mb-6">
              This generation actually finds phone calls somewhat intrusive and anxiety-inducing. They prefer asynchronous communication methods that let them respond on their own schedule. Text messages, secure messaging through patient portals, and email are their preferred channels for most healthcare communications.
            </p>
            <p className="mb-6">
              Millennial patients expect:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 access to their health information through mobile apps</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Text message appointment reminders and confirmations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure messaging for non-urgent questions with responses within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Telehealth options for routine visits</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Online scheduling with real-time availability</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Digital copies of records and test results delivered immediately</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Generation Z: Mobile-First and Message-Based
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The youngest adult patients (born 1997 and later) have never known a world without smartphones and instant messaging. For Gen Z, phone calls are reserved for emergencies or talking to family. They expect to communicate with everyone—including their healthcare providers—through text-based messaging.
            </p>
            <p className="mb-6">
              This generation values authenticity, transparency, and social responsibility. They research providers extensively before making appointments, reading reviews and checking social media presence. They expect healthcare organizations to have modern, mobile-optimized websites and active digital channels.
            </p>
            <p className="mb-6">
              Gen Z communication preferences include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>SMS texting as the primary communication channel</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Chat-based interfaces with quick response times</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Video calls for telehealth (more comfortable than in-person for some)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Social media presence and engagement from providers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Visual content and infographics for health information</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Integration with wearables and health tracking apps</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies for Multi-Generational Communication
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that healthcare practices don't need to choose one approach—the key is offering multiple channels while making each one excellent. Here are evidence-based strategies for meeting diverse communication needs:
            </p>
            <p className="mb-6">
              <strong>Ask and Document Preferences:</strong> During intake or registration, explicitly ask patients how they prefer to be contacted for different types of communications (appointment reminders, test results, billing questions, etc.). Document these preferences clearly in their chart and honor them consistently.
            </p>
            <p className="mb-6">
              <strong>Staff a Multi-Channel Reception:</strong> Services like Get MedReception specialize in managing diverse communication channels simultaneously—answering phone calls for patients who prefer speaking to a person, monitoring secure messages for digital communicators, and sending text confirmations for younger patients who expect them.
            </p>
            <p className="mb-6">
              <strong>Set Clear Expectations:</strong> Whatever channels you offer, communicate clearly about response times. If portal messages are answered within 24 business hours, say so. If urgent matters require a phone call, make that clear in your automated responses.
            </p>
            <p className="mb-6">
              <strong>Train Staff on Generational Awareness:</strong> Help your team understand that communication preferences often correlate with age, but should never be assumed. A tech-savvy 70-year-old may prefer texts, while a 25-year-old with anxiety might appreciate phone calls. Always ask rather than assume.
            </p>
            <p className="mb-6">
              <strong>Invest in Technology Thoughtfully:</strong> Patient portals, text messaging platforms, and online scheduling tools significantly improve access for digital-preferring patients, but they should supplement—not replace—traditional channels. The goal is "both/and," not "either/or."
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Understanding and accommodating generational communication preferences isn't about catering to unreasonable demands—it's about recognizing that effective healthcare requires effective communication. When patients can reach their providers through channels they find natural and comfortable, they engage more fully in their care, follow treatment plans more consistently, and achieve better health outcomes.
            </p>
            <p className="mb-6">
              If your practice is struggling to manage diverse communication preferences or finding that patients express frustration about accessibility, it may be time to evaluate your communication infrastructure. Professional services that specialize in multi-channel patient communication can help you serve patients across all generations without overwhelming your staff.
            </p>
            <p>
              The future of healthcare is personalized—not just in treatment, but in every interaction. Meeting patients where they are, in the communication channels they prefer, is foundational to that vision.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Get MedReception Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to helping practices deliver exceptional patient communication and care coordination.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Reducing No-Shows Through Better Patient Communication
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Evidence-based strategies for improving appointment attendance rates across all age groups.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Implementing Text Messaging in Your Medical Practice
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                A practical guide to HIPAA-compliant patient texting that improves engagement and efficiency.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Building Patient Loyalty Through Exceptional Communication
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                How consistent, accessible communication transforms one-time patients into lifelong advocates.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help your practice communicate effectively with patients across all generations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}