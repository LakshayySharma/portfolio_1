import React from "react";
import "./HomePage.css";
import Navbar from "../Components/Navbar";
import image from "../images/portfolio_image.jfif";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Main from "../Components/Main";
import Contact from "../Components/Contact";
const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* <div className="col-lg-3 col-sm-12 col-d-12 d-flex justify-content-start">
        <img
          id="hero-image"
          src={image}
          alt="portfolio_image"
          width="80%"
          className="rounded-circle"
        />
      </div> */}
      <div className="data">
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
