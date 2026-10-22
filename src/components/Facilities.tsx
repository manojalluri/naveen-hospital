import React from 'react';
import { 
  Siren, 
  Pill, 
  FlaskConical, 
  Scan, 
  BedDouble, 
  CreditCard, 
  Armchair, 
  Accessibility, 
  CheckCircle 
} from 'lucide-react';
import { FACILITIES } from '../data/facilities';

export const Facilities: React.FC = () => {
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Siren': return <Siren className="w-6 h-6 text-brand-pink" />;
      case 'Pill': return <Pill className="w-6 h-6 text-brand-violet" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-brand-blue" />;
      case 'Scan': return <Scan className="w-6 h-6 text-brand-blue" />;
      case 'BedDouble': return <BedDouble className="w-6 h-6 text-brand-green-dark" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-brand-green" />;
      case 'Armchair': return <Armchair className="w-6 h-6 text-brand-orange" />;
      case 'Accessibility': return <Accessibility className="w-6 h-6 text-brand-navy" />;
      default: return <CheckCircle className="w-6 h-6 text-brand-pink" />;
    }
  };

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-brand-soft/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-green-light text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-2">
            Modern Hospital Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            Facilities Designed for Patient Care &amp; Comfort
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Equipped with round-the-clock emergency support, an on-site diagnostic laboratory, 24/7 pharmacy access, and comfortable inpatient recovery spaces.
          </p>
        </div>

        {/* 8-Card Grid: Horizontal snap-scroll on mobile, 2/4-col grid on sm+ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 no-scrollbar">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="snap-center shrink-0 w-[76vw] xs:w-[62vw] sm:w-auto bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-brand-green/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon & Highlight Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-soft border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getFacilityIcon(facility.iconName)}
                  </div>
                  {facility.highlight && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {facility.highlight}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy group-hover:text-brand-pink transition-colors">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              {/* Verified check indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-brand-green" />
                <span>Hospital Facility</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 text-xs text-brand-green-dark font-semibold mt-4">
          <span>&larr; Swipe horizontally to view all 8 facilities &rarr;</span>
        </div>

      </div>
    </section>
  );
};
