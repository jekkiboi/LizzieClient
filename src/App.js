import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/Routes'

import { bounce } from 'react-animations'

function App() {



  return (
    <div 
    className='app-index' 
    style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
    }}
    >
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
