/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Details = ({ card }) => {
  const { id, name, image, price, description } = card || {};
  return (
    <div>
      <div className="card bg-pink-100 shadow-xl mt-10">
        <figure>
          <img
            src={image}
            alt="Movie"
            className="w-full h-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">{name}</h2>
          <p className="text-center">{description}</p>
          <div className="card-actions justify-center">
            {/* <button className="btn btn-primary">Watch</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
