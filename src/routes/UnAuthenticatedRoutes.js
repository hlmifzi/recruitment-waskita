import React from 'react'
import SignIn from '../pages/auth/SignIn';
import Admin from '../pages/admin/Admin'
import { Router } from "@reach/router"

const UnAuthenticatedRoutes = () => {
    return (
        <Router>
            <SignIn path="/" />
        </Router>
    );
}

export default UnAuthenticatedRoutes