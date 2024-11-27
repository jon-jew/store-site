import React from 'react';

import Box from '@mui/material/Box';

import GavelIcon from '@mui/icons-material/Gavel';

import './policiesModal.scss'

const style = {
  maxWidth: 700,
  minWidth: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  padding: 3,
};

const PoliciesModal = () => {
  return (
    <div className="appointment-container">
      <h2>
        <GavelIcon fontSize="large" sx={{ marginTop: -1, marginRight: 1 }} />
        Policies
      </h2>
      <Box sx={style}>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt quisque platea ullamcorper porttitor libero nostra vestibulum curae. Purus consectetur primis faucibus magna; condimentum turpis pretium ultrices vestibulum. Dolor conubia mauris aliquet tellus quisque, volutpat ipsum. Litora mus sociosqu litora sapien luctus. Litora ridiculus platea platea, dolor hac aptent. Velit luctus lacinia potenti elementum, eros orci. Parturient euismod eros auctor pretium; fringilla finibus vehicula condimentum. Ultrices potenti hac potenti conubia nullam vivamus.

Vulputate aliquam auctor senectus, eu euismod montes. Himenaeos rhoncus efficitur leo inceptos litora fringilla. Libero metus nisi laoreet non himenaeos vel phasellus nam! Semper eu ultrices etiam iaculis per convallis. Mattis elit interdum velit congue natoque. Turpis leo nascetur fringilla imperdiet a ac integer lectus condimentum. Imperdiet sem tempor convallis class praesent bibendum? Potenti sit litora iaculis senectus urna magna. Potenti torquent fringilla justo; libero tincidunt a semper facilisis posuere. Condimentum risus diam morbi lobortis aptent volutpat primis.

Conubia id quis aenean neque condimentum ultrices sapien. Porta semper ad velit massa leo lobortis nunc. Scelerisque mi aliquam habitant habitasse vulputate ad; amet cras tincidunt? Maecenas sed lacus imperdiet hac adipiscing auctor; tristique varius. Mattis integer quam id metus vulputate tincidunt per himenaeos. Augue netus tortor dis diam cras tincidunt; aptent suscipit massa. Praesent duis ad dapibus conubia magnis curae per. Augue ornare est tempor lectus cubilia eros turpis semper.</p>
      </Box>
    </div>
  )
};

export default PoliciesModal;
