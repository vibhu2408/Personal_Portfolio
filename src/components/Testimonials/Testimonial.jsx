import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Achieved over 500 solutions on Leetcode, mastering complex algorithms and data structures to solve challenging problems.Through dedication and hard work, I have demonstrated a strong understanding of problem-solving techniques and an ability to think critically, resulting in high-quality solutions that have been acknowledged by the Leetcode community. I am proud of this achievement and continue to strive for excellence in my programming skills.",
    },
    {
      img: profilePic2,
      review:
        "Earned a certificate of excellence from Coding Ninjas for scoring above 90% in the Introduction to Python and Data Structures course, showcasing my mastery in Python programming and ability to implement data structures effectively",
    },
    {
      img: profilePic3,
      review:
        "Developed and completed an innovative Automated Vertical Hydroponics System with IoT integration, utilizing cutting-edge technologies including Raspberry Pi, Cloud Computing, and Android Development. A research paper on the project is set to be published in 2023, showcasing my expertise in the field.",
    },
    {
      img: profilePic4,
      review:
        "Earned a prestigious certificate in Data Science from Coding Ninjas with a score of over 90%, demonstrating expertise in statistical analysis, machine learning, and data visualization.",
    },
    {
      img: profilePic5,
      review:
        "Achieved top 10% rank in AWS DeepRacer Student's League(India 2022) by securing 700th position among participants across the country.",
    },
    {
      img: profilePic6,
      review:
        "Shortlisted in prestigious Microsoft Engage Program, showcasing technical skills and potential for success in software engineering.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Achievements </span>
        <span>till </span>
        <span>now...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
