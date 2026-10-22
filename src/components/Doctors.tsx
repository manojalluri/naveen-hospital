import React from 'react';
import { DOCTORS } from '../data/doctors';
import { DoctorCard } from './DoctorCard';
import { ShieldCheck, CalendarCheck, PhoneCall } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

interface DoctorsProps {
  onBookConsultation: (doctorName: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onBookConsultation }) => {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">
            Meet Our Specialist Doctors
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            Experienced Specialists Committed to Your Family
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Our medical leadership brings dedicated expertise in newborn intensive care, childhood wellness, orthopedic trauma surgeries, and comprehensive diabetes care.
          </p>
        </div>

        {/* Exactly Two Doctor Profiles: Horizontal snap-scroll on mobile, 2-col on lg+ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-2 lg:gap-10 no-scrollbar">
          {DOCTORS.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onBookConsultation={onBookConsultation}
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden flex items-center justify-center gap-1.5 text-xs text-brand-pink font-semibold mt-3">
          <span>&larr; Swipe horizontally to view both doctor profiles &rarr;</span>
        </div>

        {/* Trust Banner beneath Doctor Cards */}
        <div className="mt-12 rounded-2xl bg-brand-soft p-6 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0">
              <CalendarCheck className="w-6 h-6 text-brand-pink" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-brand-navy">
                Plan Your Consultation Today
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Morning: 9:00 AM – 2:00 PM &bull; Evening: 5:30 PM – 9:00 PM. Emergency cases prioritized immediately upon arrival.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-pink" />
              <span>Call Reception</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-brand-green-dark font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Verified Profiles</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
