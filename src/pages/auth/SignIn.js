import React, { useState } from 'react'
import logo from '../../logo-waskita.png'
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import swal from '../../components/notification/swal'
import Toast from '../../components/notification/toast'
import gql from 'graphql-tag';

const LOGIN = gql`
  mutation login($email:String!, $password:String!) {
    userLogin(email:$email, password:$password) {
      ok
      user {
        role
      }
    }
  }
`;


const SignIn = ({ navigate }) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const client = useApolloClient();
  const [userLogin] = useMutation(LOGIN);

  const getQueryVariable = () => ({
    "email": userName,
    "password": password
  })
  const _handleSignIn = async (e) => {
    e.preventDefault();
    const { data, errors } = await userLogin(({
      variables: getQueryVariable()
    }))

    if (errors) return swal.failed('Wrong username')


    console.log("SignIn -> data.userLogin.ok", data.userLogin.ok)
    if (data.userLogin.ok) {
      let isAdmin = false
      const userRole = data.userLogin.user.role
      if (userRole == 'WASKITA') isAdmin = 1;
      if (userRole == 'CANDIDATE') isAdmin = 2;

      if (userRole == 'WASKITA') Toast.info(`Welcome to Hiring Apps ${userName}`)
      if (userRole == 'CANDIDATE') Toast.info(`Welcome to Hiring Apps ${userName}`)

      if (isAdmin) {
        localStorage.setItem('token', true)
        localStorage.setItem('isAdmin', isAdmin)
        client.writeData({
          data: {
            isLoggedIn: localStorage.getItem('token'),
            isAdmin: localStorage.getItem('isAdmin')
          }
        });
      } else {
        swal.failed('Wrong username')
      }
    }


  }


  return (
    <form onSubmit={_handleSignIn}>
      <div className="body-login">
        <div className="login-card">
          <img src={logo} />
          <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
