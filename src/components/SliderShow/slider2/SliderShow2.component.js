import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './SliderShow2.scss'
import { FreeMode, Pagination } from "swiper";

import img1 from '../../../asets/images/sliderShow/two-1.jpg'
import img2 from '../../../asets/images/sliderShow/two-2.jpg'
import img3 from '../../../asets/images/sliderShow/two-3.jpg'
import img4 from '../../../asets/images/sliderShow/two-4.jpg'
import img5 from '../../../asets/images/sliderShow/two-5.jpg'

export const SliderShowTwo = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><img className='sliderTwo-img' src={img1} /></SwiperSlide>
        <SwiperSlide><img className='sliderTwo-img' src={img2} /></SwiperSlide>
        <SwiperSlide><img className='sliderTwo-img' src={img3} /></SwiperSlide>
        <SwiperSlide><img className='sliderTwo-img' src={img4} /></SwiperSlide>
        <SwiperSlide><img className='sliderTwo-img' src={img5} /></SwiperSlide>
      </Swiper>
    </>
  );
}

 



