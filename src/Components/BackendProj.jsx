import React from "react";
import "./BackendProj.css";
import backendStructure from "../images/backend-structure.png";
const BackendProj = () => {
  return (
    <div className="backend" id="backend">
      <h3 className="mb-5">
        <code className="text-secondary">
          <span className="text-primary">{`<`}</span>Backend
          <span className="text-primary">{` />`}</span>
        </code>
      </h3>
      <div style={{ height: "50%" }} className="d-sm-flex pro-desc">
        <div
          style={{ height: "80%" }}
          id="front-image-wrapper"
          className="me-5"
        >
          <img src={backendStructure} alt="" />
        </div>
        <div id="project-structure-desc">
          <p>
            The project uses{" "}
            <span className="text-primary"> Nodejs (Express) Api server</span>{" "}
            as Backend. MongoDb has been used for data modelling. The
            Authentication model uses the
            <span className="text-primary"> (JWT)</span> Json web tokens.
            <br />
            {/* <a
              href="https://reactrouterdotcom.fly.dev/docs/en/v6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary"> React Router V6.</span>
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackendProj;
