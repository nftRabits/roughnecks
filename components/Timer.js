import React from "react";
import {useTimer} from "react-timer-hook";

function Timer() {
  const expiryTimestamp = new Date('January 11, 2022');
  // expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1055000);
  const {seconds, minutes, hours, days} = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  return (
    <div className="mb-7 ">
      <div className="flex overflow-x-auto py-6">
        <div className="mr-6">
          <span className="block bg-dark border3 mb-2  rounded-md w-20 text-white text-center py-4  font-bold text-lg md:text-4xl ">
            {days}
          </span>
          <span className=" font-bold flex justify-center self-center text-light  text-sm ">
            DAYS
          </span>
        </div>
        <div  className="mr-6">
          <span className="block bg-dark border3 mb-2  rounded-md w-20 text-white text-center py-4  font-bold text-lg md:text-4xl ">
            {hours}
          </span>
          <span className=" font-bold flex justify-center self-center text-light  text-sm ">
            HOURS
          </span>
        </div>
        <div  className="mr-6">
          <span className="block bg-dark border3 mb-2  rounded-md w-20 text-white text-center py-4  font-bold text-lg md:text-4xl ">
            {minutes}
          </span>
          <span className=" font-bold flex justify-center self-center text-light  text-sm ">
            MINS
          </span>
        </div>
        <div  className="mr-6">
          <span className="block bg-dark border3 mb-2  rounded-md w-20 text-white text-center py-4  font-bold text-lg md:text-4xl ">
            {seconds}
          </span>
          <span className=" font-bold flex justify-center self-center text-light  text-sm ">
            SEC
          </span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
