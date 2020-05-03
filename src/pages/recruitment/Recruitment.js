import React from 'react'
import Components from '../../components/Components'
import RecruitmentProcces from './RecruitmentProcces'

const Recruitment = props => {
    return (
        <>
            <Components.header />
            <RecruitmentProcces {...props}/>
        </>
    )
}

export default Recruitment
