import React from "react";
import "../../assets/styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="contact-info">
          Contact: 6369007175 | divyaboominathan21121995@gmail.com
        </p>

        {/* <div className="address">
          337/2A,Kspn Nagar, Kamarajar colony, melur road, Sivaganga 630562.
        </div> */}

        <p className="copyright">
          © {currentYear} Divya | Software Engineer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
