import React, {Component} from 'react';
import Slider from 'react-slick';
import {Container} from '@material-ui/core';
import Contact1 from './Contact1';

import './Contact.scss';
class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            cur_contact: 0,
            fname: '',
            message: '',
            lname: '',
            email: '',
            prevemail: '',
            prevsupport: '',
            pnumber: '',
            message: '',
            llink: '',
            proj_details: {
                time: 0,
                support: this.props.support,
                budget: 3
            }
        }
 

    }

    static eqSet(fs, ss)
    {
        if(fs.size !== ss.size) return false;
        for (let value of fs) if(!ss.has(value)) return false;
        return true;
    }

    static getDerivedStateFromProps = (props,state) =>
    {
        
        let updateState = {}
        if(props.email !== state.email)
        {
            console.log('in email')
           updateState.email = props.email
        }
        if(!Contact.eqSet(props.support, state.proj_details.support))
        {
            console.log('in support')
            updateState.proj_details = {
                ...state.proj_details,
                'support': props.support
            }
        }
        if(Object.entries(updateState).length > 0)
        {
      
            return updateState;
        }
        else
        {
            return null;
        }
    }

    handleInvalid = (e)=>{
    
        // if(document.documentElement.clientWidth > 500)
        // e.target.setCustomValidity('Bitte füllen Sie dieses Feld aus');
        // else{
        //   e.target.setCustomValidity(' ');
          
        // }
        
      }
      handleChange = (e)=>{
     
    //   if(e.target.name == 'email')
    //   {
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
    //     {
    
    //       this.setState({status: ''});
    //     }
    //     else{
          
    //       this.send_status.current.style.color = "red";
    //       this.setState({status: 'Ungültig E-mail'});
    //     }
    //   }
   // console.log(e.target.name + ' '+ e.target.value);
        this.setState({[e.target.name]: [e.target.value]});
        
      }

    changeProjDetails = (property, value) =>
    {
        
        this.setState(prevState=>{
            if(property === 'support')
        {
            let tempSet = prevState.proj_details.support;
            if(!tempSet.delete(value))
            {
                tempSet.add(value);
            }
            value = tempSet;
        }
            return({
            proj_details: {
                ...prevState.proj_details,
                [property]: value
            }
        }
            );
        })
    }
       
    render()
    {

      //  console.log(this.state.email);
    
        const display_box_content = [
                                        "Type in a brief description of your project here.",
                                        "Introduce yourself in a few words here. We are excited to hear more about you.",
                                        "Type in your message here."
        ]


        const settings_main = {
            speed: 500,
            slidesToShow: 3,
            
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  dots: true,
                  centerMode: true,
                  centerPadding: "60px",
                  slidesToScroll: 1,
                  infinite: true,
                  beforeChange: (current, next) => {
                     this.setState({cur_contact: next});
                  }
               
                  
                }
              }
          ]
              };
        return(
            <div className = "section contact_s">
                <h2 className = "title">
                    CONTACT US
                </h2>
                <Container>
                <div className="main_slider">
                <Slider {...settings_main}>
                {
                    ["PROJECT REQUEST","JOIN OUR TEAM","OTHER QUERIES"].map((item,idx)=>
                    {
                              
                        return(
                            <div className = "slide_wrapper" key={idx}>
                                <label onClick={() => {this.setState({cur_contact: idx}); }} className = {`custom_btn ${this.state.cur_contact == idx ? 'checked' : ''}`}>{item}</label>
                            </div>
                        );
                    })
                }

                </Slider>
                </div>
                <form>
                <div className = "contact_wrapper">
                    {this.state.cur_contact == 0 ? <Contact1 proj_details = {this.state.proj_details} changeProjDetails = {this.changeProjDetails.bind(this)} /> : ''}
                    
                    <div className = "form_wrapper">
                        <textarea rows="4"  value= {this.state.message} name="message" onChange = {this.handleChange} onInvalid = {this.handleInvalid} placeholder={display_box_content[this.state.cur_contact]} />
                           

                        <div className = "main_form">
                           
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.fname} name = "fname" placeholder = "First Name" />
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.lname} name = "lname" placeholder = "Last Name"/>
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.email} name = "email" placeholder = "E-Mail"/>
                                <input type="text"          onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.pnumber} name = "pnumber" placeholder = "Phone Number"/>
                                {
                                    this.state.cur_contact == 1 ? <input type="text"          onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.llink} name = "llink" placeholder = "LinkedIn"/> : ''
                                }   
                                <input type="checkbox" required value = "tnc" name = "tnc" style={{marginTop: `30px`}} /><label for="tnc">I agree with Terms & Conditions</label>
                        </div>
                    </div>
                </div>

                            <input type="submit" value = "SUBMIT" className = "custom_btn submit" />
                            <p className="desc">This support request is of course non-binding. No costs or fees are incurred.</p>
                        </form>
                </Container>
            </div>
        );
    }
}



export default Contact;
