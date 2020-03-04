import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import ClientApollo from './services/apolloClient/ClientApollo'
import AuthenticatedRoutes from './routes/AuthenticatedRoutes'
import AuthenticatedRoutesRecruitment from './routes/AuthenticatedRoutesRecruitment'
import UnAuthenticatedRoutes from './routes/UnAuthenticatedRoutes'
import gql from "graphql-tag";
import 'react-toastify/dist/ReactToastify.css';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    isAdmin @client
  }`

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN)
  console.log("IsLoggedIn -> data", data)
  return (
    <>
      {data.isLoggedIn ? (
        data.isAdmin === '1' ?
          <AuthenticatedRoutes /> :
          <AuthenticatedRoutesRecruitment />
      ) :
        <UnAuthenticatedRoutes />}
    </>
  )
}

function App() {
  return (
    <ApolloProvider client={ClientApollo}>
      <IsLoggedIn />
    </ApolloProvider>
  );
}

export default App;
