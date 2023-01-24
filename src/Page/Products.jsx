import React, { useState } from 'react'
import "./Product.scss"
import img from '../images/categoriedpic/pexels-photo-868113.jpeg'
import img1 from '../images/categoriedpic/pexels-photo-905375.webp'
import img2 from '../images/categoriedpic/pexels-photo-1183266.jpeg'
import BalanceIcon from '@mui/icons-material/Balance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function Products() {

  const [selImg, setselImg] = useState(0)
  const [quantity, setquantity] =useState(0)
  const [change ,setchange] =useState(false)

  const handle =()=>{
    setchange( !change)   
      
  }
  

    const images =[
          img,
          img1,
          img2

    ]




  return (
    <div   className="products" >
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setselImg(0)} />
          <img src={images[1]} alt="" onClick={e=>setselImg(1)}/>
          <img src={images[2]} alt="" onClick={e=>setselImg(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selImg]} alt="" />
        </div>
      </div>
      <div className="right">
       <h1>Title</h1>
       <span  className='price'    >$277    </span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quidem sint repudiandae incidunt ipsum facilis inventore aperiam culpa repellendus! Nemo laudantium sint explicabo consequatur rerum incidunt aspernatur, impedit illum voluptatem.</p>
       <div className="quantity">
         <button   onClick={()=>setquantity (prev=>prev ===0 ? 0:prev-1)}          >-</button>
             {quantity}
         <button      onClick={e=>setquantity(prev =>prev+1)}      >+</button>

       </div>
        <button className="add">
       <AddShoppingCartIcon      />ADD TO CART
       </button>
       <div className="link">
        <div className="item">
          <FavoriteBorderIcon    onClick={handle}  className={change ? 'toggle' : ''}            />ADD TO WISH LIST
        </div>
        <div className="item">
          <BalanceIcon/>ADD to Compare
        </div>
       </div>
       <div className="info">
        <span> Vendor:Polo  </span>
        <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
       </div>
      </div>
    </div>
  )
}
