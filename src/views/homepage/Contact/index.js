import React, {Component} from 'react';
import {withTranslation, Trans} from 'react-i18next';
import Slider from 'react-slick';

import {Container} from '@material-ui/core';
import Contact1 from './Contact1';

import './Contact.scss';
class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.errors = new Set();
        this.submitbtn = React.createRef();
        this.state = {
            cur_contact: 0,
            resume: this.props.t('placeholders.resume'),
            prevpropid: {
                email: 0,
                support: 0
            },
            fname: '',
            lname: '',
            email: '',
            prevemail: 'email',
            prevsupport:'',
            prevsupport_id: this.props.support_id,
            prevsupport_cat: this.props.support_cat,
            pnumber: '',
            message : '',
            support_id: -1,
            support_cat_id: -1,
            llink: '',
            proj_details: {
                time: 0,
                support: new Map(),
                support_id: this.props.support_id,
                support_cat: this.props.support_cat,
                budget: 3
            },
           
        };

        


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
        console.log(props.propid);
        if(props.propid.email != state.prevpropid.email) 
        {
    
            updateState.cur_contact = 0;
            updateState.prevpropid = {
                ...state.prevpropid,
                email: props.propid.email
            }
                if(props.email != state.prevemail)
        {
       
           updateState.email = props.email
           updateState.prevemail = props.email
        }
    
        // if(!Contact.eqSet(props.support, state.prevsupport))
        // {
        //     updateState.prevsupport = props.support
        //     updateState.proj_details = {
        //         ...state.proj_details,
        //         'support': props.support
        //     }
        // }
        // if(!Contact.eqSet(props.support_cat,state.prevsupport_cat))
        // {
    }
           else if(props.propid.support != state.prevpropid.support)
           {
            updateState.prevpropid = {
                ...state.prevpropid,
                support: props.propid.support
            }
            let temp_support = state.proj_details.support;
            if(temp_support.has(props.support_id))
            {
                temp_support.get(props.support_id).add(props.support_cat_id)
            }
            else
            {
                temp_support.set(props.support_id,new Set([props.support_cat_id]))
            }
            updateState.proj_details = {
                ...state.proj_details,
                support: temp_support,
                support_id : props.support_id,
            }
            
        
            updateState.cur_contact = 0;
         
           
            
        
           }
           else
           {

           }
    
       // console.log('props' + props.support_id + 'prevsupport' + state.prevsupport_id);
        
           
    
    
        
       return updateState;
    }

    handleInvalid = (e)=>{
    
        // if(document.documentElement.clientWidth > 500)
        // e.target.setCustomValidity('Bitte füllen Sie dieses Feld aus');
        // else{
        //   e.target.setCustomValidity(' ');
          
        // }
        
      }
      handleChange = (e)=>{
        
        let name = e.target.name;
        let value = e.target.value;

      if(name == 'email' && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)))
      {

            this.errors.add(name);
      }
     else if(name == 'pnumber' && !(/^([0-9]|\+)[0-9]*$/.test(value)))
      {
        this.errors.add(name);
      }
     
      else
      { 
          this.errors.delete(name);
      }
      if(name == 'resume') 
      {
        value = value.replace("C:\\fakepath\\", "");
      }
      this.submitbtn.current.disabled = this.errors.size ? true : false
        this.setState({
            [name]: [value],
        });

        
      }

    //   resetform = () =>
    //   {
    //       this.setState({
            
    //       })
    //   }
    handleSubmit = (e) =>
    {
        e.preventDefault();

    }
    

    changeProjDetails = (property, value) =>
    {
       
        if(property == 'support_id' && value == this.state.proj_details.support_id)
        {
            property = 'support';
            let temp_sup = this.state.proj_details.support;
            temp_sup.delete(value)
            value = temp_sup;
        }
        else if(property === 'support')
        {
            let temp_sup = this.state.proj_details.support;
            if(temp_sup.has(this.state.proj_details.support_id))
            {
               if(!temp_sup.get(this.state.proj_details.support_id).delete(value))
               {
                    temp_sup.get(this.state.proj_details.support_id).add(value);       
               }
               else
               {
                   if(temp_sup.get(this.state.proj_details.support_id).size == 0)
                   {
                       temp_sup.delete(this.state.proj_details.support_id);
                   }
               }
            }
            else
            {
                temp_sup.set(this.state.proj_details.support_id, new Set([value]));
            }
            
            value = temp_sup;
        }
        this.setState(prevState=>{
            
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
                    {this.props.t('title')}
                </h2>
                <Container>
                <div className="main_slider">
                <Slider {...settings_main}>
                {
                   this.props.t('contact_cat', {returnObjects: true}).map((item,idx)=>
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
                <form onSubmit = {this.handleSubmit}>
                <div className = "contact_wrapper">
                    {this.state.cur_contact == 0 ? <Contact1  proj_details = {this.state.proj_details} changeProjDetails = {this.changeProjDetails.bind(this)} /> : ''}
                    
                    <div className = "form_wrapper">
                        {
                            this.state.cur_contact == 0 ? 
                        (<div className = "display_box">
                            <p> {this.props.t('time.placeholder')} <b>{this.props.t(`time.options.${this.state.proj_details.time}`)}</b></p>
                            {
                                this.state.proj_details.support.size > 0 ? (
                                <>
                                
                                <p> {this.props.t('main_cat.placeholder')} </p>
                            <ul>
                            {
                               
                                (Array.from(this.state.proj_details.support)).map((item)=>{
                                    
                                    let support_cat_list = Array.from(item[1]).map(desc=>{
                                        return(
                                        <p >{this.props.t(`common:sub_cat.${item[0]}.${desc}`)}</p>);
                                    }) 
                                    return(
                                        
                                        <li style={{marginBottom: `1em`}}>
                                        <p><b> {this.props.t(`common:main_cat.${item[0]}`)}</b></p>
                                        <p> {support_cat_list}</p>
                                        </li>
                                    );
                                })
                            }
                            </ul>
                            </>): ''
    }
                            <p> {this.props.t('budget.placeholder')} <b>{this.props.t(`budget.options.${this.state.proj_details.budget}`)} EUR</b></p>
                        </div>) : ''
    }
                        <textarea rows="4"  value= {this.state.message} name="message" onChange = {this.handleChange} placeholder={this.props.t(`display_box.${this.state.cur_contact}`)} />
                           

                        <div className = "main_form">
                           
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.fname} name = "fname" placeholder = {this.props.t('placeholders.fname')} />
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.lname} name = "lname" placeholder = {this.props.t('placeholders.lname')}/>
                                <input type="text" required onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.email} name = "email" placeholder = {this.props.t('placeholders.email')} className = {this.errors.has("email") ? 'invalid': ''} />
                                <input type="tel"          onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.pnumber} name = "pnumber" placeholder = {this.props.t('placeholders.pno')} minlength = "7" maxlength = "14" className = {this.errors.has("pnumber") ? 'invalid': ''}  />
                                {
                                    this.state.cur_contact == 1 ? <input type="text"          onChange = {this.handleChange} onInvalid = {this.handleInvalid} value = {this.state.llink} name = "llink" placeholder = {this.props.t('placeholders.linkedin')}/> : ''
                                }   
                                {
                                    this.state.cur_contact == 1 ? <>
                                        <div className={`file-upload ${this.state.resume != this.props.t('placeholders.resume') ? 'active' : ''}`}>
                                            <div className="file-select"> 
                                                <div className="file-select-name" id="noFile">{this.state.resume}</div> 
                                                <div className="file-select-button" id="fileName">{this.props.t('placeholders.upload')}</div>
                                                <input type="file" name="resume" id="chooseFile" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </>
                                     : ''
                                }  
                                <input type="checkbox" required value = "tnc" name = "tnc" id="tnc" style={{marginTop: `30px`}} /><label style={{fontSize: `14px`, cursor: `pointer`}} for="tnc"><Trans i18nKey="common:links.contact">I agree with <a href="/terms-and-conditions/" target='_blank'>Terms & Conditions</a> and <a target='_blank' href="/privacy-policy/"> Privacy Policy.*</a></Trans> </label>
                        </div>
                    </div>
                </div>

                            <input type="submit" value = {this.props.t('common:basic.submit')} className = "custom_btn submit" ref={this.submitbtn} />
                            {this.state.cur_contact == 0 ? <p className="desc">{this.props.t('extra')}</p> : ''}
                        </form>
                </Container>
            </div>
        );
    }
}



export default withTranslation('contactus')(Contact);
