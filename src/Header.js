import React from "react";
import logo from "./img/logo.png";

function Header() {
  return (
    <div className="header">
      <header>
        <div class="logo">
          <img src={logo} alt="BNCC" />
          <h3>
            <span class="stato">B</span>NCC
          </h3>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/signup">Register</a>
          <a href="/login">Login</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
