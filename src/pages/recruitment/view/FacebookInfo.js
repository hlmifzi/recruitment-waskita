import React from 'react'
import PropTypes from 'prop-types'
import fileIcon from '../../../assets/recruitment/file.svg'
import folderIcon from '../../../assets/recruitment/folder.svg'
import folderDownloadIcon from '../../../assets/recruitment/folder-download.svg'
import desktopIcon from '../../../assets/recruitment/desktop.svg'
import settingIcon from '../../../assets/recruitment/setting.svg'
import facebookIcon from '../../../assets/recruitment/facebook-circle.svg'
import facebookTransparentIcon from '../../../assets/recruitment/facebook-transparent.svg'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
}

const FacebookInfo = () => {

  return (
    <>
      <div className="wrapper-facebook-info">
        <div className="d-flex">
          <div className="icon-wrapper facebook-color mr-16">
            <img alt="picture" src={facebookTransparentIcon} />
          </div>
          <label className="tag-header facebook-color">Download Facebook Information</label>
        </div>
        <div className="d-flex mt-48">
          <div className="container-step">
            <div className="label-step"><span className="mr-6">1</span>Click</div>
            <p className="text-center"><strong>Facebook Account</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture" src={facebookIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">2</span>Click</div>
            <p className="text-center"><strong>Settings</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture" src={settingIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">3</span>Click</div>
            <p className="text-center"><strong>Your Facebook Information</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture" src={desktopIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">4</span>Click</div>
            <p className="text-center"><strong>Download Your Information</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture" src={folderIcon} />
            </div>
            <span className="dummy-border-dashed dummy-border-left">
              <i className="fa fa-chevron-up" />
            </span>
          </div>
          <div className="container-instruction-box">
            <div className="instruction-box">
              <p className="mb-1"><strong>Select:</strong></p>
              <p className="mb-1">1. Post</p>
              <p className="mb-1">2. Comment</p>
              <p className="mb-1">3. Like & Reaction</p>
              <p className="mb-1">4. Friends</p>
              <p className="mb-1">5. Groups</p>
              <p className="mb-1">6. Events</p>
              <p className="mb-1">7. Profile Information</p>
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">5</span>Click</div>
            <p className="text-center"><strong>Create File</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture" src={fileIcon} />
            </div>
            <span className="dummy-border-dashed dummy-border-right">
              <i className="fa fa-chevron-up" />
            </span>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">6</span>Click</div>
            <p className="text-center"><strong>Download</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture" src={folderDownloadIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


FacebookInfo.propTypes = Interfaces
FacebookInfo.defaultProps = DefaultValue

export default FacebookInfo