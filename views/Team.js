import React from "react";
import MainTitle from "../components/MainTitle";
import Fade from 'react-reveal/Fade';

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
                  <Fade bottom>

                  <div className="flex justify-center">
                  <img className={'zoom'} src={item.picture} alt={item.title} />
                  </div>
                  </Fade>
                  <div style={{
                    height: '11rem'
                  }} className="bg-dark w-60 rounded-xl px-2 pt-3">
                    <Fade bottom>
                    <h1 className="text-4xl font-extrabold text-white pb-1 text-center">
                      {item.title}
                    </h1>
                    </Fade>
                    <Fade bottom>
                    <h3 className="text-xl font-semibold  text-secondary text-center pb-4">
                      {item.role}
                    </h3>
                    </Fade>
                    <Fade bottom>
                    <p className="text-grey text-sm font-semibold text-center pb-6">
                      {item.desc}
                    </p>
                    </Fade>
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