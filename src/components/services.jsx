import "../Css_component/services.css"
import CodeIcon from '@mui/icons-material/Code';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Button from '@mui/material/Button';
import React, { useEffect } from "react";
import Aos from "aos"


export const Services = () => {
  useEffect(()=>{
 Aos.init({duration:2000})
  },[])
 
 
 
  return (
    <div id="services" className="text-center">
      <div className="containers" id="container1">
        <div className="section-title">
          <h2>Our Services</h2>
        
        </div>
        <div className="rows">
         <div className="box1" data-aos="slide-left">
<div className="icon_box"><CodeIcon style={{fontSize:"4vmax"}} /></div>
<h3 style={{fontWeight:"700"}}>Web Development</h3>
 
 <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</div>


         </div>
         <div className="box1"  data-aos="zoom-in"  >
<div className="icon_box"><PhonelinkIcon style={{fontSize:"4vmax"}}/></div>
<h3 style={{fontWeight:"700"}} >Project Development</h3>
 
 <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</div>


         </div>

         <div className="box1"  data-aos="zoom-in">
<div className="icon_box"><DragIndicatorIcon  style={{fontSize:"4vmax"}}/></div>
<h3 style={{fontWeight:"700"}}>UI/UX Design</h3>
 
 <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</div>


         </div>

         <div className="box1"  data-aos="slide-right">
<div className="icon_box" ><PsychologyOutlinedIcon style={{fontSize:"4vmax"}}/></div>
<h3 style={{fontWeight:"700"}}>AI/ML Solution</h3>

 <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias harum libero optio fugit quasi facere facilis, earum iure vitae placeat voluptate sit enim temporibus quidem iusto ex incidunt quibusdam!</div>


         </div>

        </div>
        <div className="butn">
        <Button variant="contained" id="butn"  data-aos="fade" > All Services</Button>

        </div>

      </div>
    </div>
  );
};
