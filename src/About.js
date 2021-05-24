import React from "react";
import Header from "./Header";
import "./Home.css";
import "./About.css";
import showz from "./img/showz.png";

function About() {
  return (
    <div className="about">
      <Header />
      <h1 className="about_h1">
        About <span className="gold">B</span>NCC
      </h1>
      <div className="about_img">
        <img src={showz} alt="fgsdf" />
      </div>
      <div className="about_text">
        <h2>
          What is <span className="gold">B</span>NCC?
        </h2>
        <h2 className="about_side">
          <span className="gold">B</span>NCC is <span className="gold">B</span>
          NCC.
        </h2>
        <h2>
          What does <span className="gold">B</span>NCC do?
        </h2>
        <h2 className="about_side">
          <span className="gold">B</span>NCC does whatever{" "}
          <span className="gold">B</span>NCC does.
        </h2>
        <h2 className="about_side">
          For now, it fetches videos from YouTube based on what you want to
          learn.
        </h2>
      </div>
    </div>
  );
}

export default About;
