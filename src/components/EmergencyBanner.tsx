import React from 'react';
import { Phone, MessageSquare, ShieldAlert, AlertTriangle } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy text-white py-14 sm:py-16 relative overflow-hidden border-y border-brand-pink/30">
      {/* Decorative Brand Accent Ring */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-pink/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-green/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Emergency Title & Description */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/20 text-brand-pink border border-brand-pink/40 text-xs font-bold tracking-wider uppercase animate-pulse">
              <ShieldAlert className="w-4 h-4" />
              <span>Round-the-Clock Emergency Support</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Need Medical Assistance?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our team is available for emergency enquiries around the clock. Whether it's an acute pediatric concern, accidental trauma, or fracture triage, call our team immediately.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-amber-300/90 pt-1">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>For extreme, life-threatening conditions, please also dial local government emergency ambulance services (108).</span>
            </div>
          </div>

          {/* Emergency Direct Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-pink hover:bg-brand-pink-deep text-white font-extrabold text-base shadow-lg shadow-brand-pink/40 hover:shadow-brand-pink/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              title="Call hospital 24/7 hotline"
            >
              <Phone className="w-5 h-5 fill-current animate-bounce" />
              <span>Call Hospital: {HOSPITAL_INFO.phoneFormatted}</span>
            </a>

            <a
              href={HOSPITAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              title="Open WhatsApp chat"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
