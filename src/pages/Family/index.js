import React from 'react'
import Avator from '../resource/Avator.png'
import './index.less'

class Family extends React.Component {
  render() {
    return(
      <div className="containerFamily">
        <div className="header">
          <img src={Avator} alt=""/>
        </div>
        <div className="content">
          <h1>HI,I'M NooB</h1>
          <p>I design,build and beautify the artwork of handmade article of all sizes.</p>
			  </div>
      </div>
    )
  }
}

export default Family