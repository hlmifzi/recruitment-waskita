import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}

const ParticipantStatistic = props => {

  return (
    <div >
      
    </div>
  )
}


ParticipantStatistic.propTypes = PropTypesParams
ParticipantStatistic.defaultProps = DefaultPropsParams

export default ParticipantStatistic
