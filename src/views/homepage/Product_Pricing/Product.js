import React, {Component} from 'react';
import { Trans, withTranslation } from 'react-i18next';
import {Grid, Container, Box} from '@material-ui/core';

import './Product.scss'
import prodSym from '../../../assets/img/prod_sym.svg';
class Product extends Component{

    constructor(props)
    {
        super(props);
    }
    render()
    {

    
    return(
        <>
        <div className="section prod_s">
            
            <h2 className="title">
            These are our products:
            </h2>

            <div>
                <Container >
                    <div className = "prod_items">
                    {this.props.t('common:main_cat', {returnObjects: true}).map((title,idx)=>{
                        return(
                                <a href={`#${this.props.t('common:nav.1')}`}>
                                <div className="prod_item" onClick={()=>this.props.change_p_slide_id(idx)}> 
                                <img src={prodSym} className="prodSym"/>
                                <h4 style={{textTransform : `uppercase`}}>{title}</h4>
                                <p className="desc" style={{width: `100%`}}>{this.props.t(`pdts_desc.${idx}`)}</p>
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
                            <h3 className=""> {this.props.t('part_left.title')} </h3>
                            <p className="desc" dangerouslySetInnerHTML = {{__html: this.props.t('part_left.desc')}} />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                        <div className="part">
                            <h3 className=""> {this.props.t('part_right.title')} </h3>
                            <ol>
                                {
                                    this.props.t('part_right.desc', {returnObjects: true}).map(({title,desc})=>{
                                        return(
                                            <>
                                            <li> <h4 style={{textTransform: `uppercase`}}> {title} </h4></li>
                                            <p className="desc">{desc} </p>
                                            </>
                                        );                                     
                                    })
                                }
                               
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
}
export default withTranslation('product_pricing')(Product);