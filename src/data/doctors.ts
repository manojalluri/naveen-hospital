import type { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: "dr-keerthi",
    name: "Dr. Keerthi S.",
    speciality: "Paediatrician and Neonatologist",
    qualifications: [
      "MBBS",
      "DNB Pediatrics",
      "Fellowship in Neonatology"
    ],
    experience: "10 Years of Clinical Experience",
    image: "/images/dr-keerthi.png",
    background: [
      "MBBS from Sri Venkateswara Medical College, Tirupati",
      "DNB Pediatrics from Kanchi Kamakoti CHILDS Trust Hospital, Chennai",
      "Fellowship in Neonatology from Indira Gandhi Institute of Child Health, Bengaluru"
    ],
    areasOfExpertise: [
      "Neonatal intensive care (NICU)",
      "Paediatric intensive care (PICU)",
      "Childhood vaccination & immunization",
      "Growth monitoring & developmental assessment",
      "Parent guidance for children's everyday health",
      "Comprehensive healthcare for children aged 0–18 years"
    ],
    consultationTimings: {
      morning: "9:00 AM – 2:00 PM",
      evening: "5:30 PM – 9:00 PM"
    },
    ctaText: "Book a Consultation"
  },
  {
    id: "dr-naveen-kumar",
    name: "Dr. J. Naveen Kumar",
    speciality: "Orthopaedician and Diabetologist",
    qualifications: [
      "MBBS",
      "D.Ortho",
      "Diploma in Diabetology"
    ],
    experience: "12 Years of Clinical Experience",
    image: "/images/dr-naveen.png",
    background: [
      "MBBS from Sri Venkateswara Medical College, Tirupati",
      "D.Ortho from MIMS, Vizianagaram",
      "Diploma in Diabetology from Annamalai University, Chennai"
    ],
    areasOfExpertise: [
      "Road traffic accident & acute trauma care",
      "Complex fractures & bone injuries",
      "Joint replacement & arthritis management",
      "Closed reduction of fractures & minimally invasive techniques",
      "Specialised orthopaedic procedures",
      "Comprehensive diabetes management & clinical glycemic control",
      "Specialised diabetic foot care & complications management (including amputation when medically required)"
    ],
    consultationTimings: {
      morning: "9:00 AM – 2:00 PM",
      evening: "5:30 PM – 9:00 PM"
    },
    ctaText: "Book a Consultation"
  }
];
