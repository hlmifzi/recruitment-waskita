import React, { useState, useEffect, useRef } from 'react';
import logo from '../../logo-waskita.png';
import { useApolloClient } from "@apollo/react-hooks";
import logoUser from '../../assets/recruitment/user-profile.svg';
import { Link } from "@reach/router";
import gql from "graphql-tag";
import {  useQuery } from '@apollo/react-hooks'

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    isAdmin @client
  }`


const MainNavbar = ({ history }) => {
    const [openToggleBox, setOpenToggleBox] = useState(false);
    const wrapperRef = useRef()
    const { data } = useQuery(IS_LOGGED_IN)

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
                    <img alt="picture" src={logo} />
                </Link>
                <div ref={wrapperRef} className="wrapper-img-profile" onClick={() => setOpenToggleBox(true)} >
                    <img alt="picture2" src={logoUser} />
                    {openToggleBox &&
                        <div className="user-toggle-box">
                            <div className="triangle"></div>
                            {data.isAdmin === '1' || <Link to="/my-profile">
                                <p>Profile</p>
                            </Link>}
                            <p onClick={_handleSignout}>Logout</p>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default MainNavbar
