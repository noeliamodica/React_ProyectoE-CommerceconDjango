import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';


import { useSelector } from 'react-redux';


function App() {
  return (
    <Router>
     
      <Header />
      <main className='py-3'>
        <Container> 
        <Routes>
          <Route path='/' Component={HomeScreen} exact/>
          <Route path='/login' Component={LoginScreen} />
          <Route path='/product/:id' Component={ProductScreen} exact/>
          </Routes>
        </Container>
      </main>
      <Footer />
     
    </Router>
  );
}

export default App;
