import React from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
        <div className="w-full hero">
            <div className="hidden xl:block">
                <Fade bottom cascade={true}>
                    <Navbar/>
                </Fade>
            </div>
            <div className="block xl:hidden">
                <MobileMenu/>
            </div>
        </div>
    );
};

export default Header;
