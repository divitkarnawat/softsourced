import React , { Component, Suspense, lazy}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import Header from './components/Header/Header.js';
import Loader from './components/Loader';
const ProjectPage = lazy(() => import('./views/projectpage/ProjectPage'));
const Footer = lazy(()=> import('./components/Footer/Footer.js'));
const BlogPage = lazy(()=>import('./views/blogpage'));
const PrivacyPolicy = lazy(()=>import('./views/documents/PrivacyPolicy'));
const TnC = lazy(()=>import('./views/documents/TnC'));
const Imprint = lazy(()=>import('./views/documents/Imprint'));

const About = lazy(()=>import('./views/homepage/About/About'));
const Parallax = lazy(()=>import('./components/Parallax/Parallax'));
const Projects = lazy(()=>import('./views/homepage/Projects'));
const Blog = lazy(()=>import('./views/homepage/Blog'));
const WhyUs = lazy(()=>import('./views/homepage/WhyUs'));
const Pricing = lazy(()=>import('./views/homepage/Pricing'));
const Team = lazy(()=>import('./views/homepage/Team'));
const Contact = lazy(()=>import('./views/homepage/Contact'));
const Product = lazy(()=>import('./views/homepage/Product_Pricing/Product'));

// const HomePage = lazy(() => import('./views/homepage'));

class App extends Component {
  constructor(props)
  {
    super(props);
    this.checked_btns = new Set();
        this.support_cat = new Set();
        this.checked_btns.add(0);
        this.state = {
          p_slide_id: 0,
            email: '',
            support : this.checked_btns,
            support_cat_id: 'hello',
            support_id: 0,
            contact_ran : {
                email: 0,
                support: 0
            }
        }
 
  }
 
  change_p_slide_id = (p_slide_id) =>
    {
        this.setState({p_slide_id});
    }

    contactUpdate = (email, support, ran)=>
    {
        let contact_ran = {...this.state.contact_ran, email: ran};
        this.setState({email, support, contact_ran});
    }
    support_catUpdate = (support_id, support_cat_id, ran) =>
    {
        let contact_ran = {...this.state.contact_ran, support: ran};
        this.setState({support_id, support_cat_id, contact_ran});
    }
   
    render()
    {

    
  return (
    <Suspense fallback={<Loader />}>
  <Router>
  <Header />
 
  <Switch>
    <Route path = "/blog/:author/:blogid" component = {BlogPage} />
    <Route path = "/projects/:pname" component = {ProjectPage} />
    <Route path = "/privacy-policy/" component = {PrivacyPolicy} />
    <Route path = "/terms-and-conditions/" component = {TnC} />
    <Route path = "/imprint/" component = {Imprint} />
    <Route path = "/data-protection/" component = {PrivacyPolicy} />

    <Route path = "/"  >



    <Parallax contactUpdate = {this.contactUpdate.bind(this)} />
            <div id = {this.props.t('common:nav.0')}><About/></div>
            <Product change_p_slide_id = {this.change_p_slide_id.bind(this)} />
            <div id = {this.props.t('common:nav.2')}><Projects /></div> 
            <WhyUs/>
            <div id = {this.props.t('common:nav.3')}><Team /></div>
            <div id = {this.props.t('common:nav.1')}><Pricing support_catUpdate = {this.support_catUpdate.bind(this)} p_slide_id = {this.state.p_slide_id} /></div>
            <div id ={this.props.t('common:nav.4')}><Blog/></div>
            <div id = {this.props.t('common:nav.5')}><Contact propid = {this.state.contact_ran} email={this.state.email} support={this.state.support} support_cat_id = {this.state.support_cat_id} support_id = {this.state.support_id} /></div>

      {/* <HomePage p_slide_id = {this.state.p_slide_id} change_p_slide_id = {this.change_p_slide_id.bind(this)} />  */}
      </Route>
  
  </Switch>
  
 
  <Footer  change_p_slide_id = {this.change_p_slide_id.bind(this)} />
 
  </Router>    
  </Suspense>
  );
    }
}

export default withTranslation()(App);
