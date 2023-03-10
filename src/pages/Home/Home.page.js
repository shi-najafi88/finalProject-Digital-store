import React from "react";
import { Slide } from "../../components";
import { Header } from "../../layouts";
import './Home.scss'

export const Home = () => {
  return (
   <div>
      <Header/>
    <div className="wrapper_sliderShow">
      <Slide/>
    </div>
  
   </div>
  );
};
