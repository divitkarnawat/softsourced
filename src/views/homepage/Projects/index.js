import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {Container} from '@material-ui/core';

import Fade from 'react-reveal/Fade';

import './Projects.scss';
import proj1s from '../../../assets/img/projects/prod1s.png';
import proj2s from '../../../assets/img/projects/prod2s.png';
import proj3s from '../../../assets/img/projects/prod3s.png';
import proj4s from '../../../assets/img/projects/prod4s.png';
import proj5s from '../../../assets/img/projects/prod5s.png';
import proj6s from '../../../assets/img/projects/prod6s.png';



class Projects extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            id: 1,
            projects_id: [0,1,2]
        }
        this.mainSlider = React.createRef();
    }

    // componentDidMount()
    // {
    //     this.slider.slickGoTo(1,false);   
    // }

    render()
    {
        // const ran = Math.random();
     
        // const projects_cat = [[0,2],[3,4,5],[0,1,3,6]];
        
          const imgURLs=[proj1s,proj2s,proj3s,proj4s,proj5s,proj6s]
        
        // const settings_main = {
        //     speed: 500,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     responsive: [
        //       {
        //         breakpoint: 767,
        //         settings: {
        //           slidesToShow: 1,
        //           dots: true,
        //           slidesToScroll: 1,
        //           infinite: true,
        //           beforeChange: (current, next) => {
        //              this.setState({id: next});
        //           }
        //         }
        //       }
        //   ]
        //       };
        return(
            <div className = "section project_s">
                <Container>
                    <h2 className = "title">
                        {this.props.t('title')}
                    </h2>
                    {/* <div className="main_slider">
                <Slider ref={slider => (this.slider = slider)} {...settings_main}>
                {
                    ["E-Commerce","Mobile Applications","API Development"].map((item,idx)=>
                    {
                              
                        return(
                            <div className = "slide_wrapper" key={idx}>
                                <label onClick={() => {this.setState({id: idx}); }} className = {`custom_btn ${this.state.id == idx ? 'checked' : ''}`}>{item}</label>
                            </div>
                        );
                    })
                }

                </Slider>
                </div> */}

                <div className = "projects">
                    
                        
                    {
                       
                        this.state.projects_id.map((project_id, idx)=>{
                            return(
                                <Fade clear  spy = {0} appear = {true} >
                                <a  href = {`/projects/${this.props.t(`projects.title.${project_id}`).replace(/ +/g, "")}`} target="_blank">
                                <div className="project">
                                <div className = "img_wrapper">
                                    <img src={imgURLs[project_id]} />
                                </div>
                                    <div className="content_wrapper">
                                    <div className = "title">
                                        {this.props.t(`projects.title.${project_id}`)}
                                    </div>
                                    <div className = "desc">
                                    {this.props.t(`projects.desc.${project_id}`)}
                                    </div>
                                    
                                       
                                </div>
                            </div>
                            </a>
                             </Fade>
                            );
                        })
                    }
                  
                </div>
          
                <div>
                    <div className = {this.state.projects_id.length == 6 ? "dnone" : ""} style={{ fontWeight: 600, cursor: `pointer`}} onClick = {() => this.setState({projects_id: [0,1,2,3,4,5]})}>  {this.props.t('common:links.projects')}  &raquo;</div>
                </div>
                </Container>
            </div>

        );
    }
}


export default withTranslation('projects')(Projects);