import React from 'react'
import SignIn from '../pages/auth/SignIn';
import { Router } from "@reach/router"

const AuthenticatedRoutes = () => {
    return (
        <Router>
            <SignIn path="/" />
            <SignIn default />
        </Router>
    );
}

export default AuthenticatedRoutes