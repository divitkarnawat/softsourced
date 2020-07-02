import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core';

import './WhyUs.scss';
import img_wrapper from '../../../assets/img/whyus/img_wrapper.jpg';
import img_wrapper_w from '../../../assets/img/whyus/img_wrapper.webp';
import sym1 from '../../../assets/img/whyus/sym1.jpg';
import sym2 from '../../../assets/img/whyus/sym2.jpg';
import sym3 from '../../../assets/img/whyus/sym3.svg';
import sym4 from '../../../assets/img/whyus/sym4.svg';

class WhyUs extends Component{
    render()
    {
        const content_l = {
            titles : ["Commitment to deliver quality","Immediate scalability & synergy"],
            desc : ["We put on our a-game from project initiation to conclusion.<br />Softsourced commits to deliver an optimal product.<br />No code refactoring needed whatsoever.",
                    "Due to our team and network of hand-picked designers and developers, we are able to put together a highly skilled workforce in no time - no matter the scale of the project."
                    ],
            syms : [sym1, sym2]
        }
        const content_r = {
            titles : ["Track & make requests along the way","Sustainable development"],
            desc : ["Track progress on project milestones and receive status updates via a unique link online.<br />Make requests along the project lifecycle.",
                    "We are committed to delivering durable products.<br />We offer maintenance packages for sustainability.<br />We are green hosting advocates."
                    ],
            syms : [sym3, sym4]
        }

        return(
            <div className = "section whyus_s">
                <Container>
                <h2 className = "title">
                    WHY YOU ARE IN GOOD COMPANY WITH US
                </h2>
                <Grid container>
                    <Grid item lg={5} xs={12}>
                        <div className = "content_l">
                            {
                                content_l.titles.map((title,idx)=>
                                {
                                    return(
                                        <div className = "part">
                                            
                                            <div className="part_content">
                                            <div className = "title">
                                                {title}
                                            </div>
                                            <div className ="desc" dangerouslySetInnerHTML = {{__html: content_l.desc[idx] }} >
                                                
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
                                    <source srcset = {img_wrapper_w} type="image/webp"/>
                                    <img src = {img_wrapper} alt="img_whyus" />    
                                </picture>
                                </div>)
                            }
                            
                        
                    </Grid>
                    <Grid item lg={5} xs={12}>
                    <div className = "content_r">
                            {
                                content_r.titles.map((title,idx)=>
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
                                            <div className ="desc" dangerouslySetInnerHTML = {{__html: content_r.desc[idx] }}>
                                            
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

export default WhyUs;