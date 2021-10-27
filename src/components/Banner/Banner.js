import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-banner-image">
      <div className=" md:w-2/4 w-4/5 absolute z-10 top-44 mx-auto left-0 right-0 text-center">
        <h1 className="text-3xl font-bold">
          I GROW BY HELPING PEOPLE IN NEED.
        </h1>
        <div className="mt-5 ">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 md:w-2/5 w-5/6 outline-none rounded-l-lg"
          />
          <button className="bg-blue-300 py-2 px-5 outline-none rounded-r-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
