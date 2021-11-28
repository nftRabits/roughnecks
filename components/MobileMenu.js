import React, {useState} from "react";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {GiHamburgerMenu} from "react-icons/gi";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="  w-full bg-primary z-50 top-0 shadow-md">
      <div className="flex justify-between bg-primary z-50 h-20  py-5 shadow-lg border-b border-Offwhite-default">
        <div className="pl-5 flex self-center">
          <Image
            src="/images/Roughneck Rabbits.png"
            alt=""
            width={200}
            height={20}
          />
        </div>
        <div>
          <ul className="flex justify-between">
            <li className="px-1">
              <span className="cursor-pointer">
                <img
                  src="/assets/Component 15 – 4.png"
                  alt=""
                  className="w-10  pl-1  rounded-full"
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="px-5 self-center cursor-pointer">
          <span onClick={toggleDrawer}>
            <GiHamburgerMenu className="w-8 h-8 text-white text-white" />
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{backgroundColor: "#5A0928"}}
      >
        <div className="pl-5 pt-10">
          <Image
            src="/images/Roughneck Rabbits.png"
            alt=""
            width={200}
            height={20}
          />
        </div>
        <div className="flex flex-col pt-10 px-4">
          {links.map((item, index) => {
            return (
              <span key={index}>
                <AnchorLink
                  href={`#${item.url}`}
                  className="text-xl text-white transition-all hover:text-white py-3.5 border-b border-white"
                >
                  {item.name}
                </AnchorLink>
              </span>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;

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
