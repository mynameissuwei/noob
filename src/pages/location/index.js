import React from 'react'
import Isetan from '../resource/isetan.jpg'

import './index.less'

class location extends React.Component {
  render() {
    return(
      <div className='Lcontent'>
        <h1>RETAILERS</h1>
        <p>Our designs are featured in the following stores:</p>
        <h1>SINGAPORE</h1>
        <p>Isetan Scotts, Second Floor</p>
        <p>Shaw Centre, 350 Orchard Road, Singapore 238868</p>
        <p>Ph. +65 6733 1111</p>
        <p>STORE HOURS: 11am – 9pm</p>
        <img src={Isetan} alt="" />
      </div>
    )
  }
}

export default location