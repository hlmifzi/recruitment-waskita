import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo.svg'
import { useApolloClient } from "@apollo/react-hooks";


const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}


const SignIn = props => {
  const client = useApolloClient();

  const _handleSignIn = () => {
    client.writeData({ data: { isLoggedIn: true } });
  }

  return (
    <div className="body-login">
      <div className="login-card">
        <img src={logo} />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn-login"
          onClick={_handleSignIn}>Sign in</button>
      </div>
    </div >
  )
}


SignIn.propTypes = PropTypesParams
SignIn.defaultProps = DefaultPropsParams

export default SignIn
