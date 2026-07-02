import React from 'react'
import Image from 'next/image'
import MenuCarousel from './MenuCarousel'
import './Menu.css'

const Menu = () => {
  return (
    <div>
      <div className="Menu" id="menu">
        <Image
          className="Menu-left"
          src="/menu-left.svg"
          alt="Delicious Asian dishes"
          width={800}
          height={500}
        />
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