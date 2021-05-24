import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Login.css";
import "./Dashboard.css";
import { auth, db } from "./firebase";
import logo from "./img/logo.png";
import YouTube from "react-youtube";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [learn, setLearn] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, email]);

  const searche = (e) => {
    e.preventDefault();
    var search = require("youtube-search");
    var opts = {
      maxResults: 1,
      key: "AIzaSyBxPvczEBr28LW46SlsUxoHj9HXBrnXfFw",
    };
    search(learn, opts, function (err, results) {
      if (err) return console.log(err);
      setId(results[0].id);
    });
  };
  const wee = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };
  const opts2 = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  if (!user)
    return (
      <div className="login">
        <Header />
        <h1 className="signup_heading">
          <span className="gold">B</span>NCC{" "}
          <span style={{ color: "lightgray" }}>Login</span>
        </h1>
        <form className="signup_form gold" action="">
          <label className="signup_label" htmlFor="email">
            Email
          </label>
          <input
            className="signup_input"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="signup_label" htmlFor="password">
            Password
          </label>
          <input
            className="signup_input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="signup_button"
            type="submit"
            onClick={(e) => wee(e)}
          >
            Log In
          </button>
        </form>
        <p className="login_foot">
          Not Registered? <a href="/signup">Sign Up</a>
        </p>
      </div>
    );

  return (
    <div className="dashboard">
      <header>
        <div class="logo">
          <img src={logo} alt="BNCC" />
          <h3>
            <span class="stato">B</span>NCC
          </h3>
        </div>
        <div className="dash_right">
          <button className="dash_button" onClick={() => auth.signOut()}>
            Log Out
          </button>
        </div>
      </header>
      <h1 className="dash_h1">
        Yo <strong className="gold">{user.displayName}</strong>.
      </h1>
      <h2 className="dash_h2">What would you like to learn today?</h2>
      <form className="dash_form gold" action="">
        <input
          className="dash_input"
          type="text"
          placeholder="Enter something"
          value={learn}
          onChange={(e) => setLearn(e.target.value)}
        />
        <button
          className="dash_button2"
          type="submit"
          onClick={(e) => searche(e)}
        >
          Start coaching
        </button>
      </form>
      {learn && id && <YouTube videoId={id} opts={opts2} />}
    </div>
  );
}

export default Login;
