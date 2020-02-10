import React from 'react'
import Recruitment from '../pages/recruitment/Recruitment'
import { Router } from "@reach/router"

const AuthenticatedRoutesRecruitment = () => {
    return (
        <Router>
            <Recruitment path="/recruitment" />
            <Recruitment default />
        </Router>
    );
}

export default AuthenticatedRoutesRecruitment