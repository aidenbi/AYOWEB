import React from 'react'
import './Hours.css'

const Hours = () => {
  return (
    <div className="Hours" id="hours">
      <img className='SpanningImage' src="/spanningFood.svg" alt="Fresh asian meal" />
      <div className='HoursContainer'>
        <h1 className="Hours-heading">Hours</h1>
        <div className="Hours-columns">
          <div className="Hours-breakdown">
            <p className="Hours-paragraph">Monday</p>
            <p className="Hours-paragraph">Tuesday–Friday</p>
            <p className="Hours-paragraph">Saturday-Sunday</p>
          </div>
          <div>
            <p className="Hours-paragraph">Closed (holiday hours open)</p>
            <p className="Hours-paragraph">11am–10pm</p>
            <p className="Hours-paragraph">12pm–10pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hours