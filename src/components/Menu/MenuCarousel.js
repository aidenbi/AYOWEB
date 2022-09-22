import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                    <div className="card-wrapper">
                        <img className="menuImage" src={image1} />
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image2} />
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image3} />
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image4} />
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image5} />
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image5} />
                    </div>

                </Slider >
            </div >
        );
    }
}