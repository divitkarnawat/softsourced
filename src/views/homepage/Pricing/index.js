import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import './Pricing.scss';
import ellipse2 from '../../../assets/img/pricing/ellipse2.svg';
import ellipse3 from '../../../assets/img/pricing/ellipse3.svg';
import Slider from "react-slick";


class Pricing extends Component{
    constructor(props)
    {
        super(props);


        this.state = {
            id: 0,
            titles: ['E-Commerce','Mobile Applications','API Development'],
            
            subtitles: [
                [
                 "Shopify",
                 "WooCommerce",
                 "Headless"
                ],
                [
                    "Food Delivery",
                    "Social networking platform",
                    "Messaging with secure file storage"
                ],
                [
                    "Connecting bank account to accounting, reporting and invoice generation",
                    "ERP to the rest of the organisation",
                    "API based microservices on a case by case basis"
                ]
            ],
            desc: [
                [
                    "Easy to setup, quick to market, mostly front-end and design work along with PP",
                    "Open Source, more flexibility with plugins",
                    "Unlimited flexibility, grow with your business with specific use cases"  
                ],['','',''],['','','']
            ],
            time_hr: [
                        [
                            "50 - 500", "70 - 150","200 - 1000"
                        ],
                        [
                            "500 - 1000", "500 - 1200", "700 - 1400"
                        ],
                        [
                            "100 - 300", "150 - 500", "from 300"
                        ]
                    ],
            price: [
                        [
                            "from 2.75k", "from 3.5k", "from 10k"
                        ],
                        [
                            "from 27k", "from 27k", "from 35k"
                        ],
                        [
                            "from 5k", "from 8k", "from 15k"
                        ]
                    ]

        }
    }
  
    render()
    {
        const settings_main = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1, 
            dots: true,
            infinite: true,
            beforeChange: (current, next) => {
                this.setState({ id: next });  
            }
          }
        }
    ]
        };
        const settings_list = {
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
          
            arrows: true,
         
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                 
                }
              }
          ]
              };
      
        return(
            
            <div className = "section pricing_s">
                <Container>
                    <h2 className="title">
                    Pricing List
                    </h2>
                <div className="main_slider">
                <Slider {...settings_main}>
                {
                    this.state.titles.map((item,idx)=>
                    {
                        const test = 'checked';
                        
                        return(
                            <div className = "slide_wrapper" key={idx}>
                                <label for={item} onClick={()=>{this.setState({id: idx})}} className = {`custom_btn ${this.state.id == idx ? 'checked' : ''}`}>{item}</label>
                            </div>
                        );
                    })
                }

                </Slider>
                </div>
                {/* <div className="divider"/> */}

                <div className = "sync_slider">
                    <Slider {...settings_list}>
                        {
                            this.state.titles.map((title,idx)=>
                            {
                                return(
                                    <div className = "slide_wrapper" key={idx}>
                                        <div  className = "pricing_slide" data-title = {this.state.titles[this.state.id]}  >
                                        <div className = "desc">
                                                {this.state.subtitles[this.state.id][idx]}
                                            </div>
                                            <div className = "desc" className = {this.state.desc[this.state.id][idx] == '' ? 'dnone':''}>
                                                {this.state.desc[this.state.id][idx]}
                                            </div>
                                            <div className = "desc">
                                                {this.state.time_hr[this.state.id][idx]} hours 
                                            </div>
                                            <div className = "desc">
                                                {this.state.price[this.state.id][idx]} €
                                            </div>
                                            <a href="#CONTACT"><div className = "custom_btn" style={{border: `2px solid white`}} onClick = {()=>{this.props.support_catUpdate(this.state.id,idx,Math.random())}} >
                                            CHOOSE PLAN
                                        </div>  </a>
                                            <img src = {ellipse2} className = "ellipse2" />
                <img src = {ellipse3} className = "ellipse3" />
                                        </div>
                                        

                                      
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
                <div style={{position: `relative`}} >
                
                </div>
                </Container>
            </div>
        );
    }
}

export default Pricing;