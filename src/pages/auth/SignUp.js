import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo-waskita.png'
import { useApolloClient } from "@apollo/react-hooks"
import moment from 'moment'


const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}


const SignUp = (props) => {

  const client = useApolloClient();

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
      <div className="register-container">
        <div className="register-header">
          <img src={logo} />
        </div>
        <div className="register-body">
          <div>
            <p className="flex-4 h-text-right mr-4">Nama Lengkap</p>
            <input className="flex-8" type="text" />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-4">Jenis Kelamin</p>
            <div className="flex-8">
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-4">Tanggal Lahir</p>
            <div className="flex-8">
              <select>Days</select>
              <select>Month</select>
              <select>Year</select>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-4">Nama Lengkap</p>
            <div className="flex-8">
              <select>Agama</select>
            </div>
          </div>
          <div>
            <p className="flex-4 h-text-right mr-4">Suku</p>
            <input className="flex-8" type="text" />
          </div><div>
            <p className="flex-4 h-text-right mr-4">Universitas</p>
            <input className="flex-8" type="text" />
          </div><div>
            <p className="flex-4 h-text-right mr-4">Jurusan</p>
            <input className="flex-8" type="text" />
          </div><div>
            <p className="flex-4 h-text-right mr-4">Email</p>
            <input className="flex-8" type="text" />
          </div><div>
            <p className="flex-4 h-text-right mr-4">Password</p>
            <input className="flex-8" type="password" />
          </div><div>
            <p className="flex-4 h-text-right mr-4">No. Hp</p>
            <input className="flex-8" type="text" />
          </div><div>
            <p className="flex-4 h-text-right mr-4">No. KTP</p>
            <input className="flex-8" type="text" />
          </div>
          <div>
            <p className="flex-4 h-text-right mr-4">Jenis Kelamin</p>
            <div className="flex-8">
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="register-footer">
          <button className="btn-login mt-0" onClick={_handleSignInRecruitment}>
            Sign Up
          </button>
          <p className="mb-0 mt-2">Already have an account? <em onClick={() => props.navigate("/")}>Sign In</em></p>
        </div>
      </div>
    </div >
  )
}


SignUp.propTypes = PropTypesParams
SignUp.defaultProps = DefaultPropsParams

export default SignUp