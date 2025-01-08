import "../pages/itscss/Tools.css";
import * as React from "react";
import logo_1 from "../all_images/lo_1.jpeg";
import logo_2 from "../all_images/lo_2.jpeg";
import logo_3 from "../all_images/lo_3.jpeg";
import logo_4 from "../all_images/lo_4.jpeg";
import logo_5 from "../all_images/lo_5.jpeg";
import logo_6 from "../all_images/lo_6.jpeg";
import logo_7 from "../all_images/lo_7.jpeg";
import logo_8 from "../all_images/lo_8.jpeg";
import logo_9 from "../all_images/lo_9.jpeg";
import { useEffect } from "react";
import Aos from "aos";

export default function ToolsWeUse() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="tools-section" >
      <h1>Tools We Utilize for Excellence</h1>
      <div className="tools-grid">
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_1} alt="React Logo" className="tool-image" />
          <h3>React</h3>
          <p>Strong foundations for scalable web applications.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_2} alt="Flask Logo" className="tool-image" />
          <h3>Flask</h3>
          <p>Strong foundations for scalable web applications.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_3} alt="Node Logo" className="tool-image" />
          <h3>Node</h3>
          <p>Powering fast and scalable server-side solutions.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_4} alt="TensorFlow Logo" className="tool-image" />
          <h3>TensorFlow</h3>
          <p>Empowering intelligent systems with scalable ML solutions.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_5} alt="Scikit-Learn Logo" className="tool-image" />
          <h3>Scikit-Learn</h3>
          <p>Simplifying machine learning for real-world applications.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_6} alt="OpenCV Logo" className="tool-image" />
          <h3>OpenCV</h3>
          <p>Transforming pixels into powerful insights.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_7} alt="Figma Logo" className="tool-image" />
          <h3>Figma</h3>
          <p>Designing user-centric interfaces with precision.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_8} alt="PyTorch Logo" className="tool-image" />
          <h3>PyTorch</h3>
          <p>Building AI models with flexibility and speed.</p>
        </div>
        <div className="tool-card" data-aos="fade-up">
          <img src={logo_9} alt="Git/GitHub Logo" className="tool-image" />
          <h3>Git/GitHub</h3>
          <p>Collaborating seamlessly, building together.</p>
        </div>
      </div>
    </section>
  );
}
