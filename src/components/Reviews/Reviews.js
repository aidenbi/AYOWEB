import React from 'react'
import './Reviews.css'
import ReviewCarousel from './ReviewCarousel'

const Reviews = () => {
  return (
    <div className="Reviews" id="reviews">
      <h1 className="Reviews-title">SATISFACTION GUARANTEED!</h1>
      <ReviewCarousel></ReviewCarousel>
    </div>
  )
}

export default Reviews