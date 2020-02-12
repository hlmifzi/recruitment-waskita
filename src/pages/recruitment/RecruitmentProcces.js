import React, { useEffect, useState } from 'react'
import Components from '../../components/Components'
import FacebookInfo from './view/FacebookInfo'
import InstagramInfo from './view/InstagramInfo'
import TwitterInfo from './view/TwitterInfo'


const RecruitmentProcces = props => {

    const [hasDownload, setHasDownload] = useState(false)
    const [currentInstruction, setInstruction] = useState(1)
    const [currentStep, setStep] = useState(1)

    const nextStep = () => {
        if(hasDownload){
            setStep(currentStep + 1)
        }
        else if(currentInstruction >= 3){
            setHasDownload(true)
        }
        else {
            setInstruction(currentInstruction + 1)
        }
    }

    return (
        <div className="body-dashboard">
            <Components.progressNavbar />
            <Components.recruitmentCard nextStep={() => nextStep()}>
                {
                    <>
                        { (!hasDownload && currentInstruction == 1) && <FacebookInfo /> }
                        { (!hasDownload && currentInstruction == 2) && <InstagramInfo /> }
                        { (!hasDownload && currentInstruction == 3) && <TwitterInfo /> }
                    </>
                }
            </Components.recruitmentCard>

        </div>
    )
}

export default RecruitmentProcces
