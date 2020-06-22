import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './views/homepage';
import BlogPage from './views/blogpage';
function App() {
  return (
  <Router>
  <Header />
  <Switch>
    <Route exact path = "/" component = {HomePage} />
    <Route path = "/blog/:author/:blogid" component = {BlogPage} />
  </Switch>
  <Footer />
  </Router>    
  );
}

export default App;
