import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Appointment Scheduling Optimization for Maximum Practice Efficiency | Get MedReception',
  description: 'Discover evidence-based strategies to optimize your medical practice appointment scheduling, reduce no-shows, and maximize efficiency while improving patient satisfaction.',
  keywords: 'appointment scheduling, medical practice efficiency, patient scheduling, practice management, healthcare optimization, reduce no-shows',
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
            <span className="text-white">Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Practice Management
          </div>
          
          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Appointment Scheduling Optimization for Maximum Practice Efficiency
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Every empty appointment slot represents lost revenue. Every double-booked time block creates patient frustration and staff stress. Every no-show cascades into scheduling chaos that affects your entire practice. For medical practices of all sizes, appointment scheduling isn't just an administrative task—it's the backbone of operational efficiency, revenue stability, and patient satisfaction.
            </p>
            <p className="mb-6">
              Yet despite its critical importance, many practices still rely on outdated scheduling methods that create bottlenecks, reduce productivity, and leave money on the table. The good news? With strategic optimization, your appointment scheduling can transform from a daily headache into a competitive advantage that drives growth and improves patient care.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the True Cost of Inefficient Scheduling
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Before diving into solutions, it's essential to recognize what's at stake. Research from the Medical Group Management Association (MGMA) shows that the average medical practice loses 15-20% of potential revenue due to scheduling inefficiencies. This includes:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>No-show rates averaging 5-30%</strong> depending on specialty and patient demographics, with each missed appointment representing $200-$500 in lost revenue</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Unfilled appointment slots</strong> due to poor forecasting or last-minute cancellations that can't be filled in time</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Staff overtime and burnout</strong> from managing scheduling chaos and handling frustrated patients</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Patient dissatisfaction</strong> leading to negative reviews and lost referrals when wait times are excessive or appointments are difficult to book</span>
              </li>
            </ul>
            <p className="mb-6">
              A 2023 study in the Journal of Healthcare Management found that practices with optimized scheduling systems saw 18% higher patient retention rates and 23% improvement in staff satisfaction scores. The financial and operational benefits are clear—but where do you start?
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Strategic Appointment Template Design
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The foundation of efficient scheduling is a well-designed appointment template that reflects your practice's actual workflow and patient needs. Cookie-cutter approaches rarely work—your template should be customized based on data from your specific practice.
            </p>
            <p className="mb-6">
              Start by analyzing your appointment data over the past 6-12 months. Identify patterns in appointment types, duration accuracy, provider productivity, and patient flow. Use this information to create templates that include:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Realistic appointment durations</strong> with buffer time built in—if your "15-minute appointments" consistently run 20 minutes, adjust your template accordingly</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Strategic overbooking</strong> in time slots statistically prone to no-shows, based on your practice's historical data</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Open access slots</strong> reserved for same-day appointments to accommodate urgent needs without disrupting the schedule</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Provider-specific customization</strong> that accounts for individual practice styles and specialty requirements</span>
              </li>
            </ul>
            <p className="mb-6">
              Wave scheduling and modified wave scheduling can be particularly effective for practices with high patient volumes. Instead of scheduling all patients at the top of the hour, stagger arrival times to smooth patient flow and reduce lobby congestion.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Practices with optimized scheduling systems saw 18% higher patient retention rates and 23% improvement in staff satisfaction scores."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Reducing No-Shows Through Proactive Communication
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              No-shows are one of the biggest drains on practice efficiency, but they're also one of the most preventable. A multi-touch reminder strategy can reduce no-show rates by up to 38%, according to research from the American Medical Association.
            </p>
            <p className="mb-6">
              Implement a layered reminder system that reaches patients through multiple channels:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Initial confirmation</strong> via text or email immediately after booking, with calendar integration options</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pre-appointment reminder</strong> 72 hours before the visit, allowing time for rescheduling if needed</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Final reminder</strong> 24 hours before, with easy options to confirm or reschedule via text response</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Day-of reminder</strong> the morning of the appointment for particularly no-show-prone time slots</span>
              </li>
            </ul>
            <p className="mb-6">
              Beyond reminders, consider implementing a waitlist system that automatically fills cancelled appointments. When a patient cancels, your system should immediately notify waitlisted patients, often filling the slot within minutes. Some practices have achieved near-100% schedule utilization through sophisticated waitlist management.
            </p>
            <p className="mb-6">
              For chronic no-show patients, consider implementing a firm-but-fair policy that requires advance payment or deposits for future appointments. While this may feel uncomfortable initially, it protects your practice's financial health while encouraging accountability.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Leveraging Technology for Scheduling Excellence
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Modern scheduling technology has evolved far beyond basic calendar systems. Today's advanced platforms offer capabilities that can transform practice efficiency:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Online self-scheduling portals</strong> that integrate with your EHR, allowing patients to book appointments 24/7 while automatically enforcing your scheduling rules and availability</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Predictive analytics</strong> that identify no-show risk factors and suggest optimal overbooking strategies based on patient demographics and appointment characteristics</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Automated reminder systems</strong> with two-way communication capabilities that reduce administrative burden while improving show rates</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Real-time schedule optimization</strong> that dynamically adjusts appointment availability based on current schedule status and predicted patient flow</span>
              </li>
            </ul>
            <p className="mb-6">
              When evaluating scheduling technology, look for solutions that integrate seamlessly with your existing EHR and practice management systems. Disconnected systems create data silos and duplicate work, undermining the efficiency gains you're trying to achieve.
            </p>
            <p className="mb-6">
              Virtual reception services like Get MedReception can further enhance scheduling efficiency by handling appointment management as part of comprehensive front-office support. Professional virtual receptionists trained in medical scheduling can optimize your calendar while providing exceptional patient service.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Measuring and Continuously Improving Performance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Scheduling optimization isn't a one-time project—it's an ongoing process of measurement and refinement. Establish key performance indicators (KPIs) and monitor them regularly to identify opportunities for improvement:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Schedule utilization rate</strong> (target: 85-95% of available appointment slots filled)</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>No-show rate</strong> (target: below 5% with comprehensive reminder systems)</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Average wait time</strong> from scheduled appointment time to actual provider encounter</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Third-next-available appointment</strong> (how far out patients must wait for routine appointments—target varies by specialty but shorter is generally better)</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Patient satisfaction scores</strong> related to appointment availability and wait times</span>
              </li>
            </ul>
            <p className="mb-6">
              Conduct quarterly scheduling audits where you review these metrics, gather staff feedback, and identify specific pain points. Use this data to make incremental improvements to your templates, policies, and processes.
            </p>
            <p className="mb-6">
              Remember that optimization is practice-specific. What works brilliantly for a high-volume family practice may not suit a specialized surgical practice. Test changes on a small scale before rolling them out practice-wide, and always measure the impact of modifications.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building a Patient-Centered Scheduling Culture
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While technology and templates are important, the human element of scheduling cannot be overlooked. Your front-office team plays a critical role in scheduling efficiency and patient satisfaction.
            </p>
            <p className="mb-6">
              Invest in comprehensive training that goes beyond basic schedule management. Staff should understand the "why" behind your scheduling policies and feel empowered to make patient-centered decisions within established guidelines. When schedulers understand how their work impacts practice revenue and patient care, they become advocates for efficiency rather than simply following procedures.
            </p>
            <p className="mb-6">
              Create protocols that balance efficiency with flexibility. While consistency is important, rigid scheduling that never accommodates genuine patient needs creates frustration for both patients and staff. Empower your team to use judgment in special circumstances while maintaining overall schedule integrity.
            </p>
            <p className="mb-6">
              Regular team meetings to discuss scheduling challenges and brainstorm solutions foster a culture of continuous improvement. Your front-line staff often have the best insights into what's working and what's not—create space for their voices to be heard.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Appointment scheduling optimization is one of the highest-ROI improvements you can make in your practice. By implementing strategic templates, leveraging technology, reducing no-shows, and fostering a culture of continuous improvement, you can transform your schedule from a source of daily stress into a competitive advantage.
            </p>
            <p className="mb-6">
              The practices that thrive in today's competitive healthcare environment are those that maximize every resource—especially provider time. An optimized schedule means more patients served, higher revenue, better patient satisfaction, and reduced staff burnout. It's not just about filling appointment slots; it's about creating a sustainable, efficient practice that delivers exceptional care.
            </p>
            <p>
              If managing your appointment scheduling is overwhelming your team or if you're ready to implement professional scheduling optimization, Get MedReception offers expert virtual reception services specifically designed for medical practices. Our trained professionals can handle appointment management as part of comprehensive front-office support, freeing your team to focus on patient care while ensuring your schedule runs at peak efficiency.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Get MedReception Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers and healthcare operations specialists dedicated to helping medical practices optimize efficiency, improve patient care, and achieve sustainable growth.
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
            
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Patient Experience
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Reducing Patient Wait Times: Strategies That Actually Work
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover evidence-based approaches to minimize wait times and improve patient satisfaction.
                </p>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Practice Management
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Virtual Reception Services: The Complete Guide for Medical Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how virtual receptionists can streamline operations and improve patient service.
                </p>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Revenue Optimization
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Maximizing Practice Revenue: Front Office Best Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore proven strategies to capture missed revenue and improve your bottom line.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help optimize your practice scheduling and operations.
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