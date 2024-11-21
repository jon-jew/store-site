import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './contactUs.scss';

const ContactUs = () => {
  return (
    <form className="contact-container">
      <div id="contactUs" />
      <h2>Contact Us</h2>
      <div className="field-row">
        <TextField
          required
          id="outlined-required"
          label="First Name"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          size="small"
        />
      </div>
      <TextField
        required
        id="outlined-required"
        label="Email"
        size="small"
      />
      <TextField
        required
        id="outlined-required"
        label="Phone"
        size="small"
      />
      <TextField
        required
        sx={{ marginTop: 2 }}
        id="outlined-required"
        label="Subject"
        size="small"
      />
      <TextField
        required
        id="outlined-required"
        label="Message"
        multiline
        maxRows={4}
        size="small"
      />
      <div className="field-row right-align">
        <Button>Cancel</Button>
        <Button variant="contained">Submit</Button>
      </div>
    </form>
  );
};

export default ContactUs;
