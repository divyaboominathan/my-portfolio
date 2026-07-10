import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/styles/Header.css";
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <span className="name">DIVYA</span>
          <span className="title">Software Engineer</span>
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <a
          href="https://github.com/divyaboominathan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/divya21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:divyaboominathan21121995@gmail.com" aria-label="Email">
          <SiGmail size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
