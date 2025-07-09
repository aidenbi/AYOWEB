'use client'
import React from 'react'
import { Link } from 'react-scroll'
import logo from '../../images/ayologo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="Nav-heading">
            <li className="Nav-heading-elements">
                <Link to="about" spy={true} offset={-100} duration={500}>About</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="hours" spy={true} offset={-100} duration={500}>Hours</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="directions" spy={true} offset={-100} duration={500}>Directions</Link>
            </li>
            <Link style={{ opacity: "100%" }} to="home" spy={true} offset={-100} duration={500}><img className="logoLink" src={logo} /></Link>
            <li className="Nav-heading-elements">
                <Link to="menu" spy={true} offset={-100} duration={500}>Menu</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="reviews" spy={true} offset={-100} duration={500}>Reviews</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="contact" spy={true} offset={-100} duration={500}>Contact</Link>
            </li>
        </div>
    )
}

export default NavBar
