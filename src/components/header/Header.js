import React from 'react';
import logo from '../../logo-waskita.png'

const MainNavbar = () => {
    return (
        <>
            <div className="header-admin">
                <img src={logo} />
                <div class="pull-right text-white"> log out </div>
            </div>
        </>
    )
}

export default MainNavbar
