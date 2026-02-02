import React from "react";
import portfolioImg from "../assets/portfolio-bg.png";
import "./AboutConStyle.css";

const AboutContainer = () => {
  return (
    <div className="mid-con">
      <div className="mask">
        <img className="BGIMG" width="100%" src={portfolioImg} alt="my-img" />
      </div>
      <div className="con">
        <p>
          Creative and self-starting Front-End Developer with 1 years experience
          building stable eCommerce websites and apps in fast-paced,
          collaborative environments. Highly skilled in HTML, CSS, JavaScript,
          JQuery, React Js, Angular, Python and working knowledge of Photoshop.
          <br />
          <br /> Well-versed in video editing for short videos or reels, master
          in Wondershare Filmora 12 in Windows and Youcut in Android. Also,
          loves to dance and make reels on Instagram.
        </p>
      </div>
    </div>
  );
};

export default AboutContainer;
