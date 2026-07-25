import Link from 'next/link'

export default function ConditionsPage() {
  const conditions = [
    {
      name: "Depression",
      slug: "depression",
      description: "Persistent sadness, loss of interest, and fatigue that interferes with daily life. We provide evidence-based treatment combining therapy and medication management tailored to your needs.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    },
    {
      name: "Anxiety Disorders",
      slug: "anxiety-disorders",
      description: "Excessive worry, panic attacks, and physical symptoms that disrupt your routine. Our comprehensive approach addresses both the mental and physical components of anxiety.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
    },
    {
      name: "ADHD",
      slug: "adhd",
      description: "Difficulty focusing, impulsivity, and hyperactivity affecting work or school performance. We offer thorough evaluation and personalized treatment plans for children and adults.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    },
    {
      name: "Bipolar Disorder",
      slug: "bipolar-disorder",
      description: "Extreme mood swings from manic highs to depressive lows that impact relationships and daily functioning. We provide mood stabilization and ongoing monitoring for long-term management.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
    },
    {
      name: "PTSD & Trauma",
      slug: "ptsd-trauma",
      description: "Intrusive memories, nightmares, and heightened anxiety following traumatic experiences. Our trauma-informed care helps you process difficult experiences and reclaim your life.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" /></svg>
    },
    {
      name: "OCD",
      slug: "ocd",
      description: "Unwanted intrusive thoughts and repetitive behaviors that consume time and cause distress. We use specialized therapeutic approaches proven effective for obsessive-compulsive disorder.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
    },
    {
      name: "Addiction & Substance Use",
      slug: "addiction-substance-use",
      description: "Dependence on alcohol, drugs, or other substances affecting health and relationships. We provide compassionate, evidence-based treatment including medication-assisted therapy when appropriate.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
    },
    {
      name: "Schizophrenia & Psychosis",
      slug: "schizophrenia-psychosis",
      description: "Hallucinations, delusions, and disorganized thinking that affect perception of reality. Our integrated treatment approach combines medication management with supportive therapy.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      name: "Eating Disorders",
      slug: "eating-disorders",
      description: "Unhealthy relationships with food, body image concerns, and disordered eating patterns. We provide specialized care addressing both the psychological and medical aspects of eating disorders.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    },
    {
      name: "Insomnia & Sleep Disorders",
      slug: "insomnia-sleep-disorders",
      description: "Chronic difficulty falling or staying asleep that impacts daytime functioning and health. We identify underlying causes and develop comprehensive treatment plans for better sleep.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
    },
    {
      name: "Personality Disorders",
      slug: "personality-disorders",
      description: "Long-standing patterns of behavior and inner experience causing distress in relationships and daily life. We offer specialized therapy approaches tailored to personality disorder treatment.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    },
    {
      name: "Grief & Loss",
      slug: "grief-loss",
      description: "Overwhelming sadness and difficulty coping after loss of a loved one or major life change. Our compassionate therapists guide you through the grieving process at your own pace.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    }
  ]

  const warningSigns = [
    {
      title: "Behavioral Changes",
      signs: ["Withdrawal from friends and activities", "Inability to perform daily tasks", "Significant changes in sleep or appetite", "Unexplained physical problems"],
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
    },
    {
      title: "Emotional Symptoms",
      signs: ["Persistent sadness or hopelessness", "Extreme mood swings", "Excessive worry or fear", "Thoughts of self-harm or suicide"],
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    },
    {
      title: "Substance Use",
      signs: ["Increased alcohol or drug use", "Using substances to cope with emotions", "Neglecting responsibilities due to substance use", "Failed attempts to cut back"],
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Conditions We Treat</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Evidence-based care for a full range of mental health and behavioral health conditions
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-[var(--color-muted)] text-center text-lg mb-16 max-w-3xl mx-auto">
            Our experienced clinicians provide personalized treatment for the full spectrum of mental health conditions, combining therapy, medication management, and holistic approaches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Link 
                key={index}
                href={`/conditions/${condition.slug}`}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up block"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="stroke-[var(--color-primary)]">
                  {condition.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-4">
                  {condition.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                  {condition.description}
                </p>
                <div className="text-[var(--color-primary)] font-semibold text-sm mt-4 hover:underline">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">
            When to Seek Help
          </h2>
          <p className="text-[var(--color-muted)] text-center text-lg mb-16 max-w-3xl mx-auto">
            If you or someone you know is experiencing any of these warning signs, professional help can make a difference. Early intervention leads to better outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((category, index) => (
              <div 
                key={index}
                className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="stroke-[var(--color-primary)] mb-4">
                  {category.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.signs.map((sign, signIndex) => (
                    <li key={signIndex} className="flex items-start gap-2 text-[var(--color-muted)] text-sm">
                      <svg className="w-5 h-5 stroke-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] rounded-2xl p-12 text-white text-center animate-fade-up">
            <svg className="w-16 h-16 stroke-white mx-auto mb-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <h3 className="font-cormorant text-3xl font-semibold mb-4">Crisis Resources</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              If you or someone you know is in crisis or having thoughts of suicide, help is available 24/7.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-semibold text-xl mb-2">988 Suicide & Crisis Lifeline</div>
                <div className="text-white/80">Call or text 988 for free, confidential support</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-semibold text-xl mb-2">Crisis Text Line</div>
                <div className="text-white/80">Text HOME to 741741</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our compassionate team is here to help you take the first step toward better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/how-it-works"
              className="inline-block bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/30"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}