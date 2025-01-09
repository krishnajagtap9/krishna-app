import React, { useState } from "react";
import "../Css_component/nav.css";
import logo from "../all_images/logo.png";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const Navigation = () => {
  const [press, setPress] = useState(false);

  // Toggling the press state
  function change_icon_handler() {
    setPress((prevPress) => !prevPress); // Toggles the state
  }

 

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header" >
         
          <button

onClick={change_icon_handler} 

            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            id="butnX"
          >
          {press  ? <CloseIcon id="icon"/> : <MenuIcon   id="icon"/>} 
           
       
          </button>



          <img src={logo} alt="" className="logo" />
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <div style={{ position: "relative", top: "20px" }}>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={"/"} className="page-scroll">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/About"} className="page-scroll">
                  About us
                </Link>
              </li>
              <li>
                <Link to={"/Service"} className="page-scroll">
                  Services
                </Link>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                <Link to={"/contactus"} className="page-scroll">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
