/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react';
import { HandleText } from '../utils/auther';
import HotOffers from './HotOffers';
import { useSelector } from 'react-redux';


const Bar = () => {
  const {path,setpath}=useContext(HandleText)  
  const {dessertref,kidsref,appref,drinkref,offersref,chikenref,burgerref,dipsref,ketoref}=useContext(HandleText)  
  const [fixed,setfixed]=useState(false)
  const {Burgerss,Offerss,cardData, productData}=useSelector((state)=>state.products)


  useEffect(()=>{
    window.onscroll=function() {
      
      if (window.scrollY>=450) {
       setfixed(true)
        
      }
      if (window.scrollY<=450) {
       setfixed(false)
        
      }
    }

  },[])
  
   
  


  

 
 
  return (
    <>
    <div className={`bar-container ${fixed?"fixed":""}`}>
    <Link onClick={()=>{offersref.current?.scrollIntoView()}} >
    
    <div className="photo-bar">

      <img src=".\src\Pages\offers.png" alt="" />

  </div>

</Link>
<Link onClick={()=>{burgerref.current?.scrollIntoView()}} >

    <div className="photo-bar">

      <img src=".\src\Pages\burger.png" alt="" />

  </div>

</Link>
<Link  onClick={()=>{chikenref.current?.scrollIntoView()}} >

    <div className="photo-bar">

      <img src=".\src\Pages\cheken.png"alt="" />

  </div>

</Link>
<Link onClick={()=>{kidsref.current?.scrollIntoView()}}>

    <div className="photo-bar">

      <img src=".\src\Pages\kid.png" alt="" />

  </div>

</Link>
<Link  onClick={()=>{drinkref.current?.scrollIntoView()}} >

    <div className="photo-bar">

      <img src=".\src\Pages\drinks.png" alt="" />

  </div>

</Link>
<Link  onClick={()=>{ketoref.current?.scrollIntoView()}}>

    <div className="photo-bar">

      <img src=".\src\Pages\keto.png" alt="" />

  </div>

</Link>
<Link  onClick={()=>{dipsref.current?.scrollIntoView()}}>

    <div className="photo-bar">

      <img src=".\src\Pages\dips.png" alt="" />

  </div>

</Link>
<Link  onClick={()=>{appref.current?.scrollIntoView()}}>

    <div className="photo-bar" >

      <img src=".\src\Pages\appetizer.png" alt="" />

  </div>

</Link>

<Link  onClick={()=>{dessertref.current?.scrollIntoView()}}>
    <div className="photo-bar">

      <img src=".\src\Pages\dessert.png" alt="" />

  </div>

</Link>




    </div>

    



    </>
   
  )
}

export default Bar