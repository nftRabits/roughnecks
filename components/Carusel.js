import React, {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper/core";
SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Carusel = () => {
  var sliderSettings = {
    150: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    680: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 1024
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  };
  return (
    <div className="relative">
      <Swiper loop={true} slidesPerView={3} autoplay={true}  breakpoints={sliderSettings}>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.sliderImage} alt="" className="w-full shake " />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carusel;

const data = [
  {
    sliderImage: "/slider/1.png"
  },{
    sliderImage: "/slider/2.jpg"
  },{
    sliderImage: "/slider/3.png"
  },{
    sliderImage: "/slider/4.png"
  },{
    sliderImage: "/slider/5.png"
  },{
    sliderImage: "/slider/6.png"
  },{
    sliderImage: "/slider/7.png"
  },{
    sliderImage: "/slider/8.png"
  },{
    sliderImage: "/slider/9.png"
  },{
    sliderImage: "/slider/10.png"
  },{
    sliderImage: "/slider/11.png"
  },{
    sliderImage: "/slider/12.png"
  },{
    sliderImage: "/slider/13.png"
  },{
    sliderImage: "/slider/14.png"
  },{
    sliderImage: "/slider/15.png"
  },

];
