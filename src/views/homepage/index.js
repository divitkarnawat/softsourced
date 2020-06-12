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
        this.checked_btns.add(0);
        this.state = {
            email: '',
            support: this.checked_btns
        }
    }

    contactUpdate = (email, support)=>
    {
        this.setState({email, support});
    }
    render()
    {
        console.log('in index file' + this.state.email);
        return(
            <>
            <Parallax contactUpdate = {this.contactUpdate.bind(this)} />
            <div id = "ABOUT"><About/></div>
            <Product/>
            <div id = "PROJECTS"><Projects /></div> 
            <WhyUs/>
            <Team />
            <div id = "PRODUCT & PRICING"><Pricing /></div>
            <div id = "BLOG"><Blog/></div>
            <div id = "CONTACT"><Contact email={this.state.email} support={this.state.support}  /></div>
            </>
        )
    }
    
}



export default HomePage;