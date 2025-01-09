import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Services } from "./components/Landingpage_services.jsx";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/Footer.jsx";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {Transparent_pricing} from "./components/Transparent_pricing.jsx"
import { Who_We_Are } from "./components/Who_We_Are.jsx";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const Landing_page = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  return (
  
      <div className="big_div">
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
     <Transparent_pricing/>
<Who_We_Are/>


    </div>
   
  )
}

export default Landing_page
