import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import { Trans, withTranslation } from 'react-i18next';
import i18n from "i18next";

import marc_casual from '../../../assets/img/team/profile_marc_casual.png';
import hanush_casual from '../../../assets/img/team/profile_hanush_casual.png';
import partner1 from '../../../assets/img/about/partner1.svg';
import partner2 from '../../../assets/img/about/partner2.jpg';
import partner3 from '../../../assets/img/about/partner3.jpg';
import partner4 from '../../../assets/img/about/partner4.jpg';
import partner5 from '../../../assets/img/about/partner5.jpg';


import './About.scss'
class About extends Component
{
    render(){


        const settings_main = {
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  
                }
              }
          ]
              };
        return(
            <>
            <div className="section about_s">
                <Container> 
                    <div className="m_content">
                        <h1 className="title"> {this.props.t('title')}</h1>
                        {/* <div className = "imgNdesc"> */}
                            {/* <div className = "img_desc_wrapper">
                            <div className = "img_casual_wrapper">
                                <img src = {marc_casual} alt="marc" />
                            </div>
                            <div className = "img_casual_wrapper">
                                <img src = {hanush_casual} alt="hanush" />
                            </div>
                            </div> */}
                        <div className="desc">
                     
                     {this.props.t('desc', {returnObjects: true}).map(item=>{
                         return(
                             <p dangerouslySetInnerHTML={{__html: item}} />

                         );
                     })}
                 
                     </div>
             
                        <div className = "descNimg">
                            
                            <div className = "img_wrapper" name-member="Marc Mueller">
                                <img src = {marc_casual} alt="marc" />
                            </div>
                            <div className = "img_wrapper" name-member="Hanush Pillai">
                                <img src = {hanush_casual} alt="Hanush" />
                            </div>
                        </div>
                            
                       
                       {/* <p> When the two of us, Marc & Hanush, founded Softsourced in 2017,<br /> we set out on the mission to offer premium IT services to everyone around the globe.</p>

<p>To live up to the promise of being the one-stop-shop for tech projects,<br />we have had to attract great minds that collide.</p>

<p>Today, Softsourced is a Digital Solutions Studio made of friends & intellectual adversaries.<br /> Most of us are top-tier graduates from the IIT, one of the most reputable institutes of technology in the world.</p>

<p>If you can't find us close to our roots and offices in Munich, Germany, or Bangalore, India, we have just found yet another remote desk to work from. Don't worry about us being out and about, we call the digital space our home.</p> */}
{/* 
                        We are a Digital Solutions Studio based in Munich, Germany. <br/>
Our dynamic team of young and creative minds in the design and development team knows no borders. <br/>
The team has been working together for the past 3 years - you can imagine how well we work together. <br/>
What makes us unique is the nomadic approach we take to run our company. We are spread all over the world, some are on holidays in Thailand, others live in India, and some of us even life the cliche life of a digital nomad.  */}

                    
                   
                    </div>
                    
                    <div className = "partners_logo">
                 
                {
                    [partner1,partner2,partner3,partner4,partner5].map((imgURL,idx)=>
                    {
                              
                        return(
                            <div className = "logo" key={idx}>
                                <img src = {imgURL} />   
                            </div>
                        );
                    })
                }

             
                    </div>
                </Container>
            </div>
            </>
        );
    }
}
export default withTranslation('about')(About);