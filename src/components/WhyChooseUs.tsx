import React from 'react';
import { 
  Users2, 
  Baby, 
  Bone, 
  Activity, 
  Siren, 
  HeartHandshake, 
  Building 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: "Two Complementary Specialist Doctors",
      description: "Direct consultation and coordinated medical attention from specialists in pediatrics & neonatology, and orthopedics & diabetology.",
      icon: Users2,
      colorClass: "bg-brand-pink-light text-brand-pink border-brand-pink/20",
    },
    {
      title: "Specialised Paediatric & Neonatal Care",
      description: "Dedicated neonatal intensive care (NICU) capabilities for fragile newborns, premature infants, and childhood health tracking up to 18 years.",
      icon: Baby,
      colorClass: "bg-brand-green-light text-brand-green-dark border-brand-green/20",
    },
    {
      title: "Comprehensive Orthopaedic & Trauma Treatment",
      description: "Immediate triage for road traffic accident trauma, fracture reductions, and joint conditions right here in Hindupur.",
      icon: Bone,
      colorClass: "bg-brand-blue-light text-brand-blue border-brand-blue/20",
    },
    {
      title: "Dedicated Diabetes Care & Diabetic Foot Clinic",
      description: "Comprehensive glycemic monitoring, preventive foot care, neuropathy evaluation, and sensitive management of complications.",
      icon: Activity,
      colorClass: "bg-brand-orange-light text-brand-orange border-brand-orange/20",
    },
    {
      title: "24/7 Emergency Support & Rapid Triage",
      description: "Continuous casualty readiness so families have immediate access to life-saving care without dangerous delays.",
      icon: Siren,
      colorClass: "bg-brand-pink-light text-brand-pink border-brand-pink/20",
    },
    {
      title: "Accessible & Community-Focused Care",
      description: "Over 11 years of deep commitment to Hindupur and neighbouring areas, delivering compassionate, affordable clinical treatment.",
      icon: HeartHandshake,
      colorClass: "bg-brand-green-light text-brand-green-dark border-brand-green/20",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">
            Why Families Rely On Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            Our Patient-First Approach to Healing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Rooted in Hindupur with over a decade of community trust, Naveen Multi-Speciality Hospital brings expert medical specialities together under one caring roof.
          </p>
        </div>

        {/* 6 Cards: Horizontal snap-scroll on mobile, 2/3-col grid on md+ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[82vw] xs:w-[68vw] md:w-auto p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-pink/30 shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${pt.colorClass} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy group-hover:text-brand-pink transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <Building className="w-3.5 h-3.5" />
                  <span>Hindupur Healthcare Pillar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-1.5 text-xs text-brand-pink font-semibold mt-4">
          <span>&larr; Swipe horizontally to view all reasons &rarr;</span>
        </div>

      </div>
    </section>
  );
};
