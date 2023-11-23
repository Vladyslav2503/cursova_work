import { Rating } from '@mui/material'
import React, { useState } from 'react'
import "./Response.css"

const ResponseItem = (props) => {
  const { name, date, description, rating } = props.response;
  const topReviews = useState(0)
  return (
    <div>
      <div className='response-cart-all'>
        <div className='name' >{name}</div>
        <div className='response-cart'>
          <p style={{marginBottom: "20px", color: "#fff"}} > {description}</p>
          <span style={{color: "#fff"}} >{date}</span>
        </div>
        <div className='rating'><Rating name="half-rating" defaultValue={rating} precision={0.5} /></div>
        
      </div>
    </div>
  )
}

export default ResponseItem