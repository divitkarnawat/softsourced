import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import {HashLink as Link} from 'react-router-hash-link';
import './Footer.scss';
import logo from '../../assets/img/logo.jpg';
class Footer extends Component
{
    render()
    {
        return(
            <div className="footer_section">
                <Grid container >
                    <Grid item className="cb" sm = {4} xs = {12}>
                    <div style={{textAlign: `center`}} >
                    <Link smooth to="/#root">
           <img src = {logo} style = {{ width: `100px`, height: `93.33px`}} />
           </Link>

           </div>


                    </Grid>
                    <Grid item className="cd" sm = {4} xs = {12} >
                        <div className="contact_details">
        <div>Address</div>
                            <div>Contact Number</div>
                            <div> kontakt@softsourced.de</div>
                        </div>
                    </Grid>
                    <Grid item className="cf" sm = {4} xs = {12}>
                        <div className="flinks">
                        <div><a href="/data-protection">Data Protection</a></div>
                        <div><a href="/imprint">Imprint</a></div>
                       
                        
                        </div>
                    </Grid>
                </Grid>
                <Grid container className="fdivider"></Grid>
                <Grid container className="ext_footer">
                    <Grid item sm={4} xs = {12}>© COPYRIGHT SOFTSOURCED</Grid>
                    <Grid item sm={4} xs = {12}></Grid>
                    <Grid item sm={4} xs = {12}>Developed by SOFTSOURCED</Grid>
                </Grid>
            </div>

        );
    }
}

export default Footer;