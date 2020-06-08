import React from 'react';
import About from './About/About';
import Parallax from '../../components/Parallax/Parallax';
import Product from './Product_Pricing/Product';
import Projects from './Projects';
import Blog from './Blog';
import WhyUs from './WhyUs';
import Pricing from './Pricing';
import Team from './Team';
import Contact from './Contact';

export default function HomePage()
{
    return(
        <>
        <Parallax />
        <div id = "ABOUT"><About/></div>
        <Product/>
        <div id = "PROJECTS"><Projects /></div>
        <WhyUs/>
        <Team />
        <div id = "PRODUCT & PRICING"><Pricing /></div>
        <div id = "BLOG"><Blog/></div>
        <div id = "CONTACT"><Contact /></div>
        </>
    )
}
