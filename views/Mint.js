import React, {useState} from "react";
import {FiMinus, FiPlus} from "react-icons/fi";
import Fade from 'react-reveal/Fade';

const Mint = () => {
    const [amount, setAmount] = useState(1);
    const [preSale, setPreSale] = useState(1);

    const eth = amount * 0.07;
    return (
        <div className="bg-primary w-full">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="border3 bg-dark rounded-lg px-6 py-8 mb-8">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
                        <div className="mb-16 sm:mb-0">
                            <Fade bottom>
                                <h1 className="text-3xl text-off text-center sm:text-left font-semibold">
                                    MAIN DROP
                                </h1>
                            </Fade>
                            <Fade bottom>
                                <p className=" text-grey  text-center sm:text-left text-xs font-semibold mb-8 sm:mb-16">
                                    11 JAN 22, 3:00 EST
                                </p>
                            </Fade>
                            <Fade bottom>
                                <div className="flex justify-center sm:justify-start">
                                    <a className="bg-green text-white hover:text-white rounded-sm cursor-pointer transition-all hover:shadow-2xl px-10 py-3">
                                        Live Soon
                                    </a>
                                </div>
                            </Fade>
                        </div>
                        <div className=" w-full sm:max-w-xl">
                            <div className="flex justify-center">
                                <div className="flex justify-between mb-10">
                                    <Fade bottom>
                                        {amount > 1
                                            ? <span
                                                onClick={() => setAmount(amount - 1)}
                                                className="cursor-pointer transition-all hover:shadow-2xl"
                                            >
                        <FiMinus className="bg-lightpink text-white w-11 h-10 p-1.5  "/>
                      </span>
                                            : <span>
                        <FiMinus className="bg-lightpink text-white w-11 h-10 p-1.5 "/>
                      </span>}
                                        <div>


                    <span className="text-3xl block w-16 text-white text-center">
                      {amount}
                    </span>

                                        </div>
                                        <span
                                            onClick={() => setAmount(amount + 1)}
                                            className="cursor-pointer transition-all hover:shadow-2xl"
                                        >
                    <FiPlus className="bg-lightpink text-white w-11 h-10 p-1.5 "/>
                                </span>
                                    </Fade>
                                </div>
                            </div>
                            <Fade bottom>
                                <div>
                                    <a className="flex w-full cursor-pointer rounded-md justify-center bg-lightpink text-white hover:text-white text-xl font-bold py-3 transition-all hover:shadow-2xl ">
                                        MINT
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="border3 bg-dark rounded-lg px-6 py-6">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
                        <div className="mb-8 sm:mb-0">
                            <Fade bottom>
                                <h1 className="text-3xl text-off text-center sm:text-left font-semibold">Pre Sale</h1>
                            </Fade>

                            <div className="flex justify-center mt-8 mb:16 sm:justify-start">
                                <Fade bottom>
                                    <a className="bg-green text-white hover:text-white rounded-sm cursor-pointer transition-all hover:shadow-2xl px-10 py-3">
                                        Live Soon
                                    </a>
                                </Fade>
                            </div>

                        </div>
                        <div className=" w-full max-w-md">
                            <div className="flex flex-col xs:flex-row justify-center">
                                <Fade bottom>


                                    <div className="flex justify-center xs:justify-between mb-8 xs:mb-0 ">
                                        {preSale > 1
                                            ? <span
                                                onClick={() => setPreSale(preSale - 1)}
                                                className="cursor-pointer transition-all hover:shadow-2xl"
                                            >
                        <FiMinus className="bg-lightpink text-white w-11 h-10 p-1.5  "/>
                      </span>
                                            : <span>
                        <FiMinus className="bg-lightpink text-white w-11 h-10 p-1.5 "/>
                      </span>}
                                        <div>
                    <span className="text-3xl block w-16 text-white text-center">
                      {preSale}
                    </span>
                                        </div>

                                        <span
                                            onClick={() => setPreSale(preSale + 1)}
                                            className="cursor-pointer transition-all hover:shadow-2xl"
                                        >
                    <FiPlus className="bg-lightpink text-white w-11 h-10 p-1.5 "/>
                  </span>
                                    </div>
                                </Fade>

                                <Fade bottom>

                                    <div className="xs:pl-10">
                                        <a className="flex w-full border-2 border-lightpink cursor-pointer rounded-sm justify-center  text-white hover:text-white text-lg font-bold py-1.5 px-3 transition-all hover:shadow-2xl ">
                                            MINT
                                        </a>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Mint;
