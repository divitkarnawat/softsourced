import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import './Parallax.scss';

import home_bg1xj from '../../assets/img/home_bg_img/1x/home_bg.jpg';
import home_bg2xj from '../../assets/img/home_bg_img/2x/home_bg.jpg';
import home_bg3xj from '../../assets/img/home_bg_img/3x/home_bg.jpg';

import home_bg1xw from '../../assets/img/home_bg_img/1x/home_bg.webp';
import home_bg2xw from '../../assets/img/home_bg_img/2x/home_bg.webp';
import home_bg3xw from '../../assets/img/home_bg_img/3x/home_bg.webp';

import home_bgmw from '../../assets/img/home_bg_img/mobile/home_bg.webp';
import home_bgmj from '../../assets/img/home_bg_img/mobile/home_bg.jpg';




class Parallax extends Component{
    constructor(props)
    {
        super(props);
        this.proceedbtn = React.createRef();
        this.inv = false;
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
        
        this.inv = !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value));
        
        this.setState({
            [e.target.name]: [e.target.value],
        });
        this.proceedbtn.current.style.pointerEvents = this.inv ? 'none' : 'auto';
          
  
          
        
    }

    handleSubmit = () =>
    {
        
        this.props.contactUpdate(this.state.email, this.state.support,Math.random());
        
    }
   
    render()
    {
       
    return(
    <div className = "parallax">
        <div className = "parallax_img_wrapper">
        <picture>
	<source
		media="(max-width: 500px)"
		srcset= {home_bgmw}
		type="image/webp" />
	<source
		media="(max-width: 500px)"
		srcset={home_bgmj} />
	<source
		srcset= {`${home_bg1xw} 1x,${home_bg2xw} 2x,${home_bg3xw} 3x`}
		type="image/webp" />
	<img
		src={home_bg1xj} alt="softsourced bg image"
		srcset={`${home_bg2xj} 2x,
				${home_bg3xj} 3x`} />
</picture>
        </div>
    
        <Container className = "content_wrapper">
            <div className = "title">
        
            <div className = "anim-typewriter title_1">
                {/* <div className="title_1">             */}
            {this.props.t('parallax:title.0')}
            {/* </div> */}
            </div>
            <div className = "title_2">            
            {this.props.t('parallax:title.1')}
            </div>
            <div className = "title_3">            
            {this.props.t('parallax:title.2')}
            </div>
         
            </div>

            <div className="home_btm">
       

                <div className = "home_btm_r">
                    <div >
                        <input required type="text" required placeholder={this.props.t("parallax:placeholder")} value = {this.state.email} onChange={this.handleChange} name="email" className={this.inv ? 'invalid': ''} />
                        <a href={`#${this.props.t('common:nav.5')}`} ref={this.proceedbtn}><input onClick={this.handleSubmit}  value = {this.props.t("parallax:btn")} className = "custom_btn submit" /></a>
                    </div>
                </div>
                </div>
         
        </Container>
       
        </div>

    )
}
}

export default withTranslation()(Parallax);