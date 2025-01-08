import React from 'react'
import "../Css_component/About.css"
import about_photo from "../all_images/About_photo_1.jpg" 
import thinking from "../all_images/thinking.jpeg"
import { useEffect } from "react";
import Aos from "aos"
import bulb from "../all_images/bulb.jpeg"
import climb from "../all_images/climb_2.avif"
import bulb_copy from "../all_images/bulb_2.jpg"
const About_us = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
     },[])
  
  
  
  return (
    <section className='whole_page' >

<section className='small_section1' >
<div className='box01' >
    <h1 >About Kodrish </h1>
<p data-aos="zoom-in-down">Kodrish Innovation And solution LLP We merge Technology with Creatibity to deliver excellence</p>
<img src={about_photo} alt="image here" data-aos="zoom-in-down" />

</div>

</section>
<section className='small_section2'>
<h2 id='copyright'>Our Story</h2>

<div className="box02">
  <img src={thinking} alt="" data-aos="fade-up"/>
</div>
<div className="box02">
  <div className="card" data-aos="zoom-in">

  <h2 id='copyright_2'> Our Story</h2>
  <p>Founded with a vision to bridge the gap between ideas and execution, KodRish is a team of passionate technologists and creators.

With expertise in web development, AI/ML solutions, and design, we are dedicated to empowering businesses, students, and entrepreneurs to achieve their goals.
</p>

  </div>


</div>


</section>

<section className="smallsection3">
<div className="box03"   data-aos="slide-right" >

<h2>Our Mission</h2>
  <p id='copyright_3'>To provide innovation ,User-centric and Cost-effective solutions that Transfrom businesses and drive growth.

</p>
</div>
<div className="box03" >

<img className="exchange_image_1" src={climb} alt=""  id="climb" data-aos="zoom-in"/>
<p id='copyright_4'>To provide innovation ,User-centric and Cost-effective solutions that Transfrom businesses and drive growth.</p>

</div>

</section>

<section className='small_section2'  id='small_updated' >
<div className="box02" id='last_box1'>
<img src={bulb} alt=""  id="lastbulb" className='last_bulb_copyright'  data-aos="zoom-in"/>

<img src={bulb} style={{mixBlendMode:"difference" ,height:"200px"}} alt=""   className='last_bulb_copyright_2' data-aos="zoom-in"/>

  <p id='copy_right_5'>To become a trusted partner for local businesses, students, and startups by delivering cutting-edge services that make technology accessible and impactful.
  </p>
</div>
<div className="box02" id='last_box2'>
<h2 id='last_header_2'>Our Vision</h2>

  <div className="card" data-aos="slide-left" id='last_box2'>
  <h2 id='last_header'>Our Vision</h2>

  <p id='copy_right_4'>To become a trusted partner for local businesses, students, and startups by delivering cutting-edge services that make technology accessible and impactful.

</p>


  </div>


</div>


</section>
    </section>
  )
}

export default About_us