import { Assignment, Computer, Redeem } from "@material-ui/icons";
import React from "react";
import logo from "./img/logo.png";
import showz from "./img/showz.png";
import "./Home.css";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="showcase">
        <div className="left">
          <h1>
            <span className="gold">Coaching</span> Redefined
          </h1>
          <p>Free and Premium Courses by top experts</p>
          <button className="home_button">
            <a href="/signup">Sign Up Now!</a>
          </button>
        </div>
        <div className="right">
          <img src={showz} alt="fgsdf" />
        </div>
      </div>
      <div className="zig"></div>
      <div className="benefits">
        <div className="box">
          <Computer style={{ fontSize: 100 }} />
          <h3>Step by step guide to core subjects</h3>
        </div>
        <div className="box">
          <Assignment style={{ fontSize: 100 }} />
          <h3>Hands on Coaching Experience</h3>
        </div>
        <div className="box">
          <Redeem style={{ fontSize: 100 }} />
          <h3>Get a certificate upon completion</h3>
        </div>
      </div>
      <footer>
        <p>&copy; BNCC 2021</p>
        <p>
          <a href="#">Terms of Use</a>
        </p>
        <p>
          <a href="#">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
