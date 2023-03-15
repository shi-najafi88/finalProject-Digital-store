import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardOne, Slide } from "../../components";
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
   <div>
      <Header/>
    <div className="wrapper_sliderShow">
    <Slide />  
    </div>

    <div className="container-firstCards">

    {state.mobaileCategoryData.map(item =>(
        <CardOne item={item} />
    ))}
    </div>
  
   </div>
  );
};
