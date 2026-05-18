import React from 'react'
import './Reviews.css'
import ReviewCarousel from './ReviewCarousel'

const Reviews = () => {
  return (
    <div className="Reviews" id="reviews">
      <div className="Reviews-intro">
        <h1 className="Reviews-title">What Guests Are Saying</h1>
        <p className="Reviews-subtitle">Our customers keep coming back for the crisp flavors, generous portions, and fast local delivery.</p>
      </div>
      <ReviewCarousel />
    </div>
  )
}

export default Reviews