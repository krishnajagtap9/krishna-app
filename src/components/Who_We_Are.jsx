import CodeIcon from '@mui/icons-material/Code';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Button from '@mui/material/Button';
import React, { useEffect } from "react";
import Aos from "aos"
import "../Css_component/Who_We_Are.css"
import man1 from "../all_images/man1.png"
import man2 from "../all_images/man2.png"
import man3 from "../all_images/man3.png"



export const Who_We_Are = () => {
  useEffect(()=>{
 Aos.init({duration:2000})
  },[])
 
 
 
  return (
    <div className="text-center"  >
      <div className="container_s">
        <div className="section-title">
          <h2>Who We Are</h2>
        
        </div>
      
<div className="section_1">
<div className="main_box_1">
  <p>KodRish Innovation & Solution LLP, We Are Committed To Empowering Businesses And Individuals With Tailored Web Development, AI/ML Solutions, And Impactful Designs. With A Blend Of Modern Technology And A Traditional Ethos, We Deliver Solutions That Make A Difference
  <Button variant="contained"  id="button"  data-aos="fade" > All Services</Button>

  </p>

</div>
<div className="main_box_1">

<div className="small">
<div class="triangle" data-aos="slide-left">
  <img src={man1} alt="" id="image_1" />
</div>
<div class="triangle_2" data-aos="zoom-in-up">
<img src={man2} alt="" id="image_1"/>

</div>
<div class="triangle_3" data-aos="slide-right">
<img src={man3} alt=""id="image_1" />

</div>

</div>



</div>

</div>


        

     
      

      </div>
    </div>
  );
};
