import React from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
const Header = () => {
  return (
    <div className="w-full hero">
     <div className="hidden xl:block">
        <Navbar />
      </div>
      <div className="block xl:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
