'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, MapPin, FileText, Copy } from 'lucide-react';

export default function ContactSection() {
  const EMAIL = 'shreyavalgot@email.com'; // <- put your real email here
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 md:px-8 mt-24">
      {/* divider + heading */}
      <div className="h-px w-full bg-slate-200/80 mb-10" />
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 text-center">
        Let’s Connect
      </h3>
      <p className="mt-2 text-center text-[14px] md:text-[16px] text-slate-700">
        I’m open to UX/UI projects, internships, and collaborations. The fastest way is email or LinkedIn.
      </p>

      {/* primary actions */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={`mailto:${EMAIL}?subject=Hello Shreya — Loved your portfolio`}
          className="inline-flex items-center gap-2 rounded-[24px] bg-[#437029] px-5 py-2.5 text-white hover:bg-[#567E40] transition"
          aria-label="Send me an email"
        >
          <Mail size={18} />
          Email me
        </a>

        <Link
          href="https://www.linkedin.com/in/shreya-valgot/"  // <- your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[24px] px-5 py-2.5 ring-1 ring-[#C6D7BC] text-[#437029] hover:bg-[#F9FFF5] transition"
          aria-label="Open my LinkedIn profile"
        >
          <Linkedin size={18} />
          Connect on LinkedIn
        </Link>
      </div>

      {/* details cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Email card with copy */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Mail size={18} className="text-[#437029]" />
            Email
          </div>
          <div className="mt-2 flex items-center justify-between gap-2">
            <span className="text-slate-700 text-sm break-all">{EMAIL}</span>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm ring-1 ring-slate-200 hover:bg-slate-50"
              aria-label="Copy email to clipboard"
            >
              <Copy size={16} /> {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Linkedin size={18} className="text-[#437029]" />
            LinkedIn
          </div>
          <p className="mt-2 text-slate-700 text-sm">
            Say hi or view more updates.
          </p>
          <Link
            href="https://www.linkedin.com/in/your-handle" // <- your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-[#437029] hover:underline"
          >
            Open profile →
          </Link>
        </div>

        {/* Location / Timezone */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <MapPin size={18} className="text-[#437029]" />
            Location
          </div>
          <p className="mt-2 text-slate-700 text-sm">
            Based in <span className="font-medium">Lewes, United Kingdom</span><br />
            Willing to relocate in UK. 
            Open to remote worldwide.
          </p>
        </div>

        {/* Resume (optional) */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <FileText size={18} className="text-[#437029]" />
            Resume
          </div>
          <p className="mt-2 text-slate-700 text-sm">Download my latest resume.</p>
          <Link
            href="/Shreya Valgot — CV — UX UI Designer.pdf" // <- put your file in /public
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-[#437029] hover:underline"
          >
            View / download →
          </Link>
        </div>
      </div>
    </section>
  );
}
