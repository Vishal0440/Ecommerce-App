import React from "react";
import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posure ac a quam
            a electrified montes partient possure temper
          </p>
          <div className="ctas">
            <div className="banner-ctas">Read More</div>
            <div className="banner-ctas v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
