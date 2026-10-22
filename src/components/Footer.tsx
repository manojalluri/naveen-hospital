import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldAlert, ArrowUp, Navigation } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { name: 'Paediatrics & Child Healthcare', href: '#services' },
    { name: 'Neonatal Care (NICU)', href: '#services' },
    { name: 'Paediatric Intensive Care (PICU)', href: '#services' },
    { name: 'Orthopaedics & Joint Care', href: '#services' },
    { name: 'Trauma & Emergency Care', href: '#services' },
    { name: 'Diabetes Management & Foot Care', href: '#services' },
    { name: 'Vaccination Services', href: '#services' },
    { name: 'In-House Pharmacy & Lab', href: '#services' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Hospital', href: '#about' },
    { name: 'Our Specialist Doctors', href: '#doctors' },
    { name: 'Hospital Facilities', href: '#facilities' },
    { name: 'Book Appointment Enquiry', href: '#appointment' },
    { name: 'Patient Visit Information', href: '#visit-info' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <footer id="contact" className="bg-brand-navy text-white pt-16 pb-10 border-t-4 border-brand-pink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Hospital Brand Identity & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 shadow-lg border-2 border-brand-pink bg-black">
                <img 
                  src={HOSPITAL_INFO.logoPath} 
                  alt="Naveen Multi-Speciality Hospital Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-tight text-white block">
                  NAVEEN
                </span>
                <span className="font-heading font-bold text-xs text-brand-pink tracking-wide block">
                  MULTI-SPECIALITY HOSPITAL
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                  Hindupur, Andhra Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {HOSPITAL_INFO.aboutSummary}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-pink/20 text-brand-pink text-xs font-bold border border-brand-pink/30">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>24/7 Emergency Support Hotline</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-brand-pink transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase">
              Specialist Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {servicesList.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="hover:text-brand-pink transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase">
              Hospital Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>

              {/* Telephone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-pink shrink-0" />
                <a 
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="font-bold text-white hover:text-brand-pink transition-colors"
                >
                  {HOSPITAL_INFO.phoneFormatted} (Call / 24/7)
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-brand-green shrink-0" />
                <a 
                  href={HOSPITAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  WhatsApp: +91 {HOSPITAL_INFO.whatsappNumber}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="hover:text-brand-blue transition-colors text-xs xl:text-sm font-medium leading-snug [overflow-wrap:anywhere]"
                  title={HOSPITAL_INFO.email}
                >
                  naveenmultyspecialityhospital<wbr />@gmail.com
                </a>
              </div>

              {/* Directions Link */}
              <div className="pt-2">
                <a
                  href={HOSPITAL_INFO.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-pink hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Landmark Search</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* General Medical Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] sm:text-xs text-slate-400 leading-relaxed text-center sm:text-left">
          <p>
            <strong className="text-slate-300">General Medical Disclaimer:</strong> The information provided on this website is for general educational, informative, and hospital contact purposes only and does not constitute formal medical advice, diagnosis, or guaranteed treatment outcome. Always consult a qualified specialist doctor directly regarding any medical condition. In case of acute or life-threatening medical emergencies, immediately contact our 24/7 emergency desk at {HOSPITAL_INFO.phoneFormatted} or the nearest hospital emergency department.
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Naveen Multi-Speciality Hospital, Hindupur. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-pink" />
          </button>
        </div>

      </div>
    </footer>
  );
};
