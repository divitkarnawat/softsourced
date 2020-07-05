import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {Container} from '@material-ui/core';
import {HashLink as Link} from 'react-router-hash-link';

import './Blog.scss';
import blog3s from '../../../assets/img/blog1s.jpg';
import blog2s from '../../../assets/img/blog2s.jpg';
import blog1s from '../../../assets/img/blog3s.jpg';
import author1 from '../../../assets/img/sample_profile.jpg';

class Blog extends Component{
    
    render()
    {
        const content = {
            bid: ['nm_2432020',"adube_2232020","lmatsakis_1032020"],
            author: [["NATASHA","MASCARENHAS"],["AAKARSH","DUBE"],["LOUISE","MATSAKIS"]],
            pdate: ["24th March 2020","22nd March 2020", "10th March 2020"],
        titles: ["TECHCRUNCH","MASHABLE","WIRED"],
            desc: ["The COVID-19 pandemic has already triggered a number of layoffs across industries, from travel companies to scooter startups...",
                    "Microsoft has issued a security guidance advisory that there are vulnerabilities in its Windows products. The security flaws are...",
                    "The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced to its necessary elements..."
                ],
            imgURL_art: [[blog1s],[blog2s],[blog3s]],
            imgURL_aut: [author1,author1,author1]
        }    

        const blog_articles = content.titles.map((title, idx)=>
        {
            let name = content.author[idx][0] + '-' + content.author[idx][1]; 
            return(
                <>
                <Link to={{pathname:`/blog/${name}/${content.bid[idx]}/`}}>
                <div className="blog_article">
                    <div className = "img_wrapper">
                        <img src={content.imgURL_art[idx][0]} />
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
                                <img src = {content.imgURL_aut[idx]} alt={content.author[idx][0]}/>
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
                </Link>
                </>
            )
        })
        return(
            <div className="section blog_s">
                <Container>
                    <div>
                        <h2 className="title"> {this.props.t('title')}</h2>
                        <p className="desc c_desc">
                        {this.props.t('desc')}
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

export default withTranslation('blog')(Blog);