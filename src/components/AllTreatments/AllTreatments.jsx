import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {services.map((service) => (
        <ServiceCard service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllTreatments;
