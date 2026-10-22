import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, FileText, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

export const PatientVisitInfo: React.FC = () => {
  return (
    <section id="visit-info" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">
            Patient Visit Information
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            How to Reach &amp; Consult Our Doctors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Conveniently situated in Balaji Nagar, Hindupur. Readily accessible for consultations, emergency trauma arrivals, and follow-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact & Location Details Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Navigation Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-soft border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-pink text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
                    Hospital Address
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-brand-navy mt-0.5">
                    Naveen Multi-Speciality Hospital
                  </h3>
                  <p className="text-sm text-slate-700 mt-1.5 leading-relaxed font-medium">
                    {HOSPITAL_INFO.address}
                  </p>
                </div>
              </div>

              {/* Directions Button */}
              <div className="pt-2">
                <a
                  href={HOSPITAL_INFO.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4 text-brand-pink" />
                  <span>Get Directions on Google Maps (Search)</span>
                </a>
                <span className="text-[11px] text-slate-400 block mt-1.5">
                  * Opens Google Maps search for verified landmark address near New Guru Scan Centre, Shilpa Nursing Home Road.
                </span>
              </div>
            </div>

            {/* Quick Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Telephone */}
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-pink/40 shadow-xs hover:shadow-card transition-all flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-pink-light text-brand-pink flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Call Hospital</span>
                  <span className="text-sm sm:text-base font-extrabold text-brand-navy group-hover:text-brand-pink transition-colors">
                    {HOSPITAL_INFO.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={HOSPITAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-green/40 shadow-xs hover:shadow-card transition-all flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-green-light text-brand-green-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Desk</span>
                  <span className="text-sm sm:text-base font-extrabold text-brand-navy group-hover:text-brand-green-dark transition-colors">
                    {HOSPITAL_INFO.whatsappNumber}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${HOSPITAL_INFO.email}`}
                className="sm:col-span-2 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-blue/40 shadow-xs hover:shadow-card transition-all flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                  <span className="text-xs sm:text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors truncate block">
                    {HOSPITAL_INFO.email}
                  </span>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Timings & What to Bring */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Timings Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-pink">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-white">
                    Operational Hours
                  </h3>
                  <p className="text-xs text-slate-300">Open 7 days a week</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-slate-300 font-medium">Emergency Care:</span>
                  <span className="font-bold text-brand-pink bg-brand-pink/15 px-2.5 py-0.5 rounded-full">
                    24/7 Available
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-slate-300 font-medium">In-House Pharmacy:</span>
                  <span className="font-bold text-white">24/7 Access</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-slate-300 font-medium">Morning Consultations:</span>
                  <span className="font-bold text-white">9:00 AM – 2:00 PM</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300 font-medium">Evening Consultations:</span>
                  <span className="font-bold text-white">5:30 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Checklist: What to Bring */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-soft border border-slate-200/80">
              <h4 className="font-heading font-bold text-sm sm:text-base text-brand-navy flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-brand-pink" />
                <span>What to Bring for Your Consultation</span>
              </h4>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>Previous hospital discharge summaries and clinical prescriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>Recent blood reports, laboratory test results, and X-ray films</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>List of ongoing diabetic or chronic medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>Child immunization record card for pediatric visits</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
