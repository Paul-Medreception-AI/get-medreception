import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text Chatbots vs. Voice AI Reception for Medical Practices | Get MedReception',
  description: 'Compare text chatbots and voice AI reception for medical practices. Understand effectiveness, cost, implementation, and which solution is right for your practice.',
}

export default function CompareChatbotsVsVoiceAIReception() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Text Chatbots vs. Voice AI Reception for Medical Practices
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A comprehensive comparison to help you choose the right patient communication solution for your practice
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold border-r border-white/20">Criteria</div>
              <div className="p-6 font-semibold border-r border-white/20">Text Chatbots</div>
              <div className="p-6 font-semibold">Voice AI Reception</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                Effectiveness
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                Limited to simple queries; 40-60% completion rate for appointment requests
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                Handles complex conversations; 85-95% successful call resolution
              </div>
            </div>

            {/* Patient Experience */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                Patient Experience
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                Requires typing; younger demographics only; limited accessibility
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                Natural conversation; all age groups; accessible to vision-impaired patients
              </div>
            </div>

            {/* Availability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                Availability
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                Website/app only during patient's online session
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                24/7 phone answering; handles calls, holds, and after-hours
              </div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                Cost
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                $50-300/month for basic functionality
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                $250-800/month; replaces multiple staff hours
              </div>
            </div>

            {/* Implementation Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                Implementation Time
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                2-4 weeks; requires website integration
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                3-7 days; direct phone system integration
              </div>
            </div>

            {/* EHR Integration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                EHR Integration
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                Limited; often requires manual data entry
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                Deep integration; automatic appointment booking and data sync
              </div>
            </div>

            {/* Missed Call Prevention */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                Missed Call Prevention
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                No impact on phone calls; patients still experience hold times
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                Eliminates missed calls; answers every call instantly
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border-r border-[var(--color-border)]">
                Best For
              </div>
              <div className="p-6 text-[var(--color-ink)] border-r border-[var(--color-border)]">
                FAQs, basic info, tech-savvy patient base
              </div>
              <div className="p-6 text-[var(--color-ink)]">
                High call volume, appointment scheduling, comprehensive reception replacement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">
              Text Chatbots: When and Why They Work
            </h2>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
              Text chatbots excel at handling simple, repetitive questions that don't require nuanced understanding. They're most effective for practices with a younger, tech-savvy patient demographic who prefer typing over calling. Common successful use cases include providing office hours, sharing directions, answering insurance questions, and offering basic information about services.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
              However, text chatbots face significant limitations in medical practice environments. Most patients (65-75%) still prefer calling when they need to schedule appointments or discuss health concerns. Chatbots struggle with complex scheduling logic, insurance verification, and understanding context in multi-part questions. When a chatbot fails to help, patients often abandon the interaction entirely rather than trying another channel.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Research shows that medical practice chatbots have an average abandonment rate of 40-60% for appointment-related queries. This means nearly half of patients who try to use the chatbot give up without completing their task. For practices focused on patient acquisition and retention, these missed opportunities represent significant revenue loss.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">
              Voice AI Reception: Comprehensive Front Desk Solution
            </h2>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
              Voice AI reception systems function as complete front desk replacements, handling the full spectrum of patient phone interactions. Unlike text chatbots that supplement existing channels, voice AI directly addresses the primary communication channel for medical practices: phone calls. These systems understand natural speech, handle interruptions, and manage complex multi-turn conversations that mirror human receptionist interactions.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
              The technology integrates deeply with practice management systems and EHRs, enabling real-time appointment scheduling, insurance verification, and patient record updates. Voice AI can handle nuanced scenarios like "I need to see Dr. Smith sometime next week, preferably in the afternoon, but I can't do Wednesdays" — the kind of natural request that causes text chatbots to fail but that human receptionists (and voice AI) handle effortlessly.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Most importantly, voice AI operates 24/7 without breaks, sick days, or vacation time. Practices report that 30-40% of calls come outside standard business hours. Voice AI captures these after-hours calls as appointment bookings rather than letting them go to voicemail where they're often forgotten or lost to competitors. This represents a significant source of new patient revenue that was previously inaccessible.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-12">
            How to Decide What's Right for Your Practice
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mr-3 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Choose a Text Chatbot if:
            </h3>
            <ul className="space-y-4 ml-11">
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Your primary goal is answering FAQs and providing basic information
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You have adequate phone reception staff and low call volume
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Your patient demographic skews young and tech-savvy (under 40)
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Budget is very limited (under $100/month)
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You're looking to supplement (not replace) human reception
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mr-3 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Choose Voice AI Reception if:
            </h3>
            <ul className="space-y-4 ml-11">
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You're experiencing high call volume and missing patient calls
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Appointment scheduling is your primary patient interaction
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You need 24/7 availability including after-hours and weekends
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Your patient base spans all age groups (especially 40+)
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Staff is overwhelmed with phone duties and administrative tasks
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You want to grow patient volume without adding reception staff
              </li>
              <li className="flex items-start text-lg text-[var(--color-ink)]">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You need deep EHR integration for automatic appointment booking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Can I use both a text chatbot and voice AI together?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Yes, many practices use both successfully. A text chatbot can handle website FAQs while voice AI manages all phone interactions. This multi-channel approach ensures patients can reach you through their preferred method. However, ensure both systems integrate with your EHR to avoid data silos and double-booking issues.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How do patients react to AI answering the phone?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Modern voice AI is remarkably natural-sounding and most patients don't realize they're speaking with AI until informed. Patient satisfaction surveys show 85-92% satisfaction rates with voice AI reception, comparable to or exceeding human receptionist ratings. The key factors are instant answer (no hold time), 24/7 availability, and consistent professionalism. Practices that implement voice AI typically see patient complaints about phone access drop by 60-80%.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What happens when the AI can't handle a call?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Voice AI systems are designed with intelligent escalation protocols. When the AI encounters a situation beyond its capabilities—complex medical questions, emotional distress, or unusual requests—it seamlessly transfers to a human staff member with context about the call. Most systems successfully resolve 85-95% of calls without escalation, transferring only the 5-15% that truly require human judgment.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Is voice AI HIPAA compliant?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Reputable medical voice AI providers are fully HIPAA compliant and will sign Business Associate Agreements (BAAs). They use encrypted communication channels, secure data storage, and audit logging to protect patient information. When evaluating providers, always verify HIPAA compliance documentation and ensure they'll provide a BAA before implementation.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What's the ROI timeline for voice AI reception?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Most practices see positive ROI within 2-4 months. The primary returns come from: (1) capturing after-hours calls that previously went to voicemail (30-40% increase in bookings outside business hours), (2) reducing missed calls during busy periods (eliminating 15-25 lost appointments per week), and (3) freeing staff time for higher-value tasks like patient care coordination. A practice missing just 20 calls per week at an average appointment value of $150 loses $156,000 annually—voice AI at $500/month costs $6,000/year, making the ROI calculation straightforward.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">
            Ready to Choose the Right Solution?
          </h2>
          <p className="text-xl text-[var(--color-ink)] mb-8 leading-relaxed">
            Schedule a consultation to discuss your practice's specific needs and determine whether text chatbots, voice AI reception, or both are right for you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-accent-dark)] transition-all hover:scale-105 shadow-lg"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}