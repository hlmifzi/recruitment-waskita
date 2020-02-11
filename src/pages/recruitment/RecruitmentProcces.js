import React, { useEffect, useState } from 'react'
import Components from '../../components/Components'
import FacebookInfo from './view/FacebookInfo'


const RecruitmentProcces = props => {

    return (
        <div className="body-dashboard">
            <Components.progressNavbar />
            <Components.recruitmentCard >
                <FacebookInfo />
            </Components.recruitmentCard>

        </div>
    )
}

export default RecruitmentProcces
