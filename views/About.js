import React from "react";
import MainTitle from "../components/MainTitle";

const About = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="neon-border px-5 pt-20 pb-10 relative">
          <MainTitle title="ABOUT US" />
          <div className="max-w-4xl mx-auto z-50">
            <p className=" text-base md:text-lg text-white font-semibold text-center pb-5">
              Roughnecks are all about having fun & great adventures, inspired
              by all the fantastic experiences, amazing parties & legendary
              memories that are born out of gigantic nights out with friends.
            </p>
            <p className=" text-base md:text-lg text-white font-semibold text-center pb-5">
              Wild times full of complete mayhem, epic altications, huge
              winnings that have so many times ended up in the strangest,
              craziest & most unusual places you could ever imagine.. Know what
              I'm talking about??
            </p>
            <p className=" text-base md:text-lg text-white font-semibold text-center pb-8">
              Then after surviving the insanity of the night before, reflecting
              on the madness, sharing embarrassing stories and laughing it off
              with each other (for better or worse lol) the morning
              after...We’ve all been there right?
            </p>
            <p className=" text-base md:text-lg text-secondary font-bold text-center pb-5 z-50">
              We are Roughnecks and welcome you to come and join the party, have
              some fun, win big cash prizes & let's all share our stories from
              “the morning after the night before”... Together!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
