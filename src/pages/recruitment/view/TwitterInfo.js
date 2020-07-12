import React from 'react'
import PropTypes from 'prop-types'
import desktopChatIcon from '../../../assets/recruitment/desktop-chat.svg'
import settingIcon from '../../../assets/recruitment/setting.svg'
import folderDownloadIcon from '../../../assets/recruitment/folder-download.svg'
import folderIcon from '../../../assets/recruitment/folder.svg'
import userIcon from '../../../assets/recruitment/user-icon.svg'
import twitterIcon from '../../../assets/recruitment/twitter-color.svg'
import twitterTransparentIcon from '../../../assets/recruitment/twitter-transparent.svg'
import hamburgerIcon from '../../../assets/recruitment/hamburger.svg'

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
            <div className="label-step"><span className="mr-5">1</span>Log in to your</div>
            <p className="text-center"><strong>Twitter Account</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture1" src={twitterIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-5">2</span>Click</div>
            <p className="text-center"><strong>More</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture3" src={hamburgerIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-5">3</span>Click</div>
            <p className="text-center"><strong>Setting and Privacy</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture2" src={settingIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-5">4</span>Click</div>
            <p className="text-center"><strong>Account</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture3" src={userIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-2">5</span>Click</div>
            <p className="text-center"><strong>Click Your Twitter Data</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture4" src={folderIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-2">6</span>Click</div>
            <p className="text-center"><strong>Download an archive of your data</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture6" src={folderDownloadIcon} />
            </div>
          </div>
          <div className="container-step">
            <div className="label-step"><span className="mr-5">7</span>Click</div>
            <p className="text-center"><strong>Request Archive</strong></p>
            <div className="wrapper-image-circle">
              <img alt="picture5" src={desktopChatIcon} />
            </div>
          </div> 
          <div className="container-step">
            <div className="label-step"><span className="mr-5">8</span>Click</div>
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