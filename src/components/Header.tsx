import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldAlert, Clock, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';
import { SocialLinks } from './SocialIcons';

interface HeaderProps {
  onOpenAppointmentModal?: (department?: string, doctor?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Visit Info', href: '#visit-info' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 shadow-sm">
      {/* Top Emergency & Information Strip */}
      <div className="bg-brand-navy text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Emergency Status */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-brand-pink/25 text-white px-2.5 py-0.5 rounded-full font-bold text-[11px] border border-brand-pink/40 animate-pulse shadow-xs">
              <ShieldAlert className="w-3.5 h-3.5 text-brand-pink" />
              <span>24/7 Emergency &amp; Trauma Care</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-brand-pink" />
              Hindupur, Andhra Pradesh
            </span>
          </div>

          {/* Right: Timings & Hotline */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3 text-brand-green" />
              <span>Daily Consultations: <strong className="text-white font-semibold">9AM–2PM &bull; 5:30PM–9PM</strong></span>
            </div>

            <a 
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-brand-pink font-bold transition-colors group"
              title="Call Hospital Reception"
            >
              <div className="w-5 h-5 rounded-full bg-brand-pink flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-2.5 h-2.5 fill-current" />
              </div>
              <span className="tracking-wide">{HOSPITAL_INFO.phoneFormatted}</span>
            </a>

            {/* Social Media Links */}
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-white/20">
              <span className="text-[10px] text-slate-300 font-medium">Follow:</span>
              <SocialLinks variant="dark" size="sm" />
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`bg-white transition-all duration-200 border-b border-slate-100 ${
          scrolled ? 'py-2.5 shadow-md' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Brand Identity */}
            <a 
              href="#home" 
              className="flex items-center gap-3.5 group shrink-0 focus:outline-none"
              aria-label="Naveen Multi-Speciality Hospital Homepage"
            >
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0 border-2 border-brand-pink bg-black">
                <img 
                  src={HOSPITAL_INFO.logoPath} 
                  alt="Naveen Multi-Speciality Hospital Logo" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-xl sm:text-2xl text-brand-navy tracking-tight group-hover:text-brand-pink transition-colors leading-none">
                    NAVEEN
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-1" />
                </div>
                <span className="font-heading font-extrabold text-[11px] sm:text-xs text-brand-pink tracking-wider uppercase leading-snug mt-0.5">
                  MULTI-SPECIALITY HOSPITAL
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                  Balaji Nagar, Hindupur
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 font-semibold text-[13px] text-slate-700 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2.5 py-1.5 rounded-lg hover:text-brand-pink hover:bg-brand-pink-light/60 transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
              
              {/* Emergency Call Pill */}
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-brand-navy bg-slate-50 hover:bg-slate-100 border border-slate-200/90 transition-all shadow-xs"
                title="Direct call to hospital"
              >
                <div className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <Phone className="w-3.5 h-3.5 text-brand-pink shrink-0" />
                <span>Call Us</span>
              </a>

              {/* Hot Pink Primary CTA */}
              <a
                href="#appointment"
                onClick={(e) => {
                  if (onOpenAppointmentModal) {
                    e.preventDefault();
                    onOpenAppointmentModal();
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-pink hover:bg-brand-pink-deep text-white text-xs sm:text-sm font-extrabold shadow-md shadow-brand-pink/30 hover:shadow-lg hover:shadow-brand-pink/40 hover:-translate-y-0.5 transition-all duration-150 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Appointment</span>
              </a>

            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="p-2.5 rounded-xl bg-brand-pink text-white shadow-sm sm:hidden"
                aria-label="Call Hospital"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-brand-pink hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-pink transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl transition-all">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:text-brand-pink hover:bg-brand-pink-light/50 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-300 text-xs">&rarr;</span>
                </button>
              ))}

              <div className="pt-4 mt-3 border-t border-slate-100 space-y-2.5">
                <a
                  href="#appointment"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenAppointmentModal) {
                      e.preventDefault();
                      onOpenAppointmentModal();
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-pink text-white font-extrabold text-sm text-center shadow-md shadow-brand-pink/30 active:scale-98 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-navy text-white font-bold text-xs text-center transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-pink" />
                  <span>Call Hospital: {HOSPITAL_INFO.phoneFormatted}</span>
                </a>

                {/* Social media links for mobile */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">Follow Dr. Keerthi Kids Care:</span>
                  <SocialLinks variant="light" size="sm" />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
