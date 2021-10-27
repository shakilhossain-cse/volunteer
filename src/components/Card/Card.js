import React from 'react'
import image from "../../images/images/animalShelter.png";

const Card = () => {
    return (
          <div>
            <div className="relative">
              <img src={image} className="w-full" />
              <h1 className="bg-green-300 font-bold text-xl text-white text-center absolute bottom-0 w-full py-3 rounded-b-xl">
                Forester Shelter Animal
              </h1>
            </div>
          </div>
    )
}

export default Card
