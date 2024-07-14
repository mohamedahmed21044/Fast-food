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
      <Swiper slidesPerView={9} spaceBetween={25} breakpoints={{
           300:{slidesPerView:1.2},
           400:{slidesPerView:1.4},
           500:{slidesPerView:1.8},
           600:{slidesPerView:4.5},
           700:{slidesPerView:2.5},
           800:{slidesPerView:2.9},
           900:{slidesPerView:2.1},
           1050:{slidesPerView:2.5},
           1180:{slidesPerView:2.6},
           1300:{slidesPerView:3},
           1400:{slidesPerView:3.3},
           1550:{slidesPerView:3.5},
           1650:{slidesPerView:3.9},
           1850:{slidesPerView:4.1},
           1950:{slidesPerView:4.3},
           2100:{slidesPerView:4.9},

      }} >
        <SwiperSlide >
        <Link onClick={()=>{offersref.current?.scrollIntoView()}} >
    
    <div className="photo-bar">

      <img src={offers} alt="" />

  </div>

</Link>

        </SwiperSlide>
        <SwiperSlide>
        <Link onClick={()=>{burgerref.current?.scrollIntoView()}} >

<div className="photo-bar">

  <img src={burgers} alt="" />

</div>

</Link>


        </SwiperSlide>
        <SwiperSlide>
           <Link  onClick={()=>{chikenref.current?.scrollIntoView()}} >

<div className="photo-bar">

  <img src={chikens}alt="" />

</div>

</Link>
        </SwiperSlide>
        <SwiperSlide>
           <Link onClick={()=>{kidsref.current?.scrollIntoView()}}>

<div className="photo-bar">

  <img src={kids} alt="" />

</div>

</Link>


        </SwiperSlide>
        <SwiperSlide>

<Link  onClick={()=>{drinkref.current?.scrollIntoView()}} >

<div className="photo-bar">

  <img src={drinks}alt="" />

</div>

</Link>
        </SwiperSlide>
        <SwiperSlide>
         <Link  onClick={()=>{ketoref.current?.scrollIntoView()}}>

 <div className="photo-bar">

  <img src={keto} alt="" />

 </div>

</Link>
          
        </SwiperSlide>
        <SwiperSlide>
         <Link  onClick={()=>{dipsref.current?.scrollIntoView()}}>

 <div className="photo-bar">

  <img src={dips} alt="" />

 </div>

 </Link>

        </SwiperSlide>
        <SwiperSlide>
          
 <Link  onClick={()=>{appref.current?.scrollIntoView()}}>
 <div className="photo-bar" >

  <img src={app} alt="" />

 </div>

 </Link>

        </SwiperSlide>
        <SwiperSlide>
          
 <Link  onClick={()=>{dessertref.current?.scrollIntoView()}}>
 <div className="photo-bar">

  <img src={dessert} alt="" />

 </div>

 </Link> 
        </SwiperSlide>

   










      </Swiper>
   



    </div>

    



    </>
   
  )
}

export default Bar