"use client"

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'

import Navbar from "../components/navbar";
import ScheduleModal from '../components/scheduleModal';

export default function Appointment() {
  const searchParams = useSearchParams();
  const serviceOption = searchParams.get('serviceOption');

  return (
    <div className="body-div">
      <Navbar />
      <Suspense>
        <ScheduleModal option={serviceOption} />
      </Suspense>
      <div className="footer">
        © 2024 Sky Armory, LLC. All Rights Reserved.
      </div>
    </div>
  );
}
