import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import { ApolloProvider } from '@apollo/react-hooks'
import ClientApollo from './services/apolloClient/ClientApollo'
import AuthenticatedRoutes from './routes/AuthenticatedRoutes'

function App() {
  return (
    <ApolloProvider client={ClientApollo}>
      <AuthenticatedRoutes />
    </ApolloProvider>
  );
}

export default App;
