import React from "react";
import {
  FaCameraRetro,
  FaMailBulk,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import css from "../Styles/LandingPage.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <h1>Dolly Photography</h1>
      <div className={css.footerContent}>
        <div className={css.footerSocial}>
          <h2>Stay Connected With Us</h2>
          <span>
            <FaFacebookF />
            <FaInstagram />
            <FaSquareXTwitter />
            <FaYoutube />
          </span>
        </div>
        <div className={css.footerlinks}>
          <h2>Quick Links</h2>
          <p>About</p>
          <p>Contact</p>
          <p>portfolio</p>
        </div>
        <div className={css.footerTouch}>
          <h2>Get In Touch</h2>
          <span>
            <FaPhoneAlt />
            1234567890
          </span>
          <span>
            <FaMailBulk />
            doly@gmail.com
          </span>
          <span>
            <FaLocationDot />
            Guntur
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
