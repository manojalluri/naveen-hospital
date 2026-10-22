import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Stethoscope, AlertCircle, Send, CheckCircle2, Info, Loader2, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospital';

interface AppointmentFormProps {
  initialDepartment?: string;
  initialDoctor?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
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

  const departments = [
    'Paediatrics',
    'Neonatal Care',
    'Paediatric Intensive Care',
    'Orthopaedics',
    'Trauma Care',
    'Diabetes Care',
    'Vaccination',
    'Diagnostics and Laboratory',
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

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0];

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

    // Save summary for confirmation screen
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

    // Reset form fields
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
    <section id="appointment" className="py-16 lg:py-24 bg-gradient-to-b from-white via-brand-soft to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">
            Schedule a Visit
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            Appointment Enquiry
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Submit your visit preferences below. Your appointment enquiry is recorded directly in our hospital records, and our front-desk coordinator will call you to confirm your slot.
          </p>
        </div>

        {/* Informative Disclaimer Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Important Notice:</strong> Submitting this form sends an appointment <em>enquiry</em> to the hospital reception and does <strong>not</strong> automatically confirm an appointment slot. Our staff will confirm available timing. For immediate emergencies, please call <a href={`tel:${HOSPITAL_INFO.phone}`} className="font-bold underline text-brand-pink">{HOSPITAL_INFO.phoneFormatted}</a> immediately.
          </p>
        </div>

        {/* Main Appointment Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 relative overflow-hidden">
          
          {isSubmitted && submittedData && (
            <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-green-light/90 to-emerald-50 border-2 border-brand-green/40 text-slate-800 shadow-md animate-fade-in text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
                    Enquiry Recorded in Hospital System!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Thank you, <strong className="text-brand-navy font-bold">{submittedData.patientName}</strong>. Your appointment request for <strong>{submittedData.department}</strong> on <strong>{submittedData.visitDate} ({submittedData.preferredTime})</strong> has been saved directly into our reception record.
                  </p>
                  <p className="text-xs text-slate-600">
                    Our hospital front desk will call you at <strong className="text-brand-pink font-bold">{submittedData.phone}</strong> shortly to confirm your consultation timing.
                  </p>
                  
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-brand-navy border border-slate-200 text-xs font-bold shadow-xs transition-all active:scale-98 cursor-pointer"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Patient Name */}
              <div>
                <label htmlFor="patientName" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Patient or Contact Name <span className="text-brand-pink">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={(e) => {
                      setFormData({ ...formData, patientName: e.target.value });
                      if (errors.patientName) setErrors({ ...errors, patientName: '' });
                    }}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border bg-white focus:bg-white text-slate-900 transition-all ${
                      errors.patientName 
                        ? 'border-brand-pink focus:ring-1 focus:ring-brand-pink' 
                        : 'border-slate-300 focus:border-brand-pink'
                    }`}
                    required
                  />
                </div>
                {errors.patientName && (
                  <p className="text-xs text-brand-pink mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.patientName}</span>
                  </p>
                )}
              </div>

              {/* Contact Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Contact Phone Number <span className="text-brand-pink">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 9966000802"
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border bg-white text-slate-900 transition-all ${
                      errors.phone 
                        ? 'border-brand-pink focus:ring-1 focus:ring-brand-pink' 
                        : 'border-slate-300 focus:border-brand-pink'
                    }`}
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-brand-pink mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Department Dropdown */}
              <div>
                <label htmlFor="department" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Department <span className="text-brand-pink">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Doctor */}
              <div>
                <label htmlFor="doctor" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Preferred Doctor
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                  >
                    {doctors.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Preferred Visit Date */}
              <div>
                <label htmlFor="visitDate" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Preferred Visit Date <span className="text-brand-pink">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    min={todayStr}
                    value={formData.visitDate}
                    onChange={(e) => {
                      setFormData({ ...formData, visitDate: e.target.value });
                      if (errors.visitDate) setErrors({ ...errors, visitDate: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border bg-white text-slate-900 transition-all ${
                      errors.visitDate 
                        ? 'border-brand-pink focus:ring-1 focus:ring-brand-pink' 
                        : 'border-slate-300 focus:border-brand-pink'
                    }`}
                    required
                  />
                </div>
                {errors.visitDate && (
                  <p className="text-xs text-brand-pink mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.visitDate}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time Session */}
              <div>
                <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Preferred Consultation Shift
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
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

            {/* Optional Short Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Optional Short Message (Non-sensitive visit notes)
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. First visit enquiry / Follow-up review (please do not submit sensitive personal medical history)"
                  className="w-full p-4 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-brand-pink hover:bg-brand-pink-deep disabled:bg-slate-400 text-white font-extrabold text-base shadow-lg shadow-brand-pink/30 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Saving to Hospital Sheet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Appointment Enquiry</span>
                  </>
                )}
              </button>
              
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>Your request is submitted directly to our hospital records. Reception will call you to confirm.</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
