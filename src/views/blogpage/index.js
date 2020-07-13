import React,{Component} from 'react';
import {Container} from "@material-ui/core";
import {withTranslation} from 'react-i18next';
import blogpage_en from '../../translations/blogpage/titles/en.json';
import blogpage_de from '../../translations/blogpage/titles/de.json';
import blog3s from '../../assets/img/blog1s.jpg';
import blog2s from '../../assets/img/blog2s.jpg';
import blog1s from '../../assets/img/blog3s.jpg';
import author1 from '../../assets/img/blog/author.jpg';
import instagram_logo from "../../assets/img/blog/instagram_logo.svg";
import facebook_logo from "../../assets/img/blog/facebook_logo.svg";
import linkedin_logo from "../../assets/img/blog/linkedin_logo.svg";
import NM_2432020 from "./NM_2432020";
import ADUBE_2232020 from "./ADUBE_2232020";
import LMATSAKIS_1032020 from "./LMATSAKIS_1032020";
import MM_10052020 from "./MM_10052020"

import './BlogPage.scss'
class BlogPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            laod: false,
            id: 'lmatsakis_1032020'
        }
        this.blog_content = {
            mm_10052020:{
                name: "MARC MUELLER",
                title: "The 10 must-haves your landing page needs to convert",
                date: "10th May 2020",
                social_links: [[instagram_logo,'#'],[linkedin_logo,'#'],[facebook_logo,'#'],],
                imgURL_aut: author1,
                desc: <MM_10052020 />
            },
            nm_2432020:{
                name: "NATASHA MASCARENHAS",
                title: "TECHCRUNCH",
                date: "24th March 2020",
                social_links: [[instagram_logo,'#'],[linkedin_logo,'#'],[facebook_logo,'#'],],
                imgURL_aut: author1,
                desc: <NM_2432020 />
            },
            adube_2232020:{
                name: "AAKARSH DUBE",
                title: "MASHABLE",
                date: "22nd March 2020",
                social_links: [[instagram_logo,'#'],[linkedin_logo,'#'],[facebook_logo,'#'],],
                imgURL_aut: author1,
                desc: <ADUBE_2232020 />
            },
            lmatsakis_1032020:{
                name: "LOUISE MATSAKIS",
                title: "WIRED",
                date: "10th March 2020",
                social_links: [[instagram_logo,'#'],[linkedin_logo,'#'],[facebook_logo,'#'],],
                imgURL_aut: author1,
                desc: <LMATSAKIS_1032020 />
            }
        }
    }
    componentDidMount()
    {
        window.scrollTo(0,0);
        this.props.i18n.addResourceBundle("en","blogpage_t",blogpage_en, true, false);
        this.props.i18n.addResourceBundle("de","blogpage_t",blogpage_de, true, false);
        this.setState({load: true});
    }   

    render()
    {
       
if(!this.state.load)
{
    return(<div>Loading...</div>);
}
        
        let id = this.props.match.params.blogid;
        return(
            <div className = "section blogpage_s" id="blogpage">
            <Container>

            <h2 className = "title">
                {this.props.t(`blogpage_t:titles.${id}`)}
            </h2>
            <div className = "author">
                <div className = "details">
                    <div className = "img_wrapper">
                                    <img src = {author1} alt={this.blog_content[id].name}/>
                                </div>
                                <div className = "nd">
                                    <div className = "name desc">
                                        {`${this.blog_content[id].name}`}
                                    </div>
                                    <div className = "date desc">
                                        {this.blog_content[id].date}
                                    </div>
                                </div>
                </div>
                <div className = "author_social_links">
                    {this.blog_content[id].social_links.map((item,idx)=>{
                        return(
                            <a href = {item[1]}> <img src = {item[0]} alt="social_link" /></a>
                        );
                    })}
                </div>
            </div>
            <div className = "divider" />
            
            <div className = "blog_desc desc">
                {this.blog_content[id].desc}
            </div>
            </Container>
            </div>
        )
    }

}

export default withTranslation()(BlogPage);