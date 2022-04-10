import React from "react";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark p-1 fixed-top"
      id="navbar"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
            <code className="text-primary ">{`<LS`}</code>
            <code className="text-primary ">{` />`}</code>
          </a>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-3">
              <a class="nav-link text-light " href="#main">
                <span className="text-primary">{`<`}</span>Home{" "}
                <span className="text-primary">{`/>`}</span>
              </a>
            </li>
            <li class="nav-item me-3 ">
              <a class="nav-link text-light" href="#about">
                <span className="text-primary">{`<`}</span>About Me{" "}
                <span className="text-primary">{`/>`}</span>
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link text-light" href="#projects">
                <span className="text-primary">{`<`}</span>Projects{" "}
                <span className="text-primary">{`/>`}</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#contact">
                <span className="text-primary">{`<`}</span>Contact Me{" "}
                <span className="text-primary">{`/>`}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
