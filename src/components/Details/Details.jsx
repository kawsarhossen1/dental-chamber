import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const Details = () => {
  const { cost, treatmentName, treatmentDescription, image } = useLoaderData();

  return (
    <div className="mx-8 my-6">
      <div className="flex bg-base-200 shadow-sm items-center text-center">
        <div>
          <figure className="px-10 py-10">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </figure>
        </div>
        <div className="card-body text-start">
          <h2 className="card-title text-6xl">{treatmentName}</h2>
          <h2 className="font-bold text-2xl">{cost}</h2>
          <p>{treatmentDescription}</p>
          <div className="card-actions">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-primary btn-outline"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;
