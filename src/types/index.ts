export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  qualifications: string[];
  experience: string;
  image: string;
  background: string[];
  areasOfExpertise: string[];
  consultationTimings: {
    morning: string;
    evening: string;
  };
  ctaText: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'paediatric' | 'orthopaedic' | 'emergency' | 'clinical';
  description: string;
  bulletPoints: string[];
  iconName: string;
  badge?: string;
  enquiryDepartment: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
  iconName: string;
}
