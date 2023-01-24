import React from 'react'
import Slider from '../components/Slider'
import "./Home.scss"
import FeaturedProduct from '../components/FeaturedProduct'
import Categories from '../components/Categories'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className='home'>
        
      
      <Slider/>
      
      <FeaturedProduct    type="Featured"   />
       <Categories/>
      <FeaturedProduct    type="Trending"   />
       <Contact/>
    </div>
  )
}
