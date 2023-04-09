import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table, ModalDeletBasket } from "../../components";
import { useSelector } from "react-redux";
import { Footer, Header } from "../../layouts";
import "./Basket.scss";

export const Basket = () => {
  const state = useSelector((state) => state.shopp);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    state.cartProductArray.forEach(
      (item) => (price += item.count * item.price)
    );
    setTotalPrice(price);
  }, [state.cartProductArray]);

  return (
    <div className="container-cart">
      <Header />
      
      <main>
        <Table
          tableStatus={"tableCart"}
          titleOne={"تصویر"}
          titleTwo={"کالا"}
          titleThree={"قیمت"}
          titleFour={"تعداد"}
          titleFive={"حذف"}
        />
        <div className="wrapper-finalCart-btn">
          <div className="wrapper-totalPrice">
            <span>جمع کل: {totalPrice.toLocaleString("fa")}</span>
            <span> تومان</span>
          </div>
          <Link className="link" to="/basket/register">
            <Button title={"نهایی کردن سبد خرید"} stateBtn={"basket"} />
          </Link>
        </div>
      </main>
      <Footer />

      {/* show delet modal when click trash icon */}
      {state.modalDeletBasket && <ModalDeletBasket />}
    </div>
  );
};
