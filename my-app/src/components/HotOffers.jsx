/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import Card from './Card'
import {Swiper,SwiperSlide} from 'swiper/react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import{Navigation,Scrollbar,Autoplay} from "swiper/modules"
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCards, getAllIcons, getAllProduct } from '../ReduxTolkit/Slices';
import Bar from './Bar';
import Cards from './Cards';
import { HandleText } from '../utils/auther';

const HotOffers = () => {
    const {productData,BarData,cardData}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetAllCards())
    
      },[dispatch])
      const{path,setpath}=useContext(HandleText)
     
 
  return (
   <>
   
      <main>
      <h3>hot offers</h3>
      <Swiper slidesPerView={3.5} spaceBetween={20} loop={true} breakpoints={{
        300:{slidesPerView:1},
        500:{slidesPerView:1.2},
        600:{slidesPerView:1.5},
        800:{slidesPerView:1.8},
        1000:{slidesPerView:2.4},
        1200:{slidesPerView:2.8},
        1400:{slidesPerView:3.1},
        1500:{slidesPerView:3.5},
        1600:{slidesPerView:3.8},
        1750:{slidesPerView:4.2},

      }}>
        {cardData?.data?.map((Data,id)=><>
       
          <SwiperSlide key={id}>

       <Cards Dataicon={Data?.attributes} />
    </SwiperSlide>
    </>
        
        
        )}




    
      </Swiper>
      
   

    </main>
   
   
 


   
   
   </>
  )
}

export default HotOffers