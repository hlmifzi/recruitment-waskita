import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TableParticipant from './TableParticipant'
import ParticipantStatistic from './ParticipantStatistic'

const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}

const Dashboard = props => {
  const [active, setActive] = useState('statistik');

  return (
    <div className="body-dashboard">
      <div className="tab-wrapper">
        <button className={`btn-tab ${active === 'statistik' ? 'active' : ''}`} onClick={() => setActive('statistik')}>Data Statistik</button>
        <button className={`btn-tab ${active === 'peserta' ? 'active' : ''}`} onClick={() => setActive('peserta')}>Data Peserta</button>
      </div>
      <div className="wrapper-content">
        {active === 'statistik' && <ParticipantStatistic />}
        {active === 'peserta' && <TableParticipant />}
      </div>
    </div>
  )
}


Dashboard.propTypes = PropTypesParams
Dashboard.defaultProps = DefaultPropsParams

export default Dashboard
