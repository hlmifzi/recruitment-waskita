import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ctsIcon from '../../assets/cts-online.svg'
import finish from '../../assets/finish.svg'
import downloadIcon from '../../assets/how-to-download.svg'

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
          <div style={{backgroundColor: "#1F9CD7"}}>
            <img src={downloadIcon}/>
          </div>
          <span className="progress-bar" style={{backgroundColor: "#1F9CD7"}}></span>
          <p className="text-center">How to download your Social Media</p>
        </div>
        <div className="progress-tab">
          <div>
            <img src={ctsIcon}/>
          </div>
          <span className="progress-bar"></span>
          <p className="text-center">CTS - Online Test <br/> 1 - 2</p>
        </div>
        <div className="progress-tab">
          <div>
            <img src={downloadIcon}/>
          </div>
          <span className="progress-bar"></span>
          <p className="text-center">Upload your <br/> Social Media Information</p>
        </div>
        <div className="progress-tab">
          <div>
            <img src={ctsIcon}/>
          </div>
          <span className="progress-bar"></span>
          <p className="text-center">CTS - Online Test <br/> 3</p>
        </div>
        <div className="progress-tab">
          <div>
            <img src={finish}/>
          </div>
          <p className="text-center">Finish</p>
        </div>
      </div>
    </>
  )
}


ProgressNavbar.propTypes = PropTypesParams
ProgressNavbar.defaultProps = DefaultPropsParams

export default ProgressNavbar