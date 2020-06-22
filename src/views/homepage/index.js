import React, {Component} from 'react';
import About from './About/About';
import Parallax from '../../components/Parallax/Parallax';
import Product from './Product_Pricing/Product';
import Projects from './Projects';
import Blog from './Blog';
import WhyUs from './WhyUs';
import Pricing from './Pricing';
import Team from './Team';
import Contact from './Contact';


class HomePage extends Component  {

    constructor(props)
    {
        super(props);
        this.checked_btns = new Set();
        this.support_cat = new Set();
        this.checked_btns.add(0);
        this.state = {
            email: '',
            support : this.checked_btns,
            support_cat_id: '',
            support_id: 0
        }
    }

    contactUpdate = (email, support)=>
    {
        this.setState({email, support});
    }
    support_catUpdate = (support_id, support_cat_id) =>
    {
        this.setState({support_id, support_cat_id});
    }
    render()
    {
       
        const contact_ran = Math.random();
        return(
            <>
            <Parallax contactUpdate = {this.contactUpdate.bind(this)} />
            <div id = "ABOUT"><About/></div>
            <Product/>
            <div id = "PROJECTS"><Projects /></div> 
            <WhyUs/>
            <div id = "TEAM"><Team /></div>
            <div id = "PRODUCT & PRICING"><Pricing support_catUpdate = {this.support_catUpdate.bind(this)} /></div>
            <div id = "BLOG"><Blog/></div>
            <div id = "CONTACT"><Contact propid = {contact_ran} email={this.state.email} support={this.state.support} support_cat_id = {this.state.support_cat_id} support_id = {this.state.support_id} /></div>
            </>
        )
    }
    
}



export default HomePage;