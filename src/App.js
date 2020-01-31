import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import { ApolloProvider } from '@apollo/react-hooks'
import ClientApollo from './services/apolloClient/ClientApollo'
import AuthenticatedRoutes from './routes/AuthenticatedRoutes'
import UnAuthenticatedRoutes from './routes/UnAuthenticatedRoutes'

function App() {
  const [auth, setAuth] = useState(true) //set true for login
  return (
    <ApolloProvider client={ClientApollo}>
      {
        auth ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />
      }
    </ApolloProvider>
  );
}

export default App;
