import React from 'react';
import Components from './components/Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'
import SignIn from './pages/auth/SignIn';



function App() {
  return (
    <>
      {/* <Components.navbar /> */}
      <SignIn />
    </>
  );
}

export default App;
