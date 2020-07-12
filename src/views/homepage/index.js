
import React, {Component, lazy, Suspense} from 'react';

import {withTranslation} from 'react-i18next';
import About from './About/About';
import Parallax from '../../components/Parallax/Parallax';
import Loader from '../../components/Loader';

// const About = lazy(()=>import('./About/About'));
// const Parallax = lazy(()=>import('../../components/Parallax/Parallax'));
const Projects = lazy(()=>import('./Projects'));
const Blog = lazy(()=>import('./Blog'));
const WhyUs = lazy(()=>import('./WhyUs'));
const Pricing = lazy(()=>import('./Pricing'));
const Team = lazy(()=>import('./Team'));
const Contact = lazy(()=>import('./Contact'));
const Product = lazy(()=>import('./Product_Pricing/Product'));


// import Projects from './Projects';
// import Blog from './Blog';
// import WhyUs from './WhyUs';
// import Pricing from './Pricing';
// import Team from './Team';
// import Contact from './Contact';
// import Product from './Product_Pricing/Product';


class HomePage extends Component  {

    constructor(props)
    {
        super(props);
        this.checked_btns = new Set();
        this.support_cat = new Set();
        this.checked_btns.add(0);
        this.state = {
            load: false,
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

  componentDidMount()
  {
    document.addEventListener('scroll', ()=>{
        if(!this.state.load)
        {
            this.setState({load: true})
        }
    });
    setTimeout(()=>{    window.scroll({
        top: 1,
        behavior: 'smooth'
      });}, 0)

  }
    
    render()
    {
       
        return(
            <>
            
                  <Parallax contactUpdate = {this.contactUpdate.bind(this)} />
  
      
            <div id = {this.props.t('common:nav.0')}><About/></div>
        
         <Suspense fallback={<Loader />} >
            {
             this.state.load ? 
           <Product change_p_slide_id = {this.props.change_p_slide_id} /> :  ""
            }
            

            <div id = {this.props.t('common:nav.2')} >
            {
             this.state.load ? 
                <Projects /> : ""
            }
                
                </div> 

                {this.state.load ? <WhyUs/> : ""}
             
            <div id = {this.props.t('common:nav.3')} >
                
            {this.state.load ? <Team /> : ""}
                
                </div>
            <div id = {this.props.t('common:nav.1')} >
                
            {this.state.load ? <Pricing support_catUpdate = {this.support_catUpdate.bind(this)} p_slide_id = {this.props.p_slide_id} /> : ""}
                
                </div>

            <div id ={this.props.t('common:nav.4')} >
            {this.state.load ? <Blog/> : ""}
            </div>
            <div id = {this.props.t('common:nav.5')} >
            {this.state.load ? <Contact propid = {this.state.contact_ran} email={this.state.email} support={this.state.support} support_cat_id = {this.state.support_cat_id} support_id = {this.state.support_id} /> : ""}
            </div>
         </Suspense>
         
  </>
        );
    }
    
}



export default withTranslation()(HomePage);