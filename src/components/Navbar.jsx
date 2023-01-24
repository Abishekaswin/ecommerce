import React, { useState } from 'react'
import flag from '../images/download.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {  Link  } from 'react-router-dom';
import './Navbar.scss'
import Cart from './Cart';


export default function Navbar() {
      
   const [open , setOpen]  =  useState(false)
  

  




  




  return (
    <div className= "navbar"     >
      <div  className='wrapper'  >   
        
        
         <div className='left'     >
         <div className="item">
            <img src={flag}  />
            <KeyboardArrowDownIcon/>
            </div>
           <div className="item">
            <span> IND   </span>
            <KeyboardArrowDownIcon/>
           </div>
           <div className="item">
             < Link className ="link" to='/products/1'   > women</ Link >
           </div>
           <div className="item">
             < Link className ="link" to='/products/2'   > Men    </ Link >
           </div>
           <div className="item">
             < Link className ="link" to='/products/3'   > Children  </ Link >
           </div>
          </div>
        
      <div className='center'     >
         < Link className ="link" to='/' > Ecommerce Website   </ Link >
      </div>

     
      <div className='right'     >
      <div className='item'     >
         < Link className ="link" to='/' >Home Page   </ Link >
      </div>
      <div className='item'     >
         < Link className ="link" to='/' > About  </ Link >
      </div>
      <div className='item'     >
         < Link className ="link" to='/' > Contact  </ Link >
      </div>
      <div className='item'     >
         < Link className ="link" to='/' > Stores   </ Link >
      </div>
     <div className="icons">
         <input type="text" placeholder='Search'     />
         <SearchIcon/>
         <PersonOutlineIcon/>
         <FavoriteBorderIcon        />

     <div className="carticon"   onClick={()=>setOpen(!open)}           >
         <ShoppingCartOutlinedIcon/>
         <span> 0</span>
         </div>
        </div>
      </div>
      </div>
      {open && <Cart/>}
    </div>  
     
    
  )
}
