import React from "react";
import "./Footer.scss";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <h4 className="title">About</h4>
          <div className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            deserunt accusantium labore ut, voluptatum esse, ex repellendus
            sapiente maxime velit est debitis incidunt.
          </div>
        </div>
        <div className="col">
          <h4 className="title">Contact</h4>
          <div className="c-item">
            <FaLocationArrow />
            <p className="text">
              36 sastri nager,vadod gam, G.I.D.C, pandesara surat(Gujarat)
            </p>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <p className="text">Phone: 08128841328</p>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <p className="text">Email: store123@gmail.com</p>
          </div>
        </div>
        <div className="col">
          <h4 className="title">Categories</h4>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbudes</span>
          <span className="text">Home Theaters</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <h4 className="title">Pages</h4>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            Copyright &copy; {year} created by Vishal dev. E-commerce Solution.
          </span>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
