import React from "react";
import "./About.css";
import image from "../images/portfolio_image.jfif";
const About = () => {
  return (
    <div className="about-section" id="about">
      <code className="text-secondary mb-4 display-6 text-bold" id="about-head">
        <span className="text-primary">{`<`}</span>About Me{" "}
        <span className="text-primary">{`/>`}</span>{" "}
      </code>
      <div className="intro">
        <div>
          <p className="">
            Hi! My name is Lakshay Sharma. I am a full stack javascript
            developer. I love and have been working on javascript and related
            stack for past 1 year. This includes learning as well as personal
            projects.
            <br />
            My favourite stack I love to work on is
            <span className="text-primary"> MERN</span> Stack.
            <br />
            My focus these days is on learning and developing better
            <span className="text-primary"> APIs and microservices.</span>
          </p>
          <p>Techhnologies I am currently working on:</p>
          <ul>
            <li>Node Js</li>
            <li>MongoDb (Mongoose)</li>
            <li>JWT</li>
            <li>Express</li>
            <li>ReactJs</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="intro-image">
          <img
            src={image}
            alt="portfolio_image"
            width="60%"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
