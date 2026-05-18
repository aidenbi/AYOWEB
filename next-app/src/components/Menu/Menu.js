import React from 'react'
import MenuCarousel from './MenuCarousel'
import './Menu.css'

const Menu = () => {
  return (
    <div>
      <div className="Menu" id="menu">
        <img className="Menu-left" src="/menu-left.svg" alt="Delicious asian dishes" />
        <div className="Menu-right">
          <div className="Menu-info">
            <h1 className="Menu-title">Our Menu</h1>
            <p className="Menu-paragraph">From crispy appetizers to savory mains, our menu is made for sharing. Discover comforting classics and bold house specialties crafted fresh every day.</p>
            <a href="/menu.pdf" className="button">Browse Full Menu</a>
          </div>
        </div>
      </div>
      <MenuCarousel />
    </div>

  )
}

export default Menu