/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Cards = ({Dataicon}) => {
 
  return (
   <>
   <div className="cards-container">
    <div className="cards-photo">
        <img src={"http://localhost:1337"+Dataicon.img.data[0].attributes.url} alt="" />
    </div>
   </div>
  
 
   
   </>
  )
}

export default Cards