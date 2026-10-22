import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { HOSPITAL_INFO } from '../data/hospital';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-brand-soft/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">
            Questions &amp; Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Essential information regarding emergency care, pediatric timings, consultation documents, and appointment enquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-brand-navy flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-pink-light text-brand-pink' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 animate-fade-in pl-12">
                    {faq.answer.split('\n').map((line, lIdx) => (
                      <p key={lIdx} className={line.startsWith('•') ? 'pl-2 text-slate-800 font-medium' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-sm text-brand-navy">
              Have another question or specific enquiry?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our front desk reception is ready to assist you on the phone or WhatsApp.
            </p>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-pink hover:bg-brand-pink-deep text-white font-bold text-xs sm:text-sm shadow-md transition-colors shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Us: {HOSPITAL_INFO.phoneFormatted}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
