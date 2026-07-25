import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emergency Call Triage: When AI Should Escalate to Humans | Get MedReception',
  description: 'Understanding the critical balance between AI efficiency and human judgment in emergency medical call triage. Learn when automation should defer to clinical expertise.',
  keywords: 'emergency call triage, AI medical triage, healthcare automation, patient safety, medical AI, emergency response, clinical judgment',
  openGraph: {
    title: 'Emergency Call Triage: When AI Should Escalate to Humans',
    description: 'Understanding the critical balance between AI efficiency and human judgment in emergency medical call triage.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
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
          <div className="text-sm text-white/70 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Safety
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Emergency Call Triage: When AI Should Escalate to Humans
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
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
              It's 2:47 AM when Sarah calls her medical office's after-hours line. Her five-year-old son has a fever of 103°F, he's complaining of a stiff neck, and he's unusually lethargic. An AI system answers the call, efficiently gathering information through natural language processing. But this is precisely the moment when technology must recognize its limits—and when human clinical judgment becomes not just helpful, but potentially lifesaving.
            </p>
            <p>
              As artificial intelligence increasingly handles front-line medical communications, understanding when and how these systems should escalate to human providers has become one of healthcare's most critical safety questions. The stakes couldn't be higher: lives depend on getting this balance right.
            </p>
          </div>

          {/* Section 1 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Promise and Limitations of AI Triage
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
              <p>
                AI-powered call management systems have revolutionized how medical practices handle patient communications. These systems can process thousands of calls simultaneously, recognize patterns across vast datasets, and provide consistent responses 24/7 without fatigue. They excel at routine inquiries, appointment scheduling, and basic symptom documentation.
              </p>
              <p>
                However, emergency medical triage requires something AI cannot fully replicate: nuanced clinical judgment informed by years of training, experience with rare presentations, and the ability to detect subtle vocal cues that might indicate a patient is more ill than they realize. A mother might downplay her chest pain because she's focused on caring for her children. A stoic elderly patient might describe crushing substernal pressure as "a little indigestion." These contextual subtleties often require human interpretation.
              </p>
              <p>
                Research published in the Journal of Medical Systems found that while AI triage systems demonstrated 85-92% accuracy for routine calls, their sensitivity for detecting true emergencies requiring immediate intervention dropped to 73% without human oversight—a gap that represents real lives at risk.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
            "The goal isn't to replace human judgment with AI—it's to create a seamless partnership where technology handles what it does best, and escalates precisely when human expertise becomes essential."
          </blockquote>

          {/* Section 2 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Critical Escalation Triggers: When AI Must Defer to Humans
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
              <p>
                Effective AI triage systems are built around clearly defined escalation protocols. The most sophisticated systems recognize specific clinical red flags that mandate immediate human involvement:
              </p>
            </div>

            <div className="my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Chest pain or pressure:</strong> Especially with radiation to arm/jaw, shortness of breath, or sweating—potential cardiac emergency</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Severe difficulty breathing:</strong> Unable to speak in full sentences, blue lips or fingernails</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Neurological symptoms:</strong> Sudden confusion, slurred speech, facial drooping, severe headache—possible stroke</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Suicidal ideation or self-harm:</strong> Any mention of wanting to hurt oneself requires immediate human assessment</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Severe abdominal pain:</strong> Especially if sudden onset, accompanied by vomiting, or in pregnant patients</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Pediatric red flags:</strong> Infant under 3 months with fever, inconsolable crying, lethargy, or signs of dehydration</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Severe bleeding or trauma:</strong> Uncontrolled bleeding, suspected fractures, head injuries with altered consciousness</p>
              </div>
            </div>

            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4 mt-6">
              <p>
                Beyond specific symptoms, AI systems should also escalate based on contextual factors: pregnant patients, immunocompromised individuals, patients expressing uncertainty or fear about their condition, or any situation where the caller seems confused or unable to provide coherent information.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Human Element: What Providers Bring to Critical Calls
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
              <p>
                When AI systems appropriately escalate calls to human providers, several irreplaceable capabilities come into play. Experienced clinicians can conduct differential diagnosis in real-time, weighing multiple possibilities simultaneously and adjusting their questions based on evolving information.
              </p>
              <p>
                They detect non-verbal cues—the breathlessness between words that suggests respiratory distress, the slight delay in response that might indicate confusion, the background sounds that provide environmental context. A trained nurse can hear when a parent's voice shifts from concerned to panicked, signaling the need for more urgent intervention.
              </p>
              <p>
                Critically, human providers can navigate ambiguity and make judgment calls in gray zones where protocols don't provide clear answers. They can factor in a patient's complete medical history, current medications, social circumstances, and access to care when making recommendations. They can provide emotional support and reassurance—or appropriate alarm—in ways that build trust and encourage appropriate action.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Building Safer AI-Human Hybrid Systems
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
              <p>
                The most effective medical call management systems don't position AI and human expertise as competitors, but as collaborative partners. Best practices for these hybrid systems include:
              </p>
            </div>

            <div className="my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Seamless warm handoffs:</strong> AI systems that can immediately connect callers to human providers without disconnection or call-back delays</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Comprehensive information transfer:</strong> Human providers receive complete transcripts and structured data from the AI interaction</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Conservative escalation protocols:</strong> When in doubt, AI systems should err on the side of human review rather than risk missing emergencies</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Continuous learning loops:</strong> Human providers review AI decisions, identifying missed escalations to improve algorithms</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Patient override options:</strong> Clear pathways for patients who want to speak with a human, regardless of AI assessment</p>
              </div>
            </div>

            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4 mt-6">
              <p>
                Organizations implementing these systems must also establish robust quality assurance programs. Regular audits of calls, tracking of patient outcomes, and analysis of escalation patterns help identify system weaknesses before they result in adverse events.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Patients Should Know About AI Triage Systems
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
              <p>
                If you're calling your medical provider's after-hours line or using a healthcare service that employs AI triage, understanding how to interact with these systems can ensure you receive appropriate care:
              </p>
            </div>

            <div className="my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Be specific and complete:</strong> Describe all your symptoms, including severity, duration, and any associated symptoms</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Don't minimize:</strong> If you're concerned enough to call, describe how serious the situation feels to you</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Request human review:</strong> If you feel the AI assessment doesn't capture the urgency of your situation, ask to speak with a nurse or provider</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Trust your instincts:</strong> If something feels seriously wrong, don't wait for a callback—call 911 or go to the emergency room</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Mention high-risk factors:</strong> Always tell the system if you're pregnant, immunocompromised, or have serious chronic conditions</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Future of AI-Human Partnership in Emergency Triage
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base space-y-4">
              <p>
                As AI technology continues to evolve, the question isn't whether these systems will play a role in healthcare communications—they already do and will increasingly. The critical question is how we design these systems to maximize their benefits while maintaining the irreplaceable value of human clinical judgment.
              </p>
              <p>
                Emerging technologies like emotion recognition, multi-modal analysis incorporating video, and more sophisticated natural language processing promise to improve AI's ability to detect emergencies. However, these advances must be coupled with equally sophisticated escalation protocols and robust human oversight.
              </p>
              <p>
                The healthcare organizations getting this right aren't those trying to replace human providers with AI, but those creating seamless collaborations where technology handles routine inquiries efficiently, freeing human providers to focus their expertise where it matters most—on complex, ambiguous, or potentially dangerous situations that require the full scope of clinical judgment.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-4 mt-12 animate-fade-up">
            <p>
              For Sarah calling at 2:47 AM about her five-year-old with fever, neck stiffness, and lethargy, the ideal system would work like this: The AI quickly gathers structured symptom information, recognizes the constellation of findings consistent with possible meningitis, and immediately escalates to a nurse who confirms the urgency and directs Sarah to the emergency room. The technology did what it does best—rapid data collection and pattern recognition. The human did what only humans can—applied nuanced clinical judgment to a potentially life-threatening situation.
            </p>
            <p>
              That's the future of emergency call triage: not AI versus humans, but AI and humans working together to keep patients safe.
            </p>
            <p className="font-semibold mt-8">
              If you have concerns about emergency symptoms, trust your instincts. When in doubt, seek immediate medical attention. Your health and safety are always the priority.
            </p>
          </div>
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
              <p className="text-[var(--color-muted)] text-sm mb-3">
                Board-certified providers specializing in Other Medical
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed text-sm">
                Our clinical team combines deep medical expertise with a commitment to patient education. We translate complex healthcare topics into accessible, actionable information to help patients make informed decisions about their care.
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Safety</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  How AI Medical Receptionists Maintain HIPAA Compliance
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Understanding the security measures that protect your health information when interacting with AI systems.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Healthcare Access</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  24/7 Medical Access: How After-Hours Care Is Changing
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Exploring how technology is making healthcare more accessible outside traditional office hours.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  When to Call Your Doctor vs. Going to the ER
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A practical guide to navigating healthcare options when you're not feeling well.
                </p>
              </div>
            </a>
          </div>

          <div className="text-center mt-12">
            <a href="/blog" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-medium">
              View All Resources
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
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
            Our team is here to help. Reach out to learn more about how we can support your healthcare needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}