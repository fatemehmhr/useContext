import React from "react";
import "./Banner.scss";
import BannerImage from "../../assets/images/jane.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className='banner'>
      <img src={BannerImage} alt='fashion' />
      <div className='banner-text'>
        <h2>
          <span>jane's</span>
          <br />
          FASHION BLOG
        </h2>
        <Link to='/subscribe'>SUBSCRIBE</Link>
      </div>
    </div>
  );
}

export default Banner;
