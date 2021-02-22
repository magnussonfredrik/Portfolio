import "./Contact.css";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div className="contact--container">
      <div className="social--media">
        <ul className="social--media--links">
          <li className="social--media--links-item">
            <SocialIcon
              url="https://www.linkedin.com/in/fredrik-magnusson-7b21a0159/"
              target="_blank"
              style={{ height: 70, width: 70 }}
            />
          </li>
          <li className="social--media--links-item">
            <SocialIcon
              url="mailto:fredrik.ee.magnusson@gmail.com"
              target="_blank"
              style={{ height: 70, width: 70 }}
            />
          </li>
          <li className="social--media--links-item">
            <SocialIcon
              url="https://github.com/magnussonfredrik"
              target="_blank"
              style={{ height: 70, width: 70 }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
