import React from 'react'
import Pic1 from '../resource/pro1.jpg' 
import Pic2 from '../resource/pro2.jpg'
import './index.less'

class Production extends React.Component {
  render() {
    return(
      <div>
        <h1>Production</h1>
        <div className='pro'>
          <div>
            <img src={Pic1} alt="" />
            <p>treasure</p>
          </div>
          <div>
            <img src={Pic2} alt="" />
            <p>artwork </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Production