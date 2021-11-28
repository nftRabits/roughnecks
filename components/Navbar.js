import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto  py-3 ">
        <div className="flex justify-between">
          <div className="flex self-center">
            <img src="/images/Roughneck Rabbits.png" alt="" className="w-72" />
          </div>
          <div className="flex self-center">
            <ul className="flex">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <a>
                      <AnchorLink href={`#${item.url}`} className="text-white text-base hover:text-white font-bold mx-5 cursor-pointer">
                        {item.name}
                      </AnchorLink>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex self-center">
            <ul className="flex">
              {socialLinks.map((item, index) => {
                return (
                  <li key={index} className="mx-2">
                    <a href={item.url} target="_blank">
                      <img src={item.socialIcon} alt="" />
                    </a>
                  </li>
                );
              })}
              <li>
                <a className="text-secondary border border-secondary px-8 py-3 rounded-md text-base font-bold mx-9 cursor-pointer">
                  Connect Wallet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
const links = [
  {
    id: 1,
    name: "Buy a Rabbit",
    url: "Rabbit"
  },
  {
    id: 2,
    name: "About",
    url: "About"
  },
  {
    id: 3,
    name: "Roadmap",
    url: "Roadmap"
  },
  {
    id: 4,
    name: "Team",
    url: "Team"
  },
  {
    id: 5,
    name: "FAQ",
    url: "FAQ"
  }
];

const socialLinks = [
  {
    id: 1,
    socialIcon: "/images/discord.png",
    url: "https://discord.gg/7f465dkQve"
  },
  {
    id: 2,
    socialIcon: "/images/twitter.png",
    url: "/"
  }
];
