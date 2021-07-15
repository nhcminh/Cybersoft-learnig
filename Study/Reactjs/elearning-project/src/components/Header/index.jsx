import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default class Header extends Component {
  render() {
    return (
      <div style={{ background: "#000000" }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink
              to="/"
              exact
              activeStyle={{ color: "red" }}
              style={{ margin: "20px", color: "white" }}
              href="./home"
            >
              Home
            </NavLink>
            <NavLink
              to="/singin"
              activeStyle={{ color: "red" }}
              style={{ margin: "20px", color: "white" }}
              href="./signin"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              activeStyle={{ color: "red" }}
              style={{ margin: "20px", color: "white" }}
              href="./signup"
            >
              Sign Up
            </NavLink>
          </Toolbar>
        </AppBar>
        {/*
         */}
      </div>
    );
  }
}
