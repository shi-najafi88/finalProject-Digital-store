import React from 'react'
import Marquee from "react-fast-marquee";
import './SliderShow2.scss'

import img1 from '../../../asets/images/sliderShow/two-1.jpg'
import img2 from '../../../asets/images/sliderShow/two-2.jpg'
import img3 from '../../../asets/images/sliderShow/two-3.jpg'
import img4 from '../../../asets/images/sliderShow/two-4.jpg'
import img5 from '../../../asets/images/sliderShow/two-5.jpg'

export const SliderShowTwo = () => {
  return (
    <Marquee speed={50}>
      <img className='sliderTwo-img' src={img1} />
      <img className='sliderTwo-img' src={img2} />
      <img className='sliderTwo-img' src={img3} />
      <img className='sliderTwo-img' src={img4} />
      <img className='sliderTwo-img' src={img5} />  
    </Marquee>
  );
}

 



