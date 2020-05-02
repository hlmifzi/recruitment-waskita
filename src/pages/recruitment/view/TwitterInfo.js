import React from 'react'
import PropTypes from 'prop-types'
import desktopChatIcon from '../../../assets/recruitment/desktop-chat.svg'
import settingIcon from '../../../assets/recruitment/setting.svg'
import folderDownloadIcon from '../../../assets/recruitment/folder-download.svg'
import folderIcon from '../../../assets/recruitment/folder.svg'
import userIcon from '../../../assets/recruitment/user-icon.svg'
import twitterIcon from '../../../assets/recruitment/twitter-color.svg'
import twitterTransparentIcon from '../../../assets/recruitment/twitter-transparent.svg'

const Interfaces = {
  children: PropTypes.element.isRequired,
}

const DefaultValue = {
  children: <></>,
}

const TwitterInfo = () => {

  return (
    <>
      <div className="wrapper-facebook-info">
        <div className="d-flex">
          <div className="icon-wrapper twitter-color mr-16">
            <img alt="picture" src={twitterTransparentIcon} />
          </div>
          <label className="tag-header twitter-color">Download Twitter Information</label>
        </div>
        <div className="d-flex mt-48">
          <div className="container-step">
            <div className="label-step"><span className="mr-6">1</span>Log in to your</div>
            <p className="text-center"><strong>Twitter Account</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture1" src={twitterIcon} />
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
            <p className="text-center"><strong>Account</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture3" src={userIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">4</span>Click</div>
            <p className="text-center"><strong>Your Twitter Data</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture4" src={folderIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">5</span>Click</div>
            <p className="text-center"><strong>Request Archive Twitter</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture5" src={desktopChatIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-6">6</span>Click</div>
            <p className="text-center"><strong>Download Archive</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture6" src={folderDownloadIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


TwitterInfo.propTypes = Interfaces
TwitterInfo.defaultProps = DefaultValue

export default TwitterInfo