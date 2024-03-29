import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const MenuItem = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#services">Service</a>
      </li>

      <li>
        <a href="#portfolio">Portfolio</a>
      </li>

      <li>
        <a href="#skills">Skills</a>
      </li>

      <li>
        <a href="#education">Education</a>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-7xl  text-white pt-4">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-white rounded-box w-52"
          >
            {MenuItem}
          </ul>
        </div>
        <Link to="/">
          <a className=" normal-case text-2xl font-bold">Sharif Miah</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white hover:text-white px-1">
          {MenuItem}
        </ul>
      </div>
      <div className="navbar-end">
        <Link>
          <button className=" bg-[#f8b90c] py-[10px] px-[20px] cursor-pointer rounded-full font-semibold hover:bg-[#f8b90c] text-white btn-active outline-0">
            Hire Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
