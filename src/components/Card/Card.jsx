/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, name, image, price, description } = card || {};
  return (
    <div>
        
      <Link to={`/cards/${id}`}>
      <div className="card  bg-base-100 shadow-xl h-[430px] md:w-[370px] w-full">
        <figure className="">
          <img
            src={image}
            alt="event"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{name}</h2>
          <p className="font-light">{description}</p>
          <div className="card-actions">
            <button className="btn bg-pink-300 text-white">Show Details</button>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
