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
                    ["now","within the next 7 days","within the next 14 days","within the next few months"].map((item,idx)=>
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
                <div className = "grp_btn_time">
                {
                    ["E-COMMERCE","MOBILE APPLICATION","API DEVELOPMENT"].map((item,idx)=>
                    {
                              
                        return(
                           
                                <div onClick={()=>this.props.changeProjDetails('support',idx)} className = {`custom_btn ${this.props.proj_details.support.has(idx) ? 'checked': ''}`}>{item}</div>
    
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
                    ["2 - 3k","3 - 10k","10 - 50k","> 50k"].map((item,idx)=>
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