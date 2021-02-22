import React from "react";
import "./AboutMe.css";
import climbing from "../../assets/images/climbing.jpg";
import band from "../../assets/images/band.jpg";
import mountain from "../../assets/images/mountain.jpg";

const AboutMe = () => {
  return (
    <section className="card--container" id="about">
      <div className="about--me">
        <h1 className="title">ABOUT ME</h1>
        <p className="about--me--body title">
          Currently studying at LTH. I will graduate in the spring of 2021 after
          5 years of intense and instructive studies. In the end I will have a
          master in Usability and Design. <br />
          <br />
          As of now, I'm doing my master thesis at{" "}
          <strong>
            <a
              href="https://www.jayway.com/"
              className="jayway--link"
              target="_blank"
            >
              Jayway
            </a>
          </strong>{" "}
          in Malmö where the task is to design and develop an AR application
          that takes eye-gaze as input for steering the environment. Loads of
          fun! <br />
          <br />
          Previously, I've worked as a Python developer at Ericsson where I also
          tested out the role as a Scrum Master.
          <br /> <br />
          During my spare time I enjoy a lot of things, but music is my biggest
          passion. I'm playing piano in two separate bands and doing my best as
          a tenor in Lunds Studentsångare. Previously I've climbed professionaly
          and participated in Swedish as well as Nordic competitions.
        </p>
        <ul className="about--me--images">
          <li className="responsive">
            <img className="image" src={climbing} />
          </li>
          <li>
            <img className="image" src={band} />
          </li>
          <li>
            <img className="image" src={mountain} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
