import React from 'react';

import Navbar from "../components/navbar";
import PoliciesModal from '../components/policiesModal';

export default function Appointment() {

  return (
    <div className="body-div">
      <Navbar />
      <PoliciesModal />
      <div className="footer">
        © 2024 Sky Armory, LLC. All Rights Reserved.
      </div>
    </div>
  );
}
