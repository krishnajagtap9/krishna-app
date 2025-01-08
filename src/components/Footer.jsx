import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "../Css_component/footer.css"
import image from "../all_images/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom"

 const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="main_box">
    <div className="box_1">
      <div className="content">
      <img src={image} alt=""  id="image"/>
    


      </div>
     
    </div>
    <div className="box_2">

<div className="first_one">
<ul>

  <li><Link to="/">Home </Link></li>
  <li> <Link to="/About"> About Us</Link></li>
  <li> <Link to="/Service">Services   </Link></li>
  <li> <Link to="/contactus"> Contact </Link></li>
</ul>
</div>
<div className="second_one">
<div className="content_01"> <ul>
      <li>
        <a  href="https://www.facebook.com/profile.php?id=61571167388296">
        <FacebookIcon id="icon"/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kod_rish/">
        <InstagramIcon id="icon" />
        </a>
      </li>
      <li>
        <a  href="https://www.linkedin.com/company/kodrish-innovation-solutions/">
        <LinkedInIcon id="icon" />
        </a>
      </li>
    </ul></div>
<div className="content_02">
  <h3><a href="" >Terms </a>|<a href="">Privacy </a>|<a href="">Compliances</a></h3>
</div>

</div>



      
    </div>
    <div className="box_3">
      <h3>Copyright © 2025</h3>
      <h3>KodRish Innovation </h3>
      <h3>& Solution LLP</h3>
    </div>
     
    </div>
  );
};


{/* <div className="col-md-12">
            
<div className="row">
  <div className="social">
    <ul>
      <li>
        <a href={props.data ? props.data.facebook : "/"}>
          <i className="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href={props.data ? props.data.twitter : "/"}>
          <i className="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href={props.data ? props.data.youtube : "/"}>
          <i className="fa fa-youtube"></i>
        </a>
      </li>
    </ul>
  </div>
</div>
</div> */}












{/* <div className="contact-item">
<h3>Contact Info</h3>
<p>
  <span>
    <i className="fa fa-map-marker"></i> Address
  </span>
  {props.data ? props.data.address : "loading"}
</p>
</div>
<div className="contact-item">
<p>
  <span>
    <i className="fa fa-phone"></i> Phone
  </span>{" "}
  {props.data ? props.data.phone : "loading"}
</p>
</div>
<div className="contact-item">
<p>
  <span>
    <i className="fa fa-envelope-o"></i> Email
  </span>{" "}
  {props.data ? props.data.email : "loading"}
</p>
</div> */}