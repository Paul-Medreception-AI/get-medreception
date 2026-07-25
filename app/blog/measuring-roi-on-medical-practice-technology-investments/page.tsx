import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Measuring ROI on Medical Practice Technology Investments | Get MedReception',
  description: 'Learn how to evaluate and measure return on investment for technology upgrades in your medical practice. Evidence-based strategies for healthcare leaders.',
  keywords: 'medical practice technology, healthcare ROI, practice management software, EHR investment, medical practice efficiency, healthcare technology assessment',
  openGraph: {
    title: 'Measuring ROI on Medical Practice Technology Investments',
    description: 'Learn how to evaluate and measure return on investment for technology upgrades in your medical practice.',
    type: 'article',
    url: 'https://getmedreception.com/blog/measuring-roi-on-medical-practice-technology-investments',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
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
            Practice Management
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Measuring ROI on Medical Practice Technology Investments
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
              You've just sat through another software demonstration. The sales representative promises increased efficiency, happier patients, and reduced overhead. The price tag? Significant. The question keeping you up at night? Whether this investment will actually pay off for your practice.
            </p>
            <p className="mb-6">
              You're not alone. Medical practice administrators and physicians across the country grapple with the same challenge: how to evaluate technology investments in an industry where every dollar matters and patient care cannot be compromised. With healthcare technology spending expected to reach $280 billion annually, understanding return on investment (ROI) isn't just good business—it's essential for practice sustainability.
            </p>
            <p>
              The truth is that measuring ROI on medical practice technology requires a different approach than traditional business calculations. Beyond the numbers, you're weighing factors like patient satisfaction, staff morale, compliance requirements, and clinical outcomes. This guide will help you develop a comprehensive framework for evaluating technology investments that considers both financial metrics and the intangible benefits that matter most in healthcare.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Healthcare Technology ROI Fundamentals
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Traditional ROI calculations—dividing net profit by investment cost—don't capture the full picture in healthcare settings. Medical practice technology investments generate both tangible and intangible returns that unfold over different timeframes.
              </p>
              <p className="mb-6">
                Tangible returns include measurable financial impacts: reduced labor costs, increased patient volume, faster reimbursement cycles, and decreased error rates. These can be quantified in dollars and directly compared to implementation costs. For instance, electronic health records (EHR) systems typically show measurable ROI through reduced chart pull time, improved billing accuracy, and faster claim submission.
              </p>
              <p className="mb-6">
                Intangible returns are equally important but harder to quantify: improved patient satisfaction scores, enhanced provider decision-making, better work-life balance for staff, and reduced compliance risk. A patient portal might not directly increase revenue, but the improved patient engagement and reduced phone call volume create substantial value.
              </p>
              <p>
                Research from the Healthcare Information and Management Systems Society (HIMSS) indicates that practices that implement comprehensive ROI frameworks—measuring both tangible and intangible benefits—report 40% higher satisfaction with technology investments compared to those focusing solely on financial metrics.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Pre-Implementation: Setting Up for Measurable Success
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Measuring ROI begins before you sign a contract. Establishing baseline metrics is critical—you can't measure improvement without knowing your starting point.
              </p>
              <p className="mb-6">
                Begin by documenting current state performance across key operational areas. Track metrics like average patient check-in time, claim submission to payment cycle, staff overtime hours, patient no-show rates, and medication error frequency. These baseline measurements create a comparison framework for post-implementation assessment.
              </p>
              <p className="mb-6">
                Define specific, measurable goals for each technology investment. Instead of "improve efficiency," specify "reduce average patient check-in time from 12 minutes to 6 minutes within six months." Quantifiable targets make ROI measurement straightforward and remove subjectivity from success evaluation.
              </p>
              <p className="mb-6">
                Calculate total cost of ownership, not just purchase price. Include implementation costs (staff training time, data migration, workflow redesign), ongoing expenses (monthly subscriptions, maintenance, upgrades), and opportunity costs (reduced productivity during transition, staff time for troubleshooting). Most healthcare IT implementations cost 2-3 times the initial software price when these factors are included.
              </p>
            </div>
          </section>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
            "The practices that achieve the highest ROI from technology investments are those that view implementation as a continuous process of measurement and refinement, not a one-time purchase decision."
          </blockquote>

          {/* Section 3 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Key Metrics for Different Technology Categories
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Different practice technologies require different measurement approaches. Understanding which metrics matter most for each category helps focus your ROI analysis.
              </p>
              <p className="mb-6">
                <strong>Electronic Health Records (EHR):</strong> Focus on documentation time per patient encounter, billing accuracy rates, days in accounts receivable, and meaningful use incentive achievement. Studies show EHR systems typically achieve ROI within 2-3 years primarily through improved billing accuracy and reduced chart management costs.
              </p>
              <p className="mb-6">
                <strong>Practice Management Software:</strong> Track appointment scheduling efficiency, patient wait times, insurance verification accuracy, claim denial rates, and staff productivity metrics. These systems often show fastest ROI through reduced administrative burden and improved revenue cycle management.
              </p>
              <p className="mb-6">
                <strong>Patient Engagement Tools:</strong> Measure portal adoption rates, patient satisfaction scores, no-show rates, prescription refill call volume, and patient retention. While ROI timelines are longer, patient engagement tools increasingly drive practice growth through reputation and loyalty.
              </p>
              <p className="mb-6">
                <strong>Telehealth Platforms:</strong> Evaluate patient access expansion, provider schedule utilization, geographic reach, and patient acquisition costs. Telehealth ROI accelerated dramatically during the pandemic, with many practices achieving break-even within 6-12 months through expanded service capacity.
              </p>
              <p>
                <strong>Automated Reception Systems:</strong> Track call abandonment rates, staff allocation to clinical vs. administrative tasks, after-hours patient access, and appointment scheduling conversion rates. These systems typically demonstrate ROI through labor cost reduction and improved patient access.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Measuring Intangible Benefits That Matter
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                While financial metrics provide concrete data, intangible benefits often determine whether technology investments truly succeed in healthcare settings.
              </p>
              <p className="mb-6">
                Patient satisfaction is increasingly tied to reimbursement through value-based care models. Track Net Promoter Score (NPS), online review ratings, and patient satisfaction survey responses before and after implementation. Even small improvements in patient experience scores can translate to significant revenue through improved patient retention and referrals.
              </p>
              <p className="mb-6">
                Staff satisfaction directly impacts retention—a critical concern when healthcare staffing costs continue rising. Monitor staff turnover rates, employee satisfaction surveys, and provider burnout indicators. Technology that reduces administrative burden often shows ROI through reduced recruitment and training costs alone.
              </p>
              <p className="mb-6">
                Compliance and risk reduction provide substantial value that's difficult to quantify but impossible to ignore. Technology that improves documentation completeness, ensures proper billing codes, or maintains audit trails reduces legal and financial exposure. While hard to measure directly, compliance-related benefits become painfully apparent when absent.
              </p>
              <p>
                Competitive positioning matters increasingly as patients have more healthcare choices. Technology that improves convenience, accessibility, and service quality helps practices differentiate themselves in crowded markets. Track market share, new patient acquisition rates, and competitive comparison data to assess this dimension.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Post-Implementation: Continuous Measurement and Optimization
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                ROI measurement doesn't end at implementation. Establishing ongoing monitoring processes ensures you maximize value from technology investments.
              </p>
              <p className="mb-6">
                Create a measurement dashboard that tracks key metrics monthly. Include both leading indicators (system adoption rates, training completion) and lagging indicators (financial outcomes, patient satisfaction). Regular monitoring helps identify issues early and demonstrates value to stakeholders.
              </p>
              <p className="mb-6">
                Schedule formal ROI reviews at 3, 6, and 12 months post-implementation. Compare actual results against projected benefits identified during the planning phase. This disciplined approach reveals whether investments are meeting expectations and where adjustments are needed.
              </p>
              <p className="mb-6">
                Don't expect immediate returns. Healthcare technology typically follows a J-curve pattern: productivity initially dips during implementation, then gradually improves before exceeding baseline performance. Most systems require 3-6 months before positive ROI becomes apparent.
              </p>
              <p>
                Continuously optimize utilization. Many practices achieve only 60-70% of potential ROI because they don't fully leverage technology capabilities. Regular staff training, workflow refinement, and feature exploration help maximize returns over time.
              </p>
            </div>
          </section>

          {/* Section 6 - Practical Framework */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              A Practical ROI Assessment Framework
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Synthesizing these concepts into a practical framework helps standardize technology investment decisions across your practice.
              </p>
              
              <div className="bg-[var(--color-cream)] rounded-lg p-8 my-8">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">ROI Calculation Steps:</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong>Calculate total investment:</strong> Add purchase price + implementation costs + annual operating costs × expected lifespan</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong>Project tangible benefits:</strong> Estimate annual savings or revenue increases from measurable improvements</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong>Estimate intangible value:</strong> Assign conservative dollar values to risk reduction, satisfaction improvements, and competitive advantages</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong>Calculate payback period:</strong> Determine how many months until cumulative benefits exceed total investment</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong>Calculate ROI percentage:</strong> (Total Benefits - Total Investment) ÷ Total Investment × 100</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong>Assess strategic alignment:</strong> Evaluate how well the technology supports long-term practice goals beyond pure financial returns</p>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                Most successful healthcare technology investments achieve 20-40% ROI over a 3-5 year period. Projects with payback periods under 18 months and ROI above 30% typically warrant strong consideration. However, strategic importance sometimes justifies investments with longer payback periods—patient safety technology or compliance systems may be necessary regardless of pure financial returns.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-12 animate-fade-up">
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                Measuring ROI on medical practice technology investments requires balancing financial discipline with recognition of healthcare's unique value drivers. The most successful practices develop systematic evaluation frameworks that consider tangible returns, intangible benefits, and strategic alignment.
              </p>
              <p className="mb-6">
                Remember that ROI measurement is an ongoing process, not a one-time calculation. Technology investments compound value over time as teams become more proficient, workflows optimize, and capabilities expand. The practices that achieve highest returns are those that commit to continuous measurement, optimization, and learning.
              </p>
              <p>
                If you're evaluating technology investments for your practice and want expert guidance on developing ROI frameworks tailored to your specific situation, our team can help. We specialize in helping medical practices make data-driven technology decisions that enhance both financial performance and patient care quality.
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Get MedReception Clinical Team
              </div>
              <div className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based insights and compassionate guidance for medical practice leaders.
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
            
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Practice Management</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Implementing New Practice Technology: A Change Management Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn proven strategies for successfully rolling out new technology systems in your medical practice with minimal disruption.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Financial Planning</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Budgeting for Healthcare Technology: What Practice Leaders Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Develop realistic technology budgets that account for hidden costs and position your practice for sustainable growth.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Performance Analytics</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Key Performance Indicators Every Medical Practice Should Track
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Identify and monitor the metrics that matter most for practice efficiency, profitability, and patient satisfaction.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you make informed technology investment decisions.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}