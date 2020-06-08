import React from 'react';
import {BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './views/homepage';
function App() {
  return (
  <BrowserRouter>
  <Header />
  <HomePage/>
  <Footer />
  </BrowserRouter>    
  );
}

export default App;
