import React from "react";
import {
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { FcCloseUpMode } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <FcCloseUpMode size={32} className="logo__icon" />
          <span className="logo__text">Clueless</span>
        </div>
        <div className="footer__menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Blog
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Terms of Service
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Privacy Policy
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <ul className="social__list">
            <li className="social__item">
              <a href="#" className="social__link">
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <FaTwitter size={24} />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <FaFacebookF size={24} />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <GrMail size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
