import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import OurApp from "../../img/OurApp.gif";
import StockSentimentAnalysis from "../../img/Stock Sentiment Analysis.gif";
import HousePricePrediction from "../../img/HousePricePrediction.png";
import DistractedDriverSystem from "../../img/Distracted Driver System.gif";
import TwitterSentimentAnalysis from "../../img/Twitter Sentiment Analysis.gif";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={OurApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={StockSentimentAnalysis} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HousePricePrediction} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DistractedDriverSystem} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TwitterSentimentAnalysis} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
