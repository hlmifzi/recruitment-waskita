import React from 'react';
import Components from './components/Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import Dashboard from './pages/admin/Dashboard';



function App() {
  return (
    <>
      <Components.navbar />
      <Dashboard />
    </>
  );
}

export default App;
