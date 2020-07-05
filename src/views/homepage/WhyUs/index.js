import React, { Component } from 'react'
import {withTranslation} from 'react-i18next';
import {Grid, Container} from '@material-ui/core';

import './WhyUs.scss';
import whyus_img from '../../../assets/img/whyus/whyus_img.png';

import sym1 from '../../../assets/img/whyus/sym1.jpg';
import sym2 from '../../../assets/img/whyus/sym2.jpg';
import sym3 from '../../../assets/img/whyus/sym3.svg';
import sym4 from '../../../assets/img/whyus/sym4.svg';

class WhyUs extends Component{
    render()
    {
        const content_l = {
           
            syms : [sym1, sym2]
        }
        const content_r = {
           
            syms : [sym3, sym4]
        }

        return(
            <div className = "section whyus_s">
                <Container>
                <h2 className = "title">
                    {this.props.t('title')}
                </h2>
                <Grid container>
                    <Grid item lg={5} xs={12}>
                        <div className = "content_l">
                            {
                                this.props.t('content_l.titles', {returnObjects: true}).map((title,idx)=>
                                {
                                    return(
                                        <div className = "part">
                                            
                                            <div className="part_content">
                                            <div className = "title">
                                                {title}
                                            </div>
                                            <div className ="desc" dangerouslySetInnerHTML = {{__html: this.props.t(`content_l.desc.${idx}`) }} >
                                                
                                            </div>
                                            </div>
                                            <div className="part_img_wrapper">
                                                <img src={content_l.syms[idx]} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item lg={2} xs={12}>


                        {

                        window.innerWidth < 866 ? "" :
                        (<div className="img_wrapper">
                            
                               
                                 <picture>
                                    <img src = {whyus_img} alt="img_whyus" />    
                                </picture>
                                </div>)
                            }
                            
                        
                    </Grid>
                    <Grid item lg={5} xs={12}>
                    <div className = "content_r">
                            {
                                this.props.t('content_r.titles', {returnObjects: true}).map((title,idx)=>
                                {
                                    return(
                                        <div className = "part">
                                              <div className="part_img_wrapper">
                                                <img src={content_r.syms[idx]} />
                                            </div>
                                            <div className = "part_content">
                                            <div className = "title">
                                                {title}
                                            </div>
                                            <div className ="desc" dangerouslySetInnerHTML = {{__html: this.props.t(`content_r.desc.${idx}`) }}>
                                            
                                            </div>
                                            </div>
                                          
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </Grid>
                </Grid>
                </Container>
            </div>
        );
    }

}

export default withTranslation('whyus')(WhyUs);