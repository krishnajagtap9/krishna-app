import React from "react";
import "../Css_component/nav.css"
import logo from "../all_images/logo.png"
import {Link} from "react-router"

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container" >
        <div className="navbar-header" >
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            id="butnX"
          >
            
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
   
         <img src={logo} alt=""  className="logo"/>
    
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        
        >
          <div  style={{position:"relative",top:"20px"}}>
          <ul className="nav navbar-nav navbar-right">
            <li>
            <Link to={"/"}  className="page-scroll">Home</Link>

            </li>
            <li>
            <Link to={"/About"}  className="page-scroll">About us</Link>
             
            </li>
            <li>
            <Link to={"/Service"}  className="page-scroll">Services</Link>

            </li>
            
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
           
            <li>
             <Link to={"/contactus"}  className="page-scroll">Contact</Link>
            </li>
          </ul>
            
          </div>
          
        </div>
      </div>
    </nav>
  );
};
