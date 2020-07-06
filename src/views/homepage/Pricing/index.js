import React, { Component } from 'react';
import {withTranslation} from 'react-i18next';
import {Container} from '@material-ui/core';
import './Pricing.scss';
import ellipse2 from '../../../assets/img/pricing/ellipse2.svg';
import ellipse3 from '../../../assets/img/pricing/ellipse3.svg';


class Pricing extends Component{
    constructor(props)
    {
        super(props);


        this.state = {
            id: 0,
            prevprops_id: 0,
            
           

        }
    }
  
    render()
    {
  
    if(this.props.p_slide_id != this.state.prevprops_id)
    {
        this.setState({id: this.props.p_slide_id, prevprops_id: this.props.p_slide_id});
    }

     
    
                              
                      
                      

                    
     
            
      
        return(
            
            <div className = "section pricing_s">
                <Container>
                    <h2 className="title">
                    {this.props.t('title')}
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
                                            {this.props.t(`time_hr.${this.state.id}.${idx}`)} {this.props.t('common:basic.time')} 
                                            </div>
                                            <div className = "desc">
                                            {this.props.t('common:basic.from')}  {this.props.t(`price.${this.state.id}.${idx}`)} €
                                            </div>
                                            <a className="a-custom_btn" href = {`#${this.props.t('common:nav.5')}`} ><div className = "custom_btn" style={{border: `2px solid white`}} onClick = {()=>{this.props.support_catUpdate(this.state.id,idx,Math.random())}} >
                                            {this.props.t('common:links.pricing')}
                                        </div>  </a>
                                            <img src = {ellipse2} className = "ellipse2" />
                <img src = {ellipse3} className = "ellipse3" />
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

export default withTranslation('pricing')(Pricing);