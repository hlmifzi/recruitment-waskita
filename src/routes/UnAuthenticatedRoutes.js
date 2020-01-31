import React from 'react'
import SignIn from '../pages/auth/SignIn';
import { Router } from "@reach/router"

const UnAuthenticatedRoutes = () => {
    return (
        <Router>
            <SignIn path="/" />
            <SignIn default />
        </Router>
    );
}

export default UnAuthenticatedRoutes