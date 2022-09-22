import React from 'react'
import './TopCarousel.css'
import topImage from '../../images/main1.svg'

const TopCarousel = () => {
    return (
        <div className='article' >
            <div className='header'>Asian Yummy One</div>
            <img className='Top-image' id='home' src={topImage}></img>

        </div>
    )
}

export default TopCarousel