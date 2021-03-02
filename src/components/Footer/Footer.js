import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <p className="copyright">Fredrik Magnusson © 2020</p>
        <div className="social--media">
          <ul className="social--media--links">
            <li className="social--media--links-item">
              <SocialIcon
                className="icon"
                url="https://www.linkedin.com/in/fredrik-magnusson-7b21a0159/"
                target="_blank"
                style={{ height: 25, width: 25 }}
              />
            </li>
            <li className="social--media--links-item">
              <SocialIcon
                url="mailto:fredrik.ee.magnusson@gmail.com"
                target="_blank"
                style={{ height: 25, width: 25 }}
              />
            </li>
            <li className="social--media--links-item">
              <SocialIcon
                url="https://github.com/magnussonfredrik"
                target="_blank"
                style={{ height: 25, width: 25 }}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
