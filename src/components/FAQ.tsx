import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our repair services.
          </p>
          <div className="mt-5 w-16 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? 'bg-zinc-900 border-red-600/40'
                  : 'bg-zinc-900/50 border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-base ${open === i ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 ml-4 transition-transform duration-200 ${
                    open === i ? 'rotate-180 text-red-500' : 'text-gray-500'
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">Still have questions? We're happy to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
