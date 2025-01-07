import React, { useEffect } from "react";
import "../Css_component/header.css"
import Button from '@mui/material/Button';
import Aos from "aos"
import '../../node_modules/aos/dist/aos.css'
import { duration } from "@mui/material";
import {Link} from "react-router"

export const Header = () => {
 useEffect(()=>{
Aos.init({duration:2000})
 },[])
 
 
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row" >
              <div className="col-md-8 col-md-offset-2 intro-text" >
                <h1 data-aos="fade-down">
                  From imagination to innovation
                  <h2>
             We Craft it all
                  
                </h2>
                </h1>
            
                <h2 id="animation">
            Web Development
                </h2>
               
               <Link to="/contactus" id="butn"><Button variant="contained" > Start project</Button></Link>
      <section className="card">
<div className="box" data-aos= "zoom-in-left">
  <h1>30+</h1>
  <h4>project completed</h4>
</div>
<div className="box" data-aos="fade-down">
<h1>98%</h1>
<h4>Customer satisfaction</h4>
</div>
<div className="box" data-aos="fade-down">
<h1>4+</h1>
<h4>Year of experience</h4>
</div>
<div className="box" data-aos="zoom-in-right">
<h1>5+</h1>
<h4>Team member</h4>
</div>
        
      </section>

              </div>

            </div>
          </div>
        </div>

      </div>

    </header>
  );
};
