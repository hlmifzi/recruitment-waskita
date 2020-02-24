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

const ProgressNavbar = ({ currentStep }) => {
  const [active, setActive] = useState(1);
  useEffect(() => {
    setActive(currentStep)

  }, [currentStep])
  return (
    <>
      <div className="wrapper-progress-tab d-flex">
        <div className="progress-tab">
          <div className={`${active >= 1 && 'color-1F9CD7'}`}>
            <img src={downloadIcon} />
          </div>
          <span className={`progress-bar ${active >= 1 && 'color-1F9CD7'}`}></span>
          <p className="text-center">How to download your Social Media</p>
        </div>
        <div className="progress-tab">
          <div className={`${active >= 2 && 'color-1F9CD7'}`}>
            <img src={ctsIcon} />
          </div>
          <span className={`progress-bar ${active >= 2 && 'color-1F9CD7'}`}></span>
          <p className="text-center">CTS - Online Test <br /> 1 - 2</p>
        </div>
        <div className="progress-tab">
          <div className={`${active >= 5 && 'color-1F9CD7'}`}>
            <img src={downloadIcon} />
          </div>
          <span className={`progress-bar ${active >= 5 && 'color-1F9CD7'}`}></span>
          <p className="text-center">Upload your <br /> Social Media Information</p>
        </div>
        <div className="progress-tab">
          <div className={`${active >= 6 && 'color-1F9CD7'}`}>
            <img src={ctsIcon} />
          </div>
          <span className={`progress-bar ${active >= 6 && 'color-1F9CD7'}`}></span>
          <p className="text-center">CTS - Online Test <br /> 3</p>
        </div>
        <div className="progress-tab">
          <div className={`${active >= 6 && 'color-1F9CD7'}`}>
            <img src={finish} />
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