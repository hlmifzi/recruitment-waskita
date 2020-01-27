
import React, { useEffect, useState, useRef } from 'react'

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
          <div className="modal-card" ref={wrapperRef}>

          </div>
        </div>
      </>
  )
}

export default ModalResult