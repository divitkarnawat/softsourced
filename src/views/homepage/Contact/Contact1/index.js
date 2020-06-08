import React, {Component} from 'react';

class Contact1 extends Component{
    constructor(props)
    {
        super(props);

    }

    handleClassChange = (e) =>
    {
        e.target.classList.toggle("checked");
    }
    render()
    {
        return(
            <div className = "contact_proj_req">
          
                  <div className = "part">
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
                           
                                <div onClick={this.handleClassChange} className = {`custom_btn`}>{item}</div>
    
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
                           
                                <div onClick={this.handleClassChange} className = {`custom_btn`}>{item}</div>
    
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
                    ["2000 - 3000","3001 - 10 000","10 001 - 50 000","> 50 000"].map((item,idx)=>
                    {
                              
                        return(
                           
                                <div onClick={this.handleClassChange} className = {`custom_btn`}>{`${item} €`}</div>
    
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