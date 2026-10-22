import React from 'react';
import { ShieldCheck, Building2, Users, Baby, Activity, Info } from 'lucide-react';
import { HOSPITAL_STATISTICS } from '../data/hospital';

export const Statistics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-pink" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-brand-blue" />;
      case 'Users':
        return <Users className="w-6 h-6 text-brand-green" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-brand-pink" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-brand-orange" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-pink" />;
    }
  };

  return (
    <section className="py-12 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-pink text-xs uppercase font-extrabold tracking-widest">
            Hospital-Reported Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
            Proven Commitment to Healing &amp; Community Care
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            Reflecting over a decade of dedicated clinical service across Hindupur and surrounding mandals.
          </p>
        </div>

        {/* 5-Column Statistics: Horizontal snap-scroll on mobile, grid on sm+ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6 no-scrollbar">
          {HOSPITAL_STATISTICS.map((stat, idx) => (
            <div 
              key={idx}
              className="snap-center shrink-0 w-[68vw] xs:w-[52vw] sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-brand-pink/40 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {getIcon(stat.iconName)}
              </div>
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight group-hover:text-brand-pink transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1.5 leading-relaxed font-normal">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 text-[10px] text-slate-400 mt-2">
          <span>&larr; Swipe horizontally to view all milestones &rarr;</span>
        </div>

        {/* Disclaimer subtext */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>* Figures represent hospital-reported clinical milestones since inception and are periodically updated.</span>
        </div>

      </div>
    </section>
  );
};
