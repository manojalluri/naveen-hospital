import { useState, useEffect } from 'react';
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
import { AppointmentModal } from './components/AppointmentModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');

  // Automatically display the appointment form pop-up after 8 seconds
  useEffect(() => {
    const hasSeenAutoPopup = sessionStorage.getItem('hasSeenHospitalPopup');

    const timer = setTimeout(() => {
      if (!hasSeenAutoPopup) {
        setIsModalOpen(true);
        sessionStorage.setItem('hasSeenHospitalPopup', 'true');
      }
    }, 8000); // 8 seconds

    return () => clearTimeout(timer);
  }, []);

  const openAppointmentModal = (department?: string, doctor?: string) => {
    if (department) setSelectedDepartment(department);
    if (doctor) setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-navy antialiased selection:bg-brand-pink selection:text-white">
      {/* Sticky Header */}
      <Header onOpenAppointmentModal={() => openAppointmentModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAppointmentModal={() => openAppointmentModal()} />

        {/* Hospital-Reported Statistics */}
        <Statistics />

        {/* About Section */}
        <About />

        {/* Comprehensive Services Grid */}
        <Services onSelectServiceForEnquiry={(dept) => openAppointmentModal(dept)} />

        {/* Two Doctors Profiles */}
        <Doctors onBookConsultation={(doctorName) => openAppointmentModal(undefined, doctorName)} />

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
      <FloatingEmergencyButton onOpenAppointmentModal={() => openAppointmentModal()} />

      {/* Interactive Appointment Form Popup Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialDepartment={selectedDepartment}
        initialDoctor={selectedDoctor}
      />
    </div>
  );
}

export default App;
