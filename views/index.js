import React from "react";
import About from "./About";
import Banner from "./Banner";
import BuyARabit from "./BuyARabit";
import Charity from "./Charity";
import FAQ from "./FAQ";
import FrenchiseDevelopment from "./FrenchiseDevelopment";
import Gamifications from "./Gamifications";
import Header from "./Header";
import JoinDiscord from "./JoinDiscord";
import Mint from "./Mint";

import Roadmap from "./Roadmap";
import Team from "./Team";
import Video from "./Video";
const Index = () => {
  return (
    <div>
      <Header />
      <div id="Rabbit">
        <BuyARabit />
      </div>
      <Mint />
      <div id="About">
        <About />
      </div>
      <Video />
      <div id="Roadmap">
        <Roadmap />
      </div>
      <Gamifications />
      <Banner />
      <FrenchiseDevelopment />
      <JoinDiscord />
      <div id="Team">
        <Team />
      </div>
      <Charity />
      <div id="FAQ">
        <FAQ />
      </div>
     
    </div>
  );
};

export default Index;
