import React, { useEffect, useState, useRef } from 'react'
import Components from '../../components/Components'
import FacebookInfo from './view/FacebookInfo'
import InstagramInfo from './view/InstagramInfo'
import TwitterInfo from './view/TwitterInfo'
import iconBell from '../../assets/recruitment/bell-with-attention.svg'


const RecruitmentProcces = props => {

  const [hasDownload, setHasDownload] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentInstruction, setInstruction] = useState(1)
  const [currentStep, setStep] = useState(1)
  const wrapperRef = useRef()

  const nextStep = () => {
    if (hasDownload) {
      setStep(currentStep + 1)
    }
    else if (currentInstruction == 3) {
      setTimeout(() => {
        setShowModal(true)
        document.body.classList.add("scroll-locked")
      },100)
    }
    else {
      setInstruction(currentInstruction + 1)
    }
  }

  const clickOutsideModal = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      document.body.classList.remove("scroll-locked")
      setShowModal(false)
    }
  };

  const confirmDownload = () => {
    setHasDownload(true)
    setShowModal(false)
    document.body.classList.remove("scroll-locked")
  }

  useEffect(() => {
    document.addEventListener("click", clickOutsideModal, false);
    return () => {
      document.removeEventListener("click", clickOutsideModal, false);
    };
  }, [])

  return (
    <div className="body-dashboard">
      {showModal &&
        <div className="modal-remind">
          <div className="remind-card" ref={wrapperRef}>
            <img src={iconBell} />
            <h4 className="text-center">Are you sure,<br />You have downloaded all social media information ?</h4>
            <button onClick={() => confirmDownload()}>Next</button>
          </div>
        </div>
      }
      <Components.progressNavbar />
      <Components.recruitmentCard nextStep={() => nextStep()}>
        {
          <>
            {(!hasDownload && currentInstruction == 1) && <FacebookInfo />}
            {(!hasDownload && currentInstruction == 2) && <InstagramInfo />}
            {(!hasDownload && currentInstruction == 3) && <TwitterInfo />}
          </>
        }
      </Components.recruitmentCard>
    </div>
  )
}

export default RecruitmentProcces
