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
  const [file, setFile] = useState(null)
  const [uploadFor, setUploadFor] = useState('')
  const wrapperRef = useRef()

  const FILE = gql`
    mutation statistic($input: CandidateSocmedFileMutationInput!) {
      candidateSocmedUpload(input: $input) {
        candidate {
          id
        }
        socmed {
          socialMedia
        }
        socmedFile
        socmedFilename
        ok
      }
    }
  `;

  const [uploadFiles] = useMutation(FILE);


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
      setUploadFor(uploadFileFor)
      let dataFile = new FormData();
      dataFile.append('social_media_file', file[0])
      dataFile.append('social_media_filename', file[0].name)
      dataFile.append('candidate', localStorage.getItem('userId'))
      dataFile.append('social_media', socmedId)

      const { status } = await Axios.post(`${process.env.NODE_ENV === "development" ? developmentHost : productionHost}/upload/socmed-data/`, dataFile)
      if (status === 200) {
        setUploadStatus(true)
      } else {
        swal.uploadFailed()
      }
    }
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
      <Components.progressNavbar currentStep={currentStep} />
      <Components.recruitmentCard nextStep={() => {
        setUploadStatus(false)
        nextStep()
      }} currentStep={currentStep}
        uploadStatus={uploadStatus}>
        {
          <>
            {(!hasDownload && currentInstruction === 1) && <FacebookInfo />}
            {(!hasDownload && currentInstruction === 2) && <InstagramInfo />}
            {(!hasDownload && currentInstruction === 3) && <TwitterInfo />}
            {(hasDownload && currentStep === 1) &&
              <CtsComponent nextStep={() => nextStep()} />
            }
            {(hasDownload && currentStep === 2) &&
              <UploadDocument reUpload={() => setUploadStatus(false)} uploadStatus={uploadStatus} uploadFor="FACEBOOK" uploadFile={(file, socmed) => uploadFile(file, socmed)} />
            }
            {(hasDownload && currentStep === 3) &&
              <UploadDocument reUpload={() => setUploadStatus(false)} uploadStatus={uploadStatus} uploadFor="TWITTER" uploadFile={(file, socmed) => uploadFile(file, socmed)} />
            }
            {(hasDownload && currentStep === 4) &&
              <UploadDocument reUpload={() => setUploadStatus(false)} uploadStatus={uploadStatus} uploadFor="INSTAGRAM" uploadFile={(file, socmed) => uploadFile(file, socmed)} />
            }
            {(hasDownload && currentStep === 5) &&
              <CtsComponent nextStep={() => nextStep()} hasUpload={true} />
            }
            {(hasDownload && currentStep === 6) &&
              <CtsComponent finish={true} />
            }
          </>
        }
      </Components.recruitmentCard>
    </div>
  )
}

export default RecruitmentProcces
