
import React, { useEffect, useState, useRef } from 'react'
import iconDownload from '../../assets/download.svg'
import tempImg from '../../logo-waskita.png'

const ModalResult = ({closeModal, isShow}) => {
  const wrapperRef = useRef(null);

  const clickOutsideModal = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      closeModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutsideModal, false);
    return () => {
      document.removeEventListener("click", clickOutsideModal, false);
    };
  }, [])
    
  return (
      <>
        <div className={`modal-result ${isShow ? 'show' : ''}`}>
          <div className="modal-result-card" ref={wrapperRef}>
            <div className="modal-result-header">
              <p>Result</p>
              <span className="icon-download img-rounded">
                <img src={iconDownload} />
              </span>
            </div>
            <div className="modal-result-body">
              <div className="personal-info d-flex">
                <div className="profile-info d-flex flex-8">
                  <img src={tempImg} />
                  <div className="wrapper-user-info">
                    <p>Zoe Saldana</p>
                    <p className="mb-0">19 July 2019 (age 21)</p>
                    <p>London, England</p>
                    <p className="mb-0">Universitas Indonesia</p>
                    <p>IPB Bogor</p>
                  </div>
                </div>
                <div className="social-media-info flex-4">
                  <p>Tingkat Partisipasi Sosial Media : 80%</p>
                  <span className="social-media-bar twitter">
                    <img />
                  </span>
                  <span className="social-media-bar facebook">
                    <img />
                  </span>
                  <span className="social-media-bar instagram">
                    <img />
                  </span>
                </div>
              </div>
              <div className="personality-info">

              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default ModalResult