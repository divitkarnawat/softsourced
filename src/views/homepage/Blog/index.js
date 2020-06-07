import React, {Component} from 'react';
import {Container} from '@material-ui/core';
import './Blog.scss';
import blog1s from '../../../assets/img/blog1s.jpg';
import blog2s from '../../../assets/img/blog2s.jpg';
import blog3s from '../../../assets/img/blog3s.jpg';
class Blog extends Component{
    
    render()
    {
        const content = {
            titles: ["AAKARSH DUBE – MASHABLE","LOUISE MATSAKIS – WIRED","NATASHA MASCARENHAS – TECHCRUNCH"],
            desc: ["The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced t...",
                    "The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced t...",
                    "The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced t..."
                ],
            links: ["#","#","#"],
            imgURL: [[blog1s],[blog2s],[blog3s]]
        }    

        const blog_articles = content.titles.map((title, idx)=>
        {
            return(
                <div className="blog_article">
                    <div className = "img_wrapper">
                        <img src={content.imgURL[idx][0]} />
                    </div>
                        <div className="content_wrapper">
                        <div className = "title">
                            {title}
                        </div>
                        <div className = "desc">
                            {content.desc[idx]}
                        </div>
                        
                            <a className = "links" href = {content.links[idx]}> --See article </a> 
                        
                    </div>
                </div>
            )
        })
        return(
            <div className="section blog_s">
                <Container>
                    <div>
                        <h1 className="title"> BLOG</h1>
                        <p className="desc c_desc">
                        In our blog, we publish articles that are of technical nature or about our company to keep you up to speed with latest developments.
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

export default Blog;