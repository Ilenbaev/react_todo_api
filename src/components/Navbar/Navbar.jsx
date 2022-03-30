import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-list">
        <NavLink to="/">List</NavLink>
        <NavLink to="/add">Add</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
