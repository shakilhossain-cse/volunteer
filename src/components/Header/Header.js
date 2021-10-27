import React from "react";
import Logo from "../../images/logos/Group 1329.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="md:w-5/6 w-full mx-auto top-10 left-0 right-0 flex absolute z-20">
      <div className="w-2/4">
        <img src={Logo} className="h-12" />
      </div>
      <ul className="flex justify-between items-center w-2/4 ">
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
            className="bg-blue-400 px-8 py-2 text-white rounded"
            to="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="bg-black px-8 py-2 text-white rounded"
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
