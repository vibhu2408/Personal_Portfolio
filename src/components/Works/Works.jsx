import React, { useContext } from "react";
import "./Works.css";
import Mern from "../../img/Mern.jpg";
import MachineLearning from "../../img/MachineLearning.png";
import Innovation from "../../img/Innovation.png";
import UiUx from "../../img/UiUx.png";
import WebDevelopment from "../../img/WebDevelopment.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Work in All these
          </span>
          <span>Technologies</span>
          <spane style={{ fontSize: "0.75rem", fontFamily: "Helvetica, sans-serif", marginTop: "2rem" }}>
          With a dynamic and diverse background that encompasses web development,
            <br />
            UI/UX design, MERN stack development, and machine learning,
            <br />
            I possess a truly unique perspective and a rich tapestry of knowledge
            <br />
            that infuses every project with a sense of innovation and creativity.
            <br /> 
            Whether crafting user interfaces that are intuitive and seamless, or 
            <br />
            building robust machine learning models that push the boundaries of what's possible,
            <br />
            I thrive on the challenge of new and exciting opportunities.
            <br />
            With a passion for exploring cutting-edge solutions and a commitment to excellence, 
            <br />
            I bring an unwavering focus and an unwavering dedication to every project I undertake.
            <br />
            Join me on a journey of discovery and innovation, and 
            let's push the boundaries of what's possible together!
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Mern} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MachineLearning} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Innovation} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={UiUx} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={WebDevelopment} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
