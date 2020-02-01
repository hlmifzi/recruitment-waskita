import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo.svg'
import { Link } from "@reach/router"

const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}


const SignIn = props => {
  return (
    <div className="body-login">
      <div className="login-card">
        <img src={logo} />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/admin">
          <button className="btn-login">Sign in</button>
        </Link>
      </div>
    </div >
  )
}


SignIn.propTypes = PropTypesParams
SignIn.defaultProps = DefaultPropsParams

export default SignIn
