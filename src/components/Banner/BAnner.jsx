import React from "react";
import bannerImg from "../../assets/banner.jpg";
const BAnner = () => {
  return (
    <div className="hero rounded-lg my-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Brighten Your Smile Today!</h1>
          <p className="py-6">
            Experience top-quality dental care with our team of expert dentists.
            From routine checkups to advanced treatments, we’re here to keep
            your smile healthy and confident. Trust us for compassionate care in
            a modern, comfortable environment.
          </p>
          <button className="btn btn-outline btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BAnner;
