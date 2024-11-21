import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './globals.css'

export default function Loading() {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  )
};
