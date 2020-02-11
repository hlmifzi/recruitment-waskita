import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import facebookTransparentIcon from '../../../assets/recruitment/facebook-transparent.svg'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
}

const TwitterInfo = () => {

  return (
    <div className="wrapper-facebook-info">
      <div className="d-flex">
        <div className="icon-wrapper facebook-color mr-16">
          <img src={facebookTransparentIcon} />
        </div>
        <label className="tag-header facebook-color">Download Twitter Information</label>
      </div>
    </div>
  )
}


TwitterInfo.propTypes = Interfaces
TwitterInfo.defaultProps = DefaultValue

export default TwitterInfo