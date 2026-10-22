import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldAlert, X, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

interface FloatingEmergencyButtonProps {
  onOpenAppointmentModal?: () => void;
}

export const FloatingEmergencyButton: React.FC<FloatingEmergencyButtonProps> = ({ onOpenAppointmentModal }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside aria-label="Emergency Contact Options" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Expanded quick contact actions */}
      {expanded && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 mb-1 space-y-2 animate-fade-in w-64 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-bold text-brand-navy flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-brand-pink" />
              24/7 Emergency Support
            </span>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600"
              aria-label="Close emergency menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phone}`}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl bg-brand-pink text-white font-bold hover:bg-brand-pink-deep transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0 fill-current" />
            <div className="text-left">
              <div>Call Emergency</div>
              <div className="text-[10px] text-pink-100 font-normal">{HOSPITAL_INFO.phoneFormatted}</div>
            </div>
          </a>

          <a
            href={HOSPITAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-2.5 p-2 rounded-xl bg-brand-green text-white font-bold hover:bg-brand-green-dark transition-colors"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <div className="text-left">
              <div>WhatsApp Desk</div>
              <div className="text-[10px] text-green-100 font-normal">Fast response</div>
            </div>
          </a>

          {onOpenAppointmentModal && (
            <button
              type="button"
              onClick={() => {
                setExpanded(false);
                onOpenAppointmentModal();
              }}
              className="w-full flex items-center gap-2.5 p-2 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-brand-pink shrink-0" />
              <div className="text-left">
                <div>Book Appointment Form</div>
                <div className="text-[10px] text-slate-300 font-normal">Fast popup request</div>
              </div>
            </button>
          )}
        </div>
      )}

      {/* Main floating pill button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full bg-brand-pink text-white font-extrabold text-[11px] sm:text-sm shadow-xl shadow-brand-pink/40 hover:bg-brand-pink-deep hover:scale-105 active:scale-95 transition-all border-2 border-white"
        aria-label="Toggle 24/7 emergency contact options"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current animate-pulse shrink-0" />
        <span>Emergency</span>
      </button>
    </aside>
  );
};
