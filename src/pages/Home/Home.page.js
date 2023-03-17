import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardOne, CardTwo, Slide, SliderShowTwo } from "../../components";
import { Header } from "../../layouts";
import { LAPTOPCATEGORY, MOBILECATEGORY } from "../../redux/slices";
import './Home.scss'
import baner from '../../asets/images/baner.jpg'

export const Home = () => {

  const state = useSelector(state => state.shopp)
  const dispstch = useDispatch()

  //get mobile category data
  const getDataMobileCtegory = () => {
    axios.get(`http://localhost:3002/products?categoryname=${'موبایل'}`)
    .then(res=> dispstch(MOBILECATEGORY(res.data)))
  }

  //get laptop category data
  const getDataLaptopeCtegory = () => {
    axios.get(`http://localhost:3002/products?categoryname=${'لپتاپ'}`)
    .then(res=> dispstch(LAPTOPCATEGORY(res.data)))
  }


  
  useEffect(()=>{
    getDataMobileCtegory()
    getDataLaptopeCtegory()
  },[])


  return (
   <div className="page-container">
      <Header/>
    <div className="wrapper_sliderShow">
    <Slide />  
    </div>

    <div className="container-firstCards">
      <div className="wrapper-title-category">
        <Link className="category-link" to={`/products/${'موبایل'}`}>
          <h2>کالاهای گروه موبایل</h2>
        </Link>  
      </div>

      <div className="wrapper-firstCard">
      {state.mobaileCategoryData.map(item =>(
        <CardOne item={item} />
      ))}
      </div>  
    </div>


    <div className="container-secondCard">
    <div className="wrapper-title-category">
      <Link className="category-link" to={`/products/${'لپتاپ'}`}>
        <h2>کالاهای گروه لپتاپ</h2>
      </Link>
    </div>

    <div className="wrapper-secondCard">
      {state.laptopCategoryData.map(item =>(
        <CardTwo item={item}/>
      ))}
    </div>
    </div>

    <div className="container-slider-two">
      <img src={baner}/>

      <div className="wrapper-sliderTwo">
        <SliderShowTwo/>
      </div>
    </div>
   
   </div>
  );
};
