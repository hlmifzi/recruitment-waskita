import React from 'react';
import Components from './components/Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import Dashboard from './pages/admin/Dashboard';
import SignIn from './pages/auth/SignIn';
import { ApolloProvider } from '@apollo/react-hooks'
import ClientApollo from './services/apolloClient/ClientApollo'



function App() {
  return (
    <ApolloProvider client={ClientApollo}>
      <Components.header />
      <Dashboard />
      {/* <SignIn /> */}
    </ApolloProvider>
  );
}

export default App;
