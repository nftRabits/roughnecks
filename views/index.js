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


const Index = () => {

    const [value, setValue] = useState('');

    const onChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value) {
            console.log(value);
        }

    }

    return (
        <div>

            <Header/>

            <div id="Rabbit">
                <BuyARabit/>
            </div>
            <Mint/>

            {/*   Sign up section */}
            <div className="bg-dark py-20 w-full">
                <div className="">
                    <MainTitle title="Register For The Whitelist"/>
                </div>
                <div className="max-w-4xl px-6 md:px-16 -mt-16 mx-auto z-50">
                    <Fade bottom>
                        <p className=" text-base md:text-lg text-white font-semibold text-center pb-5">
                            Strictly limited positions on the Roughneck Rabbits whitelist don't miss out on your chance
                            at early access
                        </p>
                    </Fade>

                    <form onSubmit={handleSubmit}>
                        <div className={'mt-10 flex grid items-center  md:grid-cols-1fr-auto gap-8'}>


                            {/*    Input element*/}
                            <input
                                onChange={onChangeValue}
                                className="h-[69px] bg-primary appearance-none block w-full bg-gray-200 text-white newsletter-input py-4 rounded px-4 leading-tight focus:outline-none"
                                id="grid-first-name" type="email" placeholder="Enter your Email"/>

                            {/*    Button   */}
                            <div className="flex justify-center sm:justify-start">
                                <Fade bottom>
                                    <button
                                        className="bg-green mx-auto py-4 text-white hover:text-white font-bold rounded-sm cursor-pointer transition-all hover:shadow-2xl px-10 py-1">
                                        SIGN ME UP
                                    </button>
                                </Fade>
                            </div>

                        </div>
                    </form>

                </div>
            </div>

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
