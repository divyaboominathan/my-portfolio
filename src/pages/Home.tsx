import React from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/images/profile.jpg";
import Header from "../components/layouts/Header";

const Home: React.FC = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <div className="left-section">
          <h1 className="heading">
            Hi, I'm <span className="name-highlight">Divya</span> 👋
            <br />
            <span className="role-title">Software Engineer</span>
          </h1>
          <p className="description">
            Experienced software developer specializing in building
            high-quality, scalable web and mobile applications. Passionate about
            React, React Native, and backend technologies. Strong ability to
            reduce development errors, improve productivity, and deliver clean,
            maintainable code.
          </p>
          <Link to="/projects" className="cta-button">
            View My Works
          </Link>{" "}
          <a
            className="cta-button"
            href="/Divya_Resume.pdf" /* Path relative to the /public folder */
            download="Divya_Resume_SoftwareEngineer.pdf" /* Sets the filename for the download */
          >
            Download Resume
          </a>
          <div className="skills-list">
            <span>React</span>
            <span>React Native</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>UI/UX</span>
          </div>
        </div>

        <div className="right-section">
          <img src={Profile} alt="profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};
export default Home;
