import React from "react";
import useSticky from "./hooks/useSticky.js";
import Welcome from "./components/Header/Welcome";
import Navbar from "./components/Header/Navbar";
import AboutMe from "./components/About/AboutMe.js";
import Footer from "./components/Footer/Footer.js";
import Contact from "./components/Contact/Contact.js";
import Portfolio from "./components/Portfolio/Portfolio.js";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <div className="main--body">
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
