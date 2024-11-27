import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';

import { getServiceList } from '@/app/resources/services';

import './scheduleModal.scss'

const style = {
  maxWidth: 450,
  minWidth: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
};

const getTimeSlots = () => {
  const res = [];
  const minuteSlots = ['00', '15', '30', '45'];
  for (let i = 9; i <= 17; i++) {
    if (i === 17) res.push('5:00PM');
    else {
      minuteSlots.forEach((minSlot) => {
        if (i > 12) res.push(`${i - 12}:${minSlot}PM`);
        else res.push(`${i}:${minSlot}AM`);
      });
    }
  }

  return res;
};

type ScheduleProps = {
  option: string | null,
}

const ScheduleModal = ({ option }: ScheduleProps) => {
  return (
    <div className="appointment-container">
      <h2>
        <EditCalendarIcon fontSize="large" sx={{ marginTop: -1, marginRight: 1 }} />
        Schedule Appointment
      </h2>
      <Box sx={style}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form className="schedule-form">
            {/* <StaticDateTimePicker disablePast /> */}
            <div className="field-row">
              <p>Please enter details of desired appointment.</p>
            </div>
            <div className="field-row">
              <DatePicker sx={{ width: 130 }} disablePast />
              <FormControl sx={{ width: 120 }}>
                <InputLabel id="demo-simple-select-label">Time Slot</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Time Slot"
                >
                  {getTimeSlots().map((timeSlot) =>
                    <MenuItem key={timeSlot} value={timeSlot}>
                      {timeSlot}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </div>
            <Autocomplete
              size="small"
              disablePortal
              options={[...getServiceList, 'Other']}
              sx={{ width: 310, marginBottom: 2 }}
              defaultValue={option}
              renderInput={(params) => <TextField {...params} label="Service Type *" />}
            />
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
            <div className="field-row">

              <TextField
                required
                id="outlined-required"
                label="Email"
                size="small"
              />
              <TextField
                required
                sx={{ width: 170 }}

                id="outlined-required"
                label="Phone"
                size="small"
              />
            </div>

            <TextField
              id="outlined-required"
              label="Aditional Comments"
              size="small"
              multiline
              maxRows={2}
            />
            <div className="field-row right-align">
              {/* <Button>
                Cancel
              </Button> */}
              <Button variant="contained">
                Submit
              </Button>
            </div>
          </form>
        </LocalizationProvider>
      </Box>
    </div>
  )
};

ScheduleModal.propTypes = {
  option: PropTypes.string,
};

export default ScheduleModal;
