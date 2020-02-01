import React from 'react'
import Admin from '../pages/admin/Admin'
import { Router } from "@reach/router"

const AuthenticatedRoutes = () => {
    return (
        <Router>
            <Admin path="/admin" />
            <Admin default />
        </Router>
    );
}

export default AuthenticatedRoutes