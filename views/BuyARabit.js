import React from "react";
import Timer from "../components/Timer";
import MainTitle from "../components/MainTitle";
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';

const BuyARabit = () => {
    return (
        <div className="bg-primary w-full">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <MainTitle title="BUY A RABBIT"/>
                <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div>

                        <Fade bottom={true}>
                            <h1 className="text-white text-3xl md:text-4xl font-extrabold pb-4">
                                OVER $500,000 IN GIVEAWAYS
                            </h1>
                        </Fade>
                        <ul className="md:pl-8 mb-4">
                            <Fade delay={500} cascade={true} bottom={true}>
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
                            </Fade>
                        </ul>
                        <Fade bottom={true}>

                        <p className="text-sm font-semibold text-off pb-10">
                            Super fun project, massive giveaways during mint, ongoing post
                            mint gamification, cash jackpots, NFT giveaways & huge vegas
                            parties ... Let’s build an epic community TOGETHER!!
                        </p>
                        </Fade>
                        <Fade bottom>

                        <div>
                            <Timer/>
                        </div>
                        </Fade>
                        <Fade bottom>
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
                                    SECONDARY MARKET
                                </h4>
                                <p className="text-white text-center font-bold text-2xl">
                                    OpenSea
                                </p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <Swing>

                    <div className="flex justify-center md:justify-end">
                        <img className={'shake'} src="/images/RR Final 1.png" alt=""/>
                    </div>
                    </Swing>
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
