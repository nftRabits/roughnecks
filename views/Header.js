import React from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
        <div className="w-full mt-[60px] hero lg:mt-0">
            <div className="hidden navbar fixed top-0 l-0 w-full xl:block">
                <Fade bottom cascade={true}>
                    <Navbar/>
                </Fade>
            </div>
            <div className="block fixed w-full top-0 left-0 xl:hidden">
                <MobileMenu/>
            </div>
        </div>
    );
};

export default Header;
