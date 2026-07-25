import Link from 'next/link'

export default function InsurancePage() {
  const insurers = [
    "Aetna",
    "BlueCross BlueShield",
    "Cigna",
    "United Healthcare",
    "Humana",
    "Medicare",
    "Medicaid",
    "Tricare",
    "Anthem",
    "Magellan"
  ]

  const billingSteps = [
    {
      title: "Verify Coverage",
      description: "We verify your insurance benefits before your first appointment to understand your coverage details.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Service Provided",
      description: "You receive the medical care you need. Our AI receptionist ensures seamless scheduling and intake.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: "Claim Submitted",
      description: "We submit claims to your insurance company on your behalf and track them through the approval process.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: "You Pay Remainder",
      description: "After insurance processes the claim, you receive a statement for any remaining balance like co-pays or deductibles.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans including Medicare and Medicaid. Please call our office or use the contact form to verify your specific plan before your appointment."
    },
    {
      question: "What is a co-pay and when do I pay it?",
      answer: "A co-pay is a fixed amount you pay at each visit as determined by your insurance plan. Co-pays are typically due at the time of service. Our AI receptionist can inform you of your expected co-pay amount when you schedule."
    },
    {
      question: "What if my insurance denies the claim?",
      answer: "If a claim is denied, we'll work with you and your insurance company to resolve the issue. Common reasons include missing information or prior authorization requirements. We'll resubmit corrected claims and keep you informed throughout the process."
    },
    {
      question: "How long does it take to receive a bill?",
      answer: "After your insurance processes the claim (typically 30-60 days), you'll receive a statement for any remaining balance. The statement will include an Explanation of Benefits (EOB) showing what your insurance paid and what you owe."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, credit cards (Visa, MasterCard, American Express, Discover), and HSA/FSA cards. Payment plans are available for balances over a certain amount—contact our billing department to discuss options."
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6 animate-fade-up">Insurance & Billing</h1>
          <p className="text-xl text-white/90 animate-fade-up">Transparent pricing and billing information</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">Accepted Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {insurers.map((insurer, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
                {insurer}
              </div>
            ))}
          </div>
          <p className="text-center text-[var(--color-muted)] mt-12 animate-fade-up">
            Don't see your insurance listed? Contact us to verify your coverage—we work with many additional plans.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">How Billing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {billingSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-up">
                <div className="inline-flex items-center justify-center text-[var(--color-accent)] mb-6">
                  {step.icon}
                </div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">{step.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{step.description}</p>
                {index < billingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto space-y-8 animate-fade-up">
            <div className="bg-[var(--color-cream)] rounded-xl p-8">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Understanding Your Costs</h3>
              <div className="space-y-4 text-[var(--color-muted)]">
                <div>
                  <strong className="text-[var(--color-ink)]">Co-payment (Co-pay):</strong> A fixed amount you pay for each visit, as specified by your insurance plan.
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Deductible:</strong> The amount you must pay out-of-pocket before your insurance begins covering services.
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Explanation of Benefits (EOB):</strong> A statement from your insurance company showing what services were billed, what they paid, and what you owe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Self-Pay Options</h3>
            <div className="space-y-6 text-[var(--color-muted)]">
              <p className="leading-relaxed">
                We welcome patients who prefer to pay out-of-pocket or who don't have insurance coverage. Self-pay rates are often lower than insurance-negotiated rates, and payment is due at the time of service.
              </p>
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Sliding Scale & Payment Plans</h4>
                <p className="leading-relaxed">
                  We offer sliding scale fees based on income and family size for qualifying patients. Payment plans are available for larger balances—speak with our billing team to discuss options that work for your situation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Good Faith Estimate</h4>
                <p className="leading-relaxed">
                  Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges before receiving medical services. Request your estimate when scheduling your appointment, and we'll provide a clear breakdown of anticipated costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">Billing Questions & Answers</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up group">
                <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-6">Have Billing Questions?</h2>
          <p className="text-xl text-white/90 mb-10">
            Our team is here to help clarify your insurance coverage and payment options
          </p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-semibold transition-colors">
            Contact Our Billing Team
          </Link>
        </div>
      </section>
    </main>
  )
}