import React, { useState } from 'react'
import Components from '../../components/Components'
import { useQuery } from '@apollo/react-hooks';
import { getJumlahPeserta } from './graphql/AdminGql'
import { Row } from 'react-bootstrap';

const ParticipantStatistic = () => {

  const [isLoadingUniversitas, setIsLoadingUniversitas] = useState(false)
  const [isLoadingUsia, setIsLoadingUsia] = useState(false)
  const [dataUniversitas, setDataUniversitas] = useState(['UI', 'ITB', 'ITS', 'UNPAD', 'UNJ', 'Binus', 'UGM', 'Trisakti', 'UPH', 'UMN'])
  const [dataUsia, setDataUsia] = useState(['22', '23', '24', '25', '26', ' 27', '28', '29', '30'])

  // const { loading: isLoadingJumlahPeserta, error: err1, data: dataJumlahPeserta } = useQuery(getJumlahPeserta)
  // const { loading: isLoadingJenisKelamin, error: err2, data: dataJenisKelamin } = useQuery(getJumlahPeserta)
  // const { loading: isLoadingUniversitas, error: err3, data: dataUniversitas } = useQuery(getJumlahPeserta)
  // const { loading: isLoadingUsia, error: err4, data: dataUsia } = useQuery(getJumlahPeserta)

  // if (err1) return `Error! ${err1.message}`
  // if (err2) return `Error! ${err2.message}`
  // if (err3) return `Error! ${err3.message}`
  // if (err4) return `Error! ${err4.message}`


  return (
    <Row>
      <Components.charts.lineChart title="Jumlah Peserta" isLoading={false} colMd={8} />
      <Components.charts.donatChart title="Jenis Kelamin" colMd={4} />
      <Components.charts.barChart title="Universitas" isLoading={isLoadingUniversitas} colMd={6} data={dataUniversitas} />
      <Components.charts.barChart title="Usia" isLoading={isLoadingUsia} colMd={6} data={dataUsia} />
    </Row>
  )
}

export default ParticipantStatistic
