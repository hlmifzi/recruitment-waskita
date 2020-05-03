import React from 'react'
import PropTypes from 'prop-types'
import iconSetting from '../../../assets/recruitment/form-and-setting.svg'
import iconDone from '../../../assets/recruitment/done-green.svg'
import swal from '../../../components/notification/swal'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
  hasUpload: false,
  finish: false
}

const CtsComponent = ({ nextStep, hasUpload, finish, history }) => {
  const finishRegister = () => {
    swal.finishAllStep()
    setTimeout(() => {
      window.location.replace(`my-profile`)
    }, 2000)
  }

  return (
    <>
      {!finish ?
        <div className="cts-online-container">
          {hasUpload && <h3>Done !!</h3>}
          {hasUpload && <p>You have successfully uploaded social media information.</p>}
          <img alt="picture1" src={iconSetting} />
          <button onClick={() => nextStep()}>{hasUpload ? "CTS Online Test 3" : "CTS Online Test 1 - 2"}</button>
        </div>
        :
        <div className="cts-online-container">
          <h3>Congratulation !!</h3>
          <span className="wrapper-done">
            <img alt="picture2" src={iconDone} />
            <p>Social Media Information</p>
          </span>
          <span className="wrapper-done">
            <img alt="picture3" src={iconDone} />
            <p>CTS - Online Test 1 - 3</p>
          </span>
          <button className="mt-30" onClick={() => finishRegister()}>Finish</button>
        </div>
      }
    </>
  )
}


CtsComponent.propTypes = Interfaces
CtsComponent.defaultProps = DefaultValue

export default CtsComponent