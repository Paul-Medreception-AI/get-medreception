import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions | Get MedReception',
  description: 'Everything you need to know about MedReception AI - the physician-built AI receptionist for medical practices.',
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link> › FAQ
          </div>
          <h1 className="font-cormorant text-5xl font-light mb-6">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Everything you need to know about MedReception AI and how it serves medical practices
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              What is MedReception AI and how does it work?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception AI is an AI-powered receptionist specifically designed for medical practices by a practicing surgeon. It answers incoming calls 24/7, schedules appointments directly into your calendar system, and handles patient intake and triage. The system uses advanced natural language processing trained on medical office workflows to understand patient needs and respond appropriately. Unlike generic call centers, MedReception understands medical terminology, urgency indicators, and the unique demands of healthcare communication. Setup takes less than 48 hours and integrates with your existing phone system and scheduling software.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              Is MedReception HIPAA-compliant?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, MedReception AI is built on HIPAA-compliant infrastructure from the ground up. All patient data is encrypted both in transit and at rest, and we maintain Business Associate Agreements (BAAs) with all our clients. Our systems undergo regular security audits and comply with all federal healthcare privacy regulations. Call recordings, patient information, and scheduling data are stored securely and accessed only by authorized personnel at your practice. We take patient privacy as seriously as you do, because our founder is a practicing physician who understands the legal and ethical obligations of healthcare providers.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              What types of medical practices does MedReception serve?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception AI is designed to serve a wide range of medical specialties including primary care, specialty practices, surgical offices, mental health clinics, and multi-provider groups. Whether you're a solo practitioner or a large practice with multiple locations, our system scales to meet your needs. We've successfully deployed in family medicine, internal medicine, orthopedics, dermatology, cardiology, and many other specialties. The AI is customized to understand specialty-specific terminology, appointment types, and scheduling workflows. Our physician-built approach means we understand the nuances of different practice types and can configure the system accordingly.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              How long does it take to set up MedReception?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Most practices are fully operational with MedReception AI within 48 hours of signing up. The setup process involves connecting to your existing phone system, integrating with your calendar or practice management software, and configuring the AI to match your specific protocols and preferences. We handle all the technical integration work—no software installation or IT expertise required on your end. During the initial configuration period, we work closely with your team to customize call scripts, appointment types, scheduling rules, and triage protocols. Once live, you can make adjustments anytime through your dashboard as your practice needs evolve.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              Will MedReception replace my existing front desk staff?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception AI is designed to augment your staff, not replace them. Your team members are freed from repetitive phone answering and scheduling tasks, allowing them to focus on higher-value work like patient check-in, insurance verification, care coordination, and in-person patient support. Many practices use MedReception to handle after-hours calls, overflow during busy periods, or as their primary answering service while reallocating staff to clinical support roles. The AI handles routine inquiries and scheduling while escalating complex situations to your team when appropriate. Think of it as adding a tireless team member who never gets sick, never takes breaks, and handles the volume that would otherwise require multiple full-time employees.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              How does MedReception handle medical emergencies?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception AI is trained to recognize urgent and emergent situations based on protocols you define. When a caller describes symptoms or situations that indicate a potential emergency, the system immediately provides appropriate guidance—typically directing them to call 911, go to the nearest emergency department, or contact your on-call provider. The AI can also escalate calls in real-time to designated staff members or answering services for urgent matters that require immediate attention. You maintain complete control over triage protocols and escalation pathways. Because MedReception was built by a practicing surgeon, patient safety and appropriate triage are core features, not afterthoughts.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              What calendar and practice management systems does MedReception integrate with?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception integrates with most major electronic health record (EHR) and practice management systems including Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Kareo, and many others. We also work with scheduling-specific platforms like Zocdoc, Acuity, and Google Calendar. Our integration team will work with your specific software to ensure seamless two-way synchronization—appointments made by the AI appear instantly in your system, and your existing calendar availability guides the AI's scheduling decisions. If you use a less common system, our technical team can typically build custom integrations within a few weeks. We're committed to working with your existing infrastructure rather than forcing you to change systems.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              Can patients tell they're speaking with an AI?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception AI uses natural, conversational language that most patients find indistinguishable from speaking with a well-trained human receptionist. The system understands context, handles interruptions gracefully, and responds appropriately to a wide range of patient inquiries. That said, we believe in transparency—practices can choose to have the AI identify itself at the beginning of calls if preferred. In our experience, patients care most about getting their questions answered and appointments scheduled efficiently. When the AI handles these tasks professionally and accurately, patient satisfaction remains high regardless of whether they realize they're speaking with AI. Many practices report that patients prefer the AI because it answers immediately, never puts them on hold, and is available 24/7.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              What is the pricing structure for MedReception?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception offers flexible pricing based on your practice size, call volume, and specific needs. Most practices find our service costs significantly less than employing full-time receptionist staff, especially when considering benefits, training, and coverage for sick days and vacations. Pricing typically includes unlimited incoming calls, appointment scheduling, patient intake, and access to your performance dashboard. There are no hidden fees or per-minute charges that can balloon unexpectedly. We offer transparent monthly subscription pricing with no long-term contracts required. Contact us for a customized quote based on your specific practice requirements—we'll provide a detailed cost comparison showing your potential savings versus traditional staffing models.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              How does MedReception handle insurance verification questions?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception AI can be configured with your insurance acceptance information and provide callers with accurate details about which plans you accept. The system can collect insurance information during appointment booking and patient intake, storing it securely for your staff to verify later. For complex insurance questions that require real-time verification or prior authorization discussions, the AI can either collect detailed information for your staff to follow up on or transfer the call to an appropriate team member. We recognize that insurance matters often require human judgment and access to payer systems, so we focus on information gathering and triage rather than attempting to replace your billing team's expertise.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              Do you offer a trial period or demo?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, we offer personalized demonstrations where we can show you exactly how MedReception would work for your specific practice. During a demo, we'll walk through call scenarios relevant to your specialty, show you the dashboard and reporting features, and answer all your technical and operational questions. Many practices also opt for a trial period where we implement the system with limited scope—perhaps handling after-hours calls only—before expanding to full deployment. This allows you to evaluate performance, patient satisfaction, and staff workflow impact with minimal risk. Schedule a demo to see MedReception in action and discuss trial options that make sense for your practice.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              Can MedReception handle multiple languages?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, MedReception AI supports multiple languages and can automatically detect and respond in the language your patient is speaking. This is particularly valuable for practices serving diverse communities where language barriers often prevent patients from accessing care. The system currently supports Spanish, Mandarin, Cantonese, Vietnamese, Korean, Tagalog, and many other languages commonly spoken in the United States. Language support is included at no additional cost and requires no special configuration—the AI simply recognizes the language being spoken and responds accordingly. This multilingual capability can dramatically improve access to care and patient satisfaction in communities where English is not the primary language.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              What happens if the AI doesn't understand a patient's question?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception AI is designed to handle uncertainty gracefully and prioritize patient care over attempting to answer every question. If the system encounters a question or situation it cannot confidently address, it will either collect detailed information for your staff to follow up on, offer to take a message, or transfer the call to an available team member if you've configured that option. The AI is trained to recognize the limits of its knowledge and never guess or provide potentially inaccurate medical information. Over time, the system learns from these interactions—our team reviews unclear conversations and improves the AI's training to handle similar situations better in the future. This continuous improvement process ensures the system becomes increasingly effective at serving your specific patient population.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              How do you ensure the AI understands my practice's specific protocols?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              During the setup process, we conduct detailed configuration sessions with your team to understand your specific workflows, scheduling preferences, call handling protocols, and practice policies. This information is programmed directly into your instance of MedReception AI. For example, if you require new patients to arrive 15 minutes early, only offer certain appointment types on specific days, or have particular protocols for prescription refill requests, these rules are built into how your AI operates. The system can be as simple or as sophisticated as your practice requires. You maintain full control through your dashboard and can update protocols anytime without needing technical support. Our physician-founder's experience means we understand the complexity of medical practice workflows and ensure nothing falls through the cracks.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              Can MedReception handle prescription refill requests?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, MedReception can collect and route prescription refill requests according to your practice's protocols. The AI gathers essential information including patient name, date of birth, medication name and dosage, pharmacy details, and any relevant clinical information. This information is then routed to your clinical team through your preferred workflow—whether that's your EHR messaging system, a dedicated task list, or direct notification to your nursing staff. The AI can also provide patients with expected turnaround times and next steps based on your policies. For controlled substances or situations requiring immediate clinical assessment, the system escalates appropriately. This automation ensures refill requests are captured accurately and completely, reducing phone tag and improving prescription workflow efficiency.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              What kind of reporting and analytics does MedReception provide?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception includes a comprehensive dashboard that provides insights into your call volume, appointment booking rates, peak call times, common patient inquiries, and system performance metrics. You can see exactly how many calls were answered, how many appointments were scheduled, average call duration, and patient satisfaction indicators. This data helps you understand patient access patterns, optimize staffing, and identify opportunities to improve practice operations. Reports can be generated daily, weekly, or monthly, and can be customized to focus on the metrics most important to your practice. Call recordings are available for quality assurance and training purposes. All data is presented in intuitive visualizations that require no technical expertise to understand—because a practicing surgeon designed the interface with busy clinicians in mind.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              How is MedReception different from traditional answering services?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Traditional medical answering services typically just take messages and page providers—they rarely have access to your calendar and cannot book appointments directly. MedReception AI actually schedules appointments in real-time, integrated with your practice management system, dramatically reducing administrative burden and improving patient access. The AI is available 24/7 with no per-minute charges, no hold times, and consistent quality that doesn't depend on individual operator training or attention. It handles multiple calls simultaneously during busy periods, something impossible for human-based services. Most importantly, MedReception was built by a practicing surgeon specifically for medical practices, so it understands clinical terminology, urgency assessment, and healthcare workflows in ways that generic call centers cannot match. The result is better patient experience, more efficient operations, and lower costs than traditional answering services.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              What kind of technical support do you provide?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              MedReception provides comprehensive technical support to ensure your system runs smoothly at all times. Our support team is available via phone, email, and chat during extended business hours, with emergency support available 24/7 for critical issues. Because our founder is a practicing physician who uses this system in his own practice, we understand that technology failures can directly impact patient care—we treat your support needs with appropriate urgency. Most issues are resolved quickly because the system is designed for reliability and simplicity. We also provide ongoing training resources, video tutorials, and documentation to help your staff make the most of all features. Software updates and improvements are deployed automatically with no disruption to your service, and we proactively monitor system performance to identify and resolve potential issues before they impact your practice.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
              Can I cancel or modify my service if my practice needs change?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, MedReception offers flexible month-to-month agreements with no long-term contracts or cancellation penalties. We believe in earning your business every month through excellent service, not locking you into restrictive agreements. If your practice needs change—whether you're growing and need expanded capacity, scaling back, or adjusting which services you use—we work with you to modify your plan accordingly. You can update your configuration, change service levels, or cancel anytime with 30 days notice. We also understand that medical practices go through transitions like mergers, relocations, or ownership changes, and we're committed to supporting you through these events with flexibility and understanding. Our goal is to be a long-term partner in your practice's success, which means adapting to your evolving needs rather than constraining them.
            </div>
          </details>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a call with our founder to discuss how MedReception can serve your practice
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}