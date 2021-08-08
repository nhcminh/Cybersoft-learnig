import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { me } = this.props;
    return (
      <AppBar position="static" color="secondary">
        <Toolbar>
          <NavLink
            activeStyle={{ color: "#f00000" }}
            to="/"
            exact
            style={{ marginRight: 20, color: "#000" }}
          >
            Home
          </NavLink>
          {me ? (
            <span>Hi, {me.hoTen.toUpperCase()}.</span>
          ) : (
            <>
              <NavLink
                activeStyle={{ color: "#f00000" }}
                to="/signin"
                style={{ marginRight: 20, color: "#000" }}
              >
                Sign in
              </NavLink>
              <NavLink
                activeStyle={{ color: "#f00000" }}
                to="/signup"
                style={{ marginRight: 20, color: "#000" }}
              >
                Sign up
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  me: state.me,
});

export default connect(mapStateToProps)(Header);
