import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import SignIn from './pages/auth/SignIn';
import { ApolloProvider } from '@apollo/react-hooks'
import ClientApollo from './services/apolloClient/ClientApollo'
import Admin from './pages/admin/Admin'
import { Router } from "@reach/router"

function App() {
  return (
    <ApolloProvider client={ClientApollo}>
      <Router>
        <SignIn path="/" />
        <Admin path="/admin" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
