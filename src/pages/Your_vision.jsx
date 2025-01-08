import "../Css_component/services.css";
import Button from '@mui/material/Button';
import React, { useEffect } from "react";
import Aos from "aos";
import "./itscss/Your_vision.css";
import card_1 from "../all_images/card_1.jpg";
import card_2 from "../all_images/card_2.jpeg";
import card_3 from "../all_images/card_3.png";
import card_4 from "../all_images/card_4.webp";

export const Your_vision = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="services_1" className="your-vision-container text-center">
      <div className="vision-content">
        <div className="section-title">
          <h2 style={{fontSize:"2vmax"}}>Your Vision, Our Expertise</h2>
        </div>
        <div className="vision-cards-container">
          <div className="vision-card" data-aos="zoom-out-right">
            <img src={card_1} alt="Web Development" className="vision-card-image" />
            <h3 className="card-title">Web Development Services</h3>
            <div className="card-content">
              <p>Custom websites, E-commerce solutions, UI/UX design, and website maintenance.</p>
            </div>
          </div>

          <div className="vision-card" data-aos="flip-left">
            <img src={card_2} alt="Project Development" className="vision-card-image" />
            <h3 className="card-title">Project Development</h3>
            <div className="card-content">
              <p>Assistance with academic projects, ML/AI solutions, and detailed documentation.</p>
            </div>
          </div>

          <div className="vision-card" data-aos="flip-right">
            <img src={card_3} alt="Graphic Designing" className="vision-card-image" />
            <h3 className="card-title">Graphic Designing</h3>
            <div className="card-content">
              <p>Logo creation, branding kits, marketing materials, and social media content.</p>
            </div>
          </div>

          <div className="vision-card" data-aos="zoom-out-left">
            <img src={card_4} alt="AI/ML Solutions" className="vision-card-image" />
            <h3 className="card-title">AI/ML Solutions</h3>
            <div className="card-content">
              <p>Custom AI/ML solutions for automation, predictive analytics, and intelligent systems tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
