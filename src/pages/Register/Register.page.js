import React from "react";
import { Button, ModalDetail } from "../../components";
import { useAuthRegister } from "../../hook/useAuthRegister/useAuthRegister";
import { Footer, Header } from "../../layouts";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { useEffect, useState } from "react";
import * as shamsi from "shamsi-date-converter";
import "./Register.scss";

export const Register = () => {
  //custom hook for form validation
  const { register, handleSubmit, errors } = useAuthRegister();

  const [value, setValue] = useState({
    format: "MM/DD/YYYY",
  });

  const [hasDate, setHasDate] = useState(false);
  const [isValidDate, setIsValidDate] = useState(null);

  const convert = (date, format = value.format) => {
    let object = { date, format };
    setValue({
      persian: new DateObject(object).convert(persian, persian_en).format(),
    });
    setHasDate(true);
  };

  useEffect(() => {
    if (hasDate) {
      const selectedDate = shamsi
        .jalaliToGregorian(
          Number(value.persian?.split("/")[0]),
          Number(value.persian?.split("/")[1]),
          Number(value.persian?.split("/")[2])
        )
        .join("/");
      if (new Date(`${selectedDate}`).getTime() > Date.now()) {
        // getDate(selectedDate);
        setIsValidDate(true);
      } else {
        setIsValidDate(false);
      }
    }
  }, [value, isValidDate]);

  const submitForm = () => {};

  return (
    <div className="container_finalCart">
      <Header />
      <main>
        <div className="wrapper-title">
          <h2>نهایی کردن خرید</h2>
        </div>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="wrapper-form-row">
            <ModalDetail
              type={"text"}
              title={"نام :"}
              error={errors.name?.message}
              validation={{ ...register("name") }}
            />
            <ModalDetail
              type={"text"}
              title={" نام خانوادگی :"}
              error={errors.lastName?.message}
              validation={{ ...register("lastName") }}
            />
          </div>

          <div className="wrapper-form-row">
            <ModalDetail
              type={"text"}
              title={"آدرس :"}
              error={errors.address?.message}
              validation={{ ...register("address") }}
            />
            <ModalDetail
              type={"text"}
              title={" تلفن همراه :"}
              error={errors.mobile?.message}
              validation={{ ...register("mobile") }}
            />
          </div>

          <div className="wrapper-date">
            <label>تاریخ تحویل :</label>

            <DatePicker className="datePicker"
              calendar={persian}
              locale={persian_fa}
              value={value.date}
              onChange={convert}
              required
            />

            {isValidDate === false ? <p>تاریخ وارد شده صحبح نمی باشد</p> : ""}

          </div>

          <div className="wrapper-paymentBtn">
            <Button type={"submit"} title={"پرداخت"} stateBtn={"basket"} />
          </div> 

        </form>
      </main>
      <Footer />
    </div>
  );
};
