import Link from 'next/link'

export default function TelehealthPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert medical care from the comfort of your home
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-16">
            How Telehealth Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Schedule
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your telehealth appointment online or by phone at a time that works for you
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Connect
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join your secure video appointment from any device with internet access
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Get Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive expert medical consultation, diagnosis, and treatment recommendations
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-12 max-w-4xl mx-auto animate-fade-up">
            <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)] mb-8 text-center">
              What's Available via Telehealth
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Available via Telehealth
                </h4>
                <ul className="space-y-3 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Initial consultations and follow-up visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Medication management and prescription refills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Symptom evaluation and diagnosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Treatment planning and care coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Lab and test result reviews</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Requires In-Person Visit
                </h4>
                <ul className="space-y-3 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-muted)] mt-1">•</span>
                    <span>Physical examinations requiring hands-on assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-muted)] mt-1">•</span>
                    <span>Certain procedures and injections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-muted)] mt-1">•</span>
                    <span>Laboratory tests and specimen collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-muted)] mt-1">•</span>
                    <span>Medical emergencies (call 911 or visit ER)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-4">
            Benefits of Telehealth
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Quality medical care on your terms, without compromising on clinical excellence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                No Commute Required
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Save time and avoid traffic. Connect with your provider from home, work, or anywhere.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                Same-Day Availability
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Often same-day or next-day appointments available. Get care when you need it most.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                Private & Comfortable
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Discuss sensitive health topics from the privacy and comfort of your own space.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                Works From Any Device
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join from your smartphone, tablet, or computer. Simple and accessible technology.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                Covered by Insurance
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most insurance plans cover telehealth visits at the same rate as in-person appointments.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                HIPAA-Compliant Platform
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Enterprise-grade security keeps your medical information private and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] mb-8 text-center">
              What You Need for Your Telehealth Visit
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Device Requirements
                </h3>
                <ul className="space-y-2 text-[var(--color-muted)] ml-7">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Computer, tablet, or smartphone with camera and microphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Updated web browser (Chrome, Safari, Firefox, or Edge)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Headphones or earbuds recommended for better audio quality</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                  Internet Connection
                </h3>
                <ul className="space-y-2 text-[var(--color-muted)] ml-7">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Stable broadband connection (minimum 1.5 Mbps download/upload)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>WiFi or wired connection recommended over cellular data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Close other bandwidth-heavy applications during your visit</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Environment Setup
                </h3>
                <ul className="space-y-2 text-[var(--color-muted)] ml-7">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Find a quiet, private space where you won't be interrupted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Ensure adequate lighting so your provider can see you clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Have your insurance card, ID, and list of medications ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>Log in 5-10 minutes early to test your audio and video</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)]">
                <h3 className="font-semibold text-[var(--color-ink)] mb-4">
                  Supported Platforms
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">
                    Windows 10+
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">
                    macOS 10.14+
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">
                    iOS 13+
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">
                    Android 8+
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-sm text-[var(--color-muted)]">
                    Chrome OS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
            Ready to Try Telehealth?
          </h2>
          <p className="text-[var(--color-muted)] text-lg mb-10 max-w-2xl mx-auto">
            Schedule your first telehealth appointment and experience convenient, quality medical care from home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold rounded-lg transition-colors"
            >
              Schedule a Visit
            </Link>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-white hover:bg-[var(--color-light)] text-[var(--color-primary)] font-semibold rounded-lg transition-colors border-2 border-[var(--color-border)]"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}