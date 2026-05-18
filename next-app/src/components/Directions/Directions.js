import React from 'react'
import './Directions.css';
const Directions = () => {
  return (
    <div className="Directions" id="directions">
      <div className="row">
        <div className='column'>
          <div className='location'>
            LOCATION & DELIVERY
          </div>
          <div className='textbox'>
            Call +1 (705) 424-5555 to order pickup or delivery. We serve Angus and nearby neighborhoods with fast, fresh meals every day.
          </div>
        </div>
        <div className='column'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11417.841277406687!2d-79.8857683!3d44.3210441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84518a0e0c9daa17!2sAsian%20Yummy%20One!5e0!3m2!1sen!2sus!4v1663815270001!5m2!1sen!2sus"
            width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Asian Yummy One location map">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Directions