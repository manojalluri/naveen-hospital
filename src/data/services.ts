import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: "paediatrics",
    title: "Paediatrics & Child Healthcare",
    category: "paediatric",
    description: "Holistic, compassionate medical consultations and wellness monitoring for infants, young children, and adolescents.",
    bulletPoints: [
      "Consultations for children from birth to 18 years",
      "Regular growth monitoring and developmental tracking",
      "Childhood illness diagnosis and gentle care",
      "Nutritional and preventive parent guidance"
    ],
    iconName: "Baby",
    badge: "Dr. Keerthi S.",
    enquiryDepartment: "Paediatrics"
  },
  {
    id: "neonatal-care",
    title: "Neonatal Care",
    category: "paediatric",
    description: "Specialised newborn assessments, advanced neonatal intensive care, and delicate monitoring for fragile beginnings.",
    bulletPoints: [
      "Comprehensive newborn clinical assessment",
      "Neonatal intensive care support (NICU)",
      "Dedicated management for premature and low-birth-weight infants",
      "Phototherapy and neonatal infection management"
    ],
    iconName: "HeartHandshake",
    badge: "Specialised NICU",
    enquiryDepartment: "Neonatal Care"
  },
  {
    id: "picu",
    title: "Paediatric Intensive Care",
    category: "paediatric",
    description: "Round-the-clock intensive medical attention and continuous monitoring for critically ill children.",
    bulletPoints: [
      "Specialised pediatric critical care assessment",
      "Continuous vital signs monitoring and respiratory support",
      "Rapid intervention for acute pediatric medical emergencies",
      "Compassionate support for concerned parents"
    ],
    iconName: "HeartPulse",
    badge: "Critical Care",
    enquiryDepartment: "Paediatric Intensive Care"
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics & Joint Care",
    category: "orthopaedic",
    description: "Comprehensive musculoskeletal care, fracture management, joint replacements, and restorative therapies.",
    bulletPoints: [
      "Fracture assessment, casting and stabilization",
      "Degenerative joint conditions and arthritis care",
      "Joint replacement surgery consultations",
      "Closed reduction of fractures and minimally invasive approaches"
    ],
    iconName: "Bone",
    badge: "Dr. J. Naveen Kumar",
    enquiryDepartment: "Orthopaedics"
  },
  {
    id: "trauma-emergency",
    title: "Trauma & Emergency Care",
    category: "emergency",
    description: "Immediate 24/7 emergency triage and trauma management for road traffic accidents and acute injuries.",
    bulletPoints: [
      "Road traffic accident (RTA) emergency assessment",
      "Acute orthopaedic trauma and wound management",
      "Immediate emergency triage upon arrival",
      "Priority clinical assessment of urgent cases"
    ],
    iconName: "Siren",
    badge: "24/7 Available",
    enquiryDepartment: "Trauma Care"
  },
  {
    id: "diabetes-management",
    title: "Diabetes Management & Foot Care",
    category: "clinical",
    description: "Specialised glycemic monitoring, lifestyle counselling, and dedicated prevention and treatment of diabetic complications.",
    bulletPoints: [
      "Comprehensive diabetes consultations & HbA1c review",
      "Specialised diabetic foot care & neuropathy assessments",
      "Management of complex diabetic foot ulcers & wound care",
      "Surgical interventions including amputation when medically required"
    ],
    iconName: "Activity",
    badge: "Specialist Care",
    enquiryDepartment: "Diabetes Care"
  },
  {
    id: "vaccination",
    title: "Needle-Free Vaccination & Immunization",
    category: "paediatric",
    description: "Scheduled pediatric and adult vaccinations featuring advanced needle-free vaccination technology for a gentle, pain-free experience.",
    bulletPoints: [
      "Advanced needle-free vaccination for comfortable, tear-free child immunization",
      "Routine infant, toddler, and adolescent vaccination schedules (WHO & IAP aligned)",
      "Preventive vaccines and boosters for high-risk adults and seniors",
      "Strict cold-chain storage to guarantee maximum vaccine safety & efficacy"
    ],
    iconName: "Syringe",
    badge: "Needle-Free Vaccination",
    enquiryDepartment: "Vaccination"
  },
  {
    id: "diagnostics-laboratory",
    title: "Completely Automated Laboratory",
    category: "clinical",
    description: "Completely automated in-house clinical pathology and diagnostic laboratory delivering swift, high-precision test results.",
    bulletPoints: [
      "Completely automated biochemistry, hematology, and clinical pathology analyzers",
      "Fast-track diagnostic testing for emergency, pediatric, and trauma cases",
      "Comprehensive diabetes panels, blood sugar profiles, and infection screenings",
      "Prompt sample processing with verified, accurate report turnaround"
    ],
    iconName: "FlaskConical",
    badge: "Completely Automated",
    enquiryDepartment: "Diagnostics and Laboratory"
  },
  {
    id: "radiology",
    title: "Radiology Services",
    category: "clinical",
    description: "Essential imaging modalities to quickly evaluate fractures, chest health, and internal bone structures.",
    bulletPoints: [
      "X-ray imaging for trauma and bone fracture evaluation",
      "Radiological assessment for pediatric conditions",
      "Rapid image availability for emergency clinical decisions",
      "Comfortable and patient-centered imaging suite"
    ],
    iconName: "Scan",
    badge: "Imaging Suite",
    enquiryDepartment: "Diagnostics and Laboratory"
  },
  {
    id: "pharmacy",
    title: "In-House Pharmacy",
    category: "clinical",
    description: "Convenient on-premise access to genuine prescribed medications, pediatric syrups, and emergency injectables.",
    bulletPoints: [
      "24/7 pharmacy access as reported by the hospital",
      "Full range of pediatric dosages and formulations",
      "Orthopaedic recovery aids, splints, and bandages",
      "Prescription review and administration guidance"
    ],
    iconName: "Pill",
    badge: "24/7 Access",
    enquiryDepartment: "Pharmacy"
  },
  {
    id: "inpatient-care",
    title: "Inpatient Care & Recovery",
    category: "clinical",
    description: "Comfortable, clean, and vigilantly monitored patient rooms for post-surgical care and medical observation.",
    bulletPoints: [
      "Continuous nursing and vitals monitoring",
      "Specialised post-operative orthopaedic recovery",
      "Dedicated infant and child care rooms",
      "Clean, calm, and hygienic healing environment"
    ],
    iconName: "BedDouble",
    badge: "Admissions",
    enquiryDepartment: "General Enquiry"
  },
  {
    id: "prp-treatments",
    title: "PRP Treatments (Platelet-Rich Plasma)",
    category: "orthopaedic",
    description: "Advanced biological therapy for joint and tendon indications. Consult our specialist to evaluate suitability.",
    bulletPoints: [
      "Targeted regenerative therapy evaluation",
      "Non-surgical option for specific musculoskeletal conditions",
      "Detailed clinical examination before procedure recommendation",
      "Enquire to confirm availability and clinical suitability"
    ],
    iconName: "Sparkles",
    badge: "Consult Doctor First",
    enquiryDepartment: "Orthopaedics"
  }
];
