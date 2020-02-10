import React, { useEffect, useState } from 'react'
import Components from '../../components/Components'


const RecruitmentProcces = props => {

    return (
        <div className="body-dashboard">
            <Components.progressNavbar />
            <Components.recruitmentCard >
                <Components.facebookInfo />
            </Components.recruitmentCard>

        </div>
    )
}

export default RecruitmentProcces
