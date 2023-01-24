import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';


export default function Contact() {
  return (
    <div   className='contact'     >

       <div className="wrapper">
         <span>BE in Touch with us:</span>
         <div className="mail">
            <input type="text" placeholder='Enter your Email' />
            <button>JOIN US</button>

         </div>
         <div className="icons">
           <FacebookIcon/>
           <TwitterIcon/>
           <InstagramIcon/>
           <GoogleIcon/>


         </div>
       </div>

    </div>
  )
}
