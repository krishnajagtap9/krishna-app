import "../pages/itscss/landing.css";
import CodeIcon from '@mui/icons-material/Code';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Button from '@mui/material/Button';
import React, { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";

export const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="services" className="services-section text-center">
      <div className="services-container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="services-grid">
          <div className="service-box" data-aos="slide-left">
            <div className="icon-box"><CodeIcon style={{ fontSize: "4vmax" }} /></div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</p>
          </div>
          <div className="service-box" data-aos="zoom-in">
            <div className="icon-box"><PhonelinkIcon style={{ fontSize: "4vmax" }} /></div>
            <h3 className="service-title">Project Development</h3>
            <p className="service-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</p>
          </div>
          <div className="service-box" data-aos="zoom-in">
            <div className="icon-box"><DragIndicatorIcon style={{ fontSize: "4vmax" }} /></div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</p>
          </div>
          <div className="service-box" data-aos="slide-right">
            <div className="icon-box"><PsychologyOutlinedIcon style={{ fontSize: "4vmax" }} /></div>
            <h3 className="service-title">AI/ML Solution</h3>
            <p className="service-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</p>
          </div>
        </div>
        <div className="services-button" data-aos="fade">
          <Link to="/Service"><Button variant="contained" id="all-services-button">All Services</Button> </Link>  
        </div>
      </div>
    </div>
  );
};
