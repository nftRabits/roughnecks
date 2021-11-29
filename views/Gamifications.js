import React from "react";
import MainTitle from "../components/MainTitle";

const Gamifications = () => {
  return (
    <div className="w-full bg-dark">
      <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-10 pt-28">
        <MainTitle title="GAMIFICATION" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex justify-center">
                  <img src={item.picture} alt="" className="w-60 h-60 zoom " />
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-bold pb-4 text-center">
                  {item.title}
                </h2>
                <p className="text-white text-sm md:text-base font-semibold pb-0 md:pb-24 text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gamifications;

const data = [
  {
    title: "GIGANTIC PUB QUIZZES",
    description:
      "Post mint every Sunday night for 8 weeks we are running huge cash prize pub trivia quizzes that we think are going to be super fun for the community.",
    picture: "/images/Pub Quiz 1.png"
  },
  {
    title: "INSANE $5K ETHEREUM",
    description:
      "For the first 8 weeks of our Sunday night pub quizzes there will be a total $5000 worth of ETH up for grabs. With 5 lucky prize winners per quiz night.      ",
    picture: "/images/Ethereum 1.png"
  },
  {
    title: "MASSIVE NFT RAFFLE",
    description:
      "For the first 8 weeks post mint and part of our pub quizzes nights, we will also be holding a raffle for all the members that joined in the fun & giving away NFT airdrops.",
    picture: "/images/Raffle Tickets 1.png"
  },
  {
    title: "MEGA ROYALTIES JACKPOT",
    description:
      "Ongoing we will continue the fun & games & bring the community together, so every Sunday Night pub quizzes will be held, with 10% of the weekly royalties up for grabs.",
    picture: "/images/Jackpot 1.png"
  },
  {
    title: "LEGENDARY VEGAS PARTIES",
    description:
      "Moving forward we want to bring the Roughneck community together for some epic Vegas parties. This is a key benefit & looking to make these legendary events.",
    picture: "/images/Las Vegas 1.png"
  },
  {
    title: "HUGE LIMITED MERCH DROPS",
    description:
      "What would a great brand be without amazing merch, so we will be doing one off, limited edition runs of merch so you can represent our great community in style.",
    picture: "/images/T-shirt 1.png"
  }
];
