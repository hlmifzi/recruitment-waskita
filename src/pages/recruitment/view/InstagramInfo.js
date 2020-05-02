import React from 'react'
import PropTypes from 'prop-types'
import fileIcon from '../../../assets/recruitment/file.svg'
import settingIcon from '../../../assets/recruitment/setting.svg'
import folderDownloadIcon from '../../../assets/recruitment/folder-download.svg'
import hamburgerIcon from '../../../assets/recruitment/hamburger.svg'
import chainIcon from '../../../assets/recruitment/chain.svg'
import instagramIcon from '../../../assets/recruitment/instagram-color.svg'
import instagramTransparentIcon from '../../../assets/recruitment/instagram-transparent.svg'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
}

const InstagramInfo = () => {

  return (
    <>
      <div className="wrapper-facebook-info">
        <div className="d-flex">
          <div className="icon-wrapper instagram-color mr-16">
            <img alt="picture" src={instagramTransparentIcon} />
          </div>
          <label className="tag-header instagram-color">Download Instagram Information</label>
        </div>
        <div className="d-flex mt-48">
          <div className="container-step">
            <div className="label-step"><span className="mr-6">1</span>Log in to your</div>
            <p className="text-center"><strong>Instagram Account</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture1" src={instagramIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">2</span>Click</div>
            <p className="text-center"><strong>Settings</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture2" src={settingIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">3</span>Click</div>
            <p className="text-center"><strong>Privacy and Security</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture3" src={hamburgerIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">4</span>Click</div>
            <p className="text-center"><strong>Download Data</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture4" src={fileIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">5</span>Tunggu</div>
            <p className="text-center"><strong>Link Download</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture5" src={chainIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">6</span>Click</div>
            <p className="text-center"><strong>Download</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture6" src={folderDownloadIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


InstagramInfo.propTypes = Interfaces
InstagramInfo.defaultProps = DefaultValue

export default InstagramInfo