import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Implementing Change Management for New Medical Office Technology | Get MedReception',
  description: 'Learn evidence-based strategies for successfully implementing new technology in your medical practice. Expert guidance on change management, staff training, and patient communication.',
  openGraph: {
    title: 'Implementing Change Management for New Medical Office Technology',
    description: 'Learn evidence-based strategies for successfully implementing new technology in your medical practice.',
    url: 'https://getmedreception.com/blog/implementing-change-management-for-new-medical-office-techno',
    type: 'article',
  },
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
            Practice Management
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Implementing Change Management for New Medical Office Technology
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. MedReception Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        {/* Opening Hook */}
        <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
          <p className="mb-6">
            The announcement comes during a staff meeting: "We're implementing a new electronic health records system next month." Immediately, you see the reaction—crossed arms, worried glances, and barely concealed sighs. Despite the promise of improved efficiency and better patient care, your team views this technology upgrade as a threat rather than an opportunity.
          </p>
          <p>
            This scenario plays out in medical practices across the country every day. While new technology holds tremendous potential to transform healthcare delivery, the human element of change often determines whether implementation succeeds or fails. Understanding and applying effective change management principles isn't just about smooth transitions—it's about protecting staff morale, maintaining patient care quality, and realizing the full return on your technology investment.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Understanding Change Management in Healthcare Settings
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
          <p className="mb-4">
            Change management is the structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state. In healthcare, this process carries unique challenges. Unlike many industries, medical practices operate in highly regulated environments where mistakes can directly impact patient safety and outcomes.
          </p>
          <p className="mb-4">
            Research published in the Journal of Healthcare Management found that approximately 70% of healthcare technology implementations fail to achieve their intended objectives, not due to technical shortcomings, but because of inadequate attention to the human side of change. Staff resistance, insufficient training, and poor communication consistently emerge as the primary barriers to successful technology adoption.
          </p>
          <p>
            The stakes are particularly high in medical settings. New technology implementation often coincides with continued patient care—there's rarely an opportunity to "close for renovations." This reality means change management strategies must account for maintaining service quality even during transition periods, requiring careful planning and realistic timelines.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Why Healthcare Staff Resist Technology Change
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
          <p className="mb-4">
            Understanding resistance is the first step toward addressing it effectively. In medical practices, staff resistance to new technology typically stems from several legitimate concerns:
          </p>
          <p className="mb-4">
            <strong>Fear of incompetence:</strong> Healthcare professionals take pride in their expertise. New systems can temporarily make experienced staff feel like beginners again, threatening their professional identity and confidence. A medical assistant who effortlessly navigated your old scheduling system may struggle initially with new software, creating anxiety about performance and job security.
          </p>
          <p className="mb-4">
            <strong>Increased workload concerns:</strong> Staff correctly anticipate that learning new technology requires time and effort on top of existing responsibilities. During transition periods, tasks often take longer as employees adapt to new workflows, creating legitimate stress about falling behind or working additional hours.
          </p>
          <p className="mb-4">
            <strong>Skepticism about benefits:</strong> Many healthcare workers have experienced "upgrade" initiatives that ultimately created more problems than they solved. Past disappointments breed cynicism about new technology promises, particularly when staff weren't consulted about selection or implementation planning.
          </p>
          <p>
            <strong>Patient care concerns:</strong> Medical professionals prioritize patient wellbeing above all else. If staff perceive new technology as potentially compromising care quality—even temporarily—their resistance reflects professional responsibility rather than mere stubbornness.
          </p>
        </div>

        {/* Pull Quote */}
        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
          <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
            "Successful technology implementation isn't about forcing adoption—it's about creating an environment where staff feel supported, heard, and equipped to succeed with new tools."
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          The Four Phases of Effective Change Management
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
          <p className="mb-4">
            Evidence-based change management follows a structured progression. While exact models vary, successful healthcare technology implementations generally move through four distinct phases:
          </p>
          
          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Phase 1: Preparation and Planning</h3>
          <p className="mb-4">
            This crucial foundation phase occurs before technology selection. Identify key stakeholders across all staff levels—physicians, nurses, administrative personnel, and IT support. Create a change management team that includes respected voices from each group, ensuring diverse perspectives inform planning.
          </p>
          <p className="mb-4">
            Conduct a readiness assessment examining your practice's change history, current culture, and potential resistance points. Document existing workflows in detail so you can identify where technology will create the most disruption and plan accordingly. Research shows practices that invest adequate time in this phase experience significantly smoother implementations.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Phase 2: Communication and Engagement</h3>
          <p className="mb-4">
            Announce planned changes early, clearly articulating both the business reasons and the expected benefits for staff and patients. Transparency about challenges and timelines builds credibility. Create multiple communication channels—staff meetings, written updates, one-on-one conversations—to accommodate different communication preferences.
          </p>
          <p className="mb-4">
            Actively solicit feedback and concerns. When staff feel heard, resistance often softens even if their specific suggestions can't all be implemented. Identify and empower change champions—early adopters who can model positive attitudes and provide peer support during transition.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Phase 3: Training and Support</h3>
          <p className="mb-4">
            Develop comprehensive training that accommodates different learning styles and technology comfort levels. Provide hands-on practice time with the new system before go-live dates. Consider role-specific training sessions that focus on workflows relevant to each staff member's responsibilities rather than one-size-fits-all approaches.
          </p>
          <p className="mb-4">
            Establish robust support systems for the critical first weeks post-implementation. Having technical experts readily available reduces frustration and prevents small issues from derailing adoption. Consider temporary workflow adjustments—like lighter patient schedules—during initial implementation to reduce pressure while staff adapt.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Phase 4: Reinforcement and Optimization</h3>
          <p className="mb-4">
            Change management doesn't end at go-live. Schedule regular check-ins to assess progress, address ongoing concerns, and identify optimization opportunities. Celebrate early wins and acknowledge staff efforts publicly. Recognition validates the difficult work of adaptation and reinforces positive momentum.
          </p>
          <p>
            Collect data on both technical performance and user satisfaction. Use metrics to demonstrate improvements while remaining responsive to legitimate concerns requiring system adjustments or additional training.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Practical Strategies for Medical Practice Leaders
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
          <p className="mb-6">
            Beyond the formal phases, specific strategies can significantly improve implementation outcomes:
          </p>
          
          <div className="space-y-4 ml-6 mb-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Involve staff in vendor selection:</strong> When possible, include front-line users in technology demonstrations and selection decisions. Staff who help choose systems feel ownership and investment in success.
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Create realistic timelines:</strong> Resist vendor or leadership pressure to implement too quickly. Rushed implementations commonly fail, wasting both money and staff goodwill. Factor in adequate time for training, practice, and adjustment.
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Pilot test when possible:</strong> If your practice has multiple locations or departments, consider phased rollouts that allow learning from early experiences before organization-wide implementation.
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Communicate with patients proactively:</strong> Don't underestimate how technology changes affect patient experience. Prepare patients for potential appointment delays or new check-in processes. Transparent communication prevents frustration and complaints that add stress to staff already managing change.
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Document everything:</strong> Create written guides, video tutorials, and quick-reference materials staff can access independently. Different people need different learning resources at different times.
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Address resisters individually:</strong> Some staff will struggle more than others. Rather than labeling resistant employees as problems, investigate underlying concerns through private conversations. Often, addressing specific fears or providing additional support converts skeptics into advocates.
              </div>
            </div>
            
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Prepare for the implementation dip:</strong> Productivity typically decreases temporarily after new technology goes live. Anticipate this reality rather than reacting with panic. Staff need reassurance that initial struggles are normal and expected.
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Measuring Success Beyond Technical Functionality
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
          <p className="mb-4">
            Traditional technology implementation metrics focus on technical performance—system uptime, speed, and feature utilization. While important, these measures miss crucial dimensions of success in healthcare settings.
          </p>
          <p className="mb-4">
            Comprehensive success metrics should include staff satisfaction surveys at regular intervals, tracking both confidence with new systems and perceived impact on work quality. Monitor staff turnover rates during and after implementation, as unsuccessful change management often triggers departures of valuable employees.
          </p>
          <p className="mb-4">
            Patient satisfaction scores provide another critical indicator. Even technically superior systems fail if they negatively affect patient experience or create barriers to care access. Track appointment wait times, check-in processes, and communication effectiveness.
          </p>
          <p>
            Finally, measure actual workflow improvements against baseline data. Are tasks genuinely taking less time? Have error rates decreased? Is information more accessible? Concrete data validates the change effort and provides evidence for future initiatives.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Building a Culture That Embraces Change
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
          <p className="mb-4">
            While individual implementation projects require careful management, the long-term goal should be developing an organizational culture that adapts more readily to change. Healthcare technology will continue evolving rapidly, and practices that cultivate change-ready cultures gain significant competitive advantages.
          </p>
          <p className="mb-4">
            This cultural development happens through consistent leadership behaviors and organizational practices. Involve staff in ongoing improvement discussions, not just during major technology implementations. Create regular opportunities for feedback and suggestions, demonstrating that leadership values front-line perspectives.
          </p>
          <p className="mb-4">
            Invest in continuous learning opportunities beyond required compliance training. Staff who regularly develop new skills become more comfortable with change generally. Recognize and reward adaptability and innovation, making these traits explicit values rather than implicit expectations.
          </p>
          <p>
            Perhaps most importantly, practice transparent communication consistently, not just during change initiatives. When staff trust leadership to share information openly—including challenges and uncertainties—they respond more constructively when major changes occur.
          </p>
        </div>

        {/* Closing */}
        <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="mb-4">
            Implementing new technology in medical practices presents genuine challenges that extend far beyond technical considerations. The human dimension of change—staff emotions, concerns, and adaptation processes—ultimately determines whether technology investments deliver their promised value.
          </p>
          <p className="mb-4">
            Effective change management isn't about manipulating staff into compliance or minimizing legitimate concerns. Instead, it requires genuine respect for the difficult work of adaptation, transparent communication about both benefits and challenges, and substantial investment in preparation, training, and support.
          </p>
          <p>
            If your practice is planning technology changes or struggling with current implementations, professional guidance can make a significant difference. Our team specializes in helping medical practices navigate complex transitions while maintaining care quality and staff wellbeing. Contact us to discuss how we can support your practice's technology initiatives with proven change management strategies tailored to healthcare settings.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
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
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based care and patient education.
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
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Practice Management
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Best Practices for Staff Training on New Medical Software
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Essential strategies for effective technology training that minimizes disruption and maximizes adoption.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Technology
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Measuring ROI on Healthcare Technology Investments
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how to evaluate and demonstrate the value of technology implementations in your practice.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Leadership
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Building Resilient Healthcare Teams in Times of Change
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Strategies for supporting staff wellbeing and maintaining morale during organizational transitions.
                </p>
              </div>
            </a>
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
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            <span>Contact Us Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}