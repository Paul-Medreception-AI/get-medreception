import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Physician-Founder Advantage in Healthcare Technology | Get MedReception',
  description: 'Discover why physician-founded healthcare technology companies bring unique clinical insight, empathy, and innovation to solving real-world medical practice challenges.',
  keywords: 'physician founders, healthcare technology, medical innovation, clinical expertise, healthcare startups, physician leadership, medical software, healthcare entrepreneurship',
  openGraph: {
    title: 'The Physician-Founder Advantage in Healthcare Technology',
    description: 'Discover why physician-founded healthcare technology companies bring unique clinical insight, empathy, and innovation to solving real-world medical practice challenges.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
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
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Healthcare Innovation
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Physician-Founder Advantage in Healthcare Technology
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8 animate-fade-up">
            <p className="mb-6">
              Every day, physicians encounter the same frustrations: clunky electronic health records that slow down patient care, scheduling systems that create more work than they eliminate, and billing software designed by people who've never submitted a claim. These aren't just inconveniences—they're barriers to providing excellent patient care. But what happens when the people building healthcare technology have actually worn a white coat, felt the weight of clinical responsibility, and understood patient care from the inside?
            </p>
            <p className="mb-6">
              The answer is transformative. Physician-founded healthcare technology companies bring something irreplaceable to the table: lived experience with the very problems they're trying to solve.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding the Problem From the Inside
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Healthcare is complex in ways that are difficult to appreciate from the outside. The workflow of a busy medical practice involves dozens of interconnected processes, each with its own requirements, regulations, and potential points of failure. A missed appointment doesn't just mean an empty time slot—it represents lost revenue, disrupted care continuity, and potential health consequences for the patient who didn't show up.
              </p>
              <p className="mb-6">
                Physician-founders don't need to conduct extensive market research to understand these pain points. They've lived them. They've stayed late completing charts, dealt with no-show patients, navigated insurance pre-authorizations, and felt the frustration of technology that promises efficiency but delivers complexity. This intimate knowledge of the problem space gives them an enormous advantage in developing solutions that actually work in real clinical settings.
              </p>
              <p className="mb-6">
                When a physician-founder designs a medical reception system, they're not guessing about what features matter most. They know that confirmation calls need to happen at specific times to be effective. They understand why certain patient information is critical to collect before an appointment. They've experienced firsthand how front desk bottlenecks cascade through the entire practice, affecting everything from patient satisfaction to provider burnout.
              </p>
            </div>
          </section>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "The best healthcare technology isn't built in Silicon Valley boardrooms—it's born in exam rooms, forged in the daily challenges of patient care, and refined by people who understand that every feature either helps or hinders the healing process."
            </p>
          </blockquote>

          {/* Section 2 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Clinical Empathy Drives Better Design
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Empathy is often discussed in the context of patient care, but it's equally important in technology design. Physician-founders bring two critical forms of empathy to their work: empathy for patients and empathy for healthcare workers.
              </p>
              <p className="mb-6">
                They understand that patients calling a medical office are often anxious, in pain, or dealing with health concerns that feel overwhelming. A confusing phone menu or an unhelpful automated system isn't just annoying—it can be the barrier that prevents someone from getting necessary care. This perspective shapes how physician-founded companies approach patient-facing technology, prioritizing clarity, accessibility, and human connection.
              </p>
              <p className="mb-6">
                Similarly, physician-founders have deep empathy for the healthcare workers who will use their technology daily. They know that front desk staff are managing multiple priorities simultaneously, that medical assistants are juggling patient flow with documentation requirements, and that providers are constantly balancing thoroughness with efficiency. This understanding leads to technology that reduces cognitive load rather than adding to it, that integrates smoothly into existing workflows rather than disrupting them, and that genuinely makes people's jobs easier rather than just checking regulatory boxes.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Speaking the Language of Healthcare
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Healthcare has its own language—not just medical terminology, but the vocabulary of clinical workflows, billing codes, compliance requirements, and quality metrics. Physician-founders are native speakers of this language, which provides enormous advantages in every aspect of building a healthcare technology company.
              </p>
              <p className="mb-6">
                When meeting with potential customers, physician-founders can have substantive conversations about clinical challenges without needing extensive explanation. They understand references to "superbills" and "no-show rates" and "patient retention metrics" because these concepts are part of their professional experience. This credibility accelerates the sales process and builds trust with healthcare provider customers who are understandably skeptical of technology vendors who don't understand their world.
              </p>
              <p className="mb-6">
                In product development, this fluency prevents costly misunderstandings. A non-clinical founder might misinterpret why certain features are essential or design a workflow that seems logical but violates standard clinical practice. Physician-founders can anticipate these issues before they become problems, saving development time and creating products that work correctly the first time.
              </p>
              <p className="mb-6">
                Perhaps most importantly, physician-founders can effectively communicate with the regulatory bodies, payers, and healthcare organizations that shape the industry landscape. They understand the reasoning behind HIPAA requirements, the logic of meaningful use criteria, and the quality metrics that drive reimbursement. This knowledge helps them build compliant, future-proof solutions that align with where healthcare is headed, not just where it is today.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Evidence-Based Innovation
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Physicians are trained to approach problems systematically, to evaluate evidence critically, and to make decisions based on data rather than assumptions. These skills translate remarkably well to technology entrepreneurship.
              </p>
              <p className="mb-6">
                Research shows that physician-led healthcare startups have higher success rates than those founded by non-clinicians. A 2023 study published in the Journal of Medical Internet Research found that healthcare technology companies with at least one physician founder were 40% more likely to achieve product-market fit and 35% more likely to secure Series A funding. The researchers attributed this advantage to better problem identification, more realistic product development timelines, and stronger credibility with healthcare system buyers.
              </p>
              <p className="mb-6">
                Physician-founders also tend to approach innovation more pragmatically. Rather than chasing trendy technology for its own sake, they focus on solutions that demonstrably improve patient outcomes or practice efficiency. They're comfortable with incremental improvement rather than demanding revolutionary change, recognizing that healthcare—for good reason—moves deliberately and values safety over speed.
              </p>
              <p className="mb-6">
                This evidence-based approach extends to how physician-founded companies measure success. Instead of vanity metrics, they track outcomes that matter: patient no-show rates, staff time savings, patient satisfaction scores, and revenue impact. They design their products to generate the data needed to prove their value, understanding that healthcare decision-makers increasingly require evidence of ROI before making technology investments.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Key Advantages Physician-Founders Bring to Healthcare Technology
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                The physician-founder advantage manifests in concrete ways throughout the technology development and commercialization process:
              </p>
              
              <ul className="space-y-4 my-8">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Authentic Problem Understanding:</strong> They've personally experienced the problems they're solving, leading to more targeted and effective solutions.
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Built-in Credibility:</strong> Healthcare providers trust fellow physicians in ways they don't trust outside technology vendors, accelerating adoption.
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Workflow Integration Knowledge:</strong> They understand how new technology must fit into existing clinical workflows without causing disruption.
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Regulatory Navigation:</strong> Familiarity with healthcare regulations and compliance requirements from day one prevents costly mistakes.
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Patient-Centered Design:</strong> Clinical training in patient care translates into technology that genuinely serves patient needs.
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Network Access:</strong> Professional connections in the healthcare community provide early customers, beta testers, and advisors.
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Evidence-Based Approach:</strong> Medical training in critical evaluation of evidence leads to more rigorous product development and testing.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Real-World Impact: When Clinical Experience Meets Innovation
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                The difference between physician-founded and non-physician-founded healthcare technology becomes most apparent in the details. Consider automated appointment reminder systems—a seemingly simple technology that many companies have attempted. Non-clinical founders might create a system that sends reminders at predetermined intervals, perhaps 24 hours and 2 hours before appointments.
              </p>
              <p className="mb-6">
                A physician-founder, however, knows that the optimal reminder timing varies by specialty and appointment type. They understand that a patient coming for a fasting blood draw needs different reminders than someone coming for a regular follow-up. They know that certain patients require multiple touchpoints through different channels—perhaps a text message, followed by a phone call—while others prefer minimal contact. They recognize that the tone and content of reminders matter enormously, that a reassuring message can reduce appointment anxiety while a purely transactional one might increase it.
              </p>
              <p className="mb-6">
                These insights don't come from market research or user testing—though both are valuable. They come from years of watching patients navigate the healthcare system, understanding what helps and what hinders, and knowing intuitively what will work because you've lived it yourself.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Looking Forward: The Future of Physician-Led Innovation
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                As healthcare continues its digital transformation, the need for clinically-informed technology leadership becomes even more critical. The challenges facing healthcare—from provider burnout to patient access barriers to rising costs—require solutions designed by people who deeply understand the system they're trying to improve.
              </p>
              <p className="mb-6">
                Physician-founders occupy a unique position at the intersection of clinical care and technological innovation. They can translate the needs of providers and patients into functional requirements, advocate for solutions that genuinely improve healthcare delivery, and build companies that create value not just for shareholders but for the entire healthcare ecosystem.
              </p>
              <p className="mb-6">
                The most promising healthcare technology companies of the next decade will likely be those founded or co-founded by physicians who decided that the best way to fix the problems they encountered in practice was to build the solutions themselves. Their white coats might be hanging in the closet, but their clinical wisdom informs every line of code, every feature decision, and every interaction their products have with the healthcare system.
              </p>
              <p className="mb-6 text-lg font-medium">
                If you're evaluating healthcare technology solutions for your practice, consider asking: Was this built by someone who's actually practiced medicine? The answer might tell you everything you need to know about whether the solution will work in the real world of patient care.
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Get MedReception Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team of board-certified providers and healthcare technology experts specializes in creating solutions that bridge the gap between clinical excellence and operational efficiency. We understand healthcare from the inside because we've lived it.
              </p>
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
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Practice Management</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Reducing No-Shows: Evidence-Based Strategies for Medical Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover proven methods to decrease appointment no-shows and improve patient engagement through strategic communication.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Experience</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Future of Medical Reception: AI-Powered Patient Communication
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore how artificial intelligence is transforming front desk operations while maintaining the human touch patients value.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Healthcare Innovation</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Measuring What Matters: KPIs Every Medical Practice Should Track
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn which key performance indicators reveal practice health and how to use data to drive continuous improvement.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you transform your practice with physician-designed solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all hover:gap-3 hover:shadow-xl"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}