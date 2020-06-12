import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core';

import './WhyUs.scss';
import img_wrapper from '../../../assets/img/whyus/img_wrapper.png';
import sym1 from '../../../assets/img/whyus/sym1.jpg';
import sym2 from '../../../assets/img/whyus/sym2.jpg';
import sym3 from '../../../assets/img/whyus/sym3.svg';
import sym4 from '../../../assets/img/whyus/sym4.svg';

class WhyUs extends Component{
    render()
    {
        const content_l = {
            titles : ["Commitment to deliver quality","Immediate scalability & synergy"],
            desc : ["We put on our a-game from project initiation to conclusion, softsourced commits to deliver an optimal product. No code refactoring needed whatsoever",
                    "Due to our team and network of hand-picked designers and developers, we are able to put together a highly skilled workforce in no time - no matter the scale of the project."
                    ],
            syms : [sym1, sym2]
        }
        const content_r = {
            titles : ["Track & make requests along the way","Sustainable development"],
            desc : ["Track progress on project milestones and receive status updates via a unique link online. Make requests along the project lifecycle.",
                    "We are committed to deliver durable products. We offer post-delivery maintenance services. Also, we are a proud member of GreenGeeks."
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
                                            <div className ="desc">
                                                {content_l.desc[idx]}
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
                        <div className="img_wrapper">
                            <img src = {img_wrapper} />
                        </div>
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
                                            <div className ="desc">
                                                {content_r.desc[idx]}
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