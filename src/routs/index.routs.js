
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Basket, Dashbord, Faild, Home, Inventory, Login, Orders, Payment, ProductDetail, Products, ProductsDashbord, Register, Success } from '../pages'

 const Routing = () => {
  return (
   
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/loginDashbord" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/productDetail" element={<ProductDetail />} />
        <Route path="/basket/register" element={<Register />} />
        <Route path="/basket/register/payment" element={<Payment />} />
        <Route path="/basket/register/payment/successPayment" element={<Success />} />
        <Route path="/basket/register/payment/faildPayment" element={<Faild />} />
        <Route path="/loginDashbord/dashbord" element={<Dashbord />} />
        <Route path="/loginDashbord/dashbord/orders" element={<Orders />} />
        <Route path="/loginDashbord/dashbord/inventory" element={<Inventory />} />
        <Route path="/loginDashbord/dashbord/ProductsDashbord" element={<ProductsDashbord  />} />
      </Routes>
     
  )
}

export default Routing
