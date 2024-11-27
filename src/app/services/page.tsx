import React from 'react';

import Navbar from "../components/navbar";
import Services from "../components/services";

export default function Service() {

  return (
    <div className="body-div">
      <Navbar />

      <Services />
      <div className="footer">
        © 2024 Sky Armory, LLC. All Rights Reserved.
      </div>
    </div>
  );
}
