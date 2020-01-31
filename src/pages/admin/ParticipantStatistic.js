import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Charts from '../../components/charts/Charts'
import { useQuery } from '@apollo/react-hooks';
import { getPokemon } from './graphql/ParticipantStatisticGraphql'

const PropTypesParams = {
  isClick: PropTypes.array,
}

const DefaultPropsParams = {
  isClick: false,
}

const ParticipantStatistic = props => {

  const { loading, error, data } = useQuery(getPokemon)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <div className="container-highchart">
        <div className="card flex-8">
          <Charts.barChart />
        </div>
        <div className="card flex-4">
          <Charts.barChart />
        </div>
      </div>
      <div className="container-highchart">
        <div className="card flex-6">
          <Charts.barChart />
        </div>
        <div className="card flex-6">
          <Charts.barChart />
        </div>
      </div>
    </>
  )
}


ParticipantStatistic.propTypes = PropTypesParams
ParticipantStatistic.defaultProps = DefaultPropsParams

export default ParticipantStatistic
