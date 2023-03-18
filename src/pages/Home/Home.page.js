import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardOne, CardTwo, DescCard, Slide, SliderShowTwo } from "../../components";
import { Header } from "../../layouts";
import { HEADSETCATEGORY, LAPTOPCATEGORY, MOBILECATEGORY, TABLETCATEGORY } from "../../redux/slices";
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

  //get headset category data
  const getDataHeadsetCtegory = () => {
    axios.get(`http://localhost:3002/products?categoryname=${'هدفون'}`)
    .then(res=> dispstch(HEADSETCATEGORY(res.data)))
  }


  useEffect(()=>{
    getDataMobileCtegory()
    getDataLaptopCtegory()
    getDataTabletCtegory()
    getDataHeadsetCtegory()
  },[])

let str1 = 'جنس بدنه‌ی گوشی شاخصی است که تأثیر مستقیم در طول عمر آن دارد. اکثر گوشی‌های رده‌پایین و رده‌میانی، بدنه‌های پلاستیکی دارند؛ پلاستیک ماده‌ی ارزان‌قیمتی است که هزینه‌ی نهایی تولید گوشی را کاهش می‌دهد؛ ولی در عوض، به‌راحتی آسیب می‌بیند و استحکام زیادی ندارد. در سمت دیگر، گوشی‌های رده‌بالا از بدنه‌هایی تمام فلزی یا ترکیب فلز و شیشه استفاده می‌کنند. برای این دسته از گوشی‌ها، معمولا از آلیاژهای آلومینیوم استفاده می‌شود؛ آلیاژی که در صنایع خودرو و هوا و فضا هم به کار می‌رود.'
let str2 = 'چه میزان فضا برای ذخیره اطلاعات خود نیاز دارید؟ هارد (HDD) همچنان متداول‌ترین نوع حافظه برای لپ تاپ‌ها می‌باشد. اما می‌توانید از حافظه‌ SSD به دلیل اندازه بسیار کوچک، کیفیت و سرعت بالا‌تر، به عنوان جایگزین هارد استفاده نمایید. البته در نظر داشته باشید که SSD نسبت به HDD گران‌تر است.'
let str3 = 'قبل از هر چیزی به شما توصیه می شود که تمام انتظارات خود از یک تبلت را یادداشت کنید و آنهایی که ضروری هستند را در اولویت قرار دهید. دومین نکته ای که در حین خرید تبلت باید حتما به آن توجه داشته باشید قیمت تبلت است. این نکته مهم را مد نظر داشته باشید که الزاماً بهترین تبلت، گران‌ترین تبلت نیست. از طرفی نباید تبلت های ارزان قیمت و بی‌کیفیت را صرفاً به خاطر قیمت پایین آنها  خریداری کرد. بنابراین قیمت نیز به عنوان یکی از فاکتورهای مهم در حین خرید تبلت باید مورد توجه قرار گیرد.'
let str4 = 'هدفون‌ها از نظر نوع اتصال به دو گروه باسیم و بی‌سیم تقسیم می‌شوند. در نوع باسیم معمولا هدفون‌ها با یکی از رابط‌های پورتUSB، جک ۳.۵ میلی‌متری صدا و جک۶.۳ میلی‌متری به منبع صوتی متصل می‌شوند. البته رابط‌های باسیم دیگری مانند رابط اپتیکال، ورودی RCA و جک ۲.۵ میلی‌متری صدا هم وجود دارند که شرکت‌های تولیدکننده‌ی تجهیزات صوتی کم تر از آن‌ها استفاده می‌کنند.'
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

    <div className="container-desc">
      <h2>تجربه ای فوق العاده در خرید محصولات <span>دیجیتال</span></h2>
      <div className="wrapper-desk">
      <DescCard title={'گوشی موبایل'} desc={(str1.length > 10) ? str1.substring(0, 100) + "...":''}/>
      <DescCard title={'لپتاپ'} desc={(str2.length > 10) ? str2.substring(0, 100) + "...":''}/>
      <DescCard title={'تبلت'} desc={(str3.length > 10) ? str3.substring(0, 100) + "...":''}/>
      <DescCard title={'هدفون'} desc={(str4.length > 10) ? str4.substring(0, 100) + "...":''}/>  
      </div>
    </div>

    <div className="container-secondCard">
    <div className="wrapper-title-category">
      <Link className="category-link" to={`/products/${'هدفون'}`}>
        <h2>کالاهای گروه هدفون</h2>
      </Link>
    </div>

    <div className="wrapper-secondCard">
      {state.headsetCategoryData.map(item =>(
        <CardTwo item={item}/>
      ))}
    </div>
    </div>
   
   </div>
  );
};
