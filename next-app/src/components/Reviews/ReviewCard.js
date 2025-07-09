import React from 'react'
import Rating from '@mui/material/Rating'

const ReviewCard = (props) => {
    const { image, name, review, value } = props
    return (
        <div className="Reviews-reviewcard">
            <div className="Reviews-metadata">
                <img className="Reviews-image" src={image}></img>
                <p className="Reviews-name">{name}</p>
            </div>
            <p className="Reviews-text">{review}</p>
            <div className="Reviews-rating">
                <Rating name="read-only" value={value} readOnly />
            </div>

        </div>
    )
}

export default ReviewCard