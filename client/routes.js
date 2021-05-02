import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Homepage";
import HowToPlay from "./components/HowToPlay";
import Play from "./components/Play";
import { me } from "./store";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/play/:id" component={Play} />
        <Route path="/instructions" component={HowToPlay} />
      </div>
    );
  }
}

export default Routes;
