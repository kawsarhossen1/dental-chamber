import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="min-h-20 bg-blue-950 text-white flex justify-between items-center">
      <div className="ml-4 font-extrabold text-2xl">Image</div>
      <div className="space-x-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/alltreatments">All Treatment</NavLink>
        <NavLink to="/myappoinments">My Appointments</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <button className="btn btn-primary mr-4 text-white">Login</button>
      </div>
      
    </div>
  );
};

export default Navbar;
