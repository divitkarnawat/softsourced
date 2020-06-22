import React from 'react';
import {BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './views/homepage';
import BlogPage from './views/blogpage';
function App() {
  return (
  <BrowserRouter>
  <Header />
  <HomePage/>
  {/* <BlogPage /> */}
  <Footer />
  </BrowserRouter>    
  );
}

export default App;
