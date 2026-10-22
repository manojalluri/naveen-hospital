import React from 'react';
import { Clock, GraduationCap, Award, CheckCircle2, Calendar } from 'lucide-react';
import type { Doctor } from '../types';
import { SocialLinks } from './SocialIcons';

interface DoctorCardProps {
  doctor: Doctor;
  onBookConsultation: (doctorName: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookConsultation }) => {
  return (
    <div className="snap-center shrink-0 w-[86vw] xs:w-[78vw] sm:w-[65vw] lg:w-auto bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      
      <div>
        {/* Doctor Header / Profile Image Area */}
        <div className="relative bg-gradient-to-br from-slate-50 to-brand-soft p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          
          {/* Avatar Container with Configurable Path & Fallback */}
          <div className="relative w-32 h-36 sm:w-36 sm:h-40 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0 bg-white">
            <img 
              src={doctor.image} 
              alt={`${doctor.name} - ${doctor.speciality}`}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                // Graceful fallback to styled initial badge if file is replaced/missing
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Experience Pill on image */}
            <div className="absolute bottom-2 left-2 right-2 bg-brand-navy/90 backdrop-blur-xs text-white text-[10px] font-bold py-1 px-2 rounded-md text-center">
              {doctor.experience}
            </div>
          </div>

          {/* Doctor Title & Speciality */}
          <div className="text-center sm:text-left space-y-2 flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold border border-brand-pink/20">
              <Award className="w-3.5 h-3.5" />
              <span>Specialist Consultant</span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-2.5xl text-brand-navy">
              {doctor.name}
            </h3>

            <p className="text-sm sm:text-base font-semibold text-brand-pink">
              {doctor.speciality}
            </p>

            {/* Qualifications Pill badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
              {doctor.qualifications.map((qual, qIdx) => (
                <span 
                  key={qIdx}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
                >
                  {qual}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Doctor Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Professional Background */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
              <GraduationCap className="w-4 h-4 text-brand-navy" />
              <span>Medical Education &amp; Background</span>
            </h4>
            <ul className="space-y-1.5">
              {doctor.background.map((bg, bIdx) => (
                <li key={bIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                  <span>{bg}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-pink" />
              <span>Key Areas of Clinical Expertise</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.areasOfExpertise.map((item, eIdx) => (
                <div key={eIdx} className="text-xs text-slate-700 flex items-start gap-2 bg-brand-soft/70 p-2 rounded-lg border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0 mt-1.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Timings Box */}
          <div className="p-4 rounded-2xl bg-brand-soft border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-brand-pink" />
              <span>Daily Consultation Hours</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                <span className="font-semibold text-slate-500 block">Morning Session</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{doctor.consultationTimings.morning}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                <span className="font-semibold text-slate-500 block">Evening Session</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{doctor.consultationTimings.evening}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-8 pt-0 space-y-3.5">
        {doctor.id === 'dr-keerthi' && (
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-slate-600">
              Dr. Keerthi Kids Care:
            </span>
            <SocialLinks variant="light" size="sm" />
          </div>
        )}

        <button
          type="button"
          onClick={() => onBookConsultation(doctor.name)}
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-pink hover:bg-brand-pink-deep text-white font-bold text-sm shadow-md shadow-brand-pink/20 hover:shadow-lg transition-all active:scale-98"
        >
          <Calendar className="w-4 h-4" />
          <span>{doctor.ctaText}</span>
        </button>
      </div>

    </div>
  );
};
