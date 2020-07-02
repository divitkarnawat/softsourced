
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
    change_p_slide_id = (p_slide_id) =>
    {
        this.setState({p_slide_id});
    }
    render()
    {
       
        return(
            <>
            <Parallax contactUpdate = {this.contactUpdate.bind(this)} />
            <div id = "ABOUT"><About/></div>
        
            <Product change_p_slide_id = {this.change_p_slide_id.bind(this)} />
            <div id = "PROJECTS"><Projects /></div> 
            <WhyUs/>
            <div id = "TEAM"><Team /></div>
            <div id = "PRODUCTS & PRICING"><Pricing support_catUpdate = {this.support_catUpdate.bind(this)} p_slide_id = {this.state.p_slide_id} /></div>
            <div id = "BLOG"><Blog/></div>
            <div id = "CONTACT"><Contact propid = {this.state.contact_ran} email={this.state.email} support={this.state.support} support_cat_id = {this.state.support_cat_id} support_id = {this.state.support_id} /></div>
            </>
        )
    }
    
}



export default HomePage;