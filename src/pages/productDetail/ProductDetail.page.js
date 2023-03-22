import React from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header } from '../../layouts'
import './productDetail.scss'
import imge from '../../asets/images/sliderShow/two-3.jpg'
export const ProductDetail = () => {
  const params = useParams()
  let id = params.id 
 

  return (
    <div>
      <Header/>
      <section className='main-detail'>
        <div className='container-detail'>

          <div className='wrraper-detail-img'>
            <img src={imge}/>
            <div className='wrapper-img'>
              <div>
                <img/>
              </div>
              <div>
                <img/>
              </div>
              <div>
                <img/>
              </div>
              <div>
                <img/>
              </div>
            </div>
          </div>

          <div className='wrapper-detail-info'>
            <div className='wrapper-name'>
              <h3>ddddddddddddd</h3>
              <p>apple</p>
            </div>

            <h3>12900000 تومان</h3>

            <p>kkjjjvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
            <input type="number" name="productCounter" className="productCounter" min={1} defaultValue={1}/>
            <div className='addToCart-btn'>افزودن به سبد خرید</div>
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
