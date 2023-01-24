import React from 'react'
import "./Categories.scss"
import first from "../images/categoriedpic/1cc.jpeg"
import second from "../images/categoriedpic/2cc.jpeg"
import third from "../images/categoriedpic/3cc.jpeg"
import four from "../images/categoriedpic/4cc.jpeg"
import five from "../images/categoriedpic/5cc.webp"
import six from "../images/categoriedpic/6cc.jpeg"
import {Link} from "react-router-dom"

export default function Categories() {
  return (
    <div className='categories'      >
        <div className="col">
        <div className="row">
            <img src={first} alt=""  />
            <button>
                <Link className='link' to="/product/:id"     >
                    Sale </Link>
            </button>
        </div>
        <div className="row">
            <img src={second} alt="" />
            <button>
                <Link className='link' to="/product/:id"     >
                   Women </Link>
            </button>
        </div>
        </div>
       <div className="col">
        <div className='row'   > 
        <img src={third} alt="" />
        <button>
                <Link className='link' to="/product/:id"     >
                   Men </Link>
            </button>
        </div>
       </div>
       <div className="col col-l " >
        <div className="row">
        <div className="col">
            <div className="row">
                <img src={four} alt="" />
                <button>
                <Link className='link' to="/product/:id"     >
                   NeW Season</Link>
            </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src={five} alt="" />
                <button>
                <Link className='link' to="/product/:id"     >
                   Accessories</Link>
            </button>
            </div>
        </div>
        </div>
        <div className="row">
           <img src={six} alt="" />
           <button>
                <Link className='link' to="/product/:id"     >
                   Shoes </Link>
            </button>

        </div>
       </div>
        
        
        
      </div>
  )
}
