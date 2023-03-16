import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardOne, CardTwo, Slide } from "../../components";
import { Header } from "../../layouts";
import { MOBILECATEGORY } from "../../redux/slices";
import './Home.scss'

export const Home = () => {

  const state = useSelector(state => state.shopp)
  const dispstch = useDispatch()

  const getData = () => {
    axios.get(`http://localhost:3002/products?categoryname=${'گوشی موبایل'}`)
    .then(res=> dispstch(MOBILECATEGORY(res.data)))
  }
  
  useEffect(()=>{
    getData()
  },[])



  return (
   <div className="page-container">
      <Header/>
    <div className="wrapper_sliderShow">
    <Slide />  
    </div>

    <div className="container-firstCards">

      <Link className="category-link" to='/products'>
      <h2>کالاهای گروه موبایل</h2>
      </Link>

      <div className="wrapper-firstCard">
      {state.mobaileCategoryData.map(item =>(
        <CardOne item={item} />
      ))}
      </div>
      
    </div>

    <div className="container-secondCard">

    <Link className="category-link" to='/products'>
      <h2>کالاهای گروه لپتاپ</h2>
    </Link>

    <div className="wrapper-secondCard">
      <CardTwo/>
      <CardTwo/>
      <CardTwo/>
      <CardTwo/>
      <CardTwo/>
      <CardTwo/>
    </div>
    </div>
  
   </div>
  );
};
