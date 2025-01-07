import React from 'react'
import "../Css_component/ContactUS.css"
import TextField from '@mui/material/TextField';
import image from "../all_images/image-Photoroom.png"
import Button from '@mui/material/Button';
import { useEffect } from "react";
import Aos from "aos"


const style_input=[
  {
    ".MuiInputLabel-root":{
   fontSize:"1.3vmax",
   color:"gray",


    },
    ".MuiOutlinedInput-root":{
       fontSize:"1.3vmax"
       
     }
    }
  ]


const Contactus = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
     },[])


  return (
    <div className='contact_us'>

<h1 className='contact_heading'>Contact Us</h1>


<div className="contact_box1">
<TextField id="outlined-basic" sx={style_input} className='input' label="Name" variant="outlined"  data-aos="slide-left"/>




<TextField id="outlined-basic" sx={style_input} className='input' label="Phone no." variant="outlined"  data-aos="slide-right"/>

<TextField id="outlined-basic"sx={style_input} className='input' label="Email" variant="outlined" data-aos="slide-left" />

<textarea id="text_area" cols="30" rows="10" placeholder='Message' data-aos="fade-down" />

<Button variant="text" id='contactbutn'>Submit</Button>

</div>



<div className="contact_box2" data-aos="fade">
  <img src={image} alt="" id='contact_image' />
</div>

    </div>
    
  )
}

export default Contactus