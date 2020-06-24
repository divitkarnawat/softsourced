import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './views/homepage';
import BlogPage from './views/blogpage';
import PrivacyPolicy from './views/documents/PrivacyPolicy';
import TnC from './views/documents/TnC';
function App() {
  return (
  <Router>
  <Header />
  <Switch>
    <Route exact path = "/" component = {HomePage} />
    <Route path = "/blog/:author/:blogid" component = {BlogPage} />
    <Route path = "/privacy-policy/" component = {PrivacyPolicy} />
    <Route path = "/terms-and-conditions/" component = {TnC} />
  </Switch>
  <Footer />
  </Router>    
  );
}

export default App;
