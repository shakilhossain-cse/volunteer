import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div>
      <div
        className="pb-4 md:w-5/6 w-full px-4 mx-auto absolute right-0 left-0"
        style={{ top: "22.5rem" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Cards;
