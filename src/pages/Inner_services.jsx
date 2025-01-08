import React from 'react'
import "../Css_component/ContactUS.css"
import TextField from '@mui/material/TextField';
import image from "../all_images/image-Photoroom.png"
import Button from '@mui/material/Button';
import "../Css_component/Main_services.css"
import laptop_2 from "../all_images/laptop_2.png"
import { Link } from "react-router"
import "./itscss/inner_services.css"
import { useEffect } from "react";
import Aos from "aos"

const style_input = [
  {
    ".MuiInputLabel-root": {
      fontSize: "1.3vmax",
      color: "gray",


    },
    ".MuiOutlinedInput-root": {
      fontSize: "1.3vmax"

    }
  }
]




const Inner_services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='large_page' style={{
      background: "linear-gradient(to bottom, #fdfdfd 0%, #e6edf4 60%, #82bef6 90%, #80b9f7 100%)"
      , overflowY: "hidden"
    }} >

      <h2 style={{fontWeight:800 ,color:"black" ,fontSize:"2.8vmax"}}>Crafting Excellence Across Domains</h2>



      <div className="main">


        <div className="join">
          <div className="join_box1">
            <div className="inner_box_join" data-aos="slide-right">
              <h2>Service Category</h2>
              <ul>
                <li> Web Development</li>
                <li>Project Development</li>
                <li>Graphic Designing</li>
                <li>Ai/Ml Solution</li>
                <li>Additional Services</li>
              </ul>
              <a href="https://wa.me/+917067954499" id="butns">
              <Button variant="contained" id='butnV' sx={{ borderRadius: "40px" }}>Get a Free Quote</Button>

            </a>

            </div>
           

          </div>


          <div className="join_box2" data-aos="flip-up">
            <img src={laptop_2} alt="" id='last_image' />
          </div>
        </div>



      </div>
    </div>




  )
}

export default Inner_services