
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import img1 from '../../asets/images/sliderShow/1.jpg'
import img2 from '../../asets/images/sliderShow/2.jpg'
import img3 from '../../asets/images/sliderShow/3.jpg'
import img4 from '../../asets/images/sliderShow/4.jpg'

import "./SliderShow.scss";

import { Autoplay, Pagination, Navigation } from "swiper";

export const Slide = () =>{
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide><img src={img1} /></SwiperSlide> */}
        <SwiperSlide><img src={img4} /></SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>  
        <SwiperSlide><img src={img3} /></SwiperSlide>  
      </Swiper>
    </>
  );
}
