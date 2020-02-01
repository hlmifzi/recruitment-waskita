import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import Components from '../../components/Components'
import { useQuery } from '@apollo/react-hooks';
import { getJumlahPeserta } from './graphql/AdminGql'
import { Row } from 'react-bootstrap';


const ParticipantStatistic = () => {

  const [isLoadingJumlahPeserta, setIsLoadingJumlahPeserta] = useState(false)
  const [isLoadingJenisKelamin, setIsLoadingJenisKelamin] = useState(false)
  const [isLoadingUniversitas, setIsLoadingUniversitas] = useState(false)
  const [isLoadingUsia, setIsLoadingUsia] = useState(false)

  const { loading, error, data } = useQuery(getJumlahPeserta)
  console.log("TCL: ParticipantStatistic -> data", data)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Row>
      <Components.charts.lineChart title="Jumlah Peserta" isLoading={isLoadingJumlahPeserta} colMd={8} />
      <Components.charts.donatChart title="Jenis Kelamin" isLoading={isLoadingJumlahPeserta} colMd={4} />
      <Components.charts.barChart title="Universitas" isLoading={isLoadingJumlahPeserta} colMd={6} />
      <Components.charts.barChart title="Usia" isLoading={isLoadingJumlahPeserta} colMd={6} />
    </Row>
  )
}

export default ParticipantStatistic
