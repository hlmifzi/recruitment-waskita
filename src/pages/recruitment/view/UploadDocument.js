import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import facebookFormIcon from '../../../assets/recruitment/facebook-form.svg'
import twitterFormIcon from '../../../assets/recruitment/twitter-form.svg'
import instagramFormIcon from '../../../assets/recruitment/instagram-form.svg'
import paperIcon from '../../../assets/recruitment/paper.svg'
import redoIcon from '../../../assets/recruitment/redo.svg'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
  uploadFor: "facebook",
  uploadStatus: false
}

const UploadDocument = ({ uploadFor, uploadFile, uploadStatus, reUpload }) => {

  const icon = uploadFor == "facebook" ? facebookFormIcon : uploadFor == "twitter" ? twitterFormIcon : instagramFormIcon

  const chooseFile = (data) => {
    uploadFile(data)
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <div className="upload-document-container">
        {!uploadStatus ?
          <>
            <h4>Upload your {uploadFor} Information</h4>
            <img src={icon} />
            <input
              type="file"
              id="document-upload"
              onChange={(e) => chooseFile(e.currentTarget.files)}
            />
            <span>Drag and drop, or <label htmlFor="document-upload">browse</label> your files</span>
          </>
          :
          <>
            <div className="wrapper-upload-success d-flex">
              <img src={paperIcon} />
              <h3>Succeed !!</h3>
              <p>You have successfully uploaded {uploadFor} information.</p>
            </div>
            <img className="redo-icon" onClick={() => reUpload()} src={redoIcon} />
          </>
        }
      </div>
    </>
  )
}


UploadDocument.propTypes = Interfaces
UploadDocument.defaultProps = DefaultValue

export default UploadDocument