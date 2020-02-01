import React from 'react';
import logo from '../../logo-waskita.png'
import { useApolloClient } from "@apollo/react-hooks";

const MainNavbar = () => {
    const client = useApolloClient();

    const _handleSignout = () => {
        localStorage.clear()
        client.writeData({ data: { isLoggedIn: false } });
    }

    return (
        <>
            <div className="header-admin">
                <img src={logo} />
                <button class="pull-right text-white" onClick={_handleSignout}> log out </button>
            </div>
        </>
    )
}

export default MainNavbar
