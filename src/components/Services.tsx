import React, { useState } from 'react';
import { 
  Baby, 
  HeartHandshake, 
  HeartPulse, 
  Bone, 
  Siren, 
  Activity, 
  Syringe, 
  FlaskConical, 
  Scan, 
  Pill, 
  BedDouble, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { SERVICES } from '../data/services';
import type { Service } from '../types';

interface ServicesProps {
  onSelectServiceForEnquiry: (departmentName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEnquiry }) => {
  const [filter, setFilter] = useState<'all' | 'paediatric' | 'orthopaedic' | 'emergency' | 'clinical'>('all');

  const filteredServices = filter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case 'Baby': return <Baby {...props} className="w-6 h-6 text-brand-pink" />;
      case 'HeartHandshake': return <HeartHandshake {...props} className="w-6 h-6 text-brand-pink" />;
      case 'HeartPulse': return <HeartPulse {...props} className="w-6 h-6 text-brand-pink" />;
      case 'Bone': return <Bone {...props} className="w-6 h-6 text-brand-green-dark" />;
      case 'Siren': return <Siren {...props} className="w-6 h-6 text-brand-pink" />;
      case 'Activity': return <Activity {...props} className="w-6 h-6 text-brand-orange" />;
      case 'Syringe': return <Syringe {...props} className="w-6 h-6 text-brand-green" />;
      case 'FlaskConical': return <FlaskConical {...props} className="w-6 h-6 text-brand-blue" />;
      case 'Scan': return <Scan {...props} className="w-6 h-6 text-brand-blue" />;
      case 'Pill': return <Pill {...props} className="w-6 h-6 text-brand-violet" />;
      case 'BedDouble': return <BedDouble {...props} className="w-6 h-6 text-brand-navy" />;
      case 'Sparkles': return <Sparkles {...props} className="w-6 h-6 text-brand-pink" />;
      default: return <Activity {...props} className="w-6 h-6 text-brand-pink" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-brand-soft/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">
            Our Medical Specialities &amp; Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            Comprehensive Healthcare Services in Hindupur
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From specialized newborn intensive care to trauma fracture management and continuous diabetes guidance, our clinical departments provide compassionate, patient-centered care.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services (12)' },
              { id: 'paediatric', label: 'Paediatrics & Neonatal' },
              { id: 'orthopaedic', label: 'Orthopaedics & Trauma' },
              { id: 'emergency', label: '24/7 Emergency' },
              { id: 'clinical', label: 'Diagnostics & Pharmacy' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-brand-pink text-white shadow-md shadow-brand-pink/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid: Horizontal snap carousel on mobile, 2/3-col grid on md+ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 no-scrollbar">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              className="snap-center shrink-0 w-[84vw] xs:w-[72vw] sm:w-[55vw] md:w-auto bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-brand-pink/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-soft border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-brand-navy border border-slate-200/60">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy group-hover:text-brand-pink transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {service.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectServiceForEnquiry(service.enquiryDepartment)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-pink hover:text-brand-pink-deep transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/919966000802?text=${encodeURIComponent(`Hello Naveen Hospital, I would like to enquire about your ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-brand-soft hover:bg-brand-green-light text-slate-600 hover:text-brand-green-dark transition-colors border border-slate-200/60"
                  title="Enquire on WhatsApp"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-1.5 text-xs text-brand-pink font-semibold mt-4">
          <span>&larr; Swipe horizontally to explore all services ({filteredServices.length}) &rarr;</span>
        </div>

        {/* Clinical Disclaimer Notice */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200/80 text-center max-w-3xl mx-auto text-xs text-slate-500">
          <p>
            * Note: Medical diagnostic tests, surgical interventions, and specialized procedures (including PRP therapy and painless vaccination) are subject to clinical evaluation and availability. Please consult our specialist doctors to determine clinical suitability.
          </p>
        </div>

      </div>
    </section>
  );
};
