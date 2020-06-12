import React from 'react';
import {Grid, Container, Box} from '@material-ui/core';

import './Product.scss'
import prodSym from '../../../assets/img/prod_sym.svg';
export default function Product()
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
                <Grid container >
                    {products.titles.map((title,idx)=>{
                        return(
                            <Grid item xs={12} md={4}>
                                <div className="prod_item"> 
                                <img src={prodSym} className="prodSym"/>
                                <h4 >{title}</h4>
                                <p className="desc">{products.desc[idx]}</p>
                                </div>
                            </Grid>
                        );
                    })}
                    </Grid>
                    <Grid container  direction="row-reverse">
                        <Grid item  md={4} xs={12} style={{textAlign: 'center'}}>
                            <a href="/">See products & pricing >></a>
                        </Grid>
                    
                </Grid>
                    <Grid container >
                        <Grid item md={6}>
                            <div className="part part-specific">
                            <h3 className=""> Softsourced has it. </h3>
                            <p className="desc">Softsourced is your go-to tech company providing excellence all along the project lifecycle, from project start to finish. Whether you need us as project lead or surrogate - we have done it all and we only get better.
We are a trusted partner with years of experience in the development of Mobile Applications, E-Commerce Websites and APIs.</p>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                        <div className="part">
                            <h3 className=""> The nature of our services is two-fold: </h3>
                            <ol>
                                <li> <h4> PROJECT LEAD</h4></li>
                                <p className="desc">We build the product you are asking for. From A - Z. </p>

                            <li><h4>PROJECT SURROGATE</h4></li>
                                <p className="desc">You take the lead. We support you in realizing your goals</p>
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