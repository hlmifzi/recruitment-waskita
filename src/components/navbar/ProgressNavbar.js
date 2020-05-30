import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ctsIcon from '../../assets/cts-online.svg'
import finish from '../../assets/finish.svg'
import downloadIcon from '../../assets/how-to-download.svg'
import iconDone from '../../assets/recruitment/done-green.svg'


const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}

const ProgressNavbar = ({ currentStep, hasDownload }) => {
  const [active, setActive] = useState(1);
  useEffect(() => {
    setActive(currentStep)
  }, [currentStep])
  return (
    <>
      <div className="wrapper-progress-tab d-flex">
        <div className="progress-tab">
          <div className={`${hasDownload && 'color-1F9CD7'}`}>
            <img alt="picture" src={downloadIcon} />
          </div>
          <span className={`progress-bar ${hasDownload && 'color-1F9CD7'}`}></span>
          {hasDownload && <img alt="picture1" src={iconDone} className="width-24 position-absolute" style={{ marginTop: '-25px' }} />}
          <p className="text-center">How to download your Social Media</p>
        </div>
        <div className="progress-tab">
          <div className={`${active >= 4 && 'color-1F9CD7'}`}>
            <img alt="picture4" src={downloadIcon} />
          </div>
          <span className={`progress-bar ${active >= 4 && 'color-1F9CD7'}`}></span>
          {active >= 4 && <img alt="picture5" src={iconDone} className="width-24 position-absolute" style={{ marginTop: '-25px' }} />}

          <p className="text-center">Upload your <br /> Social Media Information</p>
        </div>

        <div className="progress-tab">
          <div className={`${active >= 4 && 'color-1F9CD7'}`}>
            <img alt="picture8" src={finish} />
          </div>
          {active >= 4 && <img alt="picture9" src={iconDone} className="width-24 position-absolute" style={{ marginTop: '-25px' }} />}

          <p className="text-center">Finish</p>
        </div>
      </div>
    </>
  )
}


ProgressNavbar.propTypes = PropTypesParams
ProgressNavbar.defaultProps = DefaultPropsParams

export default ProgressNavbar