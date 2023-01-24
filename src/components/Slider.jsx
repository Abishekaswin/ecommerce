import React, { useState } from 'react'
import "./Slider.scss"
import data  from "../images/pexels-photo-428338.jpeg"
import girl from  "../images/pexels-photo-1462637.webp"
import model  from "../images/pexels-photo-1536619.jpeg"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';



export default function Slider(props) {
   
  
const datas =[
    data,
    girl,
    model


]

 const[currentSlide , setCurrentSlide]= useState(0)

 const prevSlide=()=>{
    setCurrentSlide(currentSlide ===0 ? 2:(prev)=>prev-1)
 }
 const nextSlide =()=>{
  setCurrentSlide(currentSlide === 2 ? 0:(prev)=>prev+1)
 }


  return (
    <div   className='slider'>
    <div className='container' style={{transform:`translateX(-${currentSlide*100}vw)`}}       >
      
    <img src={datas[0]} alt="" />
    <img src ={datas[1]} alt=""/>
    <img src ={datas[2]} alt=""/>

    </div>
    <div className="icons">

    <div className="icon" onClick={prevSlide}     >
    <WestOutlinedIcon/>
    </div>
    <div className="icon"  onClick={nextSlide}             >
    
      <EastOutlinedIcon/>
    </div>

    </div>
   

    </div>
  )
}
