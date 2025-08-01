import React from "react";
import { NavLink } from "react-router";
import user from "../src/assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={user} alt="" />
        <button className="btn btn-primary px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
