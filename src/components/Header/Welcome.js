import React from "react";
import "./Welcome.css";
import Logo from "../../assets/images/logo.svg";
import CV from "../../assets/images/CV.JPG";
import Pic from "../../assets/images/Fredrik-natural.png";

const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome" id="welcome">
        <div ref={element}>
          <img src={Pic} alt="logo" className="welcome--logo" />
          {/*<button className="welcome__cta-primary">Contact us</button>*/}
          <div className="welcome--text">
            <h1>FREDRIK MAGNUSSON</h1>
            <h3>M.Sc. Student at the Faculty of Engineering LTH.</h3>
            <h3>
              If you want to contact me, please feel free to{" "}
              <a
                className="mail--link"
                href="mailto:fredrik.ee.magnusson@gmail.com"
              >
                email{" "}
              </a>
              me or add me on
              <a
                className="mail--link"
                href="https://www.linkedin.com/in/fredrik-magnusson-7b21a0159/"
                target="_blank"
              >
                {" "}
                LinkedIn
              </a>
              .
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
