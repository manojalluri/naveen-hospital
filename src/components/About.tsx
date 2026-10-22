import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, Heart, Users, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card with Hospital Branding */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background accent block */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/15 via-brand-green/10 to-brand-blue/15 rounded-3xl transform -rotate-2" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white p-6 shadow-xl border border-slate-100">
                
                {/* Hospital Badge Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden shrink-0 shadow-lg border-2 border-brand-pink bg-black">
                    <img 
                      src={HOSPITAL_INFO.logoPath} 
                      alt="Naveen Hospital Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-pink uppercase tracking-wider">
                      Established Excellence
                    </span>
                    <h3 className="font-heading font-extrabold text-lg text-brand-navy leading-tight">
                      Naveen Multi-Speciality Hospital
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-brand-pink shrink-0" />
                      Balaji Nagar, Hindupur
                    </p>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-pink-light flex items-center justify-center text-brand-pink shrink-0 mt-0.5">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Compassionate Patient Care</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Gentle pediatric attention and individualized treatment programs designed for fast healing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-green-light flex items-center justify-center text-brand-green-dark shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">24/7 Readiness &amp; Emergency Triage</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Round-the-clock casualty team trained to handle acute orthopaedic trauma and neonatal concerns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Direct Specialist Access</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Direct clinical assessments and consultations with Dr. Keerthi S. and Dr. J. Naveen Kumar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Notice Badge */}
                <div className="mt-6 p-3 rounded-xl bg-brand-soft border border-slate-200/60 text-xs text-slate-700 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Cashless facility supported subject to applicable eligibility.</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider">
                About Our Hospital
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                Dedicated Specialist Healthcare Built on a Decade of Trust
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Naveen Multi-Speciality Hospital provides specialised paediatric, neonatal, orthopaedic, diabetes and trauma care. With a focus on accessible treatment, patient comfort and emergency readiness, the hospital serves individuals and families in and around Hindupur.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded with the belief that top-tier specialist medical attention should be readily accessible close to home, our clinical team blends advanced pediatric and trauma expertise with a warm, family-oriented approach. Whether managing critical newborn conditions, delicate bone fractures, or chronic diabetic lifestyle health, our specialist doctors provide hands-on, compassionate care.
            </p>

            {/* Structured Highlights */}
            <div className="space-y-3 pt-2">
              {HOSPITAL_INFO.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-800 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Hospital Address Quick Callout */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
              <span className="font-semibold text-brand-navy">Location:</span>
              <span>{HOSPITAL_INFO.address}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
