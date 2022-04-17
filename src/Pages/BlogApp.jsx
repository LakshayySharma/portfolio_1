import React from "react";
import { Link } from "react-router-dom";
import BackendProj from "../Components/BackendProj";
import FrontendProj from "../Components/FrontendProj";
import img1 from "../images/proj1.png";
import "./BlogApp.css";
const BlogApp = () => {
  return (
    <div className="pro-desc-wrapper">
      <Link to="/">
        <div className="go-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill text-primary"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
          <code className="h3 text-primary">{`{Go back}`}</code>
        </div>
      </Link>
      <div className="project-wrapper">
        <div id="specifics">
          <div className="text-center">
            <h1
              className="display-5 text-primary mt-4 mb-5 p-5"
              style={{
                fontWeight: "",
                letterSpacing: "0.2rem",
                backgroundColor: "#000111",
              }}
            >
              Mern Stack Blog App
            </h1>
            <code style={{ color: "#5bc0be" }}>
              <a
                href="https://mern-blogapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                See live here
              </a>
            </code>
            <code style={{ color: "#5bc0be" }}>
              <a
                href="https://github.com/LakshayySharma/mern-blog-app-site"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="ms-5"
              >
                See Github code
              </a>
            </code>
            <ul
              className="nav p-3 justify-content-center mb-5 mt-3 navbar "
              id="proj-nav"
            >
              <li className="nav-item me-3">
                <Link to="#about" className="nav-link text-secondary">
                  About Project
                </Link>
              </li>
              <li className="nav-item me-3">
                <a href="#frontend" className="nav-link text-secondary">
                  Frontend
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#backend" className="nav-link text-secondary">
                  Backend
                </a>
              </li>
            </ul>
          </div>
          <div id="about-proj">
            <code className="h3">
              <span className="text-primary">{`<`}</span>About Project{" "}
              <span className="text-primary">{` />`}</span>
            </code>
            <div className="about-pro-image mt-4">
              {/* <div></div> */}
              <img src={img1} alt="" />
            </div>
            <p className="mt-4">
              This project is a full stack blog app, where you can post articles
              (blogs) and comment on articles posted by other authors.
            </p>
            <code
              className="text-primary2"
              style={{ color: "#5bc0be", fontSize: "1rem" }}
            >
              Technologies Used:
            </code>
            <ul className="tech-used" style={{ fontSize: "1rem" }}>
              <li>ReactJs</li>
              <li>MongoDb</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>Jwt for Authentication</li>
              <li>Redux for state management</li>
            </ul>
          </div>
          <FrontendProj />
          <BackendProj />
        </div>
      </div>
    </div>
  );
};

export default BlogApp;
