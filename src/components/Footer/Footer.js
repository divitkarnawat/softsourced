import React, { Component } from 'react';
import {withTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {HashLink as Link} from 'react-router-hash-link';
import './Footer.scss';
import logo from '../../assets/img/logo.jpg';
class Footer extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div className="footer_section">
                <div className = "upper_footer" >
                  
                    <div className = "fr1">
                        <div className = "fc1">
                        <span className ="hw">{this.props.t('common:footer.exp')}</span>
                        {
                            ["E-COMMERCE","MOBILE APPLICATIONS", "API DEVELOPMENT"].map((item,idx)=>{
                                return(
                                    <Link smooth to={`/#${this.props.t('common:nav.1')}`}><span onClick={()=>this.props.change_p_slide_id(idx)}>{item}</span></Link>
                                );
                            })
                        }
                        </div>
                    </div>
                    <div className = "fr1">
                        <div className = "fc1">
                        <span className ="hw">{this.props.t('common:footer.pjts')}</span>
                        {
                            ["bella & bona","permatech","sansiel","ondoor","wildride","moreclix"].map(item=>{
                                return(
                                    <a  href = {`/projects/${item.replace(/ +/g, "")}`}>{item}</a>
                                );
                            })
                        }
                        </div>
                    </div>
                    <div className = "fr1">
                    <div className = "fc1">
                        <span className ="hw">{this.props.t('common:footer.n_i.n_i')}</span>
                        <Link smooth to={`/#BLOG`}> {this.props.t('common:footer.n_i.blog')} </Link>
                        {/* <a href="/">press releases</a> */}
                        <Link smooth to={`/#${this.props.t('common:nav.0')}`}>{this.props.t('common:footer.n_i.abt_softy')}</Link>
                        {/* <a href="/">newsletter sign up</a> */}
                        </div>
                    </div>
                    <div className = "fr1">
                    <div className = "fc1">
                        <span className ="hw">{this.props.t('common:footer.c_i')}</span>
                        <a href="https://goo.gl/maps/Gzj3oiGp7peDR3PSA">{this.props.t('common:basic.munich')}, {this.props.t('common:basic.germany')}</a>
                        <a href="mailto:info@softsourced.de">info@softsourced.de</a>
                        <a href="tel:+4917678326746">+49 1511 6745744</a>
                        
                        </div>
                        
                    </div>
                    </div>
                    
                
              
                <Grid container className="ext_footer" >
                    <Grid item md = {3} sm={3} xs = {12}><div style={{ margin: `auto`,textAlign: `left`}}><a href="https://goo.gl/maps/Gzj3oiGp7peDR3PSA" target="_blank">{this.props.t('common:basic.germany')}</a></div></Grid>
                    <Grid item md={6} sm={3} xs = {12}></Grid>
                    <Grid item md={3} sm={6} xs = {12}>
                        <div className = "documents" >
                        <a href="https://www.linkedin.com/company/softsourced/jobs/" target='_blank'>{this.props.t('common:footer.careers')}</a>
                        <Link smooth to={`/#${this.props.t('common:nav.5')}`} >{this.props.t('common:footer.contact')}</Link>
                        <a href="/imprint" target='_blank'>{this.props.t('common:footer.imprint')}</a>
                        </div>  
                    </Grid>
                </Grid>
                <Grid container className="fdivider"></Grid>
                <Grid container className="ext_footer" style={{marginTop: `10px`}}>
                    <Grid item md={3} sm={4} xs = {12}>© COPYRIGHT SOFTSOURCED</Grid>
                    <Grid item md={6} sm={2} xs = {12}></Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className = "documents" >
                        <a href="/terms-and-conditions/" target='_blank'>{this.props.t('common:footer.tnc')}</a>
                        <a href="/privacy-policy" target='_blank'>{this.props.t('common:footer.pp')}</a>
                        </div>  
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default withTranslation()(Footer);