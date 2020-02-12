import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/icon/Icon'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
}

const FacebookInfo = () => {

  return (
    <div className="wrapper-facebook-info">
      <div className="d-flex">
        <div className="icon-wrapper facebook-color mr-16">
          <img src={Icon.facebook.whiteCircle} />
        </div>
        <label className="tag-header facebook-color">Download Facebook Information</label>
      </div>
    </div>
  )
}


FacebookInfo.propTypes = Interfaces
FacebookInfo.defaultProps = DefaultValue

export default FacebookInfo