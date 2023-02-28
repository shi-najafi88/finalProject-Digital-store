import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components";
import { Header } from "../../layouts";

export const Home = () => {
  return (
   <div>
    <Header/>
    {/* <Nav/> */}
    {/* <Link className='link' to="/products">دسته بندی محصولات</Link> */}
    <h1>this is a home page</h1>
   </div>
  );
};
