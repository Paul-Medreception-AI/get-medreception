import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Physician Burnout and Administrative Burden: A Tech Solution | Get MedReception',
  description: 'Explore how technology can reduce administrative burden and combat physician burnout. Evidence-based insights and practical solutions for healthcare providers.',
  openGraph: {
    title: 'Physician Burnout and Administrative Burden: A Tech Solution',
    description: 'Explore how technology can reduce administrative burden and combat physician burnout. Evidence-based insights and practical solutions for healthcare providers.',
    url: 'https://getmedreception.com/blog/physician-burnout-and-administrative-burden-a-tech-solution',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/70 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category Tag */}
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-white/70">Healthcare Technology</span>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight text-center mb-8">
            Physician Burnout and Administrative Burden: A Tech Solution
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
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
              Every evening, Dr. Sarah Chen faces the same decision: spend time with her family or complete the mountain of administrative tasks that accumulated during her clinic hours. Like thousands of physicians across the country, she spends nearly two hours on paperwork for every hour of patient care. The weight of this burden doesn't just steal her time—it's slowly eroding her passion for medicine.
            </p>
            <p>
              Physician burnout has reached crisis levels, with over 60% of doctors reporting symptoms of emotional exhaustion and depersonalization. While the causes are multifaceted, one factor stands out as both pervasive and potentially addressable: the crushing weight of administrative burden. The good news? Technology is finally catching up with solutions that can meaningfully reduce this load.
            </p>
          </div>

          {/* Section 1 */}
          <section className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Scale of the Problem
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                The statistics are sobering. According to recent studies from the American Medical Association and Mayo Clinic, physicians spend an average of 16 minutes on administrative tasks for every patient encounter. In a typical 8-hour workday seeing 20-25 patients, this translates to 5-7 additional hours of documentation, billing codes, prior authorizations, and electronic health record (EHR) management.
              </p>
              <p className="mb-4">
                This administrative burden doesn't stay at the office. Research published in the Annals of Internal Medicine reveals that for every hour of direct patient care, physicians spend two hours on EHR and desk work during clinic hours, plus an additional one to two hours of personal time on EHR tasks at home. This phenomenon, dubbed "pajama time," has become an unwelcome fixture of medical practice.
              </p>
              <p>
                The consequences extend far beyond inconvenience. Administrative overload correlates directly with burnout symptoms, decreased job satisfaction, increased medical errors, and physicians leaving practice altogether. At a time when we're facing a growing physician shortage, we're losing talented doctors not to retirement or career changes, but to exhaustion from non-clinical work.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Where Administrative Burden Comes From
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                Understanding the sources of administrative work is the first step toward addressing it. The burden comes from multiple directions:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Electronic Health Records (EHRs):</strong> While designed to improve care coordination, many EHR systems require extensive data entry, navigation through multiple screens, and documentation that prioritizes billing over clinical care.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Prior Authorizations:</strong> Insurance requirements for treatment approvals consume an estimated 20 hours per physician per week, with staff time adding even more overhead.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Inbox Management:</strong> The average physician receives 50-100 electronic messages daily, including lab results, prescription refills, patient portal messages, and staff communications.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Quality Reporting:</strong> Compliance with various quality metrics, meaningful use requirements, and pay-for-performance programs adds layers of documentation.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Phone Calls and Scheduling:</strong> Patient calls, appointment coordination, referral management, and routine inquiries pull physicians and staff away from direct care activities.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Pull Quote */}
          <aside className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "The irony is that we entered medicine to care for patients, but we're spending more time managing data about patients than actually being with them. Technology should be our ally, not our adversary."
            </p>
            <p className="text-[var(--color-muted)] text-sm mt-2">— Dr. Christine Sinsky, American Medical Association</p>
          </aside>

          {/* Section 3 */}
          <section className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Link Between Administrative Burden and Burnout
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                The connection between administrative tasks and physician burnout isn't just anecdotal—it's backed by robust research. A landmark study in Mayo Clinic Proceedings found that each additional hour spent on EHR work after hours was associated with an 8% increase in burnout risk. The study also revealed that physicians spending excessive time on administrative work were more likely to reduce their clinical hours or leave practice entirely.
              </p>
              <p className="mb-4">
                The psychological impact runs deep. Administrative tasks often feel like a waste of medical training and expertise. Physicians didn't spend years in medical school and residency to become data entry specialists or insurance form processors. This misalignment between training, expectations, and daily reality creates a sense of moral injury—the feeling that they're being prevented from providing the care they know their patients need.
              </p>
              <p>
                Moreover, administrative burden directly reduces the time available for what drew most physicians to medicine: meaningful patient interactions. When a doctor is thinking about documentation requirements during a patient encounter, or rushing through visits to make time for paperwork, both the physician and patient suffer. This erosion of the patient-physician relationship further compounds burnout.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              How Technology Can Help
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                While technology contributed to the problem through poorly designed EHR systems, it also holds the key to solutions. Several technological innovations are showing real promise in reducing administrative burden:
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-6 mb-3">AI-Powered Medical Scribes</h3>
              <p className="mb-4">
                Artificial intelligence scribes listen to patient encounters and automatically generate clinical notes. Early adopters report saving 1-2 hours daily on documentation. These systems use natural language processing to capture the conversation, structure it into proper medical documentation, and integrate it directly into the EHR. Physicians can focus on the patient rather than the computer screen, then review and edit the generated notes afterward.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-6 mb-3">Virtual Reception and Phone Management</h3>
              <p className="mb-4">
                Advanced call handling systems can manage routine patient inquiries, appointment scheduling, prescription refill requests, and basic questions without requiring physician or staff intervention. These AI-powered receptionists work 24/7, ensuring patients get timely responses while freeing up the clinical team to focus on complex care. Services like Get MedReception use sophisticated natural language understanding to handle medical-specific conversations with appropriate sensitivity and accuracy.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-6 mb-3">Prior Authorization Automation</h3>
              <p className="mb-4">
                New platforms are emerging that automate the prior authorization process by pulling clinical data from the EHR, matching it against payer requirements, and submitting requests electronically. Some systems even predict which treatments will require authorization and proactively initiate the process.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-6 mb-3">Intelligent Inbox Management</h3>
              <p className="mb-4">
                Smart filters and triaging systems can categorize incoming messages, flag urgent items, route routine requests to appropriate staff, and even draft responses for physician review. These systems learn from physician behavior over time, becoming more effective at predicting what needs immediate attention.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-6 mb-3">Patient Self-Service Portals</h3>
              <p className="mb-4">
                Enhanced patient portals that allow patients to handle appointment changes, request prescription refills, access test results with explanatory materials, and get answers to common questions reduce the volume of calls and messages requiring staff or physician attention.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Steps for Implementation
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                Adopting technology solutions requires thoughtful planning and implementation. Here are practical steps for physicians and practices looking to reduce administrative burden:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Assess Your Biggest Pain Points:</strong> Track where you and your staff spend the most administrative time. This data-driven approach helps prioritize which solutions will provide the most relief.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Start with Quick Wins:</strong> Begin with solutions that are easy to implement and show immediate results. Virtual reception services, for example, can often be set up within days and immediately reduce phone interruptions.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Ensure EHR Integration:</strong> Choose solutions that integrate seamlessly with your existing EHR system. Fragmented systems create more work, not less.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Involve Your Team:</strong> Get input from all staff members who will use or be affected by new technology. Their insights will improve implementation and increase adoption.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Measure the Impact:</strong> Track metrics before and after implementation—time spent on specific tasks, after-hours work, staff satisfaction, and patient experience. This helps demonstrate ROI and identify areas for further improvement.</span>
                </li>
                <li className="flex gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Prioritize Solutions with Strong Support:</strong> Look for vendors who provide comprehensive training, responsive technical support, and regular updates. The technology is only as good as the support behind it.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Future of Medical Practice
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                The transformation of medical practice through technology is accelerating. Within the next few years, we can expect AI and automation to handle an increasing share of administrative work. Ambient clinical intelligence—systems that passively listen to encounters and complete documentation without any active physician input—will become standard. Prior authorizations may become largely automated as payer systems modernize. Patient communication will increasingly happen through intelligent chatbots and automated systems that handle routine matters while escalating complex issues appropriately.
              </p>
              <p className="mb-4">
                This doesn't mean removing the human element from medicine. Rather, it means freeing physicians and staff to focus on the aspects of care that truly require human judgment, empathy, and expertise. Technology should handle the routine, predictable, and time-consuming tasks, while humans focus on complex decision-making, building relationships, and providing compassionate care.
              </p>
              <p>
                The practices that thrive in the coming years will be those that embrace these technologies thoughtfully—not as replacements for human care, but as tools to remove barriers that have accumulated between physicians and patients. The goal is to return to the core of medicine: helping people.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="animate-fade-up mt-12">
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                Dr. Sarah Chen, the physician we met at the beginning of this article, recently implemented a virtual reception service and AI documentation assistant in her practice. She now leaves the office by 5:30 PM most days and rarely takes paperwork home. More importantly, she feels like she's practicing medicine again, not just managing data. Her patients notice the difference too—she's more present during visits, less rushed, and genuinely engaged.
              </p>
              <p>
                If you're struggling with administrative burden and feeling the weight of burnout, you're not alone, and you don't have to accept it as inevitable. Technology solutions are available today that can meaningfully reduce your workload and help you rediscover the joy in medical practice. The question isn't whether to adopt these tools, but how quickly you can implement them to reclaim your time, energy, and passion for medicine.
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
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Get MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to helping practices reduce administrative burden and improve patient care through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl p-4 mb-4 flex items-center justify-center h-32">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                The ROI of Virtual Medical Receptionists
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Discover how automated reception services deliver measurable returns through reduced overhead, improved patient satisfaction, and increased revenue capture.
              </p>
              <div className="mt-4 text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Read More
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl p-4 mb-4 flex items-center justify-center h-32">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                After-Hours Patient Communication: Best Practices
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn how to provide exceptional patient access outside business hours without burning out your staff or compromising care quality.
              </p>
              <div className="mt-4 text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Read More
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl p-4 mb-4 flex items-center justify-center h-32">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                AI in Healthcare: Separating Hype from Reality
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                An evidence-based look at which AI applications are delivering real value in medical practices today and which ones to approach with caution.
              </p>
              <div className="mt-4 text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Read More
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4 animate-fade-up">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help you reduce administrative burden and reclaim your time.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Get Started Today
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}