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
                <Grid container >
                    {/* <Grid item className="cb" sm = {4} xs = {12}>
                    <div style={{textAlign: `center`}} >
                    <Link smooth to="/#root">
           <img src = {logo} style = {{ width: `100px`, height: `93.33px`}} />
           </Link>

           </div>


                    </Grid> */}
                    <Grid item sm={3} xs={12} className = "fr1">
                        <div className = "fc1">
                        <span className ="hw">{this.props.t('common:footer.exp')}</span>
                        {
                            ["E-COMMERCE","MOBILE APPLICATIONS", "API DEVELOPMENT"].map((item,idx)=>{
                                return(
                                    <a href= {`#${this.props.t('common:nav.1')}`}><span onClick={()=>this.props.change_p_slide_id(idx)}>{item}</span></a>
                                );
                            })
                        }
                        </div>
                    </Grid>
                    <Grid item sm={3} xs={12} className = "fr1">
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
                    </Grid>
                    <Grid item sm={3} xs={12} className = "fr1">
                    <div className = "fc1">
                        <span className ="hw">{this.props.t('common:footer.n_i.n_i')}</span>
                        <a href="#BLOG"> {this.props.t('common:footer.n_i.blog')} </a>
                        {/* <a href="/">press releases</a> */}
                        <a href={`#${this.props.t('common:nav.0')}`}>{this.props.t('common:footer.n_i.abt_softy')}</a>
                        {/* <a href="/">newsletter sign up</a> */}
                        </div>
                    </Grid>
                    <Grid item sm={3} xs={12} className = "fr1">
                    <div className = "fc1">
                        <span className ="hw">{this.props.t('common:footer.c_i')}</span>
                        <a href="https://goo.gl/maps/Gzj3oiGp7peDR3PSA">Munich, Germany</a>
                        <a href="mailto:info@softsourced.de">info@softsourced.de</a>
                        <a href="tel:+4917678326746">+49 1511 6745744</a>
                        
                        </div>
                        
                    </Grid>
                    </Grid>
                    
                    {/* <Grid item className="cf" sm = {3} xs = {12}>
                        <div className="flinks">
                        <div><a href="/data-protection">Data Protection</a></div>
                        <div><a href="/imprint">Imprint</a></div>
                       
                        
                        </div>
                    </Grid> */}
              
                <Grid container className="ext_footer" >
                    <Grid item sm={3} xs = {12}><div style={{ margin: `auto`,textAlign: `left`}}>Germany</div></Grid>
                    <Grid item sm={6} xs = {12}></Grid>
                    <Grid item sm={3} xs = {12}>
                        <div className = "documents" >
                        <a href="https://www.linkedin.com/company/softsourced/jobs/" target='_blank'>{this.props.t('common:footer.careers')}</a>
                        <a href={`#${this.props.t('common:nav.5')}`} >{this.props.t('common:footer.contact')}</a>
                        <a href="/imprint" target='_blank'>{this.props.t('common:footer.imprint')}</a>
                        </div>  
                    </Grid>
                </Grid>
                <Grid container className="fdivider"></Grid>
                <Grid container className="ext_footer" style={{marginTop: `10px`}}>
                    <Grid item sm={3} xs = {12}>© COPYRIGHT SOFTSOURCED</Grid>
                    <Grid item sm={6} xs = {12}></Grid>
                    <Grid item sm={3} xs = {12}>
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