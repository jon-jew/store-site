import React from 'react';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './infoCard.scss';


const InfoCards = () => (
  <div className="info-cards-container">
    <div className="info-card">
      <div className="info-card-image" style={{ backgroundImage: 'url(/storeInterior.jpg)'}} />
      <div className="info-card-content">
        <h4>Great Quality Service</h4>
        <p>We love serving our customers with the best service and quality customer satisfaction. We have a variety of guns and ammo.</p>
         <p></p>
      </div>
    </div>
    <div className="info-card">
      <div className="info-card-image" style={{ backgroundImage: 'url(/storeExterior.jpg)'}} />
      <div className="info-card-content">
        <h4>Come Visit Us!</h4>
         <p><PinDropIcon /> 510 Georges Rd, North Brunswick, NJ 08902</p>
         <p><LocalPhoneIcon /> (732) 955-4055</p>
      </div>
    </div>
  </div>

);

export default InfoCards;
