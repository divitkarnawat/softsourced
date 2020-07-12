import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {Grid, Container, Box} from '@material-ui/core';

import pdt_pr_en from '../../../translations/homepage/product_pricing/en.json';
import pdt_pr_de from '../../../translations/homepage/product_pricing/de.json';
import './Product.scss'
import prodSym from '../../../assets/img/prod_sym.svg';
import icon1 from '../../../assets/img/icon1.svg';
import icon2 from '../../../assets/img/icon2.svg';

class Product extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            load: false
        }
        
    }
    componentDidMount()
    {
        this.props.i18n.addResourceBundle("en","pdt_pr",pdt_pr_en, true, false);
        this.props.i18n.addResourceBundle("de","pdt_pr",pdt_pr_de, true, false);
        this.setState({load: true}) 
    }
    render()
    {
        if(!this.state.load)
        {
            return false;
        }

    const list_icons = [icon1,icon2];
    return(
        <>
        <div className="section prod_s">
            
            <h2 className="title">
            {this.props.t('pdt_pr:title')}
            </h2>

            <div>
                <Container >
                    <div className = "prod_items">
                    {this.props.t('common:main_cat', {returnObjects: true}).map((title,idx)=>{
                        return(
                                <a href={`#${this.props.t('common:nav.1')}`}>
                                <div className="prod_item" onClick={()=>this.props.change_p_slide_id(idx)}> 
                                <img src={prodSym} className="prodSym" loading="lazy"/>
                                <h4 style={{textTransform : `uppercase`}}>{title}</h4>
                                <p className="desc" style={{width: `100%`}}>{this.props.t(`pdt_pr:pdts_desc.${idx}`)}</p>
                                </div>
                                </a>
                        );
                    })}
                    </div>
                    <Grid container  direction="row-reverse">
                        <Grid item  md={4} xs={12} style={{textAlign: 'center'}}>
                            <a href={`#${this.props.t('common:nav.1')}`}>{this.props.t('common:links.pdt_pricing')} &raquo;</a>
                        </Grid>
                    
                </Grid>
                    <Grid container >
                        <Grid item md={6}>
                            <div className="part part-specific">
                            <h3 className=""> {this.props.t('pdt_pr:part_left.title')} </h3>
                            <p className="desc" dangerouslySetInnerHTML = {{__html: this.props.t('pdt_pr:part_left.desc')}} />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                        <div className="part">
                            <h3 className=""> {this.props.t('pdt_pr:part_right.title')} </h3>
                            <div className = "list">
                                {
                                    this.props.t('pdt_pr:part_right.desc', {returnObjects: true}).map(({title,desc},idx)=>{
                                        return(
                                        
                                            <div>
                                                <div className="icon_wrapper">
                                                    <img src={list_icons[idx]} alt="icon" loading="lazy"/>
                                                </div>
                                            <div>
                                            <h4 style={{textTransform: `uppercase`}}> {title} </h4>
                                            <p className="desc">{desc} </p>
                                            </div>
                                            </div>
                                        );                                     
                                    })
                                }
                               </div>
                            
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
        </>
    );
}
}
export default withTranslation()(Product);