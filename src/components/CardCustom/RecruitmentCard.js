import React from 'react'
import PropTypes from 'prop-types'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
  disabled: false
}

const RecruitmentCard = ({ children, nextStep, currentStep, uploadStatus, hasDownload, disabled }) => {
  const onClickNext = currentStep === 6 ? false : true
  if(currentStep > 5){
    currentStep = 5
  }
  return (
    <>
      <div className="wrapper-recruitment-card">
        <div className="header-recruitment-card">
          <h5>
            <strong>Download File</strong>
          </h5>
          <p>Step {currentStep} of 5</p>
        </div>
        <div className="body-recruitment-card">
          {children}
        </div>
        {
          onClickNext &&
          <button className={`btn-next ${disabled ? 'disabled' : ''}`} onClick={() => nextStep()} disabled={disabled}>
            {'Next'}
          </button>
        }
      </div>
    </>
  )
}


RecruitmentCard.propTypes = Interfaces
RecruitmentCard.defaultProps = DefaultValue

export default RecruitmentCard