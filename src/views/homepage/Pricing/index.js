import React, { Component } from 'react';
import {withTranslation} from 'react-i18next';
import pricing_en from '../../../translations/homepage/pricing/en.json';
import pricing_de from '../../../translations/homepage/pricing/de.json';
import {Container} from '@material-ui/core';
import './Pricing.scss';
import ellipse2 from '../../../assets/img/pricing/ellipse2.svg';
import ellipse3 from '../../../assets/img/pricing/ellipse3.svg';


class Pricing extends Component{
    constructor(props)
    {
        super(props);


        this.state = {
            load: false,
            id: 0,
            prevprops_id: 0,
            
           

        }
    }
    componentDidMount()
    {
        this.props.i18n.addResourceBundle("en","pricing",pricing_en, true, false);
        this.props.i18n.addResourceBundle("de","pricing",pricing_de, true, false);
        this.setState({load: true})
    }
  
    render()
    {

        if(!this.state.load)
        {
            return(<div>Loading...</div>);
        }
  
    if(this.props.p_slide_id != this.state.prevprops_id)
    {
        this.setState({id: this.props.p_slide_id, prevprops_id: this.props.p_slide_id});
    }

     
    
                              
                      
                      

                    
     
            
      
        return(
            
            <div className = "section pricing_s">
                <Container>
                    <h2 className="title">
                    {this.props.t('pricing:title')}
                    </h2>
                <div className="main_slider">
                
                {
                    this.props.t('common:main_cat', {returnObjects: true}).map((item,idx)=>
                    {
                   
                        
                        return(
                            <div className = "slide_wrapper" key={idx} style={{marginBottom: `2px`}}>
                                <label for={item} onClick={()=>{   this.setState({id: idx})}} className = {`custom_btn ${this.state.id == idx ? 'checked' : ''}`}>{item}</label>
                                
                            </div>
                        );
                    })
                }

          
                </div>
                
                <div className="divider"/> 

                 <div className = "sync_slider">
                 
                        {
                            this.props.t('common:main_cat', {returnObjects: true}).map((title,idx)=>
                            {
                                return(
                                    <div className = "slide_wrapper" key={idx}>
                                        <div  className = "pricing_slide" data-title = {this.props.t(`common:main_cat.${this.state.id}`)}  >
                                        <div className = "desc">
                                        {this.props.t(`common:sub_cat.${this.state.id}.${idx}`)}
                                            </div>
                                            {/* <div  className = {`desc ${this.state.desc[this.state.id][idx] == '' ? 'dnone':''}`}>
                                                {this.state.desc[this.state.id][idx]}
                                            </div> */}
                                            <div className = "desc">
                                            {this.props.t(`pricing:time_hr.${this.state.id}.${idx}`)} {this.props.t('common:basic.time')} 
                                            </div>
                                            <div className = "desc">
                                            {this.props.t('common:basic.from')}  {this.props.t(`pricing:price.${this.state.id}.${idx}`)} €
                                            </div>
                                            <a className="a-custom_btn" href = {`#${this.props.t('common:nav.5')}`} ><div className = "custom_btn" style={{border: `2px solid white`}} onClick = {()=>{this.props.support_catUpdate(this.state.id,idx,Math.random())}} >
                                            {this.props.t('common:links.pricing')}
                                        </div>  </a>
                                            <img src = {ellipse2} className = "ellipse2" loading="lazy"/>
                <img src = {ellipse3} className = "ellipse3" loading="lazy"/>
                                        </div>
                                        

                                      
                                    </div>
                                );
                            })
                        }
               
                </div>
        
                </Container>
            </div>
        );
    }
}

export default withTranslation()(Pricing);