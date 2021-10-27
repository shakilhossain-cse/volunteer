import React from "react";
import Logo from "../../images/logos/Group 1329.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="md:w-5/6 w-full px-4 mx-auto top-10 left-0 right-0 flex absolute z-20">
      <div className="w-2/4">
        <img src={Logo} className="h-12" />
      </div>
      <ul className="justify-between items-center w-2/4 hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>Donation</Link>
        </li>
        <li>
          <Link>Events</Link>
        </li>
        <li>
          <Link>Blogs</Link>
        </li>
        <li>
          <Link
            className="bg-blue-600 px-8 py-2 text-white rounded"
            to="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="bg-black px-8 py-2 text-white rounded"
            to="/"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
