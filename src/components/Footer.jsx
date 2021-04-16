import React from "react";
import "../assets/styles/components/Footer.scss";
import Github from "../assets/images/Github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__container col-12 d-flex justify-content-center align-items-center">
            <a href="https://github.com/DanielCuevas1822">
              <img src={Github} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
