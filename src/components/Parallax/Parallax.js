import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import './Parallax.scss';

class Parallax extends Component{
    constructor(props)
    {

        super(props);
        this.checked_btns = new Set([0]);
        this.state = {
            email: '',
            support: this.checked_btns
        }
    }

    handleClick = (e,idx) =>
    {
        if(!this.checked_btns.delete(idx))
        {
            this.checked_btns.add(idx);
        }
        this.setState({support: this.checked_btns});
    }

    handleChange = (e) =>
    {
        this.setState({email: e.target.value});
    }

    handleSubmit = () =>
    {
        
        this.props.contactUpdate(this.state.email, this.state.support);
        
    }
   
    render()
    {
    return(
    <div className = "parallax">
        <Container>
            <h1 className = "title">
            WE DESIGN. WE DEVELOP. WE DELIVER.
            </h1>

            <div className="home_btm">
            <div className = "home_btm_l">
               
                <div>
                    You are looking for support for your project ?
                </div>
               
                <div>
                {
                    ["E-Commerce","Mobile Applications","API Development"].map((item,idx)=>
                    {
                              
                        return(
                            
                                <label key={idx} className = {`custom_btn ${this.state.support.has(idx) ? 'checked' : ''}`} onClick = {(e) => this.handleClick(e,idx)}>{item}</label>
                            
                        );
                    })
                }
                </div>
               
                

                </div>
                <div className = "home_btm_r">
                    <div >
                        <input type="text" required placeholder="your email address" value = {this.state.email} onChange={this.handleChange} />
                        <a href="#CONTACT"><input onClick={this.handleSubmit} value = "PROCEED" className = "custom_btn submit" /></a>
                    </div>
                </div>
                </div>
         
        </Container>
       
      
        </div>

    )
}
}

export default Parallax;