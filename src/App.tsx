import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { About } from './components/About';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { Facilities } from './components/Facilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AppointmentForm } from './components/AppointmentForm';
import { EmergencyBanner } from './components/EmergencyBanner';
import { PatientVisitInfo } from './components/PatientVisitInfo';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingEmergencyButton } from './components/FloatingEmergencyButton';

export function App() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');

  const scrollToAppointment = (department?: string, doctor?: string) => {
    if (department) setSelectedDepartment(department);
    if (doctor) setSelectedDoctor(doctor);

    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-navy antialiased selection:bg-brand-pink selection:text-white">
      {/* Sticky Header */}
      <Header onOpenAppointmentModal={() => scrollToAppointment()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAppointmentModal={() => scrollToAppointment()} />

        {/* Hospital-Reported Statistics */}
        <Statistics />

        {/* About Section */}
        <About />

        {/* Comprehensive Services Grid */}
        <Services onSelectServiceForEnquiry={(dept) => scrollToAppointment(dept)} />

        {/* Two Doctors Profiles */}
        <Doctors onBookConsultation={(doctorName) => scrollToAppointment(undefined, doctorName)} />

        {/* Hospital Facilities */}
        <Facilities />

        {/* Why Choose Our Hospital */}
        <WhyChooseUs />

        {/* Emergency Hotline Banner */}
        <EmergencyBanner />

        {/* Appointment Enquiry Form */}
        <AppointmentForm 
          initialDepartment={selectedDepartment}
          initialDoctor={selectedDoctor}
        />

        {/* Patient Visit Information & Timings */}
        <PatientVisitInfo />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* 24/7 Floating Emergency Action Button */}
      <FloatingEmergencyButton />
    </div>
  );
}

export default App;
