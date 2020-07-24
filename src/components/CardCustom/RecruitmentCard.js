import React from 'react'
import PropTypes from 'prop-types'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
  disabled: false
}

const RecruitmentCard = ({ children, nextStep, backStep, currentStep, uploadStatus, hasDownload, disabled, currentInstruction, showWarningBeforeFinish }) => {
  return (
    <>
      <div className="wrapper-recruitment-card">
        <div className="header-recruitment-card">
          <h5>
            <strong>Download File</strong>
          </h5>
          <p>Step {!hasDownload ? 1 : currentStep < 4 ? 2 : 3} of 3</p>
        </div>
        <div className="body-recruitment-card">
          {children}
        </div>
        { currentInstruction > 1 &&
          <button className={`btn-next ${currentInstruction < 2 ? 'disabled' : ''}`} style={{left: "12px"}} onClick={() => backStep()} disabled={currentInstruction < 2}>
            {'Back'}
          </button>
        }
        {showWarningBeforeFinish && <div className={`warning-before-finish`}>Please upload at least 2 social media files</div>}
        {
          currentStep < 4 &&
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