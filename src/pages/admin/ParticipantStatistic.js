import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import Components from '../../components/Components'
import { useQuery } from '@apollo/react-hooks';
import { getJumlahPeserta } from './graphql/AdminGql'


const ParticipantStatistic = () => {

  const [isLoadingJumlahPeserta, setIsLoadingJumlahPeserta] = useState(false)
  const [isLoadingJenisKelamin, setIsLoadingJenisKelamin] = useState(false)
  const [isLoadingUniversitas, setIsLoadingUniversitas] = useState(false)
  const [isLoadingUsia, setIsLoadingUsia] = useState(false)

  const { loading, error, data } = useQuery(getJumlahPeserta)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <Components.charts.lineChart isLoading={isLoadingJumlahPeserta} colMd={8} />
    </>
  )
}

export default ParticipantStatistic
