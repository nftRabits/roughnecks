import React from "react";

const JoinDiscord = () => {
  return (
    <div className="w-full bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex self-center mb-10 md:mb-0">
            <h1 className="text-white text-center text-4xl md:text-6xl font-extrabold">
              JOIN THE COMMUNITY <br /> DISCORD NOW
            </h1>
          </div>
          <div className=" hidden md:flex self-center">
            <img src="/images/arrowbig.png" alt="" className="w-full" />
          </div>
          <div className="flex self-center">
            <img src="/images/discordb.png" alt="" className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDiscord;
