import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coaches from "./Coaches";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/coaches">
          <Coaches />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
