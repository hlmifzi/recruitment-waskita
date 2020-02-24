import React, { useState } from 'react'
import logo from '../../logo-waskita.png'
import { useApolloClient } from "@apollo/react-hooks";



const SignIn = ({ navigate }) => {
  const [userName, setUserName] = useState("")
  const client = useApolloClient();

  const _handleSignIn = () => {
    console.log("TCL: SignIn -> userName", userName)

    let isAdmin = false
    if (userName == 'admin') isAdmin = true

    localStorage.setItem('token', true)
    client.writeData({
      data: {
        isLoggedIn: localStorage.getItem('token'),
        isAdmin: isAdmin
      }
    });
  }

  return (
    <div className="body-login">
      <div className="login-card">
        <img src={logo} />
        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn-login"
          onClick={_handleSignIn}>Sign in
        </button>
        <p className="mb-0 mt-2">Don't have an account? <em onClick={() => navigate("/sign-up")}>Sign Up</em></p>
      </div>
    </div >
  )
}

export default SignIn
