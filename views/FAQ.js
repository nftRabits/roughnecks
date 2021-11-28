import React from "react";
import {Fade} from "react-reveal";
import {Collapse} from "antd";
import {DownOutlined } from "@ant-design/icons";

const {Panel} = Collapse;
const FAQ = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-center mb-20">
          <div className="flex justify-between">
            <div className="hidden md:block">
              <img src="/images/Star 2.png" alt="" className="w-14 h-14" />
            </div>
            <div className="flex justify-center self-center">
              <h1 className=" text-4xl md:text-5xl font-bold text-white uppercase text-center md:px-10 pb-10">
                FREQUENTLY ASKED QUESTIONS
              </h1>
            </div>
            <div className="hidden md:block">
              <img src="/images/Star 2.png" alt="" className="w-14 h-14" />
            </div>
          </div>
        </div>
        <Collapse
          accordion
          bordered={false}
          expandIcon={({isActive}) =>
            <DownOutlined 
              rotate={isActive ? 180 : 0}
              className={isActive ? "text-white bg-fqlight rounded-full p-3 shadow-2xl" : " text-white  rounded-full p-3 shadow-2xl bg-fqlight"}
              style={{fontSize: "100%"}}
            />}
          expandIconPosition="right"
          className="site-collapse-custom-collapse"
        >
          {generalQuestion.map((item, index) => {
            return (
              <Panel
                header={item.title}
                key={item.id}
                className="site-collapse-custom-panel mb-4"
              >
                <p className="text-primary text-base">
                  {item.description}
                </p>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
};

export default FAQ;

const generalQuestion = [
  {
    id: 1,
    title: "1. When is the launch? ",
    description: `We’re planning to launch on December 4th, 2021.`
  },
  {
    id: 2,
    title: "2. How much will minting cost?",
    description: `Mint price will be 1.75 SOL and there will be 9,999 Roaming Cubs available to mint.`
  },
  {
    id: 3,
    title: "3. Is there a mint limit?",
    description: `Yes and no. We will be limiting people to 1 Roaming Cub per transaction. This does mean you can return to the mint section as many times as you want, though.`
  },
  {
    id: 4,
    title: "4. How to mint?",
    description: `In order to mint, you will have to wait till our launch day and you need to have a Solana Chain supporting wallet. We ultimately recommend using Phantom, but feel free to use your favorite.
                    You will need to fund your wallet, connect said wallet to page, click mint, approve and wait to receive your Roaming Cub!
                     Every cub has a story, what’s yours?`
  },
  {
    id: 5,
    title: "5. Where can I trade my Roaming Cubs?",
    description: `Roaming Cubs will be available for trading at launch on Solanart.io.`
  },
  {
    id: 6,
    title: "6. Is rarity important to you?",
    description: `Yes, rarity is very important to us. This is why we’ve designed a Rarity System that lists the traits from “Common”, all the way through “Legendary”. All of Roaming Cubs’ 89 traits and their rarity level can be viewed here. `
  }
];
