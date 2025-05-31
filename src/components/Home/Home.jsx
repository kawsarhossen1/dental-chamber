import React from "react";
import BAnner from "../Banner/BAnner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  const services = useLoaderData();

  const { servicesData, feedBackData } = services;
  return (
    <div className="w-[200%] mx-auto max-w-[1200px]">
      <BAnner></BAnner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <button className="mx-auto block btn btn-outline btn-primary mt-8 font-bold">
        <NavLink to="/alltreatments" cla>
          Show More
        </NavLink>
      </button>

      <FeedBack feedBackData={feedBackData}></FeedBack>
    </div>
  );
};

export default Home;
