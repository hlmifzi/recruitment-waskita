import gql from 'graphql-tag';
import AdminQueryGql from './AdminQueryGql'

export const getCandidateList = gql`${AdminQueryGql.candidateList}`
export const getJenisKelamin = gql`${AdminQueryGql.statisticCandidateByGender}`
export const getUniversitas = gql`${AdminQueryGql.statisticCandidateByUniversity}`
export const getUsia = gql`${AdminQueryGql.statisticCandidateByAge}`
export const getJumlahPeserta = gql`${AdminQueryGql.statisticCandidateByMonth}`
