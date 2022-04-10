import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div>
        <code className="text-secondary mb-4 display-6">
          <span className="text-primary">{`<`}</span>Contact Me{" "}
          <span className="text-primary">{`/>`}</span>{" "}
        </code>
      </div>
      <div className="mt-4 text-center">
        <p className="">
          I am currently <span className="text-primary">open to work</span> and
          actively looking for a job opportunity.
          <br />
          Whether you are a recruiter or just want to say Hi, I will try my best
          best to get back to you
        </p>
        <a href="mailto:ls199575@gmail.com">
          <button className="btn btn-primary">Let's be in touch</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
