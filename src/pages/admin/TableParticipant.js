import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Components from '../../components/Components'
import { gql } from "apollo-boost";
import ClientApollo from '../../services/apolloClient/ClientApollo'


const TableParticipant = props => {
  const [listParticipant, setListParticipant] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    await axios.get("http://www.mocky.io/v2/5e299e803000004a45faf17d")
      .then(data =>
        setListParticipant(data.data.participants)
      )
  }

  const graphQlgetdata = () => {
    ClientApollo.query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
      .then(result => console.log(result));
  }

  useEffect(() => {
    getData()
    graphQlgetdata()
  }, [])

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
              <th>Usia</th>
              <th>Asal Universitas</th>
              <th>No. KTP</th>
              <th>Email</th>
              <th>Tanggal Test</th>
              <th>Hasil</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {
              listParticipant.length > 0 &&
              listParticipant.map((val, index) =>
                <tr>
                  <td>{index + 1}.</td>
                  <td className="cursor-pointer" onClick={() => { setShowModal(true); document.body.classList.add("scroll-locked") }}>{val.nama}</td>
                  <td>{val.jenis_kelamin}</td>
                  <td>{val.usia}</td>
                  <td>{val.universitas}</td>
                  <td>{val.no_ktp}</td>
                  <td>{val.email}</td>
                  <td>{val.tgl_test}</td>
                  <td className="td-url">{val.url}</td>
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