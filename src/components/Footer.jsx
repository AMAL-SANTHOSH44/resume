import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="mt-5 text-center bg-primary p-3">
      <div style={{ color: "white" }}>
        <h3>Contact us</h3>
        <h4>rbuilder@gmail.com</h4>
        <h4>
          <FaPhoneAlt />
           989898989
        </h4>
      </div>
      <div>
        <h3>Connect with us</h3>
        <div class="mt2 fs-5">
          <FaFacebook />
          <FaSquareInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
