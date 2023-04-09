
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Basket, Home, Inventory, Login, Orders, Payment, ProductDetail, Products, ProductsDashbord, Register, ResultPayment } from '../pages'

 const Routing = () => {
  return (
   
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/loginDashbord" element={<Login />} />
        <Route path="/products/:categoryname" element={<Products />} />
        <Route path="/products/productDetail/:id" element={<ProductDetail />} />
        <Route path="/basket/register" element={<Register />} />
        <Route path="/basket/register/payment" element={<Payment />} />
        <Route path="/basket/register/payment/:result" element={<ResultPayment />} />
        <Route path="/loginDashbord/dashbordOrders" element={<Orders />} />
        <Route path="/loginDashbord/dashbordInventory" element={<Inventory />} />
        <Route path="/loginDashbord/dashbord/ProductsDashbord" element={<ProductsDashbord />} />
      </Routes>
     
  )
}

export default Routing
