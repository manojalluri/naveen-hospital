import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Stethoscope, Send, CheckCircle2, Loader2, ShieldCheck, Info } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: string;
  initialDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDepartment = '',
  initialDoctor = ''
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    department: initialDepartment || 'General Enquiry',
    doctor: initialDoctor || 'No preference',
    visitDate: '',
    preferredTime: 'Morning (9:00 AM – 2:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    patientName: string;
    phone: string;
    department: string;
    doctor: string;
    visitDate: string;
    preferredTime: string;
  } | null>(null);

  useEffect(() => {
    if (initialDepartment) {
      setFormData(prev => ({ ...prev, department: initialDepartment }));
    }
  }, [initialDepartment]);

  useEffect(() => {
    if (initialDoctor) {
      setFormData(prev => ({ ...prev, doctor: initialDoctor }));
    }
  }, [initialDoctor]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const departments = [
    'Paediatrics',
    'Neonatal Care',
    'Paediatric Intensive Care',
    'Orthopaedics',
    'Trauma Care',
    'Diabetes Care',
    'Needle-Free Vaccination',
    'Completely Automated Laboratory',
    'Pharmacy',
    'General Enquiry'
  ];

  const doctors = [
    'Dr. Keerthi S.',
    'Dr. J. Naveen Kumar',
    'No preference'
  ];

  const times = [
    'Morning (9:00 AM – 2:00 PM)',
    'Evening (5:30 PM – 9:00 PM)',
    'Emergency / Urgent'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient or contact name is required';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Please enter a valid name (at least 2 letters)';
    }

    const cleanedPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanedPhone) {
      newErrors.phone = 'Contact phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone) && !/^\+91[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.visitDate) {
      newErrors.visitDate = 'Please select a preferred visit date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const submissionPayload = {
      patientName: formData.patientName.trim(),
      phone: formData.phone.trim(),
      department: formData.department,
      doctor: formData.doctor,
      visitDate: formData.visitDate,
      preferredTime: formData.preferredTime,
      message: formData.message.trim()
    };

    // Send submission directly into Google Sheet
    if (HOSPITAL_INFO.googleSheetWebhookUrl) {
      try {
        await fetch(HOSPITAL_INFO.googleSheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(submissionPayload)
        });
      } catch (err) {
        console.warn('Google Sheet submission warning:', err);
      }
    }

    setSubmittedData({
      patientName: formData.patientName.trim(),
      phone: formData.phone.trim(),
      department: formData.department,
      doctor: formData.doctor,
      visitDate: formData.visitDate,
      preferredTime: formData.preferredTime
    });

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      patientName: '',
      phone: '',
      department: initialDepartment || 'General Enquiry',
      doctor: initialDoctor || 'No preference',
      visitDate: '',
      preferredTime: 'Morning (9:00 AM – 2:00 PM)',
      message: ''
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule a Visit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy tracking-tight">
            Book an Appointment
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
            Submit your details below. Your enquiry is recorded straight into our hospital sheet, and our desk will call you to confirm.
          </p>
        </div>

        {/* Success Confirmation Screen */}
        {isSubmitted && submittedData ? (
          <div className="py-4 space-y-5 animate-fade-in text-center sm:text-left">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-green-light/90 to-emerald-50 border-2 border-brand-green/30 text-slate-800">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-heading font-black text-xl text-slate-900">
                    Enquiry Recorded in Hospital System!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Thank you, <strong className="text-brand-navy font-bold">{submittedData.patientName}</strong>. Your request for <strong>{submittedData.department}</strong> with <strong>{submittedData.doctor}</strong> on <strong>{submittedData.visitDate} ({submittedData.preferredTime})</strong> has been saved.
                  </p>
                  <p className="text-xs text-slate-600">
                    Our hospital coordinator will call you at <strong className="text-brand-pink font-bold">{submittedData.phone}</strong> shortly to confirm your exact slot.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                Submit Another Request
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-pink hover:bg-brand-pink-deep text-white font-bold text-xs shadow-md transition-all active:scale-98"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {/* Quick Notice */}
            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>For immediate medical emergencies, call <a href={`tel:${HOSPITAL_INFO.phone}`} className="font-bold underline text-brand-pink">{HOSPITAL_INFO.phoneFormatted}</a> 24/7.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Patient Name */}
              <div>
                <label htmlFor="modal-patientName" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Patient or Contact Name <span className="text-brand-pink">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="modal-patientName"
                    value={formData.patientName}
                    onChange={(e) => {
                      setFormData({ ...formData, patientName: e.target.value });
                      if (errors.patientName) setErrors({ ...errors, patientName: '' });
                    }}
                    placeholder="Full name"
                    className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border ${
                      errors.patientName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all`}
                  />
                </div>
                {errors.patientName && (
                  <p className="text-[11px] text-red-500 font-semibold mt-1">{errors.patientName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Contact Mobile <span className="text-brand-pink">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="modal-phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="10-digit mobile number"
                    maxLength={15}
                    className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-500 font-semibold mt-1">{errors.phone}</p>
                )}
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Department */}
              <div>
                <label htmlFor="modal-department" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Department
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <select
                    id="modal-department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all cursor-pointer"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Doctor */}
              <div>
                <label htmlFor="modal-doctor" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Preferred Doctor
                </label>
                <select
                  id="modal-doctor"
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all cursor-pointer"
                >
                  {doctors.map((doc) => (
                    <option key={doc} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Date */}
              <div>
                <label htmlFor="modal-visitDate" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Preferred Visit Date <span className="text-brand-pink">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="modal-visitDate"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.visitDate}
                    onChange={(e) => {
                      setFormData({ ...formData, visitDate: e.target.value });
                      if (errors.visitDate) setErrors({ ...errors, visitDate: '' });
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border ${
                      errors.visitDate ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all cursor-pointer`}
                  />
                </div>
                {errors.visitDate && (
                  <p className="text-[11px] text-red-500 font-semibold mt-1">{errors.visitDate}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label htmlFor="modal-preferredTime" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="modal-preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all cursor-pointer"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Optional Note */}
            <div>
              <label htmlFor="modal-message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Optional Notes
              </label>
              <textarea
                id="modal-message"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="e.g. First visit enquiry / Follow-up review"
                className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-brand-pink hover:bg-brand-pink-deep disabled:bg-slate-400 text-white font-extrabold text-sm sm:text-base shadow-md shadow-brand-pink/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving to Hospital Sheet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Enquiry</span>
                  </>
                )}
              </button>
              
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                <span>Instant registration directly into hospital reception records.</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
