import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          className="px-0 mr-10 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "#FF3811" : "black",
            borderBottom: isActive ? "2px solid #FF3811" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-0 mr-10 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "#FF3811" : "black",
            borderBottom: isActive ? "2px solid #FF3811" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-0 mr-10 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "#FF3811" : "black",
            borderBottom: isActive ? "2px solid #FF3811" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/service"}
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-0 mr-10 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "#FF3811" : "black",
            borderBottom: isActive ? "2px solid #FF3811" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/blog"}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-0 mr-10 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "#FF3811" : "black",
            borderBottom: isActive ? "2px solid #FF3811" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:w-[85%] w-full m-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
           <img className="lg:h-[80px] md:h-[80px] h-[50px]" src={logo} alt="" srcset="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
              <BsHandbag className="text-xl  lg:mr-5 "></BsHandbag>
              <CiSearch className="text-xl lg:mr-5  "></CiSearch>
              <button className="px-5 py-2  text-[#FF3811] border border-[#FF3811] rounded-md">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
