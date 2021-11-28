import React from "react";
import MainTitle from "../components/MainTitle";

const Charity = () => {
  return (
    <div className="w-full bg-dark">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        <MainTitle title="CHARITY" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex justify-center">
            <img src="/images/Group 74.png" alt="" />
          </div>
          <div className="md:col-span-2 flex self-center">
            <p className="charity-title text-center font-semibold text-whate">
              We are donating a sizable portion of our mint to WWF Australia. It
              is one of the most trusted & respected conservation organisations
              in the world. They work in Australia and in our Asia-Pacific
              backyard to protect endangered species and habitats, meet the
              challenge of climate change, and build a world where people live
              in harmony with nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
