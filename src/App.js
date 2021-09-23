import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/Routes'
import { bounce } from 'react-animations'
// import firebase from './firebase'
// import { Switch, Route } from 'react-router-dom';

//we installed npm install jquery popper.js
//carousel implementation 'https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/'
//Bootstrap stuff!
//  import Bootstrap from '/node_modules/react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
// import CityCarousel from './partials/CityCarousel'

function App() {

  // const [loading, setLoading] = useState(false)
  // const ref = firebase.firestore().collection("Lizzie")
  // if(loading){
  //   return <h1>Loading...</h1>
  // }

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
