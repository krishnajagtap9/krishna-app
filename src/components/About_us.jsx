import React from 'react'
import "../Css_component/About.css"
import about_photo from "../all_images/About_photo_1.jpg" 
import thinking from "../all_images/thinking.jpeg"
import { useEffect } from "react";
import Aos from "aos"
import bulb from "../all_images/bulb.jpeg"
import climb from "../all_images/climb_2.avif"

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
<div className="box02">
  <img src={thinking} alt="" data-aos="fade-up"/>
</div>
<div className="box02">
  <div className="card" data-aos="zoom-in">

  <h2>Our Story</h2>
  <p>Founded with a vision to bridge the gap between ideas and execution, KodRish is a team of passionate technologists and creators.

With expertise in web development, AI/ML solutions, and design, we are dedicated to empowering businesses, students, and entrepreneurs to achieve their goals.
</p>

  </div>


</div>


</section>

<section className="smallsection3">
<div className="box03"   data-aos="slide-right" >

<h2>Our Mission</h2>
  <p>To provide innovation ,User-centric and Cost-effective solutions that Transfrom businesses and drive growth.
</p>
</div>
<div className="box03" >

<img src={climb} alt=""  id="climb" data-aos="zoom-in"/>
</div>

</section>

<section className='small_section2' >
<div className="box02">
  <img src={bulb} alt=""  id="lastbulb" data-aos="zoom-in"/>
</div>
<div className="box02">
  <div className="card" data-aos="slide-left">

  <h2>Our Vision</h2>
  <p>To become a trusted partner for local businesses, students, and startups by delivering cutting-edge services that make technology accessible and impactful.
</p>

  </div>


</div>


</section>
    </section>
  )
}

export default About_us