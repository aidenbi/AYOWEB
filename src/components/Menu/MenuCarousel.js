import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCarouselCard from "./MenuCarouselCard";

import './Carousel.css';

import image1 from '../Menu/foodImage/Rectangle2.svg'
import image2 from '../Menu/foodImage/Rectangle3.svg'
import image3 from '../Menu/foodImage/Rectangle4.svg'
import image4 from '../Menu/foodImage/Rectangle5.svg'
import image5 from '../Menu/foodImage/Rectangle6.svg'


export default class MenuCarousel extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 1500
        };

        return (
            <div className="menuCarouselContainer">
                <Slider {...settings}>
                    <MenuCarouselCard image={image1} />
                    <MenuCarouselCard image={image1} />
                    <MenuCarouselCard image={image3} />
                    <MenuCarouselCard image={image4} />
                    <MenuCarouselCard image={image4} />
                    <MenuCarouselCard image={image3} />

                </Slider >
            </div >
        );
    }
}