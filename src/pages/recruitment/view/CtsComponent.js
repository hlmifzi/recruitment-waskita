import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import iconSetting from '../../../assets/recruitment/form-and-setting.svg'
import iconDone from '../../../assets/recruitment/done-green.svg'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
  hasUpload: false,
  finish: false
}

const CtsComponent = ({ nextStep, hasUpload, finish }) => {

  return (
    <>
      { !finish ?
        <div className="cts-online-container">
          { hasUpload && <h3>Done !!</h3>}
          { hasUpload && <p>You have successfully uploaded social media information.</p>}
          <img src={iconSetting}/>
          <button onClick={() => nextStep()}>{hasUpload ? "CTS Online Test 3" : "CTS Online Test 1 - 2"}</button>
        </div>
        :
        <div className="cts-online-container">
          <h3>Congratulation !!</h3>
          <span className="wrapper-done">
            <img src={iconDone} />
            <p>Social Media Information</p>
          </span>
          <span className="wrapper-done">
            <img src={iconDone} />
            <p>CTS - Online Test 1 - 3</p>
          </span>
          <button className="mt-30">Finish</button>
        </div>
      }
    </>
  )
}


CtsComponent.propTypes = Interfaces
CtsComponent.defaultProps = DefaultValue

export default CtsComponent