import React , { Suspense, lazy}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Loader from './components/Loader';
import ProjectPage from './views/projectpage/ProjectPage';
const Footer = lazy(()=> import('./components/Footer/Footer.js'));
const BlogPage = lazy(()=>import('./views/blogpage'));
const PrivacyPolicy = lazy(()=>import('./views/documents/PrivacyPolicy'));
const TnC = lazy(()=>import('./views/documents/TnC'));
const HomePage = lazy(() => import('./views/homepage'));

function App() {
  return (
  <Router>
  <Header />
  <Suspense fallback={<Loader />}>
  <Switch>
    <Route exact path = "/" component = {HomePage} />
    <Route path = "/blog/:author/:blogid" component = {BlogPage} />
    <Route path = "/projects/:pname" component = {ProjectPage} />
    <Route path = "/privacy-policy/" component = {PrivacyPolicy} />
    <Route path = "/terms-and-conditions/" component = {TnC} />
  </Switch>
  
  
  <Footer />
  </Suspense>
  </Router>    
  );
}

export default App;
