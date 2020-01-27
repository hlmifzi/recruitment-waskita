
import React, { useEffect, useState, useRef } from 'react'
import iconDownload from '../../assets/download.svg'

const ModalResult = ({closeModal}) => {
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
        <div className="modal-result">
          <div className="modal-result-card" ref={wrapperRef}>
            <div className="modal-result-header">
              <p>Result</p>
              <span className="icon-download img-rounded">
                <img src={iconDownload} />
              </span>
            </div>
          </div>
        </div>
      </>
  )
}

export default ModalResult