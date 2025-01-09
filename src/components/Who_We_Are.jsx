import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Aos from "aos";
import "../Css_component/Who_We_Are.css";
import man1 from "../all_images/man1.jpeg";
import man2 from "../all_images/man2.jpeg";
import man3 from "../all_images/man3.jpeg";
import {Link} from "react-router-dom"
export const Who_We_Are = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="who-we-are-container">
    <div className="section-title">
        <h2>Who We Are</h2>
      </div>
   
    <div className="team-images">
        <div className="team-image-card" data-aos="fade-right">
          <img src={man1} alt="Team Member 1" className="team-image-img" />
        </div>
        <div className="team-image-card" data-aos="fade-up">
          <img src={man2} alt="Team Member 2" className="team-image-img" />
        </div>
        <div className="team-image-card" data-aos="fade-left">
          <img src={man3} alt="Team Member 3" className="team-image-img" />
        </div>
      </div>
   
   
   
     

      <div className="intro-box">
        <p>
          KodRish Innovation & Solution LLP is committed to empowering businesses and individuals with tailored web development, AI/ML solutions, and impactful designs. With a blend of modern technology and traditional ethos, we deliver solutions that make a difference.
        </p>
        <Button variant="contained" className="service-button" data-aos="fade" id="aboutus"> <Link  style={{color:"white" ,fontSize:"1.5vmax"}} to="/About">About Us  </Link></Button>
      </div>

     
    </div>
  );
};
