import React from 'react'
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="footer-container" id="contact">
            <div className="grid-container">
                <div className="footer-contactinfo">
                    <div className="contact">CONTACT</div>
                    <div className="order">Order now for pickup or delivery in Angus. Fresh Asian favorites are ready when you are.</div>
                    <a className="call-button" href="tel:+17054245555">CALL NOW</a>
                </div>
                <div className="footer-details">
                    <p className="footer-address">17 King St, Angus, ON L0M 1B0</p>
                    <p className="phone-paragraph">+1 (705) 424-5555</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/people/Asian-Yummy-One/100057530585773/" target="_blank" rel="noreferrer noopener"><FaFacebook /></a>
                        <a href="https://www.google.com/maps/place/Asian+Yummy+One/@44.3427906,-79.8581163,12z/data=!4m5!3m4!1s0x882a93c477cd4d71:0x84518a0e0c9daa17!8m2!3d44.3210233!4d-79.8858671" target="_blank" rel="noreferrer noopener"><SiGooglemaps /></a>
                    </div>
                </div>
                <div className="footer-copy">
                    <p className="copyright">© 2026 Asian Yummy One. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer