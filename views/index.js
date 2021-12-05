import React, {useState} from "react";
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
import MainTitle from "../components/MainTitle";
import Fade from "react-reveal/Fade";
import Newsletter from "./Newsletter";


const Index = () => {

    return (
        <div>

            <Header/>

            <div id="Rabbit">
                <BuyARabit/>
            </div>
            <Mint/>

            <Newsletter url={'https://roughnecks.us20.list-manage.com/subscribe/post?u=83d4d3fec0062aa30fd7d638f&amp;id=d0bceae844'}/>

            <div id="About">
                <About/>
            </div>

            <Video/>
            <div id="Roadmap">
                <Roadmap/>
            </div>
            <Gamifications/>
            <Banner/>
            <FrenchiseDevelopment/>
            <JoinDiscord/>
            <div id="Team">
                <Team/>
            </div>
            <Charity/>
            <div id="FAQ">
                <FAQ/>
            </div>

        </div>
    );
};

export default Index;
