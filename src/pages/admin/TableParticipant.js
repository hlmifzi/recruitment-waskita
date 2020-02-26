import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Components from '../../components/Components'
import { gql } from "apollo-boost";
import ClientApollo from '../../services/apolloClient/ClientApollo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const TableParticipant = props => {
  const [listParticipant, setListParticipant] = useState([
    {
      "nama": "Hazim",
      "jenis_kelamin": "Laki-laki",
      "usia": 23,
      "universitas": "IPB",
      "no_ktp": "3273201234560001",
      "email": "hazim@email.com",
      "tgl_test": "01-10-2020",
      "url": "Download Hasil"
    },
    {
      "nama": "Rachim",
      "jenis_kelamin": "Laki-laki",
      "usia": 20,
      "universitas": "IPB",
      "no_ktp": "3273201234560002",
      "email": "rachim@email.com",
      "tgl_test": "10-10-2020",
      "url": "Download Hasil"
    },
    {
      "nama": "Irsal",
      "jenis_kelamin": "Laki-laki",
      "usia": 22,
      "universitas": "ITB",
      "no_ktp": "3273201234560003",
      "email": "irsal@email.com",
      "tgl_test": "20-10-2020",
      "url": "Download Hasil"
    },
    {
      "nama": "Helmi",
      "jenis_kelamin": "Laki-laki",
      "usia": 90,
      "universitas": "UI",
      "no_ktp": "3273201234560004",
      "email": "helmi@email.com",
      "tgl_test": "01-10-2020",
      "url": "Download Hasil"
    }
  ]
  );
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    // const { data } = await axios.get("http://www.mocky.io/v2/5e299e803000004a45faf17d")

    // setListParticipant(data.participants)

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
              <th>Usia <FontAwesomeIcon icon={faAngleDown}/></th>
              <th>Asal Universitas</th>
              <th>No. KTP</th>
              <th>Email</th>
              <th>Tanggal Test <FontAwesomeIcon icon={faAngleDown}/></th>
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
                  <td className="td-url" onClick={() => { setShowModal(true); document.body.classList.add("scroll-locked") }}>{val.url}</td>
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