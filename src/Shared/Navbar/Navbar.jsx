import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
 
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("user logOut successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
          to={"/order"}
        >
          My order
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
        {
          user ? 
          <img className="lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6 rounded-full mr-2" src={user.photoURL} alt="" />
          :
          ""
        }

<p className="mr-3 lg:text-md md:text-md text-xs">{user && user.displayName}</p>
        {user ? (
          <NavLink
            onClick={handleLogOut}
            className="bg-red-500 text-white lg:px-8 lg:py-3 px-3 py-2 lg:text-md text-xs font-semibold rounded-md"
        >
            LogOut
          </NavLink>
        ) : (
          <NavLink
            to={"/login"}
            className="bg-red-500 text-white lg:px-8 lg:py-3 px-3 py-2 lg:text-md text-xs font-semibold rounded-md"
          >
            Login
          </NavLink>
        )}
              <button className="px-5 py-2  text-[#FF3811] border border-[#FF3811] rounded-md">Appointment</button>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Navbar;
