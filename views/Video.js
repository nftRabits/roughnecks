import React from "react";

const Video = () => {
  return (
    <div>
      <div className="w-ful bg-primary relative">
        <video autoPlay muted id="myVideo">
          <source src="/images/Roughneck Origin.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className=" text-4xl md:text-6xl font-quest font-bold text-white text-center  z-50">
              VIDEO SECTION PLACEHOLDER
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
