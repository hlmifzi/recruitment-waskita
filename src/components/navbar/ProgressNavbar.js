import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo-waskita.png'

const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}

const ProgressNavbar = props => {
  const [active, setActive] = useState('statistik');

  return (
    <>
      <div className="wrapper-progress-tab d-flex">
        <div className="progress-tab">
          <img src={logo} style={{backgroundColor: "#1F9CD7"}}/>
          <span className="progress-bar" style={{backgroundColor: "#1F9CD7"}}></span>
          <p className="text-center">How to download your Social Media</p>
        </div>
        <div className="progress-tab">
          <img src={logo}/>
          <span className="progress-bar"></span>
          <p className="text-center">CTS - Online Test <br/> 1 - 2</p>
        </div>
        <div className="progress-tab">
          <img src={logo}/>
          <span className="progress-bar"></span>
          <p className="text-center">Upload your <br/> Social Media Information</p>
        </div>
        <div className="progress-tab">
          <img src={logo}/>
          <span className="progress-bar"></span>
          <p className="text-center">CTS - Online Test <br/> 3</p>
        </div>
        <div className="progress-tab">
          <img src={logo}/>
          <p className="text-center">Finish</p>
        </div>
      </div>
    </>
  )
}


ProgressNavbar.propTypes = PropTypesParams
ProgressNavbar.defaultProps = DefaultPropsParams

export default ProgressNavbar