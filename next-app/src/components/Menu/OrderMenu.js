'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { FiPlus } from 'react-icons/fi'
import './OrderMenu.css'

const menuSections = [
  {
    id: 'featured-items',
    title: 'Featured items',
    description: 'Popular dishes and best-sellers from our menu.',
    items: [
      { id: 'featured-general-tsos-sweet-sour', name: "C7. General Tso's Chicken (Spicy) & Sweet & Sour Chicken", description: 'Spicy General Tso paired with Sweet & Sour Chicken.', price: 12.75, image: '/Rectangle2.svg' },
      { id: 'featured-chicken-egg-noodle', name: '53. Chicken Egg Noodle', description: 'Stir-fried chicken with egg noodles and vegetables.', price: 11.5, image: '/Rectangle3.svg' },
      { id: 'featured-sweet-sour-chicken-ball', name: '24. Sweet & Sour Chicken Ball', description: 'Sweet and sour chicken ball served with rice.', price: 12.5, image: '/Rectangle4.svg' },
      { id: 'featured-chili-chicken', name: 'S20. Chili Chicken', description: 'Spicy chili chicken with vegetables.', price: 12.5, image: '/Rectangle5.svg' },
    ],
  },
  {
    id: 'combination-platters',
    title: 'Combination Platters',
    description: 'All platters served with chicken fried rice and 1 egg roll.',
    items: [
      { id: 'c1', name: 'C1. Sweet & Sour Spare Ribs / Chicken Chop Suey', description: 'Served with chicken fried rice and 1 egg roll.', price: 11.5, image: '/Rectangle6.svg' },
      { id: 'c2', name: 'C2. Sweet & Sour Shrimp / Chicken Chop Suey', description: 'Served with chicken fried rice and 1 egg roll.', price: 12.25, image: '/Rectangle7.svg' },
      { id: 'c3', name: 'C3. Deep Fried Chicken Wing / Chicken Chop Suey', description: 'Served with chicken fried rice and 1 egg roll.', price: 11.95, image: '/Rectangle2.svg' },
      { id: 'c4', name: 'C4. Sweet & Sour Chicken Ball / Chicken Chop Suey', description: 'Served with chicken fried rice and 1 egg roll.', price: 11.95, image: '/Rectangle3.svg' },
      { id: 'c5', name: 'C5. Lemon Chicken / Chicken Chop Suey', description: 'Served with chicken fried rice and 1 egg roll.', price: 11.95, image: '/Rectangle4.svg' },
      { id: 'c6', name: 'C6. Beef w/ Black Pepper Sauce / Sweet & Sour Chicken Ball', description: 'Served with chicken fried rice and 1 egg roll.', price: 12.75, image: '/Rectangle5.svg' },
      { id: 'c7', name: 'C7. General Tso\'s Chicken / Sweet & Sour Chicken', description: 'Served with chicken fried rice and 1 egg roll.', price: 12.75, image: '/Rectangle6.svg' },
      { id: 'c8', name: 'C8. Sesame Chicken / Sweet & Sour Spare Ribs', description: 'Served with chicken fried rice and 1 egg roll.', price: 11.95, image: '/Rectangle7.svg' },
      { id: 'c9', name: 'C9. Chili Chicken / Kung Pao Beef w/ Peanuts', description: 'Served with chicken fried rice and 1 egg roll.', price: 12.75, image: '/Rectangle2.svg' },
      { id: 'c10', name: 'C10. Chicken Chop Suey / General Tso\'s Chicken', description: 'Served with chicken fried rice and 1 egg roll.', price: 11.95, image: '/Rectangle3.svg' },
    ],
  },
  {
    id: 'special-diet-plates',
    title: 'Special Diet Plates',
    description: 'Steamed and lighter plates for the health-conscious diner.',
    items: [
      { id: 'steamed-mixed-vegetable-delight', name: 'Steamed Mixed Vegetable Delight', description: 'Steamed mixed vegetables.', price: 10.5, image: '/Rectangle4.svg' },
      { id: 'steamed-chicken-broccoli', name: 'Steamed Chicken Broccoli', description: 'Steamed chicken and broccoli.', price: 11.5, image: '/Rectangle5.svg' },
      { id: 'steamed-shrimp-broccoli', name: 'Steamed Shrimp w/ Broccoli', description: 'Steamed shrimp with broccoli.', price: 12.25, image: '/Rectangle6.svg' },
      { id: 'steamed-chicken-mixed-vegetables', name: 'Steamed Chicken w/ Mixed Vegetables', description: 'Steamed chicken with mixed vegetables.', price: 11.5, image: '/Rectangle7.svg' },
      { id: 'steamed-shrimp-chicken-mixed-vegetables', name: 'Steamed Shrimp & Chicken w/ Mixed Vegetables', description: 'Steamed shrimp and chicken with mixed vegetables.', price: 12.75, image: '/Rectangle2.svg' },
      { id: 'steamed-seafood-combination', name: 'Steamed Seafood Combination', description: 'Steamed seafood combination.', price: 16.95, image: '/Rectangle3.svg' },
    ],
  },
  {
    id: 'vegetarian-tofu',
    title: 'Vegetarian & Tofu',
    description: 'Vegetarian and tofu entrees with a variety of vegetable-based sauces.',
    items: [
      { id: '106-mixed-vegetable-delight', name: 'Mixed Vegetable Delight', description: 'Vegetarian entree with mixed vegetables.', price: 10.75, image: '/Rectangle6.svg' },
      { id: '107-mixed-vegetable-almond', name: 'Mixed Vegetable w/ Almond', description: 'Vegetarian entree with mixed vegetables and almonds.', price: 10.75, image: '/Rectangle7.svg' },
      { id: '108-mixed-vegetable-tofu', name: 'Mixed Vegetable w/ Tofu', description: 'Vegetarian entree with tofu and mixed vegetables.', price: 11.25, image: '/Rectangle2.svg' },
      { id: '109-fried-tofu-mixed-vegetable-almond', name: 'Fried Tofu w/ Mixed Vegetable & Almond', description: 'Fried tofu with mixed vegetables and almonds.', price: 11.25, image: '/Rectangle3.svg' },
      { id: '110-fried-tofu-chicken-mixed-vegetables', name: 'Fried Tofu w/ Chicken Mixed Vegetables', description: 'Fried tofu with chicken and mixed vegetables.', price: 12.25, image: '/Rectangle4.svg' },
      { id: '111-fried-tofu-roast-pork-mixed-vegetables', name: 'Fried Tofu w/ Roast Pork Mixed Vegetables', description: 'Fried tofu with roast pork and mixed vegetables.', price: 12.25, image: '/Rectangle5.svg' },
      { id: '112-fried-tofu-beef-mixed-vegetables', name: 'Fried Tofu w/ Beef Mixed Vegetables', description: 'Fried tofu with beef and mixed vegetables.', price: 12.25, image: '/Rectangle6.svg' },
      { id: '113-fried-tofu-black-bean-sauce', name: 'Fried Tofu w/ Black Bean Sauce', description: 'Fried tofu in black bean sauce.', price: 12.25, image: '/Rectangle7.svg' },
      { id: '114-fried-tofu-shrimp-mixed-vegetables', name: 'Fried Tofu w/ Shrimp Mixed Vegetables', description: 'Fried tofu with shrimp and mixed vegetables.', price: 14.95, image: '/Rectangle2.svg' },
      { id: '115-mapo-tofu', name: 'Mapo Tofu', description: 'Spicy tofu in a savory sauce.', price: 12.25, image: '/Rectangle3.svg' },
    ],
  },
  {
    id: 'take-out-party-special',
    title: 'Take-out Party Special',
    description: 'Any item upon request. Ask the kitchen for party special pricing.',
    items: [
      { id: 'party-chicken-fried-rice', name: 'Chicken Fried Rice', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle4.svg' },
      { id: 'party-fried-chicken-wings', name: 'Fried Chicken Wings', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle5.svg' },
      { id: 'party-general-tsos-chicken', name: 'General Tso\'s Chicken', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle6.svg' },
      { id: 'party-beef-and-broccoli', name: 'Beef and Broccoli', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle7.svg' },
      { id: 'party-shanghai-noodle', name: 'Shanghai Noodle', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle2.svg' },
      { id: 'party-sweet-sour-chicken-balls', name: 'Sweet & Sour Chicken Balls', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle3.svg' },
      { id: 'party-sesame-chicken', name: 'Sesame Chicken', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle4.svg' },
      { id: 'party-chicken-lo-mein', name: 'Chicken Lo Mein', description: 'Take-out party special item. Price upon request.', price: 13.95, image: '/Rectangle5.svg' },
    ],
  },
  {
    id: 'family-dinner',
    title: 'Family Dinner',
    description: 'Dinner sets for 2 to 10 people with egg rolls, mains, rice, and fortune cookies.',
    items: [
      { id: 'dinner-2a', name: 'Dinner for 2A', description: '2 egg rolls, sweet & sour spare ribs, chicken chop suey, chicken fried rice, 2 fortune cookies.', price: 32.5, image: '/Rectangle4.svg' },
      { id: 'dinner-2b', name: 'Dinner for 2B', description: '2 vegetable spring rolls, sweet & sour chicken ball, beef w/ black pepper sauce, chicken fried rice, 2 fortune cookies.', price: 37.5, image: '/Rectangle5.svg' },
      { id: 'dinner-3a', name: 'Dinner for 3A', description: '3 egg rolls, sweet & sour spare ribs, chicken chop suey, beef vegetables & almonds, chicken fried rice, 3 fortune cookies.', price: 44.95, image: '/Rectangle6.svg' },
      { id: 'dinner-3b', name: 'Dinner for 3B', description: '3 vegetable spring rolls, sweet & sour chicken balls, sesame chicken, beef w/ broccoli, chicken fried rice, 3 fortune cookies.', price: 51.8, image: '/Rectangle7.svg' },
      { id: 'dinner-4a', name: 'Dinner for 4A', description: '4 egg rolls, sweet & sour spare ribs, sesame chicken, chicken chop suey, beef w/ mixed vegetables, chicken fried rice, 4 fortune cookies.', price: 58.75, image: '/Rectangle2.svg' },
      { id: 'dinner-4b', name: 'Dinner for 4B', description: '4 vegetable spring rolls, sweet & sour chicken ball, deep fried chicken wings, Cantonese chow mein, beef w/ broccoli, chicken fried rice, 4 fortune cookies.', price: 66.5, image: '/Rectangle3.svg' },
      { id: 'dinner-5', name: 'Dinner for 5', description: '5 egg rolls, General Tso\'s Chicken, sweet & sour chicken ball, sweet & sour shrimp, chicken chop suey (L), tai doy (L), house fried rice (L), 5 fortune cookies.', price: 83.95, image: '/Rectangle4.svg' },
      { id: 'dinner-6', name: 'Dinner for 6', description: '6 egg rolls, deep fried chicken wing, sweet & sour chicken ball, sweet & sour shrimp, Szechuan beef (L), Cantonese chow mein, house fried rice (L), 6 fortune cookies.', price: 95.5, image: '/Rectangle5.svg' },
      { id: 'dinner-party', name: 'Party Dinner (8 to 10 people)', description: '10 egg rolls, sweet & sour chicken balls, sweet & sour jumbo shrimp, sesame chicken balls, sesame chicken, honey garlic spareribs (L), Cantonese chow mein, beef w/ broccoli (L), house special lo mein, mixed vegetable w/ almonds (L).', price: 142.9, image: '/Rectangle6.svg' },
    ],
  },
  {
    id: 'appetizers',
    title: 'Appetizers',
    description: 'Perfect starters for sharing.',
    items: [
      { id: 'appetizer-vegetable-spring-rolls', name: 'Vegetable Spring Rolls', description: 'Crispy vegetable spring rolls.', price: 6.5, image: '/Rectangle4.svg' },
      { id: 'appetizer-crab-rangoon', name: 'Crab Rangoon', description: 'Creamy crab-filled wontons with sweet chili sauce.', price: 7.95, image: '/Rectangle5.svg' },
    ],
  },
  {
    id: 'soup',
    title: 'Soup',
    description: 'Warm bowls to start your meal off right.',
    items: [
      { id: 'soup-wonton', name: 'Wonton Soup', description: 'Pork wontons in savory broth.', price: 6.95, image: '/Rectangle2.svg' },
      { id: 'soup-hot-sour', name: 'Hot & Sour Soup', description: 'Spicy and tangy soup with tofu and vegetables.', price: 7.25, image: '/Rectangle3.svg' },
    ],
  },
  {
    id: 'sweet-sour',
    title: 'Sweet & Sour',
    description: 'Classic sweet and tangy entrees.',
    items: [
      { id: 'sweet-sour-chicken-ball', name: 'Sweet & Sour Chicken Ball', description: 'Golden chicken balls in sweet and sour sauce.', price: 12.5, image: '/Rectangle5.svg' },
      { id: 'sweet-sour-shrimp', name: 'Sweet & Sour Shrimp', description: 'Shrimp in sweet and sour sauce.', price: 13.95, image: '/Rectangle6.svg' },
    ],
  },
  {
    id: 'fried-rice',
    title: 'Fried Rice',
    description: 'Hearty fried rice dishes with your choice of protein.',
    items: [
      { id: 'pork-fried-rice', name: 'Pork Fried Rice', description: 'Stir-fried rice with pork, egg, and scallions.', price: 12.25, image: '/Rectangle2.svg' },
      { id: 'shrimp-fried-rice', name: 'Shrimp Fried Rice', description: 'Fried rice with shrimp, egg, and vegetables.', price: 13.45, image: '/Rectangle4.svg' },
    ],
  },
  {
    id: 'chop-suey',
    title: 'Chop Suey',
    description: 'Stir-fried vegetables with your choice of protein.',
    items: [
      { id: 'chicken-chop-suey', name: 'Chicken Chop Suey', description: 'Chicken with mixed vegetables in a savory sauce.', price: 13.5, image: '/Rectangle5.svg' },
      { id: 'beef-chop-suey', name: 'Beef Chop Suey', description: 'Beef with mixed vegetables and sauce.', price: 14.25, image: '/Rectangle6.svg' },
    ],
  },
  {
    id: 'lo-mein',
    title: 'Lo Mein',
    description: 'Soft noodles stir-fried with vegetables and sauce.',
    items: [
      { id: 'chicken-lo-mein', name: 'Chicken Lo Mein', description: 'Soft noodles with chicken and vegetables.', price: 13.75, image: '/Rectangle2.svg' },
      { id: 'vegetable-lo-mein', name: 'Vegetable Lo Mein', description: 'Lo mein noodles with mixed vegetables.', price: 12.95, image: '/Rectangle4.svg' },
    ],
  },
  {
    id: 'cantonese-egg-noodle',
    title: 'Cantonese Egg Noodle',
    description: 'Egg noodles cooked in Cantonese-style sauce.',
    items: [
      { id: 'shrimp-cantonese-egg-noodle', name: 'Shrimp Cantonese Egg Noodle', description: 'Egg noodles with shrimp and vegetables.', price: 14.95, image: '/Rectangle5.svg' },
      { id: 'beef-cantonese-egg-noodle', name: 'Beef Cantonese Egg Noodle', description: 'Egg noodles with beef and vegetables.', price: 15.25, image: '/Rectangle6.svg' },
    ],
  },
  {
    id: 'rice-noodle-ho-feng',
    title: 'Rice Noodle & Ho Feng',
    description: 'Wide rice noodles in savory ho feng sauce.',
    items: [
      { id: 'house-rice-noodle', name: 'House Rice Noodle', description: 'Wide rice noodles with mixed vegetables.', price: 13.95, image: '/Rectangle2.svg' },
      { id: 'seafood-ho-feng', name: 'Seafood Ho Feng', description: 'Rice noodles with shrimp and scallops.', price: 15.5, image: '/Rectangle4.svg' },
    ],
  },
  {
    id: 'curry-dish',
    title: 'Curry Dish',
    description: 'Fragrant curry entrees with your choice of protein.',
    items: [
      { id: 'curry-vegetable', name: 'Curry Vegetable', description: 'Mixed vegetables simmered in curry sauce.', price: 11.25, image: '/Rectangle3.svg' },
      { id: 'curry-chicken', name: 'Curry Chicken', description: 'Chicken in a rich curry sauce.', price: 12.5, image: '/Rectangle5.svg' },
    ],
  },
  {
    id: 'chicken',
    title: 'Chicken',
    description: 'Chicken specialties with bold sauces and fresh vegetables.',
    items: [
      { id: 'lemon-chicken', name: 'Lemon Chicken', description: 'Crispy chicken with lemon sauce.', price: 12.95, image: '/Rectangle2.svg' },
      { id: 'kung-pao-chicken', name: 'Kung Pao Chicken w/ Peanuts', description: 'Spicy chicken with peanuts.', price: 12.95, image: '/Rectangle4.svg' },
    ],
  },
  {
    id: 'roast-pork',
    title: 'Roast Pork',
    description: 'Savory roast pork dishes with vegetables and sauce.',
    items: [
      { id: 'roast-pork-broccoli', name: 'Roast Pork w/ Broccoli', description: 'Roast pork with broccoli in brown sauce.', price: 11.5, image: '/Rectangle2.svg' },
      { id: 'kung-pao-roast-pork', name: 'Kung Pao Roast Pork w/ Peanuts', description: 'Roast pork with peanuts and a touch of spice.', price: 11.75, image: '/Rectangle4.svg' },
    ],
  },
  {
    id: 'beef',
    title: 'Beef',
    description: 'Beef dishes cooked with fresh vegetables and savory sauce.',
    items: [
      { id: 'beef-broccoli', name: 'Beef w/ Broccoli', description: 'Tender beef with broccoli.', price: 11.5, image: '/Rectangle2.svg' },
      { id: 'beef-black-pepper', name: 'Beef w/ Black Pepper Sauce', description: 'Beef in bold black pepper sauce.', price: 12.5, image: '/Rectangle4.svg' },
    ],
  },
  {
    id: 'seafood',
    title: 'Seafood',
    description: 'Fresh seafood entrees with shrimp and scallops.',
    items: [
      { id: 'shrimp-broccoli', name: 'Shrimp w/ Broccoli', description: 'Shrimp with broccoli in garlic sauce.', price: 12.25, image: '/Rectangle2.svg' },
      { id: 'seafood-delight', name: 'Seafood Delight', description: 'Seafood combination with scallops and shrimp.', price: 15.95, image: '/Rectangle5.svg' },
    ],
  },
  {
    id: 'egg-foo-young',
    title: 'Egg Foo Young',
    description: 'Egg patties served with gravy and vegetables.',
    items: [
      { id: 'chicken-egg-foo-young', name: 'Chicken Egg Foo Young', description: 'Chicken egg patty with gravy.', price: 12.75, image: '/Rectangle2.svg' },
      { id: 'house-egg-foo-young', name: 'House Egg Foo Young', description: 'Shrimp, chicken, pork, and beef egg patty.', price: 13.95, image: '/Rectangle4.svg' },
    ],
  },
  {
    id: 'specialties',
    title: 'Specialties',
    description: 'Chef specialties and house favorites.',
    items: [
      { id: 'specialty-mapo-tofu', name: 'Mapo Tofu', description: 'Spicy tofu in savory sauce.', price: 12.25, image: '/Rectangle3.svg' },
    ],
  },
  {
    id: 'beverage',
    title: 'Beverage',
    description: 'Cold and hot beverages to complete your meal.',
    items: [
      { id: 'beverage-soft-drink', name: 'Soft Drink', description: 'Choose from cola, lemon-lime, or orange.', price: 2.5, image: '/Rectangle2.svg' },
    ],
  },
  {
    id: 'sauces',
    title: 'Sauces',
    description: 'Sauces and condiments to customize your order.',
    items: [
      { id: 'sauce-sweet-chili', name: 'Sweet Chili Sauce', description: 'A sweet and spicy dipping sauce.', price: 1.5, image: '/Rectangle3.svg' },
    ],
  },
]

const allMenuItems = menuSections.flatMap((section) => section.items)

const OrderMenu = () => {
  const [cartItems, setCartItems] = useState([])
  const notes = {}
  const [deliveryMode, setDeliveryMode] = useState('pickup')
  const [activeCategory, setActiveCategory] = useState(menuSections[0].id)
  const [itemQuantities, setItemQuantities] = useState(() =>
    Object.fromEntries(allMenuItems.map((item) => [item.id, 1]))
  )

  const addToCart = (item) => {
    setCartItems((current) => {
      const existing = current.find((entry) => entry.id === item.id)
      const noteValue = notes[item.id] || ''
      const quantityToAdd = Math.max(1, itemQuantities[item.id] || 1)

      if (existing) {
        return current.map((entry) =>
          entry.id === item.id
            ? {
                ...entry,
                quantity: entry.quantity + quantityToAdd,
                note: noteValue || entry.note || '',
              }
            : entry
        )
      }

      return [...current, { ...item, quantity: quantityToAdd, note: noteValue }]
    })
  }

  const updateItemQuantity = (itemId, delta) => {
    setItemQuantities((current) => ({
      ...current,
      [itemId]: Math.max(1, (current[itemId] || 1) + delta),
    }))
  }

  const updateQuantity = (itemId, delta) => {
    setCartItems((current) =>
      current
        .map((entry) =>
          entry.id === itemId
            ? { ...entry, quantity: Math.max(0, entry.quantity + delta) }
            : entry
        )
        .filter((entry) => entry.quantity > 0)
    )
  }

  const updateCartNote = (itemId, value) => {
    setCartItems((current) =>
      current.map((entry) =>
        entry.id === itemId ? { ...entry, note: value } : entry
      )
    )
  }

  const removeCartItem = (itemId) => {
    setCartItems((current) => current.filter((entry) => entry.id !== itemId))
  }

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      return undefined
    }

    const sections = Array.from(document.querySelectorAll('.menu-section'))

    if (sections.length === 0) {
      return undefined
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveCategory(visibleEntry.target.id)
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-20% 0px -40% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleCategorySelect = (sectionId) => {
    setActiveCategory(sectionId)

    if (typeof document !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )

  const serviceLabel = deliveryMode === 'delivery' ? 'Delivery' : 'Pickup'

  return (
    <section className="order-menu" id="order-menu">
      <div className="order-menu-header">
        <div>
          <h2>Order Online</h2>
          <p>Browse our menu, add items to your cart, and specify how you want your food prepared.</p>
        </div>
      </div>

      <div className="restaurant-summary">
        <div className="restaurant-copy">
          <p className="eyebrow">Asian Yummy One</p>
          <h3>Fresh favorites for quick pickup or doorstep delivery</h3>
          <p>
            From crispy classics to comforting noodles, our kitchen is ready to serve Angus with fast,
            friendly service.
          </p>
        </div>
        <div className="restaurant-meta">
          <div>
            <span>Address</span>
            <strong>123 Main Street, Angus</strong>
          </div>
          <div>
            <span>Phone</span>
            <strong>(705) 424-5555</strong>
          </div>
          <div>
            <span>Hours</span>
            <strong>Mon-Sun • 11am-10pm</strong>
          </div>
        </div>
      </div>

      <div className="service-selector" role="group" aria-label="Choose a pickup or delivery option">
        <button
          type="button"
          className={`service-button ${deliveryMode === 'pickup' ? 'active' : ''}`}
          onClick={() => setDeliveryMode('pickup')}
        >
          Pickup
        </button>
        <button
          type="button"
          className={`service-button ${deliveryMode === 'delivery' ? 'active' : ''}`}
          onClick={() => setDeliveryMode('delivery')}
        >
          Delivery
        </button>
      </div>

      <div className="order-menu-layout">
        <aside className="category-sidebar">
          <div className="category-sidebar-inner">
            <p className="category-sidebar-title">Menu categories</p>
            <nav className="category-list" aria-label="Menu categories">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`category-link ${activeCategory === section.id ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="menu-panel">
          <div className="service-selector" role="group" aria-label="Choose a pickup or delivery option">
            <button
              type="button"
              className={`service-button ${deliveryMode === 'pickup' ? 'active' : ''}`}
              onClick={() => setDeliveryMode('pickup')}
            >
              Pickup
            </button>
            <button
              type="button"
              className={`service-button ${deliveryMode === 'delivery' ? 'active' : ''}`}
              onClick={() => setDeliveryMode('delivery')}
            >
              Delivery
            </button>
          </div>

          {menuSections.map((section) => (
            <section key={section.id} id={section.id} className="menu-section">
              <div className="menu-section-header">
                <div>
                  <p className="menu-section-eyebrow">{section.title}</p>
                  <h3>{section.title}</h3>
                </div>
                <span>{section.items.length} options</span>
              </div>
              <p className="menu-section-description">{section.description}</p>
              <div className={`menu-section-items ${section.id === 'featured-items' ? 'featured-items-grid' : 'horizontal-items-grid'}`}>
                {section.items.map((item) => (
                  <article
                    key={item.id}
                    className={`menu-item-card ${section.id === 'featured-items' ? 'featured' : 'horizontal'}`}
                  >
                    <div className={`menu-item-image ${section.id !== 'featured-items' ? 'horizontal' : ''}`}>
                      <Image src={item.image} alt={item.name} width={320} height={240} />
                      <button type="button" className="card-add-button" onClick={() => addToCart(item)}>
                        <FiPlus />
                      </button>
                    </div>
                    <div className="menu-item-body">
                      <div className="menu-item-title-row">
                        <div>
                          <h3>{item.name}</h3>
                          <p className="menu-item-subtitle">{item.description}</p>
                        </div>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                      <div className="menu-item-actions">
                        <div className="menu-item-quantity" aria-label={`Quantity for ${item.name}`}>
                          <button type="button" onClick={() => updateItemQuantity(item.id, -1)}>
                            −
                          </button>
                          <span>{itemQuantities[item.id] || 1}</span>
                          <button type="button" onClick={() => updateItemQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>
                        <button type="button" className="add-button" onClick={() => addToCart(item)}>
                          Add {itemQuantities[item.id] || 1}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="cart-panel">
          <div className="cart-header">
            <div>
              <span className="cart-service-badge">{serviceLabel}</span>
              <h3>Your Cart</h3>
            </div>
            <span>{cartItems.length} item{cartItems.length === 1 ? '' : 's'}</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty. Add items from the menu to begin.</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((entry) => (
                <div key={entry.id} className="cart-item">
                  <div className="cart-item-top">
                    <div>
                      <h4>{entry.name}</h4>
                      <span>${entry.price.toFixed(2)}</span>
                    </div>
                    <button type="button" className="remove-button" onClick={() => removeCartItem(entry.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-control">
                      <button type="button" onClick={() => updateQuantity(entry.id, -1)}>-</button>
                      <span>{entry.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(entry.id, 1)}>+</button>
                    </div>
                    <div className="cart-item-subtotal">
                      ${(entry.price * entry.quantity).toFixed(2)}
                    </div>
                  </div>
                  <label className="note-label" htmlFor={`cart-note-${entry.id}`}>
                    Preparation notes
                  </label>
                  <textarea
                    id={`cart-note-${entry.id}`}
                    value={entry.note || ''}
                    onChange={(event) => updateCartNote(entry.id, event.target.value)}
                    placeholder="Add or update your request"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="cart-summary">
            <div className="summary-row">
              <span>Service</span>
              <strong>{serviceLabel}</strong>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <p className="summary-text">
              {serviceLabel === 'Delivery'
                ? 'Your delivery order will be prepared fresh and sent to your door.'
                : 'Your pickup order will be ready for quick collection at the restaurant.'}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default OrderMenu
