import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
class Contact1 extends Component{
    constructor(props)
    {
        super(props);
    
    }

    render()
    {
      
        return(
            <div className = "contact_proj_req">
          
              
                <div className = "part">
                <div>
               {this.props.t('contact:time.title')}
                </div>
                <div className = "grp_btn_time">
                {
                   this.props.t('contact:time.options', {returnObjects: true}).map((item,idx)=>
                    {
                              
                        return(
                           
                                <div onClick={()=>this.props.changeProjDetails('time',idx)} className = {`custom_btn ${this.props.proj_details.time == idx ? 'checked' : '' }`}>{item}</div>
    
                        );
                    })
                }
                </div>
                </div>

                <div className = "part">
                <div>
                    {this.props.t('contact:main_cat.title')}
                </div>
                <div className = "grp_btn_support">
                {
                    this.props.t('common:main_cat', {returnObjects: true }).map((item,idx)=>
                    {
                             let support = this.props.proj_details.support;
                              
                        return(
                           
                                <div title="Double Click to Deselect" onClick={()=>this.props.changeProjDetails('support_id',idx)} className = {`custom_btn ${this.props.proj_details.support_id == (idx) ? 'selected': ''}  ${ support.has(idx) ? `${`checked_`+idx}`: ''}`}>{item}</div>
    
                        );
                    })
                }
                </div>
                </div>
                <div className = "part">
                <div>
                   {this.props.t('contact:sub_cat.title')}
                </div>
                <div className = "grp_btn_support_cat">
                {
                    this.props.t(`common:sub_cat.${this.props.proj_details.support_id}`, {returnObjects: true}).map((desc,idx)=>
                    {
                              
                        return(
                           
                                <div onClick={()=>this.props.changeProjDetails('support',(idx))} className = {`custom_btn ${(this.props.proj_details.support.has(this.props.proj_details.support_id)) ? (this.props.proj_details.support.get(this.props.proj_details.support_id).has(idx) ? `${`checked_`+this.props.proj_details.support_id}` : '') : ''}`}>{desc}</div>
    
                        );
                    })
                }
                </div>
                </div> 

                 <div className = "part">
                <div>
                    {this.props.t('contact:budget.title')}
                </div>
                <div className = "grp_btn_price">
                {
                    this.props.t('contact:budget.options', {returnObjects: true}).map((item,idx)=>
                    {
                              
                        return(
                           
                                <div onClick={()=>this.props.changeProjDetails('budget',idx)} className = {`custom_btn ${this.props.proj_details.budget == idx ? 'checked' : '' }`}>{`${item} €`}</div>
    
                        );
                    })
                }
                </div>
                </div>                 
            </div>
        );
    }
    
}

export default withTranslation()(Contact1);