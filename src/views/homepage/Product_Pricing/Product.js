import React from 'react';
import {Grid, Container, Box} from '@material-ui/core';

import './Product.scss'
import prodSym from '../../../assets/img/prod_sym.svg';
export default function Product(props)
{
    const products = {
        titles: ["E-COMMERCE","MOBILE APPLICATIONS","API DEVELOPMENT"],
        desc: ["We develop e-commerce websites","We develop mobile applications (iOS, Android).","We build APIs."]
    }
    return(
        <>
        <div className="section prod_s">
            
            <h2 className="title">
            These are our products:
            </h2>

            <div>
                <Container >
                    <div className = "prod_items">
                    {products.titles.map((title,idx)=>{
                        return(
                                <a href="#PRODUCT & PRICING">
                                <div className="prod_item" onClick={()=>props.change_p_slide_id(idx)}> 
                                <img src={prodSym} className="prodSym"/>
                                <h4 >{title}</h4>
                                <p className="desc" style={{width: `100%`}}>{products.desc[idx]}</p>
                                </div>
                                </a>
                        );
                    })}
                    </div>
                    <Grid container  direction="row-reverse">
                        <Grid item  md={4} xs={12} style={{textAlign: 'center'}}>
                            <a href="/#PRODUCT & PRICING">See products & pricing &raquo;</a>
                        </Grid>
                    
                </Grid>
                    <Grid container >
                        <Grid item md={6}>
                            <div className="part part-specific">
                            <h3 className=""> Softsourced has it. </h3>
                            <p className="desc">Softsourced has become a go-to tech company for ambitious small and medium-sized businesses (SMEs), including startups.<br />Whether you need us as project lead or surrogate, our team of designers and developers provides services all along a project lifecycle and is ready to take on yet another success story.<br />We are a trusted partner in the development of Mobile Applications, E-Commerce Websites and APIs.</p>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                        <div className="part">
                            <h3 className=""> The nature of our services is two-fold: </h3>
                            <ol>
                                <li> <h4> PROJECT LEAD</h4></li>
                                <p className="desc">We carry out your entire project for you. From start to finish. </p>

                            <li><h4>PROJECT SURROGATE</h4></li>
                                <p className="desc">You take the project lead. We support you where needed.</p>
                            </ol>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
        </>
    );
}