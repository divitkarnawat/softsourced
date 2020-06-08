import React from 'react';
import {Container} from '@material-ui/core';
import './Parallax.scss';

const Parallax = (props) => {
    return(
    <div className = "parallax">
        <Container>
            <h1 className = "title">
            WE DESIGN. WE DEVELOP. WE DELIVER.
            </h1>

            <div className = "home_btm_l">
               
                <div>
                    You are looking for support for your project ?
                </div>
               
                <div>
                {
                    ["E-Commerce","Mobile Applications","API Development"].map((item,idx)=>
                    {
                              
                        return(
                            
                                <label key={idx} className = {`custom_btn`}>{item}</label>
                            
                        );
                    })
                }
                </div>
               
                

                </div>
                <div className = "home_btm_r">
                    <form>
                        <input type="text" required placeholder="your email address" />
                        <input type = "submit" value = "PROCEED" className = "custom_btn" />
                    </form>
                </div>
           
         
        </Container>
       
      
        </div>

    );
};

export default Parallax;