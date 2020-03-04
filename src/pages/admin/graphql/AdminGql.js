import gql from 'graphql-tag';
import AdminQueryGql from './AdminQueryGql'

export const getCandidateList = gql`${AdminQueryGql.candidateList}`
export const getJenisKelamin = gql`${AdminQueryGql.candidateList}`
export const getUniversitas = gql`${AdminQueryGql.candidateList}`
export const getUsia = gql`${AdminQueryGql.candidateList}`
