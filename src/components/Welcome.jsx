import React, { useContext } from "react";
import "./style/style.css";
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import bharat from './images/bharat.jpg'
function Welcome() {
  return (
    <>
    <nav id="desktop-nav">
    <div className="logo">Bharat</div>
    <div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div className="logo">Bharat</div>
    <div className="hamburger-menu">
      <div className="hamburger-icon" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-links">
        <li><a href="#about" onclick="toggleMenu()">About</a></li>
        <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
        <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
      </div>
    </div>
  </nav>
  <section id="profile">
    <div className="section__pic-container">
      <img src={bharat} alt="Bharat profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Bharat</h1>
      <p className="section__text__p2">Frontend Developer</p>
      <div className="btn-container">
      </div>
      <div id="socials-container">
        <a href="https://linkedin.com/in/bharat-panigrahi-521584245/">
        <img
          src={linkedin}
          alt="My LinkedIn profile"
          className="icon"
        />
        </a>
        <a href="https://github.com/Bharat1056">
        <img
          src={github}
          alt="My Github profile"
          className="icon"
        />
        </a>
      </div>
    </div>
  </section>
  </>
  );
}

export default Welcome;
