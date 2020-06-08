import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import Slider from 'react-slick';


import partner1 from '../../../assets/img/about/partner1.jpg';
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
                        <h1 className="title"> this is softsourced.</h1>
                        <p className="desc">
                        We are a Digital Solutions Studio based in Munich, Germany. <br/> Our designers and developers combine both, hard work and talent. <br/> For you, we design, develop and deliver on projects.
                        </p>
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
export default About;