import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Satisfaction Scores and First-Contact Resolution | Get MedReception',
  description: 'Discover how first-contact resolution directly impacts patient satisfaction scores and learn strategies to improve both metrics in your medical practice.',
  keywords: 'patient satisfaction, first-contact resolution, healthcare quality, patient experience, medical reception, patient care',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/70 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white/90">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Patient Satisfaction Scores and First-Contact Resolution
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Imagine calling your healthcare provider with an urgent question about your medication, only to be transferred three times, placed on hold twice, and ultimately told someone will call you back—maybe tomorrow. This frustrating experience isn't just an inconvenience; it's a significant factor that shapes how patients perceive the quality of their care and directly impacts patient satisfaction scores that healthcare organizations monitor closely.
            </p>
            <p className="mb-6">
              In today's healthcare landscape, patient satisfaction has evolved from a nice-to-have metric to a critical indicator of practice success. But what many practices don't realize is that one of the most powerful drivers of patient satisfaction isn't found in the exam room—it's determined at the very first point of contact. Understanding the relationship between first-contact resolution and patient satisfaction scores can transform how medical practices deliver care and how patients experience it.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            What Is First-Contact Resolution?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              First-contact resolution (FCR) is a customer service metric that measures how often a patient's question, concern, or request is completely resolved during their initial interaction with your practice—whether by phone, email, or patient portal. In healthcare, this might mean scheduling an appointment, answering a medication question, processing a prescription refill, or providing test results without requiring the patient to call back or wait for additional follow-up.
            </p>
            <p className="mb-6">
              The concept seems straightforward, but achieving high first-contact resolution rates requires seamless coordination between front-desk staff, clinical teams, and technological systems. When a patient calls with a concern, can your receptionist access the necessary information? Do they have the authority and training to resolve common issues? Are communication channels between administrative and clinical staff efficient enough to provide immediate answers?
            </p>
            <p className="mb-6">
              Research consistently shows that FCR rates in healthcare lag behind other service industries. While top-performing call centers across industries achieve FCR rates of 70-75%, many healthcare practices struggle to reach even 50%. This gap represents not just operational inefficiency, but thousands of missed opportunities to create positive patient experiences.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The Direct Link Between FCR and Patient Satisfaction
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The connection between first-contact resolution and patient satisfaction isn't merely correlational—it's causal and remarkably strong. Studies in healthcare service delivery have found that FCR is one of the top three predictors of overall patient satisfaction, alongside clinical outcomes and provider communication skills.
            </p>
            <p className="mb-6">
              When patients receive complete resolution on their first contact, several positive outcomes occur simultaneously. They save time and avoid the frustration of repeated calls or follow-ups. They feel heard and valued, sensing that the practice respects their time and concerns. They experience reduced anxiety, especially when the initial contact involved a health worry that's now addressed. And perhaps most importantly, they develop trust in the practice's competence and reliability.
            </p>
            <p className="mb-6">
              Conversely, poor first-contact resolution creates a cascade of negative effects. Each additional contact attempt compounds patient frustration. Unresolved issues may lead to delayed care, medication errors, or missed appointments. Patients begin to view the practice as disorganized or uncaring, and these perceptions color their entire relationship with the provider—even if the clinical care itself is excellent.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
            "Patients who experience first-contact resolution are 3-4 times more likely to rate their overall satisfaction as 'excellent' compared to those requiring multiple contacts for the same issue."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Why First-Contact Resolution Matters Beyond Satisfaction Scores
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              While improving patient satisfaction scores is valuable in itself, the benefits of high first-contact resolution extend far beyond survey results. For healthcare practices, FCR directly impacts operational efficiency and financial performance. Each resolved contact on the first attempt eliminates the need for follow-up calls, reducing call volume and freeing staff to handle new patient concerns rather than cycling through the same issues repeatedly.
            </p>
            <p className="mb-6">
              High FCR rates also reduce no-show rates and improve appointment adherence. When patients can easily schedule appointments, get their questions answered, and resolve concerns without hassle, they're significantly more likely to keep those appointments and follow through with treatment plans. This continuity of care leads to better health outcomes, which ultimately feeds back into higher satisfaction scores and better practice reputation.
            </p>
            <p className="mb-6">
              From a business perspective, satisfied patients who experience high first-contact resolution are more likely to remain with the practice, refer friends and family, and leave positive online reviews—all critical factors in practice growth. In an era when patients increasingly choose providers based on online ratings and reputation, the downstream effects of FCR on patient acquisition cannot be overstated.
            </p>
            <p className="mb-6">
              Perhaps most importantly, first-contact resolution directly impacts clinical quality and patient safety. Medication questions that go unresolved may lead to non-adherence or adverse events. Symptom concerns that require multiple attempts to address may result in delayed diagnosis. Administrative barriers to care access disproportionately affect vulnerable populations. By optimizing first-contact resolution, practices don't just improve satisfaction—they improve health outcomes.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Common Barriers to First-Contact Resolution in Healthcare
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Understanding why healthcare practices struggle with first-contact resolution is the first step toward improvement. Several systemic barriers commonly prevent resolution on initial contact:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Information silos:</strong> Front-desk staff lack access to clinical information, scheduling systems, or patient records needed to answer questions or resolve requests immediately.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Limited authority:</strong> Receptionists and administrative staff aren't empowered to make decisions or take actions that could resolve patient concerns without escalating to clinical staff.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Inadequate training:</strong> Reception staff may not understand common medical questions or have protocols for handling standard requests, leading to unnecessary escalations.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Poor communication workflows:</strong> The handoff between administrative and clinical staff is inefficient, with messages getting lost or delayed in the process.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Understaffing and high call volumes:</strong> When reception staff are overwhelmed, they resort to taking messages rather than resolving issues, creating backlogs and delays.</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Technology limitations:</strong> Outdated phone systems, fragmented software platforms, or lack of patient portals prevent efficient information access and communication.</p>
              </div>
            </div>

            <p className="mb-6">
              Recognizing these barriers in your own practice is essential because each represents a specific, addressable problem rather than an inevitable feature of healthcare delivery.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Strategies to Improve First-Contact Resolution
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Improving first-contact resolution requires a systematic approach that addresses people, processes, and technology. Here are evidence-based strategies that practices can implement to boost both FCR and patient satisfaction:
            </p>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">Empower Your Front-Line Staff</h3>
            <p className="mb-6">
              Provide reception staff with comprehensive training that goes beyond basic phone etiquette. Ensure they understand common medical terms, typical patient concerns, and practice protocols. Create decision-making frameworks that allow them to resolve standard requests—such as prescription refills, appointment rescheduling, or basic billing questions—without requiring clinical staff approval for every decision.
            </p>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">Integrate Systems and Information</h3>
            <p className="mb-6">
              Invest in technology that gives reception staff real-time access to the information they need. This includes scheduling systems, basic elements of electronic health records (with appropriate privacy protections), insurance verification tools, and internal communication platforms. When staff can see a patient's upcoming appointments, recent visits, and outstanding orders, they can answer questions and resolve issues immediately rather than playing phone tag.
            </p>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">Develop Standard Protocols</h3>
            <p className="mb-6">
              Create clear protocols for handling the most common patient requests. For instance, establish guidelines for when prescription refills can be processed immediately versus when they require provider review. Develop scripts for scheduling various appointment types. Create a knowledge base of answers to frequently asked questions. When staff have clear guidance, they can confidently resolve issues on first contact.
            </p>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">Measure and Monitor FCR</h3>
            <p className="mb-6">
              What gets measured gets improved. Track your first-contact resolution rate by categorizing the reasons patients call and monitoring how many are resolved without callbacks or escalations. Use this data to identify problem areas and track improvement over time. Consider brief post-call surveys asking patients if their issue was fully resolved during the contact.
            </p>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">Optimize Call Routing</h3>
            <p className="mb-6">
              Implement intelligent call routing that directs patients to the staff member best equipped to help them. This might mean separate phone lines for scheduling, medical questions, and billing, or it might involve a sophisticated automated system that asks screening questions before routing calls. The goal is to minimize transfers and connect patients with the right resource on the first attempt.
            </p>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">Expand Self-Service Options</h3>
            <p className="mb-6">
              Offer robust patient portal functionality that allows patients to schedule appointments, request prescription refills, view test results, and message providers without needing to call. Many patients prefer these asynchronous communication methods, and they inherently achieve first-contact resolution while reducing call volume for issues that do require human interaction.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Measuring Success: FCR and Satisfaction Metrics
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              To truly understand the relationship between first-contact resolution and patient satisfaction in your practice, establish baseline metrics and track them over time. Key performance indicators to monitor include:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>First-contact resolution rate:</strong> Percentage of patient contacts that are fully resolved without requiring follow-up (target: 65-75%)</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Average number of contacts per issue:</strong> How many touchpoints are required to resolve a typical patient concern (target: less than 1.5)</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Overall patient satisfaction scores:</strong> CAHPS scores, online reviews, and internal satisfaction surveys</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Satisfaction with access and communication:</strong> Specific survey questions about ease of reaching the practice and getting questions answered</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Call abandonment rate:</strong> Percentage of callers who hang up before reaching a staff member (target: less than 5%)</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Patient retention and referral rates:</strong> Indirect indicators of satisfaction that correlate strongly with FCR</p>
              </div>
            </div>

            <p className="mb-6">
              As you implement FCR improvement strategies, you should see these metrics move in concert—rising first-contact resolution rates should correlate with improving patient satisfaction scores, reduced call volumes (as repeat calls decrease), and higher patient retention.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 mb-8 animate-fade-up">
            <p className="mb-6">
              The relationship between first-contact resolution and patient satisfaction scores represents one of the most actionable opportunities for healthcare practices to meaningfully improve patient experience. Unlike many factors that influence satisfaction—such as wait times for appointments or insurance coverage limitations—FCR is largely within a practice's direct control and can be improved through systematic changes to processes, training, and technology.
            </p>
            <p className="mb-6">
              For patients, high first-contact resolution means less frustration, better access to care, and a sense that their healthcare providers value their time and concerns. For practices, it means more efficient operations, higher satisfaction scores, better reputation, and ultimately, improved patient outcomes. In an increasingly competitive healthcare marketplace where patients have choices and voices, investing in first-contact resolution isn't just good customer service—it's essential practice management.
            </p>
            <p className="mb-6">
              If your practice is struggling with patient satisfaction scores or finding that administrative inefficiencies are creating barriers to care access, examining your first-contact resolution rates is an excellent place to start. The good news is that even small improvements in FCR can generate measurable impacts on patient satisfaction, making this one of the highest-return investments a practice can make in patient experience.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Get MedReception Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team of healthcare professionals and patient experience specialists is dedicated to helping medical practices deliver exceptional care through optimized communication and reception services. We combine clinical expertise with operational excellence to improve patient satisfaction and practice efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Reducing Call Abandonment Rates in Medical Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn practical strategies to minimize missed calls and improve patient access to your practice.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Training Reception Staff for Better Patient Outcomes
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover effective training approaches that empower front-desk staff to deliver exceptional patient experiences.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding CAHPS Scores and Patient Experience Metrics
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Navigate the landscape of patient satisfaction measurement and learn how to improve your practice's scores.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you improve patient satisfaction and first-contact resolution in your practice.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}