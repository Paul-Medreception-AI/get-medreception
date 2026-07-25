import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building a Better Patient Experience Through Instant Response | Get MedReception',
  description: 'Discover how instant response systems transform patient satisfaction, reduce anxiety, and improve health outcomes in modern medical practices.',
  openGraph: {
    title: 'Building a Better Patient Experience Through Instant Response',
    description: 'Discover how instant response systems transform patient satisfaction, reduce anxiety, and improve health outcomes in modern medical practices.',
    type: 'article',
    publishedTime: '2025-02-15T09:00:00Z',
    authors: ['Get MedReception Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/70 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white/90">Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Building a Better Patient Experience Through Instant Response
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published February 15, 2025</span>
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
              Imagine calling your doctor's office with an urgent question, only to be met with endless hold music, voicemail systems, or the dreaded "we'll call you back within 24-48 hours." In those moments of uncertainty—when you're worried about symptoms, confused about medication, or simply need reassurance—every minute feels like an hour. For millions of patients across the country, this frustrating experience isn't just an inconvenience; it's a barrier to quality healthcare that can impact outcomes, increase anxiety, and erode trust in the medical system.
            </p>
            <p className="mb-6">
              The good news? Healthcare is evolving. Forward-thinking practices are discovering that instant response systems aren't just a convenience—they're a fundamental component of patient-centered care that improves satisfaction, health outcomes, and the overall therapeutic relationship.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Response Time Matters More Than Ever
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              In our increasingly connected world, patient expectations have fundamentally shifted. We can order groceries with same-day delivery, get instant answers to complex questions online, and communicate with friends across the globe in real-time. Yet when it comes to healthcare—arguably one of the most critical services in our lives—many patients still face significant communication barriers.
            </p>
            <p className="mb-6">
              Research consistently shows that communication delays in healthcare settings lead to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Increased patient anxiety:</strong> Waiting for medical information when you're concerned about your health amplifies stress and worry</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Unnecessary emergency room visits:</strong> When patients can't reach their provider, they often default to the ER for non-emergency issues</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medication non-compliance:</strong> Questions about side effects or dosing that go unanswered can lead patients to stop taking prescribed medications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Decreased patient satisfaction:</strong> Poor communication is consistently cited as a top complaint in patient satisfaction surveys</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduced trust in providers:</strong> When patients feel their concerns aren't prioritized, the therapeutic relationship suffers</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "In healthcare, time isn't just money—it's trust, it's outcomes, and it's the difference between a patient who feels cared for and one who feels abandoned."
            </p>
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Instant Response Really Means
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Instant response in healthcare doesn't necessarily mean a doctor picks up the phone on the first ring every single time. Rather, it's a comprehensive approach to communication that ensures patients receive timely, appropriate responses through multiple channels—whether that's a live receptionist, an intelligent triage system, secure messaging, or automated appointment scheduling.
            </p>
            <p className="mb-6">
              Modern instant response systems typically include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>24/7 answering services:</strong> Trained medical receptionists who can field calls, assess urgency, and route appropriately at any hour</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Intelligent triage protocols:</strong> Systems that can determine which issues need immediate attention and which can wait</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Secure messaging platforms:</strong> HIPAA-compliant channels for non-urgent questions and follow-ups</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Automated appointment scheduling:</strong> Self-service options that give patients control over their healthcare calendar</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Clear escalation pathways:</strong> Defined processes for when and how urgent matters reach clinical staff immediately</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Evidence: How Instant Response Improves Outcomes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The benefits of instant response systems extend far beyond patient satisfaction scores—though those are important too. Clinical research demonstrates tangible improvements in health outcomes when patients have reliable access to their care teams.
            </p>
            <p className="mb-6">
              Studies have shown that practices implementing comprehensive instant response systems experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>30-40% reduction in no-show rates:</strong> When patients can easily reschedule or ask pre-appointment questions, they're more likely to attend</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Improved medication adherence:</strong> Quick answers to medication questions correlate with better compliance rates</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Fewer unnecessary ER visits:</strong> Appropriate triage prevents patients from seeking emergency care for non-emergencies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Higher patient retention:</strong> Satisfied patients stay with practices longer and refer family and friends</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Better chronic disease management:</strong> Regular communication helps patients manage ongoing conditions more effectively</span>
              </li>
            </ul>
            <p className="mb-6">
              Perhaps most importantly, instant response systems help catch potential complications early. When patients know they can quickly reach their care team, they're more likely to report concerning symptoms before they escalate into serious problems.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Breaking Down Barriers to Access
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Traditional healthcare communication models often create unintentional barriers that disproportionately affect certain patient populations. Working parents may only have time to call during lunch breaks when offices are busiest. Patients with hearing impairments may struggle with phone-only systems. Those managing multiple chronic conditions may have frequent questions that feel "too small" to warrant a call, leading them to go unanswered.
            </p>
            <p className="mb-6">
              Instant response systems address these disparities by offering multiple communication channels and extended availability. This democratization of access means that all patients—regardless of their work schedule, communication preferences, or perceived "worthiness" of their concerns—can connect with their healthcare team.
            </p>
            <p className="mb-6">
              For patients managing complex medical needs, this can be transformative. Instead of rationing their questions or waiting until symptoms become severe, they can maintain an ongoing dialogue with their providers that supports proactive, preventive care.
            </p>
          </div>

          {/* Pull Quote 2 */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Healthcare should adapt to patients' lives, not the other way around. Instant response systems are about meeting people where they are—whenever they need us."
            </p>
          </blockquote>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Patients Can Expect from Modern Communication Systems
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If your healthcare provider has implemented an instant response system, you can typically expect several key features designed to make your experience smoother and more responsive:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Real human connection:</strong> Professional receptionists trained in medical communication who treat every call with empathy and respect</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Clear timeframe expectations:</strong> Transparency about when you'll hear back based on the urgency of your concern</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Multiple contact methods:</strong> Options to reach your provider by phone, secure message, patient portal, or text depending on your preference and the situation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Appropriate escalation:</strong> Systems that recognize truly urgent matters and connect you with clinical staff immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>After-hours coverage:</strong> Confidence that someone will respond even if your concern arises outside traditional office hours</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Consistent experience:</strong> The same high level of service whether you're calling to schedule a routine appointment or discussing a pressing health concern</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Making the Most of Your Healthcare Communication
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While instant response systems dramatically improve accessibility, patients can also take steps to make their communications with healthcare providers even more effective:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be specific about urgency:</strong> Help the reception team prioritize by being clear about whether your concern needs immediate attention</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Have information ready:</strong> Your pharmacy number, medication list, and specific symptoms help staff route your message efficiently</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Use the right channel:</strong> Non-urgent administrative questions are perfect for secure messaging; concerning symptoms warrant a phone call</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Don't minimize your concerns:</strong> If something is worrying you, it's worth reaching out—that's what these systems are for</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Provide contact preferences:</strong> Let the office know the best number and times to reach you so callbacks don't turn into phone tag</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The healthcare landscape is evolving to prioritize what truly matters: the patient experience. Instant response systems represent more than just technological advancement—they reflect a fundamental commitment to patient-centered care, where your questions are valued, your concerns are heard, and your time is respected.
            </p>
            <p className="mb-6">
              As patients, we deserve healthcare that works with our lives, not against them. We deserve to feel confident that when we need our care team, they'll be there—not in 24-48 hours, not after multiple voicemails, but when it matters most.
            </p>
            <p className="mb-6">
              If you're currently frustrated with communication barriers in your healthcare, know that better options exist. Practices implementing instant response systems are proving every day that accessible, responsive, patient-centered care isn't just an ideal—it's achievable, and it makes a real difference in health outcomes and quality of life.
            </p>
            <p>
              <strong>If you have concerns about your health or questions about your care, don't wait.</strong> Whether your current provider offers instant response systems or you're considering switching to one that does, prioritizing clear, timely communication with your healthcare team is one of the most important steps you can take for your wellbeing.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Get MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to improving patient access and healthcare communication through evidence-based practices and innovative service delivery.
              </p>
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
            <a href="/blog" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-wide text-[var(--color-accent)] mb-2">Patient Education</div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding After-Hours Healthcare Access</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn when to seek immediate care and how modern answering services provide 24/7 support for your medical questions.</p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-wide text-[var(--color-accent)] mb-2">Practice Management</div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Reducing No-Shows Through Better Communication</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover how appointment reminders and flexible scheduling improve attendance rates and patient outcomes.</p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-wide text-[var(--color-accent)] mb-2">Healthcare Technology</div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Future of Patient-Provider Communication</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Explore emerging technologies that are making healthcare more accessible, responsive, and patient-centered.</p>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">Our team is here to help you experience the difference that instant, compassionate communication makes.</p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Our Team
          </a>
        </div>
      </section>

    </main>
  )
}