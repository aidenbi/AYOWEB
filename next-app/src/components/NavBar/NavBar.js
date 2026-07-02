'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Hours', href: '/#hours' },
  { label: 'Directions', href: '/#directions' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
]

const ORDER_REDIRECT_URL = 'https://www.order.store/ca/store/asian-yummy-one/8Sp7qjGqXpiQo5HXfF043g?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE1JTIwRnJhc2VyJTIwU3QlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjIyYTIzYzRlOC1hMjc2LTAyYjUtZjUyMi1lYjZmMWRjYzk1MTQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQ0LjMxODAwNDglMkMlMjJsb25naXR1ZGUlMjIlM0EtNzkuODg0NTE1OCU3RA%3D%3D'

const NavBar = ({ orderPageEnabled = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  const orderHref = orderPageEnabled ? '/order' : ORDER_REDIRECT_URL

  return (
    <nav
      className="Nav-heading"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        background: 'rgba(242, 239, 229, 0.98)',
        borderBottom: '1px solid rgba(121, 118, 92, 0.12)',
        boxShadow: '0 12px 20px rgba(75, 71, 54, 0.08)',
      }}
    >
      <div className="Nav-container">
        <div className="Nav-brand">
          <Link className="logoLink" href="/">
            <Image src="/ayologo.png" alt="Asian Yummy One logo" width={48} height={48} />
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
            <li key={item.href} className="Nav-link-item">
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="Nav-actions">
          <Link className="Nav-cta" href={orderHref}>
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
