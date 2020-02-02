
import React, { useEffect, useState, useRef } from 'react'
import iconDownload from '../../assets/download.svg'
import tempImg from '../../logo-waskita.png'
import ReactToPdf from 'react-to-pdf'
import Components from '../Components'

const ModalResult = ({closeModal, isShow}) => {
  const wrapperRef = useRef(null);
  const tempData = {
    categories: ["Leisure", "Extrinsic", "Intrinsic", "Altruisic", "Social"],
    series: [4,2,2,3,4]
  }

  const clickOutsideModal = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      closeModal(false);
      document.body.classList.remove("scroll-locked");
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
              <ReactToPdf targetRef={wrapperRef} filename="div-blue.pdf">
                {({toPdf}) =>  (
                    <span className="icon-download img-rounded" onClick={toPdf}>
                      <img src={iconDownload} />
                    </span>
                )}
            </ReactToPdf>
            </div>
            <div className="modal-result-body">
              <div className="personal-info d-flex">
                <div className="profile-info d-flex flex-8">
                  <img className="profile-picture" src={tempImg} />
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
                <div className="wrapper-title">
                  <h4>Personality</h4>
                </div>
                <div className="container-personality-bar">
                  <p className="weakness flex-3">Konvensional, nyaman pada kebiasaan</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar"></div>
                    <p>65%</p>
                  </div>
                  <p className="title-bar"><span style={{fontSize:"28px"}}>o</span>peness</p>
                  <p className="strength flex-3">Kreatif, imaginatif, rasa ingin tahu</p>
                </div>
                <div className="container-personality-bar">
                  <p className="weakness flex-3">Spontan, impulsif, cenderung lalai dan kurang teliti</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar"></div>
                    <p>65%</p>
                  </div>
                  <p className="title-bar"><span style={{fontSize:"28px"}}>o</span>peness</p>
                  <p className="strength flex-3">Teratur, disiplin, teliti, rapi, tekun</p>
                </div>
                <div className="container-personality-bar">
                  <p className="weakness flex-3">Pemalu, lebih senang menyendiri, task oriented</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar"></div>
                    <p>65%</p>
                  </div>
                  <p className="title-bar"><span style={{fontSize:"28px"}}>o</span>peness</p>
                  <p className="strength flex-3">Mudah bergaul, senang bicara, person oriented</p>
                </div>
                <div className="container-personality-bar">
                  <p className="weakness flex-3">Kompetitif, mudah curiga, tidak ramah</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar"></div>
                    <p>65%</p>
                  </div>
                  <p className="title-bar"><span style={{fontSize:"28px"}}>o</span>peness</p>
                  <p className="strength flex-3">Kooperatif, mudah percaya, suka membantu</p>
                </div>
                <div className="container-personality-bar">
                  <p className="weakness flex-3">Tenang, stabil, percaya diri</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar"></div>
                    <p>65%</p>
                  </div>
                  <p className="title-bar"><span style={{fontSize:"28px"}}>o</span>peness</p>
                  <p className="strength flex-3">Emosional, mudah stress, tidak percaya diri</p>
                </div>
                <div className="footer-info d-flex">
                  <div className="grey-card flex-6">
                    Keterangan : <br/>
                    Personality dibagi menjadi dua kategori (kanan dan kiri), semakin besar angka yang diperoleh dan grafik menuju 
                    kearah tertentu maka menunjukkan bahwa individu semakin memiliki kecendrungan terhadap penjelasan personality 
                    pada kelompok kategori tersebut.
                  </div>
                  <div className="grey-card flex-6">
                    Norm : <br/>
                  </div>
                </div>
              </div>
              <div className="personality-info">
                <div className="wrapper-title">
                  <h4>Needs</h4>
                </div>
                <div className="footer-info d-flex">
                  <div className="grey-card flex-6">
                    Keterangan : <br/>
                    Needs individu dibagi menjadi 15 kategori, semakin besar angka yang diperoleh maka menunjukkan bahwa individu 
                    semakin memiliki kecendrungan needs sesuai dengan penjelasan setiap kategori ditabel sebelah kanan.
                  </div>
                  <div className="grey-card flex-6">
                    Norm : <br/>
                  </div>
                </div>
              </div>
              <div className="personality-info">
                <div className="wrapper-title">
                  <h4>Work Value</h4>
                </div>
                <Components.charts.workValueChart isLoading={false} data={tempData}/>
                <div className="footer-info d-flex">
                  <div className="grey-card flex-6">
                    Keterangan : <br/>
                    Work value terbagi menjadi 5 kategori, nilai terbesar yang diperoleh individu menunjukkan bahwa nilai tersebut 
                    menjadi hal yang paling penting untuk mendorongnya dapat bekerja secara optimal.
                  </div>
                  <div className="grey-card flex-6">
                    Norm : <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default ModalResult