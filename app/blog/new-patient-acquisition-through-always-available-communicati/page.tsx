import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Patient Acquisition Through Always-Available Communication | Get MedReception',
  description: 'Discover how 24/7 communication channels transform patient acquisition, build trust, and create lasting relationships in modern medical practices.',
  keywords: 'patient acquisition, medical communication, 24/7 availability, healthcare accessibility, patient engagement, medical practice growth',
  openGraph: {
    title: 'New Patient Acquisition Through Always-Available Communication',
    description: 'Discover how 24/7 communication channels transform patient acquisition, build trust, and create lasting relationships in modern medical practices.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/70 text-sm mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Practice Growth
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-white text-center mb-8">
            New Patient Acquisition Through Always-Available Communication
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. MedReception Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-12 animate-fade-up">
            <p className="mb-6">
              It's 9 PM on a Tuesday evening. Sarah notices concerning symptoms and searches for a healthcare provider. She finds your practice online, but there's no way to reach anyone until office hours tomorrow at 8 AM. Frustrated, she moves on to the next search result—a competitor whose automated system immediately responds to her inquiry, books her appointment, and sends confirmation within minutes. You've just lost a potential long-term patient to the simple reality of modern expectations: healthcare providers must be available when patients need them, not just when it's convenient.
            </p>
            <p>
              In today's on-demand economy, where consumers expect instant responses and 24/7 accessibility across every service industry, medical practices face a critical challenge. The traditional model of limited phone hours and voicemail systems is no longer sufficient for attracting and retaining new patients. Always-available communication isn't just a convenience—it's become the gateway to patient acquisition and the foundation of competitive advantage in modern healthcare.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The New Patient Journey Starts Outside Business Hours
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-6">
              Research consistently shows that the majority of healthcare searches occur outside traditional office hours. Patients research symptoms, compare providers, and make decisions about their care during evenings and weekends when they have time to focus on their health needs. A study by Google found that one in twenty searches is health-related, with peak search activity occurring between 7 PM and midnight.
            </p>
            <p className="mb-6">
              When prospective patients land on your practice website or social media page during these peak research hours, their intent is immediate. They're not casually browsing—they're actively seeking care and ready to make a decision. If they encounter barriers to communication, whether it's an outdated "call during office hours" message or an unresponsive contact form, they immediately move to competitors who offer instant engagement.
            </p>
            <p>
              The window of opportunity is remarkably narrow. Studies in consumer behavior show that 80% of people who submit online inquiries expect a response within 24 hours, but in reality, responses within five minutes generate conversion rates ten times higher than those received after an hour. For medical practices, this means that every hour of unavailability represents not just missed calls, but lost patients who will likely never return.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Building Trust Through Immediate Responsiveness
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-6">
              The psychology of first impressions in healthcare is particularly powerful. When a potential patient reaches out and receives an immediate, helpful response, it creates an instant sense of being valued and cared for—emotions that become fundamental to the patient-provider relationship. This first point of contact sets expectations for all future interactions and establishes the tone of trust that defines quality healthcare relationships.
            </p>
            <p className="mb-6">
              Always-available communication channels demonstrate organizational competence and patient-centeredness before the first appointment ever occurs. Whether through AI-powered chatbots, 24/7 answering services, or automated scheduling systems, practices that respond instantly signal that they understand modern patient needs and have invested in infrastructure to meet them. This perceived investment in accessibility translates directly into trust in clinical competence.
            </p>
            <p>
              Moreover, immediate responsiveness removes anxiety from the healthcare-seeking process. Patients dealing with health concerns often experience heightened stress, and delays in communication amplify that anxiety. When practices provide instant acknowledgment, answer basic questions immediately, and facilitate quick scheduling, they reduce psychological barriers to seeking care and position themselves as partners in health rather than gatekeepers to services.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Practices that respond to inquiries within five minutes are ten times more likely to convert prospective patients than those who wait even an hour. In healthcare, accessibility isn't just convenience—it's the first clinical impression."
            </p>
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Technology Solutions for Continuous Availability
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-6">
              Implementing always-available communication doesn't require staff to work around the clock. Modern technology offers multiple scalable solutions that balance accessibility with operational efficiency. The key is selecting systems that provide genuine value to patients while integrating seamlessly with practice workflows.
            </p>
            <p className="mb-6">
              AI-powered virtual receptionists and chatbots have evolved significantly beyond simple automated responses. Today's systems can handle complex inquiries, understand natural language, triage based on urgency, and even schedule appointments directly into practice management systems. They provide instant engagement while collecting essential information that streamlines the intake process once office staff are available.
            </p>
            <p className="mb-6">
              Professional medical answering services offer another layer of human touch for practices that prefer live interaction. These services employ trained operators familiar with medical terminology and HIPAA compliance who can answer calls, take messages, schedule appointments, and escalate urgent matters according to practice-specific protocols. The investment typically pays for itself through increased patient acquisition and reduced administrative burden on clinical staff.
            </p>
            <p>
              Online scheduling platforms integrated with practice websites allow patients to view real-time availability and book appointments without any staff interaction. When combined with automated confirmation and reminder systems, these tools reduce no-shows while providing the instant gratification patients expect. The most effective implementations offer both self-service options and easy escalation to human support when needed.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Competitive Advantage in Saturated Markets
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-6">
              In urban and suburban areas where multiple practices compete for the same patient population, operational differentiators become critical. Clinical quality is often difficult for patients to assess before their first visit, so they make decisions based on accessibility, convenience, and responsiveness—factors entirely within practice control.
            </p>
            <p className="mb-6">
              Practices that advertise 24/7 communication availability gain immediate competitive positioning. This promise appears in online reviews, word-of-mouth recommendations, and search engine visibility. Patients increasingly filter their provider searches by accessibility criteria, and practices that meet these expectations appear in results while others are excluded from consideration entirely.
            </p>
            <p>
              The compound effect over time is substantial. Each patient acquired through superior accessibility becomes a potential source of referrals, online reviews, and long-term revenue. Meanwhile, competitors relying on traditional limited-hours communication face declining new patient numbers and aging patient panels. The gap widens progressively as market expectations shift toward always-available service models.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Practical Implementation Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-6">
              Successfully implementing always-available communication requires thoughtful planning and phased execution. The goal is to enhance accessibility without overwhelming staff or compromising quality.
            </p>
            
            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4">Key Implementation Steps:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]"><strong>Audit current communication gaps:</strong> Track when calls go unanswered, how long voicemails wait for responses, and when website visitors leave without engaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]"><strong>Start with self-service tools:</strong> Implement online scheduling and automated FAQ responses that handle routine inquiries without staff involvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]"><strong>Layer in live support:</strong> Add answering services or virtual receptionists for after-hours calls and complex inquiries that require human interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]"><strong>Integrate systems seamlessly:</strong> Ensure all communication channels connect to your practice management system to prevent information silos and duplicate work</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]"><strong>Promote your accessibility:</strong> Highlight 24/7 availability on your website, social media, and all marketing materials to maximize competitive advantage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]"><strong>Monitor and optimize:</strong> Track conversion rates, response times, and patient feedback to continuously refine your approach</span>
                </li>
              </ul>
            </div>

            <p>
              The most successful practices view always-available communication not as a technology project but as a strategic commitment to patient-centered care. They train all staff on new systems, establish clear protocols for different scenarios, and regularly review metrics to ensure technology enhances rather than replaces the human connection that defines quality healthcare.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Measuring Return on Investment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-6">
              The financial case for always-available communication is compelling when properly measured. Practices should track both direct revenue impact and operational efficiency gains to understand true ROI.
            </p>
            <p className="mb-6">
              Direct metrics include new patient acquisition rates, conversion rates from inquiry to appointment, and average patient lifetime value. Practices implementing comprehensive accessibility solutions typically see 20-40% increases in new patient bookings within the first six months, with particularly strong growth in patients under 45 who expect digital-first service models.
            </p>
            <p className="mb-6">
              Indirect benefits include reduced administrative burden on front desk staff, fewer missed appointments through automated reminders, and decreased phone tag that consumes significant staff time. Many practices find that technology investments pay for themselves through staff time savings alone, with new patient revenue representing pure upside.
            </p>
            <p>
              Perhaps most valuable is the long-term competitive positioning. As patient expectations continue to evolve toward greater accessibility and convenience, practices that establish robust always-available systems now will maintain their competitive advantage while others struggle to catch up. Early adopters capture market share that becomes increasingly difficult for competitors to reclaim.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose mt-12 pt-8 border-t border-[var(--color-border)] animate-fade-up">
            <p className="mb-6">
              The healthcare landscape has fundamentally changed. Patients no longer accept that they must wait until Monday morning to contact their provider, or that scheduling an appointment requires multiple phone calls during narrow time windows. They expect healthcare to meet them where they are, on their schedule, through their preferred communication channels.
            </p>
            <p className="mb-6">
              Practices that embrace always-available communication don't just acquire more patients—they acquire better-engaged patients who experience less friction in accessing care, maintain stronger connections to their providers, and ultimately achieve better health outcomes. The technology exists, the business case is proven, and patient expectations are clear.
            </p>
            <p>
              The question is no longer whether to implement always-available communication, but how quickly you can deploy solutions that position your practice for success in a market where accessibility has become the defining competitive differentiator. The practices that act now will lead their markets; those that delay will increasingly struggle to attract the next generation of patients.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Get MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based care and patient education that empowers informed health decisions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Patient Retention Strategies for Modern Practices</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Learn how continuous engagement and proactive communication keep patients connected to your practice long-term.</p>
              <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Optimizing Digital Front Door Experiences</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Discover how to create seamless digital experiences that convert website visitors into scheduled patients.</p>
              <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Measuring Patient Acquisition ROI</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Learn which metrics matter most when evaluating the financial impact of patient acquisition investments.</p>
              <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light text-white mb-4 animate-fade-up">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/90 text-lg mb-8 animate-fade-up" style={{animationDelay: '100ms'}}>
            Our team is here to help you implement always-available communication solutions that drive patient acquisition and practice growth.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:gap-3 animate-fade-up"
            style={{animationDelay: '200ms'}}
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}