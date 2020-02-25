import React from 'react'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import Start from '../pages/auth/Start'
import { Router } from "@reach/router"

const UnAuthenticatedRoutes = () => {
    return (
        <Router>
            <SignIn path="/" />
            <Start path="/start" />
            <SignIn default />
            <SignUp path="/sign-up" />
        </Router>
    );
}

export default UnAuthenticatedRoutes