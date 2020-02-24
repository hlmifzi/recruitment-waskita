import React, { useState, useEffect, useRef } from 'react';
import logo from '../../logo-waskita.png';
import { useApolloClient } from "@apollo/react-hooks";
import logoUser from '../../assets/recruitment/user-profile.svg';
import { Link } from "@reach/router";

const MainNavbar = ({ history }) => {
    const [openToggleBox, setOpenToggleBox] = useState(false);
    const wrapperRef = useRef()

    const client = useApolloClient();

    const _handleSignout = () => {
        localStorage.clear()
        client.writeData({ data: { isLoggedIn: false } });
    }

    const clickOutsideModal = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setOpenToggleBox(false)
        }
    };

    useEffect(() => {
        document.addEventListener("click", clickOutsideModal, false);
        return () => {
            document.removeEventListener("click", clickOutsideModal, false);
        };
    }, [])

    return (
        <>
            <div className="header-admin">
                <Link to="/">
                    <img src={logo} />
                </Link>
                <div ref={wrapperRef} className="wrapper-img-profile" onClick={() => setOpenToggleBox(true)} >
                    <img src={logoUser} />
                    {openToggleBox &&
                        <div className="user-toggle-box">
                            <div className="triangle"></div>
                            <Link to="/my-profile">
                                <p>Profile</p>
                            </Link>
                            <p onClick={_handleSignout}>Logout</p>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default MainNavbar
