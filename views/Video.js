import React from "react";
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div>
      <div className="w-ful bg-primary relative">
        {/*<video preload={'auto'} controls={true} autoPlay={false} loop={true} muted={false} id="myVideo">*/}
        {/*  <source src="/images/Roughneck Origin.mp4" type="video/mp4" />*/}
        {/*</video>*/}
          <div className='player-wrapper'>
              <ReactPlayer
                  controls={true}
                  light={'/thumbnail.png'}
                  className='react-player'
                  url='https://res.cloudinary.com/afzaal1721/video/upload/v1638188675/Roughneck_Origin_hc4amh.mp4'
                  width='100%'
                  height='100%'
              />
          </div>
        {/*<div className="overlay">*/}
        {/*  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">*/}
        {/*    <h1 className=" text-4xl md:text-6xl font-quest font-bold text-white text-center  z-50">*/}
        {/*      VIDEO SECTION PLACEHOLDER*/}
        {/*    </h1>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Video;
