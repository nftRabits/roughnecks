import React from "react";
import Timer from "../components/Timer";
import MainTitle from "../components/MainTitle";
const BuyARabit = () => {
  return (
    <div className="bg-primary w-full">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <MainTitle title="BUY A RABBIT" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-extrabold pb-4">
              OVER $500,000 IN GIVEAWAYS
            </h1>
            <ul className="md:pl-8 mb-4">
              {data.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-white font-extrabold text-xl list-item list-inside list-disc pb-2"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className="text-sm font-semibold text-off pb-10">
              Super fun project, massive giveaways during mint, ongoing post
              mint gamification, cash jackpots, NFT giveaways & huge vegas
              parties ... Let’s build an epic community TOGETHER!!
            </p>
            <div>
              <Timer />
            </div>
            <div className="flex flex-col xs:flex-row justify-between">
              <div className="mb-5 xs:mb-0">
                <h4 className="text-sm text-center font-semibold text-grey pb-1">
                  MINT PRICE
                </h4>
                <p className="text-secondary text-center font-bold text-xl">
                  0.05 ETH
                </p>
              </div>
              <div className="mb-5 xs:mb-0">
                <h4 className="text-sm text-center font-semibold text-grey pb-1">
                  LAUNCH DATE
                </h4>
                <p className="text-secondary text-center font-bold text-xl">
                  11 JAN 22
                </p>
              </div>
              <div className="mb-5 xs:mb-0">
                <h4 className="text-sm text-center font-semibold text-grey pb-1">
                  SECONDARY MARKERT
                </h4>
                <p className="text-white text-center font-bold text-2xl">
                  OpenSea
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src="/images/RR Final 1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyARabit;

const data = [
  "TESLA’S UP FOR GRABS",
  "CASH JACKPOT PRIZES",
  "HUGE VEGAS PARTIES",
  "CHARITY FOCUSED",
  "10,000 ROUGHNECK RABBITS"
];
