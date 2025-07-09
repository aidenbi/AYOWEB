import React from 'react'
import MenuCarousel from './MenuCarousel'
import './Menu.css'

const Menu = () => {
  return (
    <div>
      <div className="Menu" id="menu">
        <img className="Menu-left" src="/menu-left.svg"></img>
        <div className="Menu-right">
          <div className="Menu-info">
            <h1 className="Menu-title">Menu</h1>
            <p className="Menu-paragraph">Lorem ipsum dolor sit amet. Et galisum tempore At esse odio rem beatae architecto qui galisum voluptas aut nulla molestiae ea commodi</p>
            <a href="/menu.pdf" className="button">Full Menu</a>
          </div>
        </div>
      </div>
      <MenuCarousel>
      </MenuCarousel>
    </div>

  )
}

export default Menu