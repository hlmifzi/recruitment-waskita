import React, { useEffect, useState, useRef } from 'react'
import Components from '../../components/Components'
import FacebookInfo from './view/FacebookInfo'
import InstagramInfo from './view/InstagramInfo'
import TwitterInfo from './view/TwitterInfo'
import CtsComponent from './view/CtsComponent'
import iconBell from '../../assets/recruitment/bell-with-attention.svg'
import UploadDocument from './view/UploadDocument'
import gql from 'graphql-tag'
import { useMutation } from "@apollo/react-hooks"
import swal from '../../components/notification/swal'
import Axios from 'axios'
import { developmentHost, productionHost } from '../../services/main/MainServices'
const RecruitmentProcces = props => {

  const [hasDownload, setHasDownload] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentInstruction, setInstruction] = useState(1)
  const [currentStep, setStep] = useState(1)
  const [uploadStatus, setUploadStatus] = useState(false)
  const [loading, setLoading] = useState(false)
  const [uploadFor, setUploadFor] = useState('')
  const wrapperRef = useRef()


  const nextStep = () => {
    if (hasDownload) {
      setStep(currentStep + 1)
    }
    else if (currentInstruction === 3) {
      setTimeout(() => {
        setShowModal(true)
        document.body.classList.add("scroll-locked")
      }, 100)
    }
    else {
      setInstruction(currentInstruction + 1)
    }
  }

  const backStep = () => {
    if (hasDownload && currentStep == 1) {
      setStep(1)
      setHasDownload(false)
    }
    else if (currentStep > 1) {
      setStep(currentStep - 1)
    }
    else if(currentInstruction > 1) {
      setInstruction(currentInstruction - 1)
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

  const uploadFile = async (file, uploadFileFor) => {
    let socmedId = uploadFileFor === 'INSTAGRAM' ? 1 : uploadFileFor === 'FACEBOOK' ? 3 : 2
    if (file) {
      if(file[0].type == "application/zip"){
        setUploadFor(uploadFileFor)
        setLoading(true)
        let dataFile = new FormData();
        dataFile.append('social_media_file', file[0])
        dataFile.append('social_media_filename', file[0].name)
        dataFile.append('candidate', parseInt(localStorage.getItem('userId')))
        dataFile.append('social_media', socmedId)
        await Axios.post(`${process.env.NODE_ENV === "development" ? developmentHost : productionHost}/upload/socmed-data/`, dataFile)
          .then((res) => { // SORRY GUA BIKIN GINI LAGI.. KARENA GUA COBA CARA LAIN  GABISA
            if (res.status === 200) {
              setUploadStatus(true)
              setLoading(false)
            }
          })
          .catch(() => {
            swal.uploadFailed()
            setLoading(false)
          })
      }
      else {
        swal.wrongFileType()
      }
    }
  }

  const getButtonDisableStatus = () => {
    let disabled = false
    if ((currentStep === 1 || currentStep === 2 || currentStep === 3) && !uploadStatus && hasDownload) {
      disabled = true
    }
    return disabled
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
      <Components.progressNavbar currentStep={currentStep} hasDownload={hasDownload} />
      <Components.recruitmentCard backStep={() => backStep()} currentInstruction={currentInstruction} nextStep={() => {
        setUploadStatus(false)
        nextStep()
      }} currentStep={currentStep}
        uploadStatus={uploadStatus}
        hasDownload={hasDownload}
        disabled={getButtonDisableStatus()}>
        {
          <>
            {(!hasDownload && currentInstruction === 1) && <FacebookInfo />}
            {(!hasDownload && currentInstruction === 2) && <InstagramInfo />}
            {(!hasDownload && currentInstruction === 3) && <TwitterInfo />}

            {(hasDownload && currentStep === 1) &&
              <UploadDocument reUpload={() => setUploadStatus(false)} isLoading={loading} uploadStatus={uploadStatus} uploadFor="FACEBOOK" uploadFile={(file, socmed) => uploadFile(file, socmed)} />
            }
            {(hasDownload && currentStep === 2) &&
              <UploadDocument reUpload={() => setUploadStatus(false)} isLoading={loading} uploadStatus={uploadStatus} uploadFor="INSTAGRAM" uploadFile={(file, socmed) => uploadFile(file, socmed)} />
            }
            {(hasDownload && currentStep === 3) &&
              <UploadDocument reUpload={() => setUploadStatus(false)} isLoading={loading} uploadStatus={uploadStatus} uploadFor="TWITTER" uploadFile={(file, socmed) => uploadFile(file, socmed)} />
            }

            {(hasDownload && currentStep === 4) &&
              <CtsComponent finish={true} />
            }
          </>
        }
      </Components.recruitmentCard>
    </div>
  )
}

export default RecruitmentProcces
