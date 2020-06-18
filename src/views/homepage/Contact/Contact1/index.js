import React, {Component} from 'react';

class Contact1 extends Component{
    constructor(props)
    {
        super(props);
        this.support_desc = [
            [
             "Easy to setup, quick to market, mostly front-end and design work along with PP",
             "Open Source, more flexibility with plugins",
             "Unlimited flexibility, grow with your business with specific use cases"
            ],
            [
                "Food Delivery",
                "Social networking platform",
                "Messaging with secure file storage"
            ],
            [
                "Connecting bank account to accounting, reporting and invoice generation",
                "ERP to the rest of the organisation",
                "API based microservices on a case by case basis"
            ]
        ]

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
                <div className = "grp_btn_support">
                {
                    ["E-COMMERCE","MOBILE APPLICATION","API DEVELOPMENT"].map((item,idx)=>
                    {
                             let sup_cat = this.props.proj_details.support_cat;
                              
                        return(
                           
                                <div title="Double Click to Deselect" onClick={()=>this.props.changeProjDetails('support_id',idx)} className = {`custom_btn ${this.props.proj_details.support_id == (idx) ? 'selected': ''}  ${(sup_cat.has((idx+'0')) || sup_cat.has((idx+'1')) || sup_cat.has((idx+'2')) ) ? 'checked': ''}`}>{item}</div>
    
                        );
                    })
                }
                </div>
                <div>
                    Category: 
                </div>
                <div className = "grp_btn_support_cat">
                {
                    this.support_desc[this.props.proj_details.support_id].map((desc,idx)=>
                    {
                              
                        return(
                           
                                <div onClick={()=>this.props.changeProjDetails('support_cat',('' + this.props.proj_details.support_id + idx))} className = {`custom_btn ${this.props.proj_details.support_cat.has(('' + this.props.proj_details.support_id + idx)) ? 'checked': ''}`}>{desc}</div>
    
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