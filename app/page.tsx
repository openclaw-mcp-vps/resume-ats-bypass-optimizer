export default function Home() {
  const faqs = [
    {
      q: 'How does ATS optimization work?',
      a: 'Our AI scans the job description, extracts high-value keywords and phrases, then rewrites and restructures your resume so ATS parsers rank it at the top of the pile.'
    },
    {
      q: 'What file formats are supported?',
      a: 'Upload your resume as PDF or DOCX. We return an optimized DOCX and a plain-text version ready for any ATS portal.'
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes. Cancel with one click from your billing portal — no questions asked, no hidden fees.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Resume Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Beat the Bots.<br />
          <span className="text-[#58a6ff]">Land the Interview.</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste a job description, upload your resume, and get an ATS-optimized version with a real-time score — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Optimizing — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔍', title: 'Keyword Extraction', desc: 'AI pulls every critical keyword from the job posting.' },
          { icon: '📊', title: 'ATS Score', desc: 'Instant match score before and after optimization.' },
          { icon: '📄', title: 'Downloadable Output', desc: 'Get a polished DOCX ready to submit anywhere.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited resume optimizations',
              'Real-time ATS scoring',
              'Keyword gap analysis',
              'DOCX + plain-text export',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(f => (
            <div key={f.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.q}</h3>
              <p className="text-[#8b949e] text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} ATS Resume Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
