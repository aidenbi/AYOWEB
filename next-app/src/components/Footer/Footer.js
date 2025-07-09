import React from 'react'
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="footer-container" id="contact">



            <div className="text-on-image">
                <div className="grid-container">


                    <div className="grid-item footer-contact">
                        <div className="footer-contactinfo">
                            <div className="contact">CONTACT</div>
                            <div className="order">Order now at +1 (705)424-5555 for delivery!</div>
                            <a className="call-button" href="tel://+7054245555">CALL NOW</a>
                        </div>
                    </div>
                    <div className="grid-item footer-copyright">
                        <div className="icons">
                            <a href="https://www.facebook.com/people/Asian-Yummy-One/100057530585773/" target=" _blank"><FaFacebook /></a>
                            <a href="https://www.google.com/maps/place/Asian+Yummy+One/@44.3427906,-79.8581163,12z/data=!4m5!3m4!1s0x882a93c477cd4d71:0x84518a0e0c9daa17!8m2!3d44.3210233!4d-79.8858671"><SiGooglemaps /></a>
                        </div>

                        <div className="copyright">
                            Copyright ⓒ 2022 Asian Yummy One. All Rights Reserved<hr />

                        </div>
                    </div>
                    <div className="grid-item footer-phone">
                        <p className="phone-paragraph">+1(705)424 5555 &nbsp; 17 King St, Angus, ON L0M 1B0</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer