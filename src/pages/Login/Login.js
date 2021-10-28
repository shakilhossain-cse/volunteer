import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import Logo from "../../images/logos/Group 1329.png";

const Login = () => {
  const location = useLocation();
  const uri = location.state?.from || "/";
  const history = useHistory();
  const { loginWithGoogle, setUser } = useAuth();
  const googleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="h-screen bg-blue-50 ">
        <div className="flex  py-14 justify-center">
          <Link to="/">
            <img src={Logo} className="h-16" />
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="bg-white py-36 w-full md:w-2/5">
            <h2 className="text-center text-3xl font-bold my-3">Login With</h2>
            <div className="flex justify-center">
              <div
                className=" w-3/5 border-gray-500 border text-center py-3 rounded-3xl flex items-center cursor-pointer"
                onClick={googleLogin}
              >
                <img
                  src="https://img.icons8.com/cute-clipart/452/google-logo.png"
                  alt=""
                  className="w-12 ml-3"
                />
                <p className="flex-1"> Continue with Google</p>
              </div>
            </div>
            <p className="text-center my-4">
              Dont have a account ?{" "}
              <Link className="text-blue-500 underline" to="/register">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
