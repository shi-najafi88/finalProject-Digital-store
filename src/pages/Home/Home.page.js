import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardOne, CardTwo, Slide, SliderShowTwo } from "../../components";
import { Header } from "../../layouts";
import { LAPTOPCATEGORY, MOBILECATEGORY, TABLETCATEGORY } from "../../redux/slices";
import baner from '../../asets/images/baner.jpg';
import './Home.scss'

export const Home = () => {

  const state = useSelector(state => state.shopp)
  const dispstch = useDispatch()

  //get mobile category data
  const getDataMobileCtegory = () => {
    axios.get(`http://localhost:3002/products?categoryname=${'موبایل'}`)
    .then(res=> dispstch(MOBILECATEGORY(res.data)))
  }

  //get laptop category data
  const getDataLaptopCtegory = () => {
    axios.get(`http://localhost:3002/products?categoryname=${'لپتاپ'}`)
    .then(res=> dispstch(LAPTOPCATEGORY(res.data)))
  }

  //get tablet category data
  const getDataTabletCtegory = () => {
    axios.get(`http://localhost:3002/products?categoryname=${'تبلت'}`)
    .then(res=> dispstch(TABLETCATEGORY(res.data)))
  }


  useEffect(()=>{
    getDataMobileCtegory()
    getDataLaptopCtegory()
    getDataTabletCtegory()
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

    <div className="container-firstCards">
      <div className="wrapper-title-category">
        <Link className="category-link" to={`/products/${'تبلت'}`}>
          <h2>کالاهای گروه تبلت</h2>
        </Link>  
      </div>

      <div className="wrapper-firstCard">
      {state.tabletCategoryData.map(item =>(
        <CardOne item={item} />
      ))}
      </div>  
    </div>
   
   </div>
  );
};
