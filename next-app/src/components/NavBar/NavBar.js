'use client'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Hours', to: 'hours' },
  { label: 'Directions', to: 'directions' },
  { label: 'Menu', to: 'menu' },
  { label: 'Reviews', to: 'reviews' },
  { label: 'Contact', to: 'contact' },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="Nav-heading">
      <div className="Nav-container">
        <div className="Nav-brand">
          <Link className="logoLink" to="home" spy={true} offset={-100} duration={500}>
            <img src="/ayologo.png" alt="Asian Yummy One logo" />
          </Link>

          <button
            className={`Nav-hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className={`Nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to} className="Nav-link-item">
              <Link
                to={item.to}
                spy={true}
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="Nav-actions">
          <a className="Nav-cta" href="tel:+17054245555">Order Now</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
