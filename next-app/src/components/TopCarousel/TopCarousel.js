'use client'
import React from 'react'
import Image from 'next/image'
import './TopCarousel.css'

const hero = {
  title: 'One bite after another',
  subtitle: 'Fresh, flavorful dishes inspired by authentic Asian recipes',
  image: '/main1.svg',
  primary: 'Full Menu',
  secondary: 'Call Now',
}

export default function TopCarousel() {
  return (
    <section className="TopHero" id="home">
      <div className="TopHero-image-wrapper">
        <Image className="Top-image" src={hero.image} alt={hero.title} width={1200} height={800} />
        <div className="hero-content">
          <div className="hero-label">Asian Yummy One</div>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-copy">{hero.subtitle}</p>
          <div className="hero-actions">
            <a href="/menu.pdf" className="hero-button">{hero.primary}</a>
            <a href="tel:+17054245555" className="hero-secondary">{hero.secondary}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
