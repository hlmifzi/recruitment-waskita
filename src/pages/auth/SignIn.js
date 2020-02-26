import React, { useState } from 'react'
import logo from '../../logo-waskita.png'
import { useApolloClient } from "@apollo/react-hooks";
import swal from '../../components/notification/swal'
import Toast from '../../components/notification/toast'


const SignIn = ({ navigate }) => {
  const [userName, setUserName] = useState("")
  const client = useApolloClient();

  const _handleSignIn = () => {

    let isAdmin = false
    if (userName == 'admin') isAdmin = 1;
    if (userName == 'candidate') isAdmin = 2;

    //   swal.failed('Wrong username')
    if (userName == 'admin') Toast.info(`Welcome to Hiring Apps admin`)
    if (userName == 'candidate') Toast.info(`Welcome to Hiring Apps Candidate`)
    console.log("TCL: isAdmin", isAdmin)
    if (isAdmin) {
      localStorage.setItem('token', true)
      client.writeData({
        data: {
          isLoggedIn: localStorage.getItem('token'),
          isAdmin: isAdmin
        }
      });
    } else {
      swal.failed('Wrong username')
    }

  }

  return (
    <form onSubmit={_handleSignIn}>
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
      </div>
    </form>
  )
}

export default SignIn
