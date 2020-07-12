import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';

import blog_en from '../../../translations/homepage/blog/en.json';
import blog_de from '../../../translations/homepage/blog/de.json';
import {Container} from '@material-ui/core';
import {HashLink as Link} from 'react-router-hash-link';

import './Blog.scss';
import blog3s from '../../../assets/img/blog1s.jpg';
import blog2s from '../../../assets/img/blog2s.jpg';
import blog1s from '../../../assets/img/blog3s.jpg';

import blog3sw from '../../../assets/img/blog1s.webp';
import blog2sw from '../../../assets/img/blog2s.webp';
import blog1sw from '../../../assets/img/blog3s.webp';
import author1 from '../../../assets/img/blog/author.jpg';

class Blog extends Component{

    constructor(props)
    {
        super(props)
        {
            this.state = {
                load: false
            }
        }
    }

    componentDidMount()
    {
        this.props.i18n.addResourceBundle("en","blog",blog_en, true, false);
        this.props.i18n.addResourceBundle("de","blog",blog_de, true, false);
        this.setState({load: true})
        
    }
    
    render()
    {
        
        if(!this.state.load)
        {
            return(<div>Loading...</div>)
        }

        const content = {
            bid: ["mm_10052020",'nm_2432020',"adube_2232020"],
            author: [["MARC","MUELLER"],["NATASHA","MASCARENHAS"],["AAKARSH","DUBE"]],
            pdate: ["10th May 2020","24th March 2020", "22nd March 2020"],
            titles: ["The 10 must-haves your landing page needs to convert","TECHCRUNCH","MASHABLE"],
            desc: ["Paid search, Search Engine Advertising (SEA) are great – but have you spent enough time and money on your SEO-strategy?",
                "The COVID-19 pandemic has already triggered a number of layoffs across industries, from travel companies to scooter startups...",
                    "Microsoft has issued a security guidance advisory that there are vulnerabilities in its Windows products. The security flaws are...",
                     ],
            imgURL_art: [[blog1s,blog1sw],[blog2s,blog2sw],[blog3s,blog3sw]],
            imgURL_aut: [author1,author1,author1]
        }    

        const blog_articles = content.titles.map((title, idx)=>
        {
            let name = content.author[idx][0] + '-' + content.author[idx][1]; 
            return(
                <>
                <a href={`/blog/${name}/${content.bid[idx]}/`}>
                <div className="blog_article">
                    <div className = "img_wrapper">
                    <picture>
                        <source
                            srcset={content.imgURL_art[idx][1]}
                            type="image/webp" />
                        <img
                            src={content.imgURL_art[idx][0]} alt="blog image" loading="lazy"/>
                    </picture>
                       
                    </div>
                        <div className="content_wrapper">
                        <div className = "title">
                            {title}
                        </div>
                        <div className = "desc">
                            {content.desc[idx]}
                        </div>
                        <div className = "author">
                            <div className = "author_img_wrapper">
                                <img src = {content.imgURL_aut[idx]} alt={content.author[idx][0]} loading="lazy"/>
                            </div>
                            <div className = "author_nd">
                                <div className = "author_name desc">
                                    {`${content.author[idx][0]} ${content.author[idx][1]}`}
                                </div>
                                <div className = "author_date desc">
                                    {content.pdate[idx]}
                                </div>
                            </div>
                        </div>
                           
                        
                    </div>
                </div>
                </a>
                </>
            )
        })
        return(
            <div className="section blog_s">
                <Container>
                    <div>
                        <h2 className="title"> {this.props.t('blog:title')}</h2>
                        <p className="desc c_desc">
                        {this.props.t('blog:desc')}
                        </p>
                    </div>
                    <div className = "blog_articles">
                        {blog_articles}
                    </div>
                    <div>

                    </div>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(Blog);