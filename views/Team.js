import React from "react";
import MainTitle from "../components/MainTitle";

const Team = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <MainTitle title="ROUGHNECKS TEAM" />
        <div className="flex justify-center">
          <div className="flex  justify-center flex-wrap">
            {data.map((item, index) => {
              return (
                <div key={index} className=" mx-16 mb-20">
                  <div className="flex justify-center">
                  <img src={item.picture} alt={item.title} />
                  </div>
                  <div className="bg-dark w-60 h-40 rounded-xl px-2 pt-3">
                    <h1 className="text-4xl font-extrabold text-white pb-1 text-center">
                      {item.title}
                    </h1>
                    <h3 className="text-xl font-semibold  text-secondary text-center pb-4">
                      {item.role}
                    </h3>
                    <p className="text-grey text-sm font-semibold text-center pb-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

const data = [
  {
    title: "Rico",
    role: "Founder",
    desc: "Head Honcho & Attack Deployment General",
    picture: "/images/Rico 1.png"
  },
  {
    title: "Chopper",
    role: "Founder",
    desc: "Head Party Planner & Power Drinker",
    picture: "/images/Chopper 1.png"
  },
  {
    title: "Rothko",
    role: "Artist",
    desc: "Head Visionary & Dreamer",
    picture: "/images/Rothko 1.png"
  },
  {
    title: "Mouse",
    role: "Developer",
    desc: "Head Mastermind & Stresser",
    picture: "/images/Mouse 1.png"
  },
  {
    title: "Brasi",
    role: "Head Moderator",
    desc: "Head Doorman & Butt Kicker",
    picture: "/images/Brasi 1.png"
  }
];