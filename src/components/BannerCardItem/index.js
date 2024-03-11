// Write your code here.
// src/components/BannerCardItem/index.js
import React from 'react'
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    
    <li className={`card ${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <h1 className="heading">{headerText}</h1>
        <h1 className="heading">{headerText}</h1>
        <p className="description">
          {description}
        </p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>

   )
}

export default BannerCardItem
