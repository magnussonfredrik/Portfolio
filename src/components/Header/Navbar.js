import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/Fredrik-natural.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      {sticky ? (
        <h2 className="header--name">
          <li className="navbar--link navbar--link-item">
            <Link to="welcome" spy={true} smooth={true}>
              FREDRIK MAGNUSSON
            </Link>
          </li>
        </h2>
      ) : null}
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </li>
      <li className="navbar--link-item">
        <Link to="portfolio" spy={true} smooth={true}>
          Previous work
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
