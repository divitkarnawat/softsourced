import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {Container} from '@material-ui/core';
import projects_en from '../../../translations/homepage/projects/en.json';
import projects_de from '../../../translations/homepage/projects/de.json';
import Fade from 'react-reveal/Fade';

import './Projects.scss';
import proj1s from '../../../assets/img/projects/prod1s.png';
import proj4s from '../../../assets/img/projects/prod2s.png';
import proj3s from '../../../assets/img/projects/prod3s.png';
import proj2s from '../../../assets/img/projects/prod4s.png';
import proj5s from '../../../assets/img/projects/prod5s.png';
import proj6s from '../../../assets/img/projects/prod6s.png';



class Projects extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            load: false,
            id: 1,
            projects_id: [0,1,2]
        }
        this.mainSlider = React.createRef();
    }

    componentDidMount()
    {
        this.props.i18n.addResourceBundle("en","projects",projects_en, true, false);
        this.props.i18n.addResourceBundle("de","projects",projects_de, true, false);
        this.setState({load: true}) 
    }

    render()
    {
      
        if(!this.state.load)
        {
            return(<div>Loading...</div>);
        }
          const imgURLs=[proj1s,proj2s,proj3s,proj4s,proj5s,proj6s]
        
        return(
            <div className = "section project_s">
                <Container>
                    <h2 className = "title">
                        {this.props.t('projects:title')}
                    </h2>
                 
                <div className = "projects">
                    
                        
                    {
                       
                        this.state.projects_id.map((project_id, idx)=>{
                            return(
                                <Fade clear  spy = {0} appear = {true} >
                                <a  href = {`/projects/${this.props.t(`projects:projects.title.${project_id}`).replace(/ +/g, "")}`} target="_blank">
                                <div className="project">
                                <div className = "img_wrapper">
                                    <img src={imgURLs[project_id]} loading="lazy" />
                                </div>
                                    <div className="content_wrapper">
                                    <div className = "title">
                                        {this.props.t(`projects:projects.title.${project_id}`)}
                                    </div>
                                    <div className = "desc">
                                    {this.props.t(`projects:projects.desc.${project_id}`)}
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


export default withTranslation()(Projects);