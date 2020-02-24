import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo-waskita.png'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
}

const RecruitmentCard = ({ children, nextStep, currentStep }) => {
  const onClickNext = currentStep == 6 ? false : true
  return (
    <>
      <div className="wrapper-recruitment-card">
        <div className="header-recruitment-card">
          <h5>
            <strong>Download File</strong>
          </h5>
          <p>Step {1} of 5</p>
        </div>
        <div className="body-recruitment-card">
          {children}
        </div>
        {
          onClickNext &&
          <button className="btn-next" onClick={() => nextStep()}>Next</button>
        }
      </div>
    </>
  )
}


RecruitmentCard.propTypes = Interfaces
RecruitmentCard.defaultProps = DefaultValue

export default RecruitmentCard