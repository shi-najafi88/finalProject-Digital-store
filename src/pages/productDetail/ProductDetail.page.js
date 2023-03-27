import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header } from '../../layouts'
import './productDetail.scss'
import { useEffect } from 'react'
import { DATATABEL } from '../../redux/slices'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components'


export const ProductDetail = () => {

  const state = useSelector(state => state.shopp) 
  const dispatch = useDispatch()
  const params = useParams()
  let id = params.id 

// for show image in thumbnail box
  const [imgThree , setImgThree] = useState(false)
  const [imgTwo , setImgTwo] = useState(false)
  const [imgOne , setImgOne] = useState(false)
  const [imgZero , setImgZero] = useState(false)

  const getProduct = (id) =>{
    axios.get(`http://localhost:3002/products?id=${id}`)
    .then(res => dispatch(DATATABEL(res.data)))
  }

  useEffect(()=>{
    getProduct(id)
  },[id])

  // for show image in thumbnail box
  const clickHandel_img_three = () => {
    setImgThree(true)
    setImgTwo(false)
    setImgOne(false)
  }

  const clickHandel_img_two = () => {
    setImgTwo(true)
    setImgThree(false)
    setImgOne(false)
  }

  const clickHandel_img_one = () => {
    setImgOne(true)
    setImgTwo(false)
    setImgThree(false)
  }

  const clickHandel_img_zero = () => {
    setImgZero(true)
    setImgOne(false)
    setImgTwo(false)
    setImgThree(false)
  }

  //count product
  let count = 1
  const count_value = (e) => {
    count = e.target.value
  }

  //add to cart btn
  const addToCart_handler = (item) =>{
    //set array cart to localstorage
    const oldInfo = JSON.parse(localStorage.getItem('cartProduct') || '[]');

    let obj = {
      thumbnail: item.thumbnail,
      name: item.name,
      price:item.price,
      count:+count,
      quantity:item.quantity
    }
    oldInfo.push(obj)
    localStorage.setItem('cartProduct', JSON.stringify(oldInfo)); 
    console.log(oldInfo); 
  }
 
 
  return (
    <div>
      <Header/>
      <section className='main-detail'>
        <div className='container-detail'>
          {state.listData.map(item =>(
            <>
          <div className='wrraper-detail-img'>
            
            {imgThree ? 
            <div className='detail-thumbnail'>
              <img src={`http://localhost:3002/files/${item.image[3]}`}/>
            </div>:
            imgTwo ?
            <div className='detail-thumbnail'>
            <img src={`http://localhost:3002/files/${item.image[2]}`}/>
            </div>:
            imgOne ?
            <div className='detail-thumbnail'>
            <img src={`http://localhost:3002/files/${item.image[1]}`}/>
            </div>:
            imgZero ?
            <div className='detail-thumbnail'>
            <img src={`http://localhost:3002/files/${item.image[0]}`}/>
            </div>:
            <div className='detail-thumbnail'>
              <img src={`http://localhost:3002/files/${item.thumbnail}`}/>
            </div>
            }

            <div className='wrapper-img'>
              <div onClick={clickHandel_img_three}>
                <img src={`http://localhost:3002/files/${item.image[3]}`}/>
              </div>
              <div onClick={clickHandel_img_two}>
                <img src={`http://localhost:3002/files/${item.image[2]}`}/>
              </div>
              <div onClick={clickHandel_img_one}>
                <img src={`http://localhost:3002/files/${item.image[1]}`}/>
              </div>
              <div onClick={clickHandel_img_zero}>
                <img src={`http://localhost:3002/files/${item.image[0]}`}/>
              </div>
            </div>
          </div>

          <div className='wrapper-detail-info'>
            <div className='wrapper-name'>
              <h3>{item.name}</h3>
              <p>{item.brand}</p>
            </div>

            <h3>{(+item.price).toLocaleString("fa")} تومان</h3>

            <p>{item.description}</p>
            <input onChange={count_value} type="number" name="productCounter" className="productCounter" min={1} defaultValue={1}/>
            <Button clicked={()=>addToCart_handler(item)} title={'افزودن به سبد خرید'} stateBtn={'basket'} /> 
          </div>
          </>
          ))}

        </div>
      </section>
      <Footer/>
    </div>
  )
}
