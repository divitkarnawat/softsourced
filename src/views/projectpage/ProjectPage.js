import React, { Component } from 'react';
import {withTranslation} from 'react-i18next';

import projectpage_en from '../../translations/projectpage/en.json';
import projectpage_de from '../../translations/projectpage/de.json';
import {Container, Grid, Tooltip} from '@material-ui/core';
import './ProjectPage.scss'

import andr from '../../assets/img/projectpage/symbols/android.png'
import ios from '../../assets/img/projectpage/symbols/ios.png'
import web from '../../assets/img/projectpage/symbols/web.png'
import people from '../../assets/img/projectpage/symbols/people.png'
import calendar from '../../assets/img/projectpage/symbols/calendar.png'
import design from '../../assets/img/projectpage/symbols/design.png'
import development from '../../assets/img/projectpage/symbols/development.png'


import BB1xj from '../../assets/img/projectpage/mockups-imgs/Bella&Bonna/1x/B&B.jpg'
import Ondoor1xj from '../../assets/img/projectpage/mockups-imgs/Ondoor/Ondoor_Web_1x/ondoor-2.jpg'
import Permatech1xj from '../../assets/img/projectpage/mockups-imgs/Permatech/1x/permatech.jpg'
import Sansiel1xj from '../../assets/img/projectpage/mockups-imgs/Sansiel/1x/sansiel.jpg'
import Wildride1xj from '../../assets/img/projectpage/mockups-imgs/Wildride/1x/wildride.jpg'
import Moreclix1xj from '../../assets/img/projectpage/mockups-imgs/Moreclix/1x/moreclix.jpg'



import BB1xw from '../../assets/img/projectpage/mockups-imgs/Bella&Bonna/1x/B&B.webp'
import Ondoor1xw from '../../assets/img/projectpage/mockups-imgs/Ondoor/Ondoor_Web_1x/ondoor-2.webp'
import Permatech1xw from '../../assets/img/projectpage/mockups-imgs/Permatech/1x/permatech.webp'
import Sansiel1xw from '../../assets/img/projectpage/mockups-imgs/Sansiel/1x/sansiel.webp'
import Wildride1xw from '../../assets/img/projectpage/mockups-imgs/Wildride/1x/wildride-2.webp'
import Moreclix1xw from '../../assets/img/projectpage/mockups-imgs/Moreclix/1x/moreclix.webp'



import BBmj from '../../assets/img/projectpage/mockups-imgs/Bella&Bonna/mobile/B&B.jpg'
import Ondoormj from '../../assets/img/projectpage/mockups-imgs/Ondoor/mobile/ondoor.jpg'
import Permatechmj from '../../assets/img/projectpage/mockups-imgs/Permatech/mobile/permatech.jpg'
import Sansielmj from '../../assets/img/projectpage/mockups-imgs/Sansiel/mobile/sansiel.jpg'
import Wildridemj from '../../assets/img/projectpage/mockups-imgs/Wildride/mobile/wildride.jpg'
import Moreclixmj from '../../assets/img/projectpage/mockups-imgs/Moreclix/mobile/moreclix.jpg'

 
import BBmw from '../../assets/img/projectpage/mockups-imgs/Bella&Bonna/mobile/B&B.webp'
import Ondoormw from '../../assets/img/projectpage/mockups-imgs/Ondoor/mobile/ondoor.webp'
import Permatechmw from '../../assets/img/projectpage/mockups-imgs/Permatech/mobile/permatech.webp'
import Sansielmw from '../../assets/img/projectpage/mockups-imgs/Sansiel/mobile/sansiel.webp'
import Wildridemw from '../../assets/img/projectpage/mockups-imgs/Wildride/mobile/wildride.webp'
import Moreclixmw from '../../assets/img/projectpage/mockups-imgs/Moreclix/mobile/moreclix.webp'


class ProjectPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            load: false,
            proj_id: 0
        }
        this.symbols = [ios,web,andr,calendar,people,design,development]
        this.content = {
            titles: [
                "Bella and Bona",
                "Ondoor",
                "Moreclix",
                "Sansiel",
                "Permatech",
                "Wildride"
                    ],
            
            techstack: [
                ["Node.js","React.js & React Native","MySQL","AWS"],
                ["Swift","Android Studio - Java"],
                ["Wordpress"],
                ["React"],
                ["React"],
                ["React & React Router 4","Express","Node","MongoDB"],
                [""]
            ],
            platforms:[
                [0,1,2],
                [0,2],
                [1],
                [1],
                [1],
                [0,2],
                []
            ],
            timeline:[
                [26,5],
                [12],
                [2,2],
                [4],
                [5],
                [8],
                []

            ],
            capabilities:[
                [0,1],
                [0,1],
                [1],
                [0,1],
                [0,1],
                [0],
                []
            ],
            imgj: 
                [BB1xj,Ondoor1xj,Moreclix1xj,Sansiel1xj,Permatech1xj,Wildride1xj],
            imgw: 
                [BB1xw,Ondoor1xw,Moreclix1xw,Sansiel1xw,Permatech1xw,Wildride1xw],
            imgm: [
                [BBmw,BBmj],
                [Ondoormw,Ondoormj],
                [Moreclixmw,Moreclixmj],
                [Sansielmw,Sansielmj],
                [Permatechmw,Permatechmj],
                [Wildridemw,Wildridemj],
                
            ],
        }
    }

    componentDidMount(){

        this.props.i18n.addResourceBundle("en","projectpage",projectpage_en, true, false);
        this.props.i18n.addResourceBundle("de","projectpage",projectpage_de, true, false);
        

        let pname = this.props.match.params.pname;
        let proj_id = 0;
        switch(pname)
        {
            case "bella&bona": {proj_id = 0; break;}
            case "ondoor" : {proj_id = 1; break;}
            case "moreclix" : {proj_id = 2; break;}
            case "sansiel" : {proj_id = 3; break;}
            case "permatech" : {proj_id = 4; break;}
            case "wildride" : {proj_id = 5; break;}
            default : {proj_id = 0; break;}
        }
        this.setState({proj_id, load: true})
    }
    render()
    {   


        if(!this.state.load)
        {
            return(<div>Loading...</div>)
        }

        return(
            <div className = "section projectpage-s">
                <Container>
                <h2 className = "title">{this.content.titles[this.state.proj_id]}</h2>
                <div className = "img_wrapper"></div>
                <picture>
    
    <source
        media="(max-width: 450px)"
		srcset={this.content.imgm[this.state.proj_id][0]}
		type="image/webp" />
	<source
        media="(max-width: 450px)"
        srcset={this.content.imgm[this.state.proj_id][1]}
         />
	
    <source
		srcset={this.content.imgw[this.state.proj_id]}
		type="image/webp" />
	<img
		src={this.content.imgj[this.state.proj_id]} alt={this.content.titles[this.state.proj_id]}
		 />
</picture>
                <Grid container>
                    <Grid item md={8} xs={12} className = "proj_main">
                        <div className = "challenges">
                            <h3> {this.props.t('projectpage:basic.challenge')}</h3>
                            <div> {this.props.t(`projectpage:challenges.${this.state.proj_id}`)}</div>
                        </div>
                        <div className = "solutions">
                            <h3> {this.props.t('projectpage:basic.solution')} </h3>
                            <div>{this.props.t(`projectpage:solutions.${this.state.proj_id}`)}</div>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12} className = "proj_side">
                        <div>
                           <h4> {this.props.t('projectpage:basic.industry')}</h4>
                           <div>{this.props.t(`projectpage:industry.${this.state.proj_id}`)}</div>
                        </div>
                        <div className = "platform">
                           <h4> {this.props.t('projectpage:basic.platform')}</h4>
                           <div>
                            {
                                this.content.platforms[this.state.proj_id].map(item => {
                                    return(
                                        <img src = {this.symbols[item]} />
                                    );
                                })
                            }
                            </div>
                        </div>
                        <div>
                            <h4>{this.props.t('projectpage:basic.tech')}</h4>
                            <div>
                                {
                                    this.content.techstack[this.state.proj_id].map(item=>{
                                        return item;
                                    }).join(", ")
                                }
                            </div>
                        </div>
                        <div className = "stats">
                        <h4>    {this.props.t('projectpage:basic.stats')}</h4>
                        <div>
                            {
                                this.content.timeline[this.state.proj_id].map((item,idx) =>
                                    {
                                        return(
                                            <div>
                                            <img src = {this.symbols[3+idx]} />
                                            {item} {` ${idx == 0 ? this.props.t('common:basic.weeks') : this.props.t('common:basic.people')}`} 
                                            </div>
                                        );
                                    })
                            }
                        </div>
                        </div>
                        {
                            this.content.capabilities[this.state.proj_id].length > 0 ?  <div className = "capabilities">
                            <h4> {this.props.t('projectpage:basic.capa')}</h4>
                            <div>
                            {
                                this.content.capabilities[this.state.proj_id].map((item,idx) =>
                                    {
                                        return(
                                            <Tooltip title={item == 0 ? "Design" : "Development"} arrow>
                                            <img src = {this.symbols[5+item]} />
                                            </Tooltip>
                                        );
                                    })
                            }
                        </div>   </div> : ""
                        }
                       
                      
                    </Grid>
                </Grid>
               
                </Container>
            </div>
        );
    }

}

export default withTranslation()(ProjectPage);