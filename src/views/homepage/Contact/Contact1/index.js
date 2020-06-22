import React, {Component} from 'react';

class Contact1 extends Component{
    constructor(props)
    {
        super(props);
    
    }

    render()
    {
      
        return(
            <div className = "contact_proj_req">
          
                  <div className = "part" style={{contentEditable: true}}>
                    You are looking for support for your project?
                </div>
                <div className = "part">
                <div>
                When do you want to kick off the project with us?
                </div>
                <div className = "grp_btn_time">
                {
                    this.props.feedback.time.map((item,idx)=>
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
                    What type of support do you need?
                </div>
                <div className = "grp_btn_support">
                {
                    this.props.feedback.support_titles.map((item,idx)=>
                    {
                             let support = this.props.proj_details.support;
                              
                        return(
                           
                                <div title="Double Click to Deselect" onClick={()=>this.props.changeProjDetails('support_id',idx)} className = {`custom_btn ${this.props.proj_details.support_id == (idx) ? 'selected': ''}  ${ support.has(idx) ? `${`checked_`+idx}`: ''}`}>{item}</div>
    
                        );
                    })
                }
                </div>
                <div>
                    Category: 
                </div>
                <div className = "grp_btn_support_cat">
                {
                    this.props.feedback.support_desc[this.props.proj_details.support_id].map((desc,idx)=>
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
                    What is your budget?
                </div>
                <div className = "grp_btn_price">
                {
                    this.props.feedback.budget.map((item,idx)=>
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

export default Contact1;