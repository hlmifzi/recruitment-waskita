import React from 'react'
import logo from '../../logo-waskita.png'
import { useApolloClient } from "@apollo/react-hooks";
import swal from '../../components/notification/swal'
import Toast from '../../components/notification/toast'


const SignIn = ({ navigate }) => {
    const client = useApolloClient();
    const _handleSignIn = () => {

        let isAdmin = 'candidate'

        Toast.info(`Welcome to Hiring Apps Candidate`)
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
            <div className="body-login" >
                <div className="login-card" >
                    <img alt="picture" src={logo} style={{ marginTop: '30px' }} />
                    <p style={{ fontSize: '30px', color: '#030075' }}>Recruitment</p>
                    <button style={{ marginTop: '5px' }} className="btn-login"
                        onClick={_handleSignIn}>start
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignIn
