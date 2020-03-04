import React, { useState } from 'react'
import Components from '../../components/Components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@apollo/react-hooks';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { getCandidateList } from './graphql/AdminGql'

const TableParticipant = props => {
  const [showModal, setShowModal] = useState(false);

  const { loading, error: err1, data: listParticipant } = useQuery(getCandidateList)
  if (err1) return `Error! ${err1.message}`

  return (
    <>
      {showModal &&
        <Components.modalResult
          closeModal={(bool) => setShowModal(bool)}
          isShow={showModal}
        />
      }
      <div className="wrapper-table-participant">
        <table className="table-participant">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Peserta</th>
              <th>Jenis Kelamin</th>
              <th>Usia <FontAwesomeIcon icon={faAngleDown} /></th>
              <th>Asal Universitas</th>
              <th>No. KTP</th>
              <th>Email</th>
              <th>Tanggal Test <FontAwesomeIcon icon={faAngleDown} /></th>
              <th>Hasil</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {loading ? 'Loading ...' :
              listParticipant.candidateList.results.length > 0 &&
              listParticipant.candidateList.results.map((val, index) =>
                <tr>
                  <td>{index + 1}.</td>
                  <td className="cursor-pointer" onClick={() => { setShowModal(true); document.body.classList.add("scroll-locked") }}>{val.name}</td>
                  <td>{val.gender === 'LK' ? 'Laki-laki' : 'Perempuan'}</td>
                  <td>{val.age}</td>
                  <td>{val.university.university}</td>
                  <td>{val.noKtp}</td>
                  <td>{val.email}</td>
                  <td>{val.createdAt}</td>
                  <td className="td-url" onClick={() => { setShowModal(true); document.body.classList.add("scroll-locked") }}>Download</td>
                  <td>Keterangan</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableParticipant