"use client"
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import ScheduleModal from './components/scheduleModal';
import InfoCards from './components/infoCards';
import ContactUs from './components/contactUs';
import Policies from './components/policies';

export default function Home() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [serviceSchedule, setServiceSchedule] = useState('');
  const [policiesOpen, setPoliciesOpen] = useState(false);

  const onServiceSchedule = (serviceName: string) => {
    setScheduleOpen(true);
    setServiceSchedule(serviceName);
  };

  const handleScheduleClose = () => {
    setScheduleOpen(false);
    setServiceSchedule('');
  };

  return (
    <div className="body-div">
      <Modal
        open={scheduleOpen}
        onClose={handleScheduleClose}
      >
        <ScheduleModal option={serviceSchedule} onClose={handleScheduleClose} />
      </Modal>
      <Modal
        open={policiesOpen}
        onClose={() => setPoliciesOpen(false)}
      >
        <Policies />
      </Modal>
      <Navbar
        handleAppointments={() => setScheduleOpen(true)}
        handlePolicies={() => setPoliciesOpen(true)}
      />
      <div className="top content-container">
        <Hero />
        <InfoCards />
      </div>
      <Services onServiceSchedule={onServiceSchedule} />
      <ContactUs />
      <div className="footer">
        © 2024 Store Name, LLC. All Rights Reserved.
      </div>
    </div>
  );
}
