import React from "react";
import "./FrontendProj.css";
import frontStruct from "../images/frontend-structure.png";
const FrontendProj = () => {
  return (
    <div className="frontend" id="frontend">
      <h3 className="mb-5">
        <code className="text-secondary">
          <span className="text-primary">{`<`}</span>Frontend
          <span className="text-primary">{` />`}</span>
        </code>
      </h3>
      <div style={{ height: "50%" }} className="d-sm-flex pro-desc">
        <div
          style={{ height: "100%" }}
          id="front-image-wrapper"
          className="me-5"
        >
          <img src={frontStruct} alt="" />
        </div>
        <div id="project-structure-desc">
          <p>
            The project uses React as frontend. The design pattern includes two
            types of folders: Components and Pages. Pages folder includes
            routing pages while components include some important functional
            components. The routing is implemented with the help of
            <a
              href="https://reactrouterdotcom.fly.dev/docs/en/v6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary"> React Router V6.</span>
            </a>
          </p>
          <p>
            <span className="text-primary">Redux</span> has been used for the
            state management.
            <br />
            For making api calls <span className="text-primary">Axios</span> has
            been used.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default FrontendProj;
