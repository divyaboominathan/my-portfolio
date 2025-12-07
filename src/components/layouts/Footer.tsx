import React from "react";
import "../../assets/styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-details">
          <div className="contact-info">
            <p>Contact: 6369007175</p>
          </div>
          <div className="address">
            <p>Email: divyaboominathan21121995@gmail.com</p>
          </div>
        </div>
        <div className="separator"></div>
        <p className="copyright">
          © {currentYear} Divya | Software Engineer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
