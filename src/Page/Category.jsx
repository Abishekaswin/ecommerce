import React, { useState } from 'react'
import "./Category.scss"
import categoryimage from '../images/categoriedpic/pexels-photo-221342.jpeg'
import List from '../components/List'
import { useParams } from 'react-router-dom'
import useFetch from '../components/hooks/useFetch'
export default function Category() {


const catid =parseInt(useParams().id)  

const [maxprice , setmaxprice] =useState(1000)
const [sort ,setSort]=useState(null)
const[selectedSubCats ,setSelectedSubCats] =useState([])

const {data, loading,error}=useFetch(`/sub-categories?[filters][categories][id][$eq]=${catid}`)

const handleChange =(e)=>{
  const value =e.target.value;
  const isChecked =e.target.checked;
  setSelectedSubCats(isChecked 
    ?[...selectedSubCats , value]
    : selectedSubCats.filter((items)=>items !== value))

}
console.log(selectedSubCats)

  return (
    <div    className='category'     >
      <div className="left">
        <div className="produts">
          <h2>Product Categories</h2>
            {data?.map(items=>(
            <div className="inputItem">
            <input type="checkbox" value={items.id} id='1'  key={items.id} onChange ={handleChange}  />
            <label htmlFor="1">{items?.attributes.title }</label>
            </div>)
            )}
        </div>
        <div className="filter">
        <h2>Filter By price </h2>
        <div className="inputItem">
        <span>0</span>
        <input type="range" min={0} max={1000} onChange ={(e)=>setmaxprice(e.target.value)}           />
        <span>{maxprice}</span>
        </div>

        </div>
        <div className="sort">
          <h2>Sort by </h2>
          <div className="inputItem">
          <input type="radio" id='asc ' value="asc" name='price' onChange={e=>setSort('asc')}    />
          <label htmlFor="asc">Price(Lowest price)</label>
          </div>
          <div className="inputItem">
          <input type="radio" id='des ' value="des" name='price' onChange={e=>setSort('des')}   />
          <label htmlFor="des">Price(Highest price)</label>
          </div>
        </div>


      </div>
      <div className="right">
       <img src={categoryimage} alt="" className='categoryImage' />
        <List  catid ={catid}  maxprice={maxprice } sort={sort}  SubCats={selectedSubCats}    />
          


      </div>
     
    </div>
  )
}
