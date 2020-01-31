import React from 'react'
import SignIn from '../pages/auth/SignIn';
import Admin from '../pages/admin/Admin'
import { Router } from "@reach/router"

const AuthenticatedRoutes = () => {
    return (
        <Router>
            <SignIn path="/" />
            <Admin path="/admin" />
        </Router>
    );
}

export default AuthenticatedRoutes