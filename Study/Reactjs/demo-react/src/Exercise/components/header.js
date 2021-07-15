import React from "react";
import "./Exercise.css";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header className="w-100">
        <h1>Header</h1>
        <NavLink to="/" exact href="./contents">
          Home
        </NavLink>
        <NavLink to="/sidebar" href="./sidebar">
          Sidebar
        </NavLink>
        <NavLink to="/footer" href="./footer">
          Footer
        </NavLink>
      </header>
    );
  }
}
export default Header;
