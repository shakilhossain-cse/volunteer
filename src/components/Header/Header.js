import React from "react";
import Logo from "../../images/logos/Group 1329.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {

  const { User,logout } = useAuth();
  
  const logoutUser = () => {
    return logout();
  }

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
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link>Blogs</Link>
        </li>
        {
          !User.email ? <li>
          <Link
            className="bg-blue-600 px-8 py-2 text-white rounded"
            to="/login"
          >
            Login
          </Link>
          </li>
            : <p>{ User.displayName}</p>
        }
        {
          !User.email ?  <li>
          <Link
            className="bg-black px-8 py-2 text-white rounded"
            to="/register"
          >
            Register
          </Link>
        </li> : <li>
              <button
                onClick={logoutUser}
            className="bg-black px-8 py-2 text-white rounded"
            to="/register"
          >
            Logout
          </button>
        </li>
        }
        
       

      </ul>
    </div>
  );
};

export default Header;
