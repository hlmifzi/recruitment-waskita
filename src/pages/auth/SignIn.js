import React, { useState } from 'react'
import logo from '../../logo-waskita.png'
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import swal from '../../components/notification/swal'
import Toast from '../../components/notification/toast'
import gql from 'graphql-tag';
import { redirectTo } from "@reach/router"


const LOGIN = gql`
  mutation login($email:String!, $password:String!) {
    userLogin(email:$email, password:$password) {
      ok
      user {
        role
        id
        candidate {
          id
          isFinished
        }
      }
    }
  }
`;


const IS_FINISH_UPLOAD = gql`
mutation signUp ($id: String!){
  candidateFormFinish(candidateId: $id){
    ok
    candidate {
      name
    }
  }
}
`;


const SignIn = ({ navigate }) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const client = useApolloClient();
  const [userLogin] = useMutation(LOGIN)

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

    if (data.userLogin.ok) {
      let isAdmin = false
      const userRole = data.userLogin.user.role
      const userId = userRole === 'WASKITA' ? data.userLogin.user.id : data.userLogin.user.candidate.id
        
      if (userRole === 'WASKITA') {
        isAdmin = 1;
        Toast.info(`Welcome to Hiring Apps ${userName}`)
        localStorage.setItem('isAdmin', isAdmin)

      }

      if (userRole === 'CANDIDATE') {
        isAdmin = 2;
        const isAlreadyUpload = data.userLogin.user.candidate.isFinished
        Toast.info(`Welcome to Hiring Apps ${userName}`)
        localStorage.setItem('isAlreadyUpload', isAlreadyUpload)
      }

      localStorage.setItem('token', true)
      localStorage.setItem('userId', userId)
      client.writeData({
        data: {
          isLoggedIn: localStorage.getItem('token'),
          isAdmin: localStorage.getItem('isAdmin'),
          userId: localStorage.getItem('userId'),
          isAlreadyUpload: localStorage.getItem('isAlreadyUpload') === "true"
        }
      });
    } else {
      swal.failed('Invalid username / password')
    }
  }

  return (
    <form onSubmit={_handleSignIn}>
      <div className="body-login">
        <div className="login-card">
          <img alt="picture" src={logo} />
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
