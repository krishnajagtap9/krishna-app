import CodeIcon from '@mui/icons-material/Code';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Button from '@mui/material/Button';
import React, { useEffect } from "react";
import Aos from "aos";
import "../Css_component/Transparent.css";

export const Transparent_pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="transparent-pricing-section" >
      <div className="pricing-title">
        <h2>Transparent Pricing Option</h2>
      </div>
      <div className="pricing-grid">
       
        <div className="pricing-card" data-aos="slide-left">
          <h3 className="card-heading">Web Development Services</h3>
          <div className="card-content">
            <h3>Starting at ₹3000</h3>
            <ul>
              <li>Custom responsive website</li>
              <li>E-commerce integration</li>
              <li>Free Domain And Hosting For The First Year</li>
              <li>Two Month of The Free Support</li>
            </ul>
          
          </div>
          <div className='buttonbox'>
          <Button variant="contained" className="pricing-button" data-aos="fade">
          <a href='https://wa.me/7067954499' id='Call' target="_blank">
          Book a Call
            </a> 
            </Button>
          </div>
        </div>

        <div className="pricing-card" data-aos="slide-left">
          <h3 className="card-heading">Project Development For Students</h3>
          <div className="card-content">
            <h3>Starting at ₹2000</h3>
            <ul>
              <li>Customized Academic Project Development</li>
              <li>Guidance on Implementation</li>
              <li>Source Code and Documentation Included</li>
              <li>One-On-One Consultation</li>
            </ul>
            
          </div>
          <div className='buttonbox'>
          <Button variant="contained" className="pricing-button" data-aos="fade">
          <a href='https://wa.me/7067954499' id='Call' target="_blank">
          Book a Call
            </a> 
            </Button>
          </div>
         
        </div>

        <div className="pricing-card" data-aos="slide-left">
          <h3 className="card-heading">Graphic Designing For Social Media</h3>
          <div className="card-content">
            <h3>Starting at ₹1000</h3>
            <ul>
              <li>Logo And Brand Kit Design</li>
              <li>Social Media Banner and Post</li>
              <li>Quick Delivery (Within 3-5 days)</li>
              <li>Unlimited Revisions for The First Draft</li>
            </ul>
            
          </div>
          <div className='buttonbox'>
          <Button variant="contained" className="pricing-button" data-aos="fade">
          <a href='https://wa.me/7067954499' id='Call' target="_blank">
          Book a Call
            </a> 
            </Button>
          </div>
        </div>

        <div className="pricing-card" data-aos="slide-left">
          <h3 className="card-heading">AI/ML Solutions</h3>
          <div className="card-content">
            <h3>Starting at ₹7000</h3>
            <ul>
              <li>Data Analysis and Predictive Modeling</li>
              <li>Custom AI/ML Application Development</li>
              <li>End-to-End Deployment Support</li>
              <li>Post-Deployment Monitoring (1 Month)</li>
              
            </ul>
         
          </div>
          <div className='buttonbox'>
          <Button variant="contained" className="pricing-button" data-aos="fade">
          <a  href="https://wa.me/7067954499" id='Call' target="_blank">
          Book a Call
            </a> 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};