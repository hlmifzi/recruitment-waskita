
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
          personalityLeftPercent
          personalityLeftCount
          personalityLeftColor
          personalityRightDesc
          personalityRightPercent
          personalityRightColor
          personalityRightCount
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

const ModalResult = ({ closeModal, isShow, id }) => {

  const { loading, error, data: candidate } = useQuery(CANDIDATE, {
    variables: { id: id },
  });

  const wrapperRef = useRef(null);

  const getWorkValueData = (data) => {
    const tableData = {
      categories: [],
      series: [],
      color: []
    }
    data.map(value => {
      tableData.categories.push(value.workValue)
      tableData.series.push(value.workValueValue)
      tableData.color.push(value.workValueColor)
    })
    return tableData
  }

  const getPersonalityData = (data, index) => {
    return (
      <div className="container-personality-bar">
        <p className="netral flex-3" style={{ color: data.personalityLeftColor }}>{data.personalityLeftDesc}</p>
        <div className="outer-bar flex-6">
          <div className="inside-bar" style={{ width: `${data.personalityLeftCount > 100 ? 100 : data.personalityLeftCount}%` }}></div>
          <p>{data.personalityLeftCount}%</p>
        </div>
        {index == 0 && <><p className="title-bar"><span style={{ fontSize: "28px" }}>O</span>peness:<span style={{ fontSize: "8px" }}>Ketertarikan individu terhadap hal-hal baru dan keinginan untuk mengetahui serta mempelajari sesuatu yang baru</span></p></>}
        {index == 1 && <p className="title-bar"><span style={{ fontSize: "28px" }}>C</span>onscientousness: <span style={{ fontSize: "8px" }}>Kecenderungan individu untuk lebih berhati-hati ataupun penuh pertimbangan dalam melakukan suatu tindakan dan mengambil sebuah keputusan.</span></p>}
        {index == 2 && <p className="title-bar"><span style={{ fontSize: "28px" }}>E</span>xtraversion: <span style={{ fontSize: "8px" }}>Tingkat kenyamanan individu untuk berinteraksi dengan orang lain.</span></p>}
        {index == 3 && <p className="title-bar"><span style={{ fontSize: "28px" }}>A</span>greebleness:   <span style={{ fontSize: "8px" }}>Kecenderungan individu untuk lebih patuh dengan orang lain dan berupaya untuk menghindari konflik.</span></p>}
        {index == 4 && <p className="title-bar"><span style={{ fontSize: "28px" }}>N</span>euroticism:  <span style={{ fontSize: "8px" }}>Tingkat kemampuan individu dalam menahan tekanan atau stress.</span></p>}
        <p className="strength flex-3" style={{ color: data.personalityRightColor }}>{data.personalityRightDesc}</p>
      </div>
    )
  }

  const getWorkValueImage = (data, index) => {
    console.log("getWorkValueImage -> data", data)
    const img =
      data.workValue == 'Leisure' ? benchUmbrela :
        data.workValue == 'Extrinsic Reward' ? gift :
          data.workValue == 'Intrinsic Reward' ? group :
            data.workValue == 'Altruistic Reward' ? handShake :
              data.workValue == 'Social Reward' ? inspire :
                null
    return (
      <div>
        <img className="assessment-image" src={img} />
        <p>{data.workValueValue}</p>
      </div>
    )
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
          {!loading ?
            <>
              <div className="modal-result-header">
                <p>Result</p>
                <a target="+blank" href={`http://waskita-hiring.org:8000/result-pdf/${id}`}>
                  <span className="icon-download img-rounded">
                    <img alt="picture" src={iconDownload} />
                  </span>
                </a>
              </div>
              <div className="modal-result-body">
                <div className="personal-info d-flex">
                  <div className="profile-info d-flex flex-8">
                    <div className="wrapper-user-info">
                      <p>{candidate.candidateDetail.name}</p>
                      <p className="mb-0">{`${moment(candidate.candidateDetail.dob).format('DD MMM YYYY')} (age ${candidate.candidateDetail.age})`}</p>
                      <p>{candidate.candidateDetail.tribe}</p>
                      <p className="mb-0">{candidate.candidateDetail.university.university}</p>
                    </div>
                  </div>
                  <div className="social-media-info flex-4">
                    <p>Tingkat Partisipasi Sosial Media : {`${candidate.resultParticipantByCandidate[0].socmedFreqAverage}%`}</p>
                    <span className="social-media-bar twitter" style={{ width: `${candidate.resultParticipantByCandidate[0].socmedDetail[2].socmedFreqPercent}%` }}>
                      <img alt="picture2" src={twitterBadge} />
                      <p className="score">{`${candidate.resultParticipantByCandidate[0].socmedDetail[2].socmedFreqPercent}%`}</p>
                    </span>
                    <span className="social-media-bar facebook" style={{ width: `${candidate.resultParticipantByCandidate[0].socmedDetail[1].socmedFreqPercent}%` }}>
                      <img alt="picture3" src={facebookBadge} />
                      <p className="score">{`${candidate.resultParticipantByCandidate[0].socmedDetail[1].socmedFreqPercent}%`}</p>
                    </span>
                    <span className="social-media-bar instagram" style={{ width: `${candidate.resultParticipantByCandidate[0].socmedDetail[0].socmedFreqPercent}%` }}>
                      <img alt="picture4" src={instagramBadge} />
                      <p className="score">{`${candidate.resultParticipantByCandidate[0].socmedDetail[0].socmedFreqPercent}%`}</p>
                    </span>
                  </div>
                </div>
                {candidate.resultPersonalityByCandidate[0].personalityDetail.length > 0 &&
                  <div className="personality-info">
                    <div className="wrapper-title">
                      <h4>Personality</h4>
                    </div>
                    {candidate.resultPersonalityByCandidate[0].personalityDetail.map((data, index) =>
                      getPersonalityData(data, index)
                    )
                    }
                    <div className="footer-info d-flex">
                      <div className="grey-card flex-6" style={{overflowY:'auto'}}>
                        Keterangan : <br />
                        Personality individu dibagi menjadi 5 aspek dimana masing-masing terdiri dari 2 kategori. Semakin besar angka yang diperoleh dan grafik menuju ke arah tertentu maka menunjukkan bahwa individu semakin memiliki kecenderungan terhadap penjelasan personality pada kelompok kategori tersebut
                        {/* {candidate.resultPersonalityByCandidate[0].personalityDesc} */}
                      </div>
                      <div className="grey-card flex-6">
                        Norm : <br />
                        {candidate.resultPersonalityByCandidate[0].personalityNorm}
                      </div>
                    </div>
                  </div>
                }
                {candidate.resultNeedsByCandidate[0].needsDetail.length > 0 &&
                  <div className="personality-info">
                    <div className="wrapper-title">
                      <h4>Needs</h4>
                    </div>
                    <div>
                      <Components.charts.needsChart data={candidate.resultNeedsByCandidate[0].needsDetail} isLoading={false} />
                    </div>
                    <div className="footer-info d-flex">
                      <div className="grey-card flex-6" style={{overflowY:'auto'}}>
                        Keterangan : <br />
                        Needs individu dibagi menjadi 15 aspek. Semakin besar angka yang diperoleh maka menunjukkan bahwa individu semakin memiliki kecenderungan needs sesuai dengan penjelasan setiap aspek.
                        {/* {candidate.resultNeedsByCandidate[0].needsDesc} */}
                      </div>
                      <div className="grey-card flex-6">
                        Norm : <br />
                        {candidate.resultNeedsByCandidate[0].needsNorm}
                      </div>
                    </div>
                  </div>
                }
                {candidate.resultWorkValueByCandidate[0].workValueDetail.length > 0 &&
                  <div className="personality-info">
                    <div className="wrapper-title">
                      <h4>Work Value</h4>
                    </div>
                    <div className="work-value-assessment">
                      {candidate.resultWorkValueByCandidate[0].workValueDetail.map((data, index) =>
                        getWorkValueImage(data, index)
                      )
                      }
                    </div>
                    <Components.charts.workValueChart isLoading={false} data={getWorkValueData(candidate.resultWorkValueByCandidate[0].workValueDetail)} />
                    <div className="footer-info d-flex">
                      <div className="grey-card flex-6" style={{overflowY:'auto'}}>
                        Keterangan : <br />
                        Work value individu dibagi menjadi 5 aspek. Nilai terbesar yang diperoleh individu menunjukkan bahwa nilai tersebut menjadi hal yang paling penting untuk mendorongnya dapat bekerja secara optimal.
                        {/* {candidate.resultWorkValueByCandidate[0].workValueDesc} */}
                      </div>
                      <div className="grey-card flex-6">
                        Norm : <br />
                        {candidate.resultWorkValueByCandidate[0].workValueNorm}
                      </div>
                    </div>
                  </div>
                }
              </div>
            </>
            :
            <ClockLoader size={75} color={"#2980B9"} />
          }
        </div>
      </div >
    </>
  )
}

export default ModalResult