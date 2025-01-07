import React, { useState, useEffect } from "react";
import "./App.css";
import {Routes ,Route} from "react-router"
import Landing_page from "./Landing_page.js";
import Contactus from "./components/Contactus";
import { Navigation } from "./components/navigation";
import {Contact} from "./components/Footer.jsx"
import Services from "./components/Service"
import About_us from "./components/About_us";
const App = () => {

  return (
    <>

 <div className="final_div">

 <Navigation />

<Routes>
  
  <Route path="/"  element ={<Landing_page/>} />
<Route path="/contactus"  element ={<Contactus/>} />
<Route path="/Service"  element ={<Services/>} />
<Route path="/About" element={<About_us/>}/>
  




</Routes>


  <Contact/>

    

 </div>
  


    </>
  );
};

export default App;
