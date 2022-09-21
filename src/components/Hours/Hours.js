import React from 'react'
import './Hours.css'

const Hours = () => {
  return (
    <div className="Hours" id="hours">
      <h1 className="Hours-heading">HOURS</h1>
      <div className="Hours-columns">
        <div className="Hours-breakdown">
          <p className="Hours-paragraph">Monday</p>
          <p className="Hours-paragraph">Tuesday-Thursday</p>
          <p className="Hours-paragraph">Friday</p>
          <p className="Hours-paragraph">Saturday</p>
          <p className="Hours-paragraph">Sunday</p>
        </div>
        <div>
          <p className="Hours-paragraph">Closed</p>
          <p className="Hours-paragraph">11am-10pm</p>
          <p className="Hours-paragraph">11am-11pm</p>
          <p className="Hours-paragraph">noon-11pm</p>
          <p className="Hours-paragraph">noon-10pm</p>
        </div>
      </div>
    </div>
  )
}

export default Hours