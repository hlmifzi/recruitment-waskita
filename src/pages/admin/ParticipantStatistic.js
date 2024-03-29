import React from 'react'
import Components from '../../components/Components'
import { useQuery } from '@apollo/react-hooks';
import {
  getJumlahPeserta,
  getJenisKelamin,
  getUniversitas,
  getUsia
} from './graphql/AdminGql'
import { Row } from 'react-bootstrap';
import useChartHelper from '../../hooks/useChartHelper';

const ParticipantStatistic = () => {

  let { loading: isLoadingJmlPeserta, error: errJmlPeserta, data: dataJmlPeserta = {} } = useQuery(getJumlahPeserta)
  if (!isLoadingJmlPeserta)
    dataJmlPeserta = useChartHelper.lineChart(dataJmlPeserta, "statisticCandidateByMonth", "month");

  let { loading: isLoadingJenisKelamin, error: errJenisKelamin, data: dataJenisKelamin = [] } = useQuery(getJenisKelamin)
  if (!isLoadingJenisKelamin)
    dataJenisKelamin = useChartHelper.donutChart(dataJenisKelamin, "statisticCandidateByGender", "gender");

  let { loading: isLoadingUniversitas, error: errUniversitas, data: dataUniversitas = {} } = useQuery(getUniversitas)
  if (!isLoadingUniversitas)
    dataUniversitas = useChartHelper.barChart(dataUniversitas, "statisticCandidateByUniversity", "university");

  let { loading: isLoadingUsia, error: errUsia, data: dataUsia = {} } = useQuery(getUsia)
  if (!isLoadingUsia)
    dataUsia = useChartHelper.barChart(dataUsia, "statisticCandidateByAge", "age");

  if (errJmlPeserta) return `Error! ${errJmlPeserta.message}`
  if (errJenisKelamin) return `Error! ${errJenisKelamin.message}`
  if (errUniversitas) return `Error! ${errUniversitas.message}`
  if (errUsia) return `Error! ${errUsia.message}`


  return (
    <Row>
      <Components.charts.lineChart isLoading={isLoadingJmlPeserta} title="Jumlah Peserta" colMd={8} data={dataJmlPeserta} />
      <Components.charts.donatChart title="Jenis Kelamin" loading={isLoadingJenisKelamin} colMd={4} data={dataJenisKelamin} />
      <Components.charts.barChart title="Universitas" isLoading={isLoadingUniversitas} colMd={6} data={dataUniversitas} />
      <Components.charts.barChart title="Usia" isLoading={isLoadingUsia} colMd={6} data={dataUsia} />
    </Row>
  )
}

export default ParticipantStatistic
