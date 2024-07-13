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
import burgers from "../Pages/burger.png"
import chikens from "../Pages/cheken.png"
import offers from "../Pages/offers.png"
import drinks from "../Pages/drinks.png"
import dips from "../Pages/dips.png"
import app from "../Pages/appetizer.png"
import dessert from "../Pages/dessert.png"
import keto from "../Pages/keto.png"
import kids from "../Pages/kid.png"


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

      <img src={offers} alt="" />

  </div>

</Link>
<Link onClick={()=>{burgerref.current?.scrollIntoView()}} >

    <div className="photo-bar">

      <img src={burgers} alt="" />

  </div>

</Link>
<Link  onClick={()=>{chikenref.current?.scrollIntoView()}} >

    <div className="photo-bar">

      <img src={chikens}alt="" />

  </div>

</Link>
<Link onClick={()=>{kidsref.current?.scrollIntoView()}}>

    <div className="photo-bar">

      <img src={kids} alt="" />

  </div>

</Link>
<Link  onClick={()=>{drinkref.current?.scrollIntoView()}} >

    <div className="photo-bar">

      <img src={drinks}alt="" />

  </div>

</Link>
<Link  onClick={()=>{ketoref.current?.scrollIntoView()}}>

    <div className="photo-bar">

      <img src={keto} alt="" />

  </div>

</Link>
<Link  onClick={()=>{dipsref.current?.scrollIntoView()}}>

    <div className="photo-bar">

      <img src={dips} alt="" />

  </div>

</Link>
<Link  onClick={()=>{appref.current?.scrollIntoView()}}>

    <div className="photo-bar" >

      <img src={app} alt="" />

  </div>

</Link>

<Link  onClick={()=>{dessertref.current?.scrollIntoView()}}>
    <div className="photo-bar">

      <img src={dessert} alt="" />

  </div>

</Link>




    </div>

    



    </>
   
  )
}

export default Bar