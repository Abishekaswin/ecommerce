import React from 'react'
import payment from '../images/images.jpg'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='footer'>
      <div  className='top' >
        <div className ='item'>
           <h1> Categories    </h1>
           <span> Women     </span>
           <span> Men    </span>
           <span>  Shoes   </span>
           <span> New Arrivals    </span>
      </div>
      <div className ='item'>
      <h1> Links   </h1>
           <span>FAQ    </span>
           <span>Pages    </span>
           <span> Stores   </span>
           <span> Compare    </span> 
           <span>  Cookies    </span>
           </div>
      <div className ='item'>
      <h1> About  </h1>
           <span>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Repudiandae, sit deserunt id eum labore quisquam, quam dolorum 
             soluta,adipisci sed iure fuga beatae iste pariatur!
             Consectetur aliquam aliquid fuga ipsa. 
              </span>
      </div>
      <div className ='item'>
          <h1> Contact  </h1>
           <span>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Repudiandae, sit deserunt id eum labore quisquam, quam dolorum 
             soluta,adipisci sed iure fuga beatae iste pariatur!
             Consectetur aliquam aliquid fuga ipsa. 
              </span>

      </div>
      </div>
     
      <div className='bottom' >
      <div className='left' >
        <span className="logo">  Ecommerce </span>
        <span className="copyright"> @COPYRIGHT 2023 All rights reserved </span>
      </div>
      <div className='right' > 
      
      <img src={payment} alt=""  />
      </div>
         </div>
    </div>
  )
}
