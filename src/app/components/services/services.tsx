"use client"

import React from "react";
import PropTypes from 'prop-types';

import Image from 'next/image'
import { Button } from "@mui/material";
import Carousel from 'react-multi-carousel';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ConstructionIcon from '@mui/icons-material/Construction';

import { serviceList } from '../../resources/services';

import "react-multi-carousel/lib/styles.css";
import './services.scss'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2400, min: 1300 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1300, min: 1000 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1000, min: 700 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1
  }
};

type ServicesProps = {
  onServiceSchedule: (serviceName: string) => void,
};

const Services = ({ onServiceSchedule }: ServicesProps) => {
  return (
    <div className="services">
      <div id="services" />
      <h2>
        <ConstructionIcon fontSize="large" sx={{ marginTop: -1, marginRight: 1 }}/> 
        Gunsmith Services
      </h2>
      <div className="service-card-container">
        <Carousel
          responsive={responsive}
          showDots={true}
          renderDotsOutside={true}
          centerMode={true}
          slidesToSlide={2}
          dotListClass="service-card-dot-list"
          containerClass="service-card-container"
          itemClass="service-card"
        >
          {serviceList.map((item) => (
            <div
              key={item.title}
              className="service-card"
            >
              <div className="service-card-image">
                <Image src={`/store-site${item.image}`} fill alt={item.title} />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">
                  {item.title}
                </h3>
                <h4 className="service-card-price">{item.price}</h4>
              </div>
              <div className="service-card-button">
                <Button
                  fullWidth
                  onClick={() => onServiceSchedule(item.title)}
                  title="Schedule service"
                  variant="contained"
                  size="small"
                >
                  <EditCalendarIcon />
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

Services.propTypes = {
  onServiceSchedule: PropTypes.func.isRequired,
};

export default Services;
