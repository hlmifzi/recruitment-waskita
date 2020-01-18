import React from 'react'
import PropTypes from 'prop-types'

const PropTypesParams = {
    isClick: PropTypes.array,
}

const DefaultPropsParams = {
    isClick: false,
}

const TestOnline = props => {
    return (
        <>

        </>
    )
}

TestOnline.propTypes = PropTypesParams
TestOnline.defaultProps = DefaultPropsParams

export default TestOnline
