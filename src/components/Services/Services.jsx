import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane style={{ fontSize: "0.75rem", fontFamily: "Helvetica, sans-serif", marginTop: "2rem" }}>
        As a multi-talented individual with a diverse and multifaceted skill set, I bring a truly unique and dynamic
        <br /> 
        approach to problem-solving. With a powerful combination of development, design, and UI/UX expertise at my disposal,
        <br /> 
        I possess the tools and the vision necessary to tackle even the most complex and challenging projects with confidence
        <br /> 
        and creativity. Whether I'm crafting seamless and intuitive interfaces, building cutting-edge websites, optimizing 
        <br />
        user experiences, or exploring the exciting world of machine learning, I approach every challenge with an unwavering 
        <br />
        commitment to delivering the highest quality work and driving success for my clients. With an unrelenting passion for
        heights of   
        <br />
        creativity and innovation. excellence and a keen eye for detail, I'm dedicated to achieving results that exceed 
        <br />
        expectations and inspire new So why settle for the ordinary when you can work with a true trailblazer and 
        visionary? 
        <br />
        Let's embark on a journey of discovery together and unlock the full potential of your ideas!
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"DataScience"}
            detail={"MachineLearning, DeepLearning, DataVisualization"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Coder"}
            detail={
              "C/C++, Java, Python, JavaScript, MySql, PHP"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
