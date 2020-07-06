import React, { Component } from 'react';
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
            challenges: [
                "Disjoint systems and manual processes are how companies start but not how they scale. The lack of tech infrastructure coupled with no in-house expertise compounded operational failures. Lunch delivery targeting companies using a ghost kitchen to produce the food cuts down on complexity but needs end to end automation to challenge competitors like Lieferando. With no standard answer to their problem available, Bella & Bona was looking for a customised solution.",
                "To create a mobile application able to showcase an entire supermarket in the palm of your hand. Studies show that online grocery customers hold extremely high expectations towards the convenience of their purchasing experience. This can only be met with a thought through layout & design to create the most seamless user experience.",
                "The team wanted a dynamic website to show their skills to customers. Although they created their own designs, they did not have the technical capability to execute on it.",
                "The Sansiel team was looking for an inspirational business website to showcase their revolutionary product, a surface sanitising spray. With the product already developed and approved, the accordance between offline and online had yet to be found.",
                "The Permatech Team was looking to create a design that represents the team and their development capability. Although regular Content Management Systems like Wordpress, Drupal and Joomla can do the job in terms of design they lack optimisations and use dated technologies like PHP and unreliable plugins.",
                "To create a brilliantly clever application for users to express a preference towards the kind of place to go out to have a drink or eat, while keeping the place they end up a secret. It is all about creating a jolly surprise that is most certain to convene and please: Uber & Google Maps, both integrated into the app, allow for a safe journey to the unknown venue."
            ],
            solutions: [
                "Softsourced assembled a full stack team within 2 weeks and developed the beta within 7 weeks: In a headless redesign we implemented an API-based order management system to achieve smart automation in the processes from order submission to delivery  that communicates with a self-learning stock management software. Softsourced continues to assist the team with expansion and maintenance.",
                "After receiving the request for help, a full stack team was put together in the matter of days to dedicate their brain power. Our team of designers & developers assisted in this project as a partner - we filled the role as project surrogate. We came up with a series of prototypes that went into testing phase. The most optimal version was refined to perfection. Three months after project initiation we ended up with a final product. By now, ondoor has been downloaded more than a million times and successfully delivered more than ten million orders for groceries.",
                "Our team of designers reviewed and neatened up their already outstanding design. Our team of developers had the website implemented in the span of two weeks.",
                "Even though WordPress is widely acknowledged for the development of professional business websites, Sansiel deserved something much more optimised in terms of page speed and security. So we built on React JS. On top of that, Sansiel’s communication to us was excellent, which is how we were able to create quality content fitted into a clear-cut layout. The Softsourced team was able to deliver the project in a span of three weeks.",
                "With our team of designers and developers we were able to design and develop the essence of the company within a matter of weeks all while prototyping the design with Invision and implementing a modern CMS. This provides future-proofing, easy edits while at the same time offering the blazing speed and SEO that Softsourced is well known for.",
                "A pragmatic & witty approach found an eye-catching design, where a lot of effort went into doing justice to the element of surprise. Our team was able to deliver in under two months. Ondoor’s app has helped users explore the beautiful world outside. All that in a few taps."
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
                [],
                [0,1],
                [0,1],
                [0],
                []
            ],
            industry:[
                "Food",
                "Retail",
                "Agency",
                "Pharmaceutical",
                "IT Agency",
                "Agency",
                ""
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
        this.setState({proj_id})
    }
    render()
    {   
        console.log(this.props);

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
                            <h3> CHALLENGE</h3>
                            <div> {this.content.challenges[this.state.proj_id]}</div>
                        </div>
                        <div className = "solutions">
                            <h3> SOLUTION </h3>
                            <div>{this.content.solutions[this.state.proj_id]}</div>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12} className = "proj_side">
                        <div>
                           <h4> INDUSTRY</h4>
                           <div>{this.content.industry[this.state.proj_id]}</div>
                        </div>
                        <div className = "platform">
                           <h4> PLATFORM</h4>
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
                            <h4>TECH USED</h4>
                            <div>
                                {
                                    this.content.techstack[this.state.proj_id].map(item=>{
                                        return item;
                                    }).join(", ")
                                }
                            </div>
                        </div>
                        <div className = "stats">
                        <h4>    STATS</h4>
                        <div>
                            {
                                this.content.timeline[this.state.proj_id].map((item,idx) =>
                                    {
                                        return(
                                            <div>
                                            <img src = {this.symbols[3+idx]} />
                                            {item} {` ${idx == 0 ? "weeks" : "people"}`} 
                                            </div>
                                        );
                                    })
                            }
                        </div>
                        </div>
                        <div className = "capabilities">
                            <h4>CAPABILITIES USED</h4>
                            <div>
                            {
                                this.content.capabilities[this.state.proj_id].map((item,idx) =>
                                    {
                                        return(
                                            <Tooltip title={idx == 0 ? "Design" : "Development"} arrow>
                                            <img src = {this.symbols[5+idx]} />
                                            </Tooltip>
                                        );
                                    })
                            }
                        </div>
                        </div>
                    </Grid>
                </Grid>
               
                </Container>
            </div>
        );
    }

}

export default ProjectPage;