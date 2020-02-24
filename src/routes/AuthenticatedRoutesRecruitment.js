import React from 'react'
import Recruitment from '../pages/recruitment/Recruitment'
import MyProfile from '../pages/recruitment/view/MyProfile'
import { Router } from "@reach/router"

const AuthenticatedRoutesRecruitment = () => {
    return (
        <Router>
            <Recruitment path="/recruitment" />
            <MyProfile path="/my-profile" />
            <Recruitment default />
        </Router>
    );
}

export default AuthenticatedRoutesRecruitment