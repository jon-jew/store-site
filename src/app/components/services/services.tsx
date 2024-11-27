"use client"

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@mui/material";

import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ConstructionIcon from '@mui/icons-material/Construction';

import { serviceList } from '../../resources/services';

import './services.scss'

const Services = () => {
  return (
    <div className="services">
      <h2>
        <ConstructionIcon fontSize="large" sx={{ marginTop: -1, marginRight: 1 }} />
        Gunsmith Services
      </h2>
      <div className="service-card-container">

        {serviceList.map((item) => (
          <div
            key={item.title}
            className="service-card"
          >
            <div className="service-card-image">
              <Image src={`${item.image}`} fill alt={item.title} />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">
                {item.title}
              </h3>
              <h4 className="service-card-price">{item.price}</h4>
            </div>
            <div className="service-card-button">
              <Link href={`/appointment?serviceOption=${item.title}`}>
              <Button
                fullWidth
                title="Schedule service"
                variant="contained"
                size="small"
              >
                <EditCalendarIcon />
              </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Services;
