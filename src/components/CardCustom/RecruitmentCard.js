import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo-waskita.png'

const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}

const RecruitmentCard = props => {

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
          {props.children}
        </div>
        <button className="btn-next">Next</button>
      </div>
    </>
  )
}


RecruitmentCard.propTypes = PropTypesParams
RecruitmentCard.defaultProps = DefaultPropsParams

export default RecruitmentCard