import React, { useEffect } from "react";
import Aos from "aos"

export const Testimonials = (props) => {
   useEffect(()=>{
  Aos.init({duration:2000})
   },[])
  
 
 
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Testimonials</h2>
        </div>
        <div className="row">
         {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial" data-aos="fade-down">

                    <div className="testimonial-image">
                      {"  "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                  <div className="testimonial-meta"> - {d.name} </div>

                      <p>"{d.text}"</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
