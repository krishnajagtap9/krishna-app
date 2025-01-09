import React, { useEffect } from "react";
import Aos from "aos";
import image_1 from "../all_images/T-1.jpg"
import image_2 from "../all_images/T-2.jpg"
import image_3 from "../all_images/T-3.png"
import image_5 from "../all_images/T-6.jpg"
import image_6 from "../all_images/T-7.jpg"
import image_7 from "../all_images/T-8.jpg"

export const Testimonials = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const testimonials = [
    {
      name: "Rajesh Verma",
      experience:
        "KodRish has been a game-changer for my small business. Their web development team delivered a highly responsive website that boosted my online presence significantly. I couldn’t have asked for a better partner!",
      photo: image_1, // Replace with actual image URL
    },
    {
      name: "Priya Sharma",
      experience:
        "Working with KodRish was a seamless experience. They not only helped me with project development for my final year but also explained the concepts so well. Highly recommend their student-focused services!",
      photo: image_2, // Replace with actual image URL
    },
    {
      name: "Neha Gupta",
      experience:
        "I approached KodRish for graphic designing for my brand’s social media, and their designs were truly eye-catching. The only improvement I’d suggest is faster turnaround times. Overall, great work!",
      photo: image_3, // Replace with actual image URL
    },
    {
      name: "Amit Roy",
      experience:
        "KodRish Innovation & Solution LLP goes beyond expectations. Their team worked tirelessly on my project and delivered exceptional results. Thank you for your professionalism and dedication!",
      photo: image_5, // Replace with actual image URL
    },
    {
      name: "Sneha Kulkarni",
      experience:
        "The services offered by KodRish are top-notch. I was particularly impressed by their attention to detail and understanding of my business needs. Great work! thank for this awsome apportunity",
      photo: image_6, // Replace with actual image URL
    },
 
  ];

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Testimonials</h2>
        </div>
        <div className="row">
          {testimonials.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <div className="testimonial" data-aos="fade-down">
                <div className="testimonial-image">
                  <img src={d.photo} alt={d.name} />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-meta"> - {d.name} </div>
                  <p>"{d.experience}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
