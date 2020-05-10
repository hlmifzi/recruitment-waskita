
import React, { useEffect, useState, useRef } from 'react'
import iconDownload from '../../assets/download.svg'
import tempImg from '../../logo-waskita.png'
import ReactToPdf from 'react-to-pdf'
import Components from '../Components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import { ClockLoader } from 'react-spinners'

//====== image ======
import benchUmbrela from '../../assets/bench-umbrela.png'
import gift from '../../assets/gift.png'
import group from '../../assets/group.png'
import handShake from '../../assets/hand-shake.png'
import inspire from '../../assets/inspire.png'
import facebookBadge from '../../assets/recruitment/facebook-badge.svg'
import instagramBadge from '../../assets/recruitment/instagram-badge.svg'
import twitterBadge from '../../assets/recruitment/twitter-badge.svg'
import moment from 'moment'
//===================

const CANDIDATE = gql`
  query candidateResult($id: ID!) {
      candidateDetail (id:$id) {
        name
        photo
        dob
        university {
          university
        } 
        tribe
        age
      }
      resultParticipantByCandidate(id:$id) {
        socmedDetail {
          socmed {
            socialMedia
          }
          socmedFreqCount
          socmedFreqPercent
        }
        socmedFreqAverage
      }
      resultPersonalityByCandidate(id:$id) {
        personalityDesc
        personalityDesc
        personalityDetail {
          personalityLeftDesc
          personalityRightDesc
        }
      }
      resultNeedsByCandidate(id:$id) {
        needsDesc
        needsNorm
        needsDetail {
          needs
          needsDesc
          needsValue
          needsColor
        }
      }
      resultWorkValueByCandidate(id:$id) {
        workValueDesc
        workValueDetail {
          workValue
          workValueValue
          workValueColor
        }
      }
    }
`;

const ModalResult = ({ closeModal, isShow, id}) => {
  
  const { loading, error, data: candidate } = useQuery(CANDIDATE, {
    variables: { id: id },
  });

  const wrapperRef = useRef(null);
  const tempData = {
    categories: ["Leisure", "Extrinsic", "Intrinsic", "Altruisic", "Social"],
    series: [4, 2, 2, 3, 4]
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
        { !loading ?
          <>
            <div className="modal-result-header">
              <p>Result</p>
              <ReactToPdf targetRef={wrapperRef} filename="div-blue.pdf">
                {({ toPdf }) => (
                  // <span className="icon-download img-rounded" onClick={toPdf}>
                  <span className="icon-download img-rounded">
                    <img alt="picture" src={iconDownload} />
                  </span>
                )}
              </ReactToPdf>
            </div>
            <div className="modal-result-body">
              <div className="personal-info d-flex">
                <div className="profile-info d-flex flex-8">
                  <img className="profile-picture" src={candidate.candidateDetail.photo} />
                  <div className="wrapper-user-info">
                    <p>{candidate.candidateDetail.name}</p>
                    <p className="mb-0">{`${moment(candidate.candidateDetail.dob).format('DD MMM YYYY')} (age ${candidate.candidateDetail.age})`}</p>
                    <p>{candidate.candidateDetail.tribe}</p>
                    <p className="mb-0">{candidate.candidateDetail.university.university}</p>
                  </div>
                </div>
                <div className="social-media-info flex-4">
                  <p>Tingkat Partisipasi Sosial Media : 80%</p>
                  <span className="social-media-bar twitter" style={{ width: `${80}%` }}>
                    <img alt="picture2" src={twitterBadge} />
                    <p className="score">{80}%</p>
                  </span>
                  <span className="social-media-bar facebook" style={{ width: `${50}%` }}>
                    <img alt="picture3" src={facebookBadge} />
                    <p className="score">{50}%</p>
                  </span>
                  <span className="social-media-bar instagram" style={{ width: `${30}%` }}>
                    <img alt="picture4" src={instagramBadge} />
                    <p className="score">{30}%</p>
                  </span>
                </div>
              </div>
              <div className="personality-info">
                <div className="wrapper-title">
                  <h4>Personality</h4>
                </div>
                <div className="container-personality-bar">
                  <p className="netral flex-3">Konvensional, nyaman pada kebiasaan</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar" style={{ width: "67%" }}></div>
                    <p>67%</p>
                  </div>
                  <p className="title-bar"><span style={{ fontSize: "28px" }}>o</span>peness</p>
                  <p className="strength flex-3">Kreatif, imaginatif, rasa ingin tahu</p>
                </div>
                <div className="container-personality-bar">
                  <p className="weakness flex-3">Spontan, impulsif, cenderung lalai dan kurang teliti</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar" style={{ width: "40%" }}></div>
                    <p>40%</p>
                  </div>
                  <p className="title-bar"><span style={{ fontSize: "28px" }}>C</span>onscientousness</p>
                  <p className="netral flex-3">Teratur, disiplin, teliti, rapi, tekun</p>
                </div>
                <div className="container-personality-bar">
                  <p className="netral flex-3">Pemalu, lebih senang menyendiri, task oriented</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar" style={{ width: "85%" }}></div>
                    <p>85%</p>
                  </div>
                  <p className="title-bar"><span style={{ fontSize: "28px" }}>E</span>xtraversion</p>
                  <p className="strength flex-3">Mudah bergaul, senang bicara, person oriented</p>
                </div>
                <div className="container-personality-bar">
                  <p className="weakness flex-3">Kompetitif, mudah curiga, tidak ramah</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar" style={{ width: "15%" }}></div>
                    <p>15%</p>
                  </div>
                  <p className="title-bar"><span style={{ fontSize: "28px" }}>A</span>greebleness</p>
                  <p className="netral flex-3">Kooperatif, mudah percaya, suka membantu</p>
                </div>
                <div className="container-personality-bar">
                  <p className="netral flex-3">Tenang, stabil, percaya diri</p>
                  <div className="outer-bar flex-6">
                    <div className="inside-bar" style={{ width: "58%" }}></div>
                    <p>58%</p>
                  </div>
                  <p className="title-bar"><span style={{ fontSize: "28px" }}>N</span>euroticism</p>
                  <p className="strength flex-3">Emosional, mudah stress, tidak percaya diri</p>
                </div>
                <div className="footer-info d-flex">
                  <div className="grey-card flex-6">
                    Keterangan : <br />
                    Personality dibagi menjadi dua kategori (kanan dan kiri), semakin besar angka yang diperoleh dan grafik menuju
                    kearah tertentu maka menunjukkan bahwa individu semakin memiliki kecendrungan terhadap penjelasan personality
                    pada kelompok kategori tersebut.
                    </div>
                  <div className="grey-card flex-6">
                    Norm : <br />
                  </div>
                </div>
              </div>
              <div className="personality-info">
                <div className="wrapper-title">
                  <h4>Needs</h4>
                </div>
                <div>
                  <Components.charts.needsChart isLoading={false} />


                </div>
                <div className="footer-info d-flex">
                  <div className="grey-card flex-6">
                    Keterangan : <br />
                    Needs individu dibagi menjadi 15 kategori, semakin besar angka yang diperoleh maka menunjukkan bahwa individu
                    semakin memiliki kecendrungan needs sesuai dengan penjelasan setiap kategori ditabel sebelah kanan.
                    </div>
                  <div className="grey-card flex-6">
                    Norm : <br />
                  </div>
                </div>
              </div>
              <div className="personality-info">
                <div className="wrapper-title">
                  <h4>Work Value</h4>
                </div>
                <div className="work-value-assessment">
                  <div>
                    <img alt="picture5" className="assessment-image" src={benchUmbrela} />
                    <p>4</p>
                  </div>
                  <div>
                    <img alt="picture6" className="assessment-image" src={gift} />
                    <p>3</p>
                  </div>
                  <div>
                    <img alt="picture" className="assessment-image" src={group} />
                    <p>1</p>
                  </div>
                  <div>
                    <img alt="picture7" className="assessment-image" src={handShake} />
                    <p>6</p>
                  </div>
                  <div>
                    <img alt="picture8" className="assessment-image" src={inspire} />
                    <p>5</p>
                  </div>
                </div>
                <Components.charts.workValueChart isLoading={false} data={tempData} />
                <div className="footer-info d-flex">
                  <div className="grey-card flex-6">
                    Keterangan : <br />
                    Work value terbagi menjadi 5 kategori, nilai terbesar yang diperoleh individu menunjukkan bahwa nilai tersebut
                    menjadi hal yang paling penting untuk mendorongnya dapat bekerja secara optimal.
                    </div>
                  <div className="grey-card flex-6">
                    Norm : <br />
                  </div>
                </div>
              </div>
            </div>
          </>
        :
        <ClockLoader size={75} color={"#2980B9"}/>
        }
        </div>
      </div >
    </>
  )
}

export default ModalResult