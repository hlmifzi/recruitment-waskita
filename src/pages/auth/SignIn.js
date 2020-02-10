import React from 'react'
import logo from '../../logo-waskita.png'
import { useApolloClient } from "@apollo/react-hooks";



const SignIn = ({ navigate }) => {
  const client = useApolloClient();

  const _handleSignIn = () => {
    localStorage.setItem('token', true)
    client.writeData({
      data: {
        isLoggedIn: localStorage.getItem('token'),
        isAdmin: true
      }
    });
  }

  const _handleSignInRecruitment = () => {
    localStorage.setItem('token', true)
    client.writeData({
      data: {
        isLoggedIn: localStorage.getItem('token'),
        isAdmin: false
      }
    });
  }

  return (
    <div className="body-login">
      <div className="login-card">
        <img src={logo} />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn-login"
          onClick={_handleSignIn}>Sign in
        </button>
        <button className="btn-login"
          onClick={_handleSignInRecruitment}>Sign in Recruitment
        </button>
        <p className="mb-0 mt-2">Don't have an account? <em onClick={() => navigate("/sign-up")}>Sign Up</em></p>
      </div>
    </div >
  )
}

export default SignIn
