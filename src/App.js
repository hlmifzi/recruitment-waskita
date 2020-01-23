import React from 'react';
import Components from './components/Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import Dashboard from './pages/admin/Dashboard';
import SignIn from './pages/auth/SignIn';



function App() {
  return (
    <>
      <Components.header />
      <Dashboard />
      {/* <SignIn /> */}
    </>
  );
}

export default App;
