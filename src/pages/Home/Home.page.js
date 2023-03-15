import React from "react";
import { CardOne, Slide } from "../../components";
import { Header } from "../../layouts";
import './Home.scss'

export const Home = () => {
  return (
   <div>
      <Header/>
    <div className="wrapper_sliderShow">
      <Slide/>
    </div>

    <div className="container-firstCards">
      <CardOne/>
      <CardOne/>
      <CardOne/>
      <CardOne/>
      <CardOne/>
      <CardOne/>
    </div>
  
   </div>
  );
};
