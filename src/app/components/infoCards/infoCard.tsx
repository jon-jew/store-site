import React from 'react';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './infoCard.scss';


const InfoCards = () => (
  <div className="info-cards-container">
    <div className="info-card">
      <div className="info-card-image" style={{ backgroundImage: 'url(/store-site/storeInterior.jpg)'}} />
      <div className="info-card-content">
        <h4>Great Quality Service</h4>
        <p>We love serving our customers with the best service and quality customer satisfaction. We have a variety of guns and ammo.</p>
         <p></p>
      </div>
    </div>
    <div className="info-card">
      <div className="info-card-image" style={{ backgroundImage: 'url(/store-site/storeExterior.jpg)'}} />
      <div className="info-card-content">
        <h4>Come Visit Us!</h4>
         <p><PinDropIcon /> 123 Main Street Clinton, NJ 08816</p>
         <p><LocalPhoneIcon /> (732) 123-1234</p>
      </div>
    </div>
  </div>

);

export default InfoCards;
