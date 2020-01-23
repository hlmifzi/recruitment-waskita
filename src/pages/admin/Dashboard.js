import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const PropTypesParams = {
    isClick: PropTypes.array,
}

const DefaultPropsParams = {
    isClick: false,
}

const Dashboard = props => {
    const [active, setActive] = useState('statistik');
    const [listParticipant, setListParticipant] = useState([]);

    const getData = async () => {
     await axios.get("http://www.mocky.io/v2/5e299e803000004a45faf17d")
        .then(data =>
          setListParticipant(data.data.participants)
        )
    }
    useEffect(() => {
      getData()
    },[])

    return (
      <div className="body-dashboard">
        <div className="tab-wrapper">
          <button className={`btn-tab ${active == 'statistik' ? 'active' : ''}`} onClick={() => setActive('statistik')}>Data Statistik</button>
          <button className={`btn-tab ${active == 'peserta' ? 'active' : ''}`} onClick={() => setActive('peserta')}>Data Peserta</button>
        </div>
        <div className="wrapper-content">
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
                        <td>{val.nama}</td>
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
        </div>
      </div>
    )
}


Dashboard.propTypes = PropTypesParams
Dashboard.defaultProps = DefaultPropsParams

export default Dashboard
