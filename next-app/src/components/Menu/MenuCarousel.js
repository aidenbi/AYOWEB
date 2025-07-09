'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCarouselCard from "./MenuCarouselCard";

import './Carousel.css';
import MenuItems from "./MenuItems";


export default class MenuCarousel extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 5,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        centerMode: true,
                    }
                }
            ]
        };

        return (
            <div className="menuCarouselContainer">
                <Slider {...settings}>
                    {MenuItems.map((item, idx) => {
                        return <MenuCarouselCard key={idx} image={item.image} text={item.text} />
                    })}
                </Slider >
            </div >
        );
    }
}