import React from 'react';
import MainNavbar from './components/navbar/MainNavbar'
import ControlledCarousel from './components/carousel/ControlledCarousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_main.scss'



function App() {
  return (
    <>
      <MainNavbar />
      <ControlledCarousel />
    </>
  );
}

export default App;
