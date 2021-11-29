import React from "react";
import Fade from 'react-reveal/Fade';

const MainTitle = ({title}) => {
  return (
    <Fade cascade={true} bottom={true}>
      <div className="flex justify-center mb-20">
        <div className="flex justify-between">
        <div className=" hidden md:flex">
            <img src="/images/Star 2.png" alt="" className=" w-7 h-7 md:w-14 md:h-14" />
          </div>
          <div className="flex justify-center self-center">
            <h1 className=" text-4xl md:text-5xl font-bold text-white uppercase text-center px-3 md:px-40 pb-10">
              {title}
            </h1>
          </div>
          <div className="hidden md:flex">
            <img src="/images/Star 2.png" alt="" className=" w-7 h-7 md:w-14 md:h-14" />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MainTitle;
