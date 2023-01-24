import React from 'react'
import "./Cart.scss"
import image1 from "../images/1-commerce.jpeg"
import image2 from "../images/2-commerce.jpeg"
import image3 from '../images/3-commerce.webp'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function Cart() {

    const data =[{
        id:1,
        img: image1,
        img2: image2     ,
        title:"Long Sleeve Graphic T-Shirt",
        desc: " hdefbifbifbfbrbbiviuvvbrere",
        isNew:true,
        oldPrice:19,
        price:12
     ,
     },{
        id:2,
       img: image3  ,
       title:"Coat",
       desc: "efrebhrebrebrebref ",
       isNew:true,
       oldPrice:19,
       price:12,
    },
    
    
    ];



  return (
    <div className='cart'  >
        
        <h1>Products in your Cart</h1>
        {data.map(item => (
           <div className="item" key={item.id}       >

         <img src={ item.img} alt ="" />
                <div className="details">
               <h1>{item.title}</h1>
              <p>{item.desc.substring(0,100)} </p>
          <div className="price">1 x ${item.price}</div>
         </div>
        <DeleteOutlineIcon    className='delete' />
         </div>
               
       

           
        
        ))}

      <div className="total">
       <span>SUBTOTAL</span>
       <span>$123   </span>
      
      </div>
     <button>PROCEED TO CHECKOUT    </button>
     <span className='reset'  >Reset Cart</span>



        </div>




         
);};