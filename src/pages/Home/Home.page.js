import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components";

export const Home = () => {
  return (
   <div>
    <Nav/>
    <Link className='link' to="/products">دسته بندی محصولات</Link>
    <h1>this is a home page</h1>
   </div>
  );
};
