import type { Facility } from '../types';

export const FACILITIES: Facility[] = [
  {
    id: "emergency-24-7",
    title: "24/7 Emergency Support",
    description: "Round-the-clock emergency medical readiness and rapid triage to handle trauma and acute pediatric conditions.",
    iconName: "Siren",
    highlight: "24/7 Ready"
  },
  {
    id: "inhouse-pharmacy",
    title: "In-House Pharmacy",
    description: "Hospital-reported round-the-clock availability for critical medications, pediatric syrups, and orthopedic bandages.",
    iconName: "Pill",
    highlight: "24/7 Access"
  },
  {
    id: "laboratory-services",
    title: "Completely Automated Laboratory",
    description: "Fully automated, on-site clinical pathology and diagnostic testing equipment ensuring swift and high-precision patient reports.",
    iconName: "FlaskConical",
    highlight: "Completely Automated"
  },
  {
    id: "radiology-services",
    title: "Radiology Services",
    description: "Essential imaging capabilities on premise to immediately inspect bone alignment, fractures, and internal trauma.",
    iconName: "Scan",
    highlight: "Diagnostic"
  },
  {
    id: "inpatient-wards",
    title: "Inpatient Care",
    description: "Equipped inpatient rooms and beds for monitoring post-operative recovery, newborn care, and acute illness admissions.",
    iconName: "BedDouble",
    highlight: "Comfort & Care"
  },
  {
    id: "cashless-facility",
    title: "Cashless Treatment Facility",
    description: "Support for cashless hospitalisation subject to individual policy verification and applicable scheme eligibility.",
    iconName: "CreditCard",
    highlight: "Subject to Eligibility"
  },
  {
    id: "waiting-lounge",
    title: "Spacious Waiting Lounge",
    description: "Calm, clean, ventilated, and comfortable seating areas for families accompanying patients during consultations.",
    iconName: "Armchair",
    highlight: "Patient Comfort"
  },
  {
    id: "wheelchair-access",
    title: "Wheelchair Accessibility",
    description: "Smooth ramps, barrier-free access paths, and wheelchair availability for elderly and mobility-impaired patients.",
    iconName: "Accessibility",
    highlight: "Barrier-Free"
  }
];
