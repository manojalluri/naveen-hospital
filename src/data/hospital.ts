import type { Statistic } from '../types';

export const HOSPITAL_INFO = {
  name: "Naveen Multi-Speciality Hospital",
  tagline: "Expert Care. Compassionate Hearts. Healthier Tomorrows.",
  subheadline: "Specialised paediatric, neonatal, orthopaedic and trauma care for your family, backed by experienced doctors and round-the-clock emergency support in Hindupur.",
  locationShort: "Balaji Nagar, Hindupur, Andhra Pradesh",
  address: "Near New Guru Scan Centre, Shilpa Nursing Home Road, Balaji Nagar, Hindupur 515201, Andhra Pradesh, India",
  phone: "9966000802",
  phoneFormatted: "+91 99660 00802",
  whatsappNumber: "9966000802",
  whatsappUrl: "https://wa.me/919966000802",
  email: "naveenmultyspecialityhospital@gmail.com",
  emergencyAvailability: "24/7 Round-the-Clock",
  consultationHours: {
    morning: "9:00 AM – 2:00 PM",
    evening: "5:30 PM – 9:00 PM",
    allDays: "Monday to Sunday"
  },
  logoPath: "/images/hospital-logo.png",
  googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Naveen+Multi-Speciality+Hospital+Balaji+Nagar+Hindupur+515201",
  googleSpreadsheetUrl: "https://docs.google.com/spreadsheets/d/1sVCbNpIX2hO7XuGdphL4PiJHMFGVwDyTzeICJWLMvwM/edit?gid=0#gid=0",
  googleSheetWebhookUrl: (import.meta as any).env?.VITE_GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbyTB-Pfb9a_kznpa_m1z1WCok0KokJRyz6Ny1Gbfj0owatlXCLPNUv0RDiOfDVOrKz6_A/exec",
  socialLinks: {
    youtube: "https://youtube.com/@drkeerthikidscare?si=Fw7JB-37SAdNMBUR",
    instagram: "https://www.instagram.com/drkeerthikidscare?cplk=N2dmZzZrOGlzNWhh",
    facebook: "https://www.facebook.com/share/1K3rAEbh1Z/?mibextid=wwXIfr"
  },
  aboutSummary: "Naveen Multi-Speciality Hospital provides specialised paediatric, neonatal, orthopaedic, diabetes and trauma care. With a focus on accessible treatment, patient comfort and emergency readiness, the hospital serves individuals and families in and around Hindupur.",
  highlights: [
    "11+ years of trusted patient care in the Hindupur community",
    "Round-the-clock 24/7 emergency readiness & trauma triage",
    "Affordable intensive care and transparent clinical guidance",
    "Cashless treatment facility (subject to applicable eligibility & terms)",
    "Direct personal attention and care from specialist doctors"
  ]
};

export const HOSPITAL_STATISTICS: Statistic[] = [
  {
    value: "11+",
    label: "Years of Patient Trust",
    description: "Dedicated healthcare service to Hindupur and neighbouring areas",
    iconName: "ShieldCheck"
  },
  {
    value: "4,000+",
    label: "Inpatients Cared For",
    description: "Comprehensive in-hospital medical attention and monitored recovery",
    iconName: "Building2"
  },
  {
    value: "10,000+",
    label: "Outpatients Cared For",
    description: "Expert consultations, accurate diagnosis and preventive follow-ups",
    iconName: "Users"
  },
  {
    value: "500+",
    label: "Newborns Discharged",
    description: "Specialised neonatal care and gentle premature infant nursery support",
    iconName: "Baby"
  },
  {
    value: "200+",
    label: "Orthopaedic Surgeries",
    description: "Successful joint replacements, closed reductions & fracture procedures",
    iconName: "Activity"
  }
];
