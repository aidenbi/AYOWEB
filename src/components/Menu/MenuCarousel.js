import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Carousel.css';

import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaTiktok, FaYelp } from 'react-icons/fa'

import image1 from '../Menu/foodImage/Rectangle2.svg'
import image2 from '../Menu/foodImage/Rectangle3.svg'
import image3 from '../Menu/foodImage/Rectangle4.svg'
import image4 from '../Menu/foodImage/Rectangle5.svg'
import image5 from '../Menu/foodImage/Rectangle6.svg'
import image6 from '../Menu/foodImage/Rectangle7.svg'


export default class MenuCarousel extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000
        };

        return (
            <div>
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

// <Slider {...sliderSettings}>
//             {foodieCards.map((card, index) => (
//                 <div className="card-wrapper">
//                     <div className="card">
//                         <div className="card-image" key={index}>
//                             <img alt={card.title} src={card.imageSrc} />
//                             <ul className="social-icons">
//                                 <li className="social-icons-list"> {card.socials[0]}</li>
//                                 <li > {card.socials[1]}</li>
//                                 <li >  {card.socials[2]}</li>
//                                 <li > {card.socials[3]}</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </Slider>
