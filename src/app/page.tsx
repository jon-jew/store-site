import React from 'react';

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import InfoCards from './components/infoCards';
import ContactUs from './components/contactUs';
import AboutUs from './components/aboutUs';

export default function Home() {
  return (
    <div className="body-div">
      <Navbar />
      <div className="top content-container">
        <Hero />
        <InfoCards />
      </div>
      <AboutUs />
      <ContactUs />
      <div className="footer">
        © 2024 Sky Armory, LLC. All Rights Reserved.
      </div>
    </div>
  );
}
