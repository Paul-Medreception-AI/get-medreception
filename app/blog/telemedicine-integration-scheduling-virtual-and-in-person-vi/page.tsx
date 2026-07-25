import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telemedicine Integration: Scheduling Virtual and In-Person Visits | Get MedReception',
  description: 'Learn how telemedicine integration streamlines healthcare scheduling, combining virtual and in-person visits for better patient access, convenience, and continuity of care.',
  keywords: 'telemedicine integration, virtual visits, telehealth scheduling, hybrid healthcare, in-person appointments, online doctor visits, healthcare technology',
  openGraph: {
    title: 'Telemedicine Integration: Scheduling Virtual and In-Person Visits',
    description: 'Comprehensive guide to telemedicine integration and hybrid healthcare scheduling for better patient outcomes.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
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
          <nav className="text-sm text-white/70 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Healthcare Technology
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Telemedicine Integration: Scheduling Virtual and In-Person Visits
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
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
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Imagine waking up with a persistent cough and fever. In the past, you'd face a difficult choice: drag yourself to a clinic risking exposure to others, or skip care altogether. Today, telemedicine integration offers a third option—connecting with your healthcare provider from home, with the seamless ability to schedule an in-person visit if needed. This hybrid approach to healthcare delivery is transforming how we access medical care, making it more convenient, efficient, and patient-centered than ever before.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The integration of telemedicine with traditional in-person care isn't just about technology—it's about creating a healthcare system that adapts to your life, rather than forcing your life to adapt to healthcare. As this model becomes increasingly standard, understanding how to navigate virtual and in-person appointments effectively can help you get the right care at the right time.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Telemedicine Integration?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telemedicine integration refers to the seamless coordination of virtual healthcare visits with traditional in-person appointments within a unified scheduling and care delivery system. Rather than treating telehealth as a separate service, integrated systems allow patients and providers to choose the most appropriate format for each clinical situation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Modern integrated platforms enable you to book either type of appointment through the same portal, maintain continuous medical records across both formats, and transition between virtual and in-person care based on evolving needs. Your provider can review your full history regardless of how previous appointments were conducted, ensuring continuity of care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This integration extends beyond scheduling. It encompasses secure messaging, prescription management, lab result delivery, and follow-up care—all coordinated whether you're meeting your provider face-to-face or through a screen. The goal is to create a frictionless experience that puts clinical appropriateness and patient convenience at the forefront.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Virtual Visits Work Best
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Virtual appointments excel in numerous clinical scenarios, often providing faster access to care while eliminating travel time and exposure risks. Understanding when telemedicine is most effective helps you make informed decisions about appointment format.
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Follow-up appointments</strong> after initial diagnoses, particularly for chronic condition management where physical examination isn't required
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Mental health services</strong> including therapy, counseling, and psychiatric consultations, which often benefit from the comfort of familiar environments
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Minor acute concerns</strong> such as cold symptoms, minor rashes, urinary tract infections, or medication side effects
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Medication management</strong> and prescription renewals for stable chronic conditions
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Lab result reviews</strong> and discussion of test findings that don't require physical examination
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Specialist consultations</strong> for second opinions or expert guidance that can be provided through discussion and record review
              </p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research published in the Journal of Medical Internet Research found that up to 70% of primary care visits can be effectively conducted via telemedicine without compromising care quality. The key is appropriate patient selection and provider judgment about when physical examination is necessary.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The best healthcare system is one that offers choices. Integrated telemedicine gives patients the flexibility to access care in the way that best fits their needs, clinical situation, and life circumstances."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When In-Person Visits Are Essential
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While telemedicine offers remarkable convenience, certain situations require the diagnostic capabilities of in-person care. Integrated scheduling systems help you and your provider determine which format is most appropriate.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Physical examinations remain irreplaceable for many conditions. If your provider needs to palpate your abdomen, listen to your heart and lungs, examine your ears or throat, or assess range of motion, an in-person visit is necessary. Similarly, procedures like wound care, injections, biopsies, or diagnostic tests requiring specialized equipment must be performed on-site.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            New patients typically benefit from in-person initial consultations, allowing for comprehensive baseline examinations and relationship-building, though this varies by specialty and clinical situation. Acute severe symptoms—such as chest pain, difficulty breathing, severe abdominal pain, or concerning injuries—generally require immediate in-person or emergency evaluation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The beauty of integrated systems is that this decision doesn't have to be made in isolation. Your virtual visit can seamlessly convert to an in-person appointment recommendation if your provider determines physical examination is needed. Conversely, your scheduled in-person visit might be offered as a virtual option if your symptoms resolve or change, saving you unnecessary travel.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Navigating Integrated Scheduling Systems
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Modern patient portals make switching between virtual and in-person appointments remarkably simple. When booking through an integrated system, you'll typically see both options displayed side-by-side with available time slots for each format.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Most systems include brief screening questions to help guide your choice. These might ask about your symptoms, whether you've been seen for this issue before, if you need diagnostic tests or procedures, and your preference regarding appointment format. Based on your responses, the system may recommend one format while still allowing you to choose the other if you prefer.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Virtual appointment availability is often more flexible, with extended hours including evenings and weekends. This reflects both patient demand for convenient scheduling and the efficiency gains telemedicine offers providers. If you need same-day care, virtual slots are frequently more accessible.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Payment and insurance processing are typically identical regardless of format. Most insurance plans now cover telemedicine visits at the same rate as in-person care, though it's wise to verify your specific coverage. Co-pays and deductibles generally apply equally to both visit types.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Maximizing the Benefits of Hybrid Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            To get the most from integrated telemedicine, consider adopting these strategic approaches to your healthcare management:
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Test your technology before your first virtual visit.</strong> Download required apps, test your camera and microphone, and ensure you have a stable internet connection in a private, well-lit space.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Keep your patient portal information current.</strong> Updated contact information, medication lists, and allergy records ensure continuity whether you're seen virtually or in person.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Prepare for virtual visits as thoroughly as in-person ones.</strong> Write down symptoms, questions, and concerns. Have current medications visible. If discussing visible symptoms like rashes, ensure good lighting.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Be honest about your format preference.</strong> If you strongly prefer one type of visit, discuss this with your provider. In many non-urgent situations, your preference can guide the choice.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Use virtual visits strategically for time-sensitive needs.</strong> When you need quick advice, prescription renewals, or have questions that don't require examination, telemedicine can provide faster access.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Ask about follow-up format during your visit.</strong> If your provider recommends a follow-up, discuss whether it should be virtual or in-person based on expected needs.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Future of Integrated Healthcare
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telemedicine integration represents more than a temporary pandemic adaptation—it's a fundamental evolution in healthcare delivery. Research from the American Medical Association indicates that hybrid care models improve patient satisfaction, increase appointment adherence, and reduce no-show rates while maintaining or improving clinical outcomes for appropriate conditions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Emerging technologies continue to expand virtual care capabilities. Remote monitoring devices can now transmit vital signs, blood glucose readings, and other measurements directly to your provider between appointments. Artificial intelligence helps triage symptoms and recommend appropriate visit formats. Digital diagnostic tools are enabling more conditions to be evaluated remotely.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most significant benefit of integration is personalization. Rather than a one-size-fits-all approach, hybrid systems adapt to individual patient circumstances—your mobility limitations, work schedule, childcare needs, geographic location, and comfort with technology. This flexibility makes healthcare more accessible and equitable across diverse populations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For rural patients, telemedicine integration can be transformative, eliminating hours of travel for routine follow-ups while preserving access to in-person care when necessary. For working professionals, evening virtual appointments remove the need to take time off work. For parents of young children, at-home visits eliminate childcare coordination for straightforward consultations.
          </p>

          {/* Closing */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Advantage of Integrated Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The integration of virtual and in-person healthcare scheduling puts unprecedented control in your hands. You no longer face an all-or-nothing choice between convenience and comprehensive care. Instead, you can select the most appropriate format for each situation, trusting that your medical records, care team, and continuity of treatment remain consistent regardless of format.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you haven't yet explored your provider's telemedicine options, now is an excellent time to familiarize yourself with the system before you need urgent care. Register for your patient portal, download any required apps, and consider scheduling a routine follow-up or minor concern as a virtual visit to experience the process. This preparation ensures you'll be ready to use these tools confidently when health needs arise.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Healthcare that adapts to your life, rather than forcing your life to adapt to healthcare—that's the promise of telemedicine integration. By understanding when each format works best and how to navigate between them seamlessly, you're empowered to access the right care at the right time in the right way for your unique circumstances.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <aside className="bg-[var(--color-cream)] py-12">
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
                Board-certified providers specializing in Other Medical, committed to delivering evidence-based patient education and compassionate care guidance.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Patient Portal Best Practices: Maximizing Your Digital Healthcare Tools
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn how to effectively use patient portals for appointment scheduling, secure messaging, and health record management.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Preparing for Your Medical Appointment: A Complete Checklist
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Essential tips for preparing for both virtual and in-person visits to ensure productive, efficient healthcare appointments.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Healthcare Privacy in the Digital Age
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                What you need to know about HIPAA compliance, data security, and protecting your health information during virtual visits.
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you navigate virtual and in-person care options.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>

    </main>
  )
}