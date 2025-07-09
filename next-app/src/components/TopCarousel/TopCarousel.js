'use client'
import React, { Component } from 'react'
import './TopCarousel.css'
import topImage from '../../images/main1.svg'
import Slider from 'react-slick'




export default class TopCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className='article'>
                        <div className='header'>Asian Yummy One</div>
                        <img
                            className='Top-image' id='home' src={topImage}>
                        </img>
                    </div>
                    <div className='article'>
                        <div className='header'>Asian Yummy One</div>
                        <img
                            className='Top-image' id='home' src={topImage}>
                        </img>
                    </div>
                    <div className='article'>
                        <div className='header'>Asian Yummy One</div>
                        <img
                            className='Top-image' id='home' src={topImage}>
                        </img>
                    </div>
                </Slider>
            </div>
        );
    }
}