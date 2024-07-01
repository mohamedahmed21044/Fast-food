/* eslint-disable no-unused-vars */
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";

const Loading = () => {
  return (
   <>
    <div className="loader-section">
    <div className="loader-container">
        <div className="photo">
       < img src="..\public\Assets\Images\bull.png" alt="" />

        </div>
    
        <div className="icons">
          
        <div className='one'>
        <RiStarSFill className='left' />
        <IoIosArrowUp />
        </div>
        <div className='two'>
        <RiStarSFill className='right' />
        <IoIosArrowDown />


        </div>
       

        </div>
       
    </div>

    </div>
  
   
   
   
   
   </>
  )
}

export default Loading