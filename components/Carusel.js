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
              <img src={item.sliderImage} alt="" className="w-full " />
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
    sliderImage: "/images/Rico 1.png"
  },
  {
    sliderImage: "/images/Chopper 1.png"
  },
  {
    sliderImage: "/images/Rothko 1.png"
  },
  {
    sliderImage: "/images/Mouse 1.png"
  },
  {
    sliderImage: "/images/Brasi 1.png"
  }
];
