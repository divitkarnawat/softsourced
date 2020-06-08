import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import Slider from "react-slick";

import './Projects.scss';
import proj1s from '../../../assets/img/projects/prod1s.png';
import proj2s from '../../../assets/img/projects/prod2s.png';
import proj3s from '../../../assets/img/projects/prod3s.png';
import proj4s from '../../../assets/img/projects/prod4s.png';
import proj5s from '../../../assets/img/projects/prod5s.png';
import proj6s from '../../../assets/img/projects/prod6s.png';
import proj7s from '../../../assets/img/projects/prod7s.png';
import proj8s from '../../../assets/img/projects/prod8s.png';
import proj9s from '../../../assets/img/projects/prod9s.png';


class Projects extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            id: 0
        }
    }

    render()
    {

        const projects_cat = [[0,1,2,3,4,5,6,7,8],[3,6,7,8],[1,2,4,8]];
        const projects = {
            titles:["BELLA & BONA","COVID AB TESTING","FRESH & JUICY","TRAX HAUT CUISINE","TRACK RECORDX","BLUE OCEAN SOLUTIONS","HOP IN THE SHOW CAFE","NOTE YOUR DAYS Co KG","COMMERZFLANK"],
            desc: [
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands.",
                    "Check out how we helped an Italian food delivery kitchen succeed in a market ripe with established competitor brands."
            ],
            imgURLs:[proj1s,proj2s,proj3s,proj4s,proj5s,proj6s,proj7s,proj8s,proj9s]
        }
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
                  infinite: true,
                  beforeChange: (current, next) => {
                     this.setState({id: next});
                  }
                }
              }
          ]
              };
        return(
            <div className = "section project_s">
                <Container>
                    <h2 className = "title">
                        PAST PROJECTS
                    </h2>
                    <div className="main_slider">
                <Slider {...settings_main}>
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
                </div>
                <div className = "projects">
                    {
                        projects_cat[this.state.id].map((project_id, idx)=>{
                            return(
                                <div className="project">
                                <div className = "img_wrapper">
                                    <img src={projects.imgURLs[project_id]} />
                                </div>
                                    <div className="content_wrapper">
                                    <div className = "title">
                                        {projects.titles[project_id]}
                                    </div>
                                    <div className = "desc">
                                        {projects.desc[project_id]}
                                    </div>
                                    
                                        <a className = "links" href = '/'> ...read more </a> 
                                    
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
                <div>
                    <a href = "/" > See all projects >> </a>
                </div>
                </Container>
            </div>

        );
    }
}


export default Projects;