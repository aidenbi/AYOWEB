import React from 'react'
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import topImage from '../../images/main1.svg';

const Footer = () => {
    return (
        <div>
            <img className='bottom-image' src={topImage}></img>

            <div class="text-on-image">
                <div className="grid-container">


                    <div className="grid-item footer-contact">
                        <h4>CONTACT</h4>
                    </div>
                    <div className="grid-item footer-order">
                        <p>Order now at +1 (705)424-5555 for delivery!</p>
                        <div className="grid-item footer-call">
                            <button style={{ backgroundColor: "#898B61" }}>
                                <a href="tel://+7054245555">CALL NOW</a>
                            </button>
                        </div>
                    </div>
                    <div className="grid-item footer-icons">
                        <h3>
                            <a href="https://www.facebook.com/people/Asian-Yummy-One/100057530585773/"><FaFacebook /></a>&nbsp;
                            <a href="https://www.google.com/maps/place/Asian+Yummy+One/@44.3427906,-79.8581163,12z/data=!4m5!3m4!1s0x882a93c477cd4d71:0x84518a0e0c9daa17!8m2!3d44.3210233!4d-79.8858671"><SiGooglemaps /></a>
                        </h3>
                    </div>
                    <div className="grid-item footer-phone">

                        <p>+1(705)424 5555 &nbsp; 17 King St, Angus, ON L0M 1B0<hr /></p>

                    </div>
                    <div className="grid-item footer-address">
                        <p>Copyright ⓒ 2022 Asian Yummy One. All Rights Reserved<hr /></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer