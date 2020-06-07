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
            cur_contact: 1,
            fname: '',
            lname: '',
            email: '',
            pnumber: '',
            llink: ''
        }

    }

    render()
    {

        const display_box_content = [
                                        "We are excited to hear more about your project! ||What is it on - you have a project title?Which project phase are you in?||How can we help you?||We will get back to you within 48 hours.",
                                        "We are stoked to see you are interested in joining a||team full of talent and expertise!||Introduce yourself in a few words, drop your phone number|| and email address below and we will reach out to you.",
                                        "We are definitely curious as to what you have to say.|| Type in phone number and email address below|| and we will get back to you. shortly."
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
                  slidesToScroll: 1,
                  infinite: true,
                  beforeChange: (current, next) => {
                     this.setState({id: next});
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
                                <label onClick={() => {this.setState({cur_contact: idx}); }} className = {`custom_btn ${this.state.id == idx ? 'checked' : ''}`}>{item}</label>
                            </div>
                        );
                    })
                }

                </Slider>
                </div>

                <div className = "contact_wrapper">
                    {this.state.cur_contact == 0 ? <Contact1 /> : ''}
                    
                    <div className = "form_wrapper">
                        <div className = "display_box">
                            <p className = "desc">
                            {
                                display_box_content[this.state.cur_contact].split('||').map((content)=>{
                                    return(
                                        <>
                                        {content} <br />
                                        </>
                                    );
                                })
                            }
                            </p>
                        </div>

                        <div className = "main_form">
                            <form>
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.fname} name = "fname" placeholder = "First Name" />
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.lname} name = "lname" placeholder = "Last Name"/>
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.email} name = "email" placeholder = "E-Mail"/>
                                <input type="text"          onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.pnumber} name = "pnumber" placeholder = "Phone Number"/>
                                <input type="text"          onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.llink} name = "llink" placeholder = "LinkedIn"/>
                            </form>
                        </div>
                    </div>
                </div>



                </Container>
            </div>
        );
    }
}



export default Contact;
