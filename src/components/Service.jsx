import React from 'react'
import Button from '@mui/material/Button';
import  laptop_1 from "../all_images/laptop_1.png"
import {Link} from "react-router"
import Inner_services from '../pages/Inner_services';
import { useEffect } from "react";
import Aos from "aos"
import { Your_vision } from '../pages/Your_vision';
import Language from "../pages/Tools"
import "../Css_component/services.css"

// const style_input=[
//   {
//     ".MuiInputLabel-root":{
//    fontSize:"1.3vmax",
//    color:"gray",


//     },
//     ".MuiOutlinedInput-root":{
//        fontSize:"1.3vmax"
       
//      }
//     }
//   ]


const Main_Services = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
     },[])
    
  return (<>
    <section className='big_container'>

      <div className='Service_page1'>
      <h1 data-aos="fade-down">Our Services</h1>

        <div className="servicesbox1" data-aos="flip-down">
        <div className='image_box'>
          <img src={laptop_1} alt="Laptop"  id='laptop'  />
          </div>
        </div>

        <div className="Services_box_2">
          <div className="inner_boxs">
            <p data-aos="fade-down">
              Empowering businesses and individuals with cutting-edge web solutions, graphic designs, and project development assistance.
            </p>
            <Link to="/contactus">
              <Button sx={{ borderRadius: "40px" }} variant="contained" id='services_butn'>
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>

      </div>
      <Inner_services/>
      <Your_vision/>
      <Language/>
    </section>
  </>
  
  )
}

export default Main_Services