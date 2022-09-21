import React from 'react'
import menuLeft from '../../images/menu-left.svg'
import menu from '../../images/menu.pdf'
import './Menu.css'


const Menu = () => {
  return (
    <div className="Menu" id="menu">
      <img className="Menu-left" src={menuLeft}></img>
      <div className="Menu-right">
        <div className="Menu-info">
          <h1 className="Menu-title">Menu</h1>
          <p className="Menu-paragraph">Lorem ipsum dolor sit amet. Et galisum tempore At esse odio rem beatae architecto qui galisum voluptas aut nulla molestiae ea commodi</p>
          <a href={menu} className="button">Full Menu</a>
        </div>
      </div>
    </div>
  )
}

export default Menu