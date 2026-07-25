import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      category: "Medical Practice",
      title: "How AI is Transforming Medical Front Office Operations",
      excerpt: "Discover how artificial intelligence is revolutionizing patient communication and administrative workflows in modern medical practices."
    },
    {
      category: "Patient Care",
      title: "Reducing Patient No-Shows with Automated Appointment Reminders",
      excerpt: "Learn evidence-based strategies for improving patient attendance rates and maximizing your practice's scheduling efficiency."
    },
    {
      category: "Technology",
      title: "HIPAA Compliance in the Age of AI Medical Assistants",
      excerpt: "Understanding the regulatory requirements and best practices for implementing AI-powered patient communication systems."
    },
    {
      category: "Practice Management",
      title: "The True Cost of Missed Patient Calls in Medical Practices",
      excerpt: "A comprehensive analysis of how unanswered calls impact practice revenue, patient satisfaction, and clinical outcomes."
    },
    {
      category: "Innovation",
      title: "Why a Surgeon Built an AI Receptionist for Medical Practices",
      excerpt: "The story behind MedReception: understanding the pain points of clinical practice from the inside out."
    },
    {
      category: "Efficiency",
      title: "Streamlining Patient Intake: From Paper Forms to AI-Powered Triage",
      excerpt: "How modern practices are eliminating administrative bottlenecks while improving the quality of patient information."
    },
    {
      category: "Patient Experience",
      title: "24/7 Access: What Patients Really Expect from Medical Practices",
      excerpt: "Research insights on patient communication preferences and the growing demand for round-the-clock practice accessibility."
    },
    {
      category: "Workflow",
      title: "Integrating AI Receptionists with Existing Medical Software",
      excerpt: "Technical considerations and best practices for seamlessly connecting AI communication tools to your practice management system."
    },
    {
      category: "Growth",
      title: "Scaling Your Medical Practice Without Increasing Administrative Staff",
      excerpt: "Strategic approaches to practice growth that leverage technology to maintain quality while controlling overhead costs."
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Resources & Insights</h1>
          <p className="text-xl text-white/90">Evidence-based information for modern medical practices</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">Featured Article</span>
            </div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              The Physician's Guide to Implementing AI in Your Medical Practice
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                As a practicing surgeon who built MedReception AI, I've experienced firsthand the challenges of running a busy medical practice while trying to maintain exceptional patient care. The administrative burden on medical practices has reached unprecedented levels, with front-office staff spending countless hours on phone calls, appointment scheduling, and patient intake—tasks that pull resources away from direct patient care.
              </p>
              <p>
                The introduction of artificial intelligence into medical practice operations represents a paradigm shift in how we approach administrative efficiency. Unlike traditional solutions that simply add more staff or extend office hours, AI-powered receptionists fundamentally transform the patient communication experience. They provide instant responses 24/7, eliminate hold times, and ensure that no patient call goes unanswered—all while maintaining HIPAA compliance and integrating seamlessly with existing practice management systems.
              </p>
              <p>
                In this comprehensive guide, we'll explore the practical considerations for implementing AI receptionist technology in your practice: from technical integration and staff workflow adjustments to measuring ROI and patient satisfaction metrics. Drawing from real-world implementation experience across diverse medical specialties, we'll address common concerns and provide actionable strategies for successful adoption that enhances both practice efficiency and patient care quality.
              </p>
            </div>
            <div className="mt-8">
              <Link 
                href="/blog/implementing-ai-medical-practice" 
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
              >
                Read Full Article
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up"
              >
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <Link 
                  href="/blog/article" 
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            See how MedReception AI can streamline your front office and improve patient communication
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/how-it-works" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-colors backdrop-blur-sm"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}