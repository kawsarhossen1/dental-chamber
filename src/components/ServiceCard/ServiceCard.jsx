import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { treatmentName, treatmentDescription, image, cost, id } = service;
  return (
    <div className="card bg-base-100 shadow-sm ">
      <figure>
        <img className="w-full h-[200px] object-cover" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatmentName}
          <div className="badge badge-secondary">{cost}</div>
        </h2>
        <p>{treatmentDescription}</p>
        <div className="card-actions justify-">
          <NavLink to={`/details/${id}`}>
            <div className=" btn btn-primary btn-outline">Checkout More</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
