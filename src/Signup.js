import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Signup.css";
import "./Login.css";
import { auth, db } from "./firebase";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser && user) {
        //setUser(authUser);
        alert("Registration Complete. You may now log in.");
      } else {
        //setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const register = (e) => {
    e.preventDefault();
    setUser(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => {
        alert(err.message);
        setUser(false);
      });
  };
  return (
    <div className="signup">
      <Header />
      <h1 className="signup_heading">
        <span className="gold">B</span>NCC{" "}
        <span style={{ color: "lightgray" }}>Registration</span>
      </h1>
      <form className="signup_form gold" action="">
        <label className="signup_label" htmlFor="name">
          Username
        </label>
        <input
          className="signup_input"
          type="text"
          placeholder="Write your name here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="signup_button"
          type="submit"
          onClick={(e) => register(e)}
        >
          Register
        </button>
      </form>
      <p className="login_foot">
        Already have an account? <a href="/login">Sign In</a>
      </p>

      <br />
    </div>
  );
}

export default Signup;
