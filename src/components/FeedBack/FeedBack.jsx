import React, { useState } from "react";

const FeedBack = ({ feedBackData }) => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 if showAll is false
  const visibleFeedbacks = showAll ? feedBackData : feedBackData.slice(0, 3);

  return (
    <div className="mt-8 block ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleFeedbacks.map((feed) => (
          <div key={feed.reviewId} className="card bg-base-100 w-96 shadow-sm justify-center items-center">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <img
                  className="rounded-full w-12 h-12"
                  src={feed.userImage}
                  alt={feed.name}
                />
                <h2 className="card-title font-bold">{feed.name}</h2>
                <p className="text-gray-400 font-bold">
                  {new Date().toLocaleDateString()}
                </p>
              </div>

              <p>{feed.review}</p>
              <div className="card-actions justify-between items-center  mt-4">
                <div className="rating">
                  <div className="mask mask-star bg-orange-400" aria-label="1 star"></div>
                  <div className="mask mask-star bg-orange-400" aria-label="2 star"></div>
                  <div
                    className="mask mask-star bg-orange-400"
                    aria-label="3 star"
                  ></div>
                  <div
                    className="mask mask-star bg-orange-400"
                    aria-label="4 star"
                    aria-current="true"
                  ></div>
                  <div className="mask mask-star" aria-label="5 star"></div>
                </div>
                <button className="btn btn-primary text-white">Book Me</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More button */}
      {!showAll && feedBackData.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline btn-primary mb-8"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
