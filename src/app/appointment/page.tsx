"use client"

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'

import Navbar from "../components/navbar";
import ScheduleModal from '../components/scheduleModal';

const Schedule = () => {
  const searchParams = useSearchParams();
  const serviceOption = searchParams.get('serviceOption');

  return <ScheduleModal option={serviceOption} />;
};

export default function Appointment() {

  return (
    <div className="body-div">
      <Navbar />
      <Suspense>
        <Schedule />
      </Suspense>

      <div className="footer">
        © 2024 Sky Armory, LLC. All Rights Reserved.
      </div>
    </div>
  );
}
