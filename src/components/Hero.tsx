import React from 'react';
import { Calendar, Phone, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

interface HeroProps {
  onOpenAppointmentModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Brand Accent Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-brand-blue/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Credibility & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Badges: Compact & Elegant on Mobile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink font-bold text-[11px] sm:text-xs border border-brand-pink/30 shadow-xs">
                <ShieldAlert className="w-3.5 h-3.5 text-brand-pink animate-pulse" />
                24/7 Emergency Support &bull; Hindupur
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-green-light text-brand-green-dark font-semibold text-[11px] sm:text-xs border border-brand-green/30">
                <Sparkles className="w-3 h-3 text-brand-green" />
                11+ Years Trust
              </span>
            </div>

            {/* Main Hero Headline: Enriched & Bigger on Mobile */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-heading font-black text-brand-navy tracking-tight leading-[1.15]">
              Expert Care. <br />
              <span className="text-brand-pink">Compassionate Hearts.</span> <br />
              <span className="bg-gradient-to-r from-brand-green-dark to-brand-green bg-clip-text text-transparent">
                Healthier Tomorrows.
              </span>
            </h1>

            {/* Supporting Copy: Clean & Readable */}
            <p className="text-xs sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Specialised paediatric, neonatal, orthopaedic and trauma care for your family, backed by experienced doctors and round-the-clock emergency support in Hindupur.
            </p>

            {/* Modern Attractive Speciality Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green-light/80 text-brand-green-dark font-bold border border-brand-green/30 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>Paediatric &amp; NICU</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-pink-light/80 text-brand-pink font-bold border border-brand-pink/30 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-pink shrink-0" />
                <span>Orthopaedic Trauma</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue-light/80 text-brand-blue font-bold border border-brand-blue/30 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>Diabetic Care</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs - Side-by-Side on Mobile */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-2 w-full max-w-lg mx-auto lg:mx-0">
              <a
                href="#appointment"
                onClick={(e) => {
                  if (onOpenAppointmentModal) {
                    e.preventDefault();
                    onOpenAppointmentModal();
                  }
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-brand-pink hover:bg-brand-pink-deep text-white font-extrabold text-xs sm:text-base shadow-lg shadow-brand-pink/30 hover:shadow-xl transition-all active:scale-98 text-center whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
                <span className="sm:hidden">Book Schedule</span>
                <span className="hidden sm:inline">Book an Appointment</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs sm:text-base shadow-md transition-all active:scale-98 text-center whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-pink shrink-0" />
                <span className="sm:hidden">Call Now</span>
                <span className="hidden sm:inline">Call: {HOSPITAL_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Quick Timing Notice */}
            <p className="text-[11px] text-slate-500">
              * Emergency triage 24/7. Consultations: 9:00 AM–2:00 PM &amp; 5:30 PM–9:00 PM daily.
            </p>
          </div>

          {/* Right Column: Hero Visual with Rainbow Medical Arch Doctors */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            
            {/* Ambient Multi-colour Glow behind the Arch */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 via-brand-green/15 to-brand-blue/15 rounded-full blur-3xl transform -z-10 scale-95 pointer-events-none" />

            {/* Main Rainbow Medical Arch Doctors Artwork */}
            <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
              
              <img 
                src="/images/Back-to-Back Doctors with Rainbow Medical Arch.png" 
                alt="Dr. Keerthi S. and Dr. J. Naveen Kumar - Naveen Multi-Speciality Hospital Hindupur" 
                className="w-full h-auto max-h-[520px] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
                loading="eager"
              />

              {/* Bottom Identification Strip matching the Pink & Green Arches */}
              <div className="w-full -mt-2 sm:-mt-4 relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                
                {/* Dr. Keerthi S. (Paediatrics - Pink Arch Match) */}
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-full bg-brand-pink-light border border-brand-pink/50 flex items-center justify-center font-extrabold text-brand-pink text-xs shrink-0 shadow-xs">
                    DK
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-slate-900 leading-tight">Dr. Keerthi S.</div>
                    <div className="text-[11px] text-brand-pink font-bold">Paediatrician &amp; Neonatologist</div>
                  </div>
                </div>

                <div className="hidden sm:block h-8 w-px bg-slate-200" />

                {/* Dr. J. Naveen Kumar (Orthopaedics - Green Arch Match) */}
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-full bg-brand-green-light border border-brand-green/50 flex items-center justify-center font-extrabold text-brand-green-dark text-xs shrink-0 shadow-xs">
                    DN
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-slate-900 leading-tight">Dr. J. Naveen Kumar</div>
                    <div className="text-[11px] text-brand-green-dark font-bold">Ortho &amp; Diabetologist</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
