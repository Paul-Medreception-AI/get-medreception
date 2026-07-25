import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-[var(--color-light)] max-w-2xl mx-auto">
            We're building something physicians and patients both trust—your experience helps us improve every day.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
            As a physician-founded company, we're committed to continuous improvement based on real patient and practice feedback. If you've interacted with MedReception AI, we'd be grateful to hear about your experience—it directly shapes how we serve medical practices and their patients.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Contact Us
          </Link>
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-[var(--color-light)] mb-10 max-w-2xl mx-auto">
            See how MedReception AI can handle your calls, book appointments, and free up your staff to focus on patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/how-it-works"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              See How It Works
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-[var(--color-light)] text-[var(--color-primary)] px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Talk to the Founder
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}