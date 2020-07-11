import React, { Component, createRef } from 'react';
import {withTranslation} from 'react-i18next';
import {HashLink as Link} from 'react-router-hash-link';
import './Header.scss';
import CustomisedButton from '../CustomisedButton';
import logo from '../../assets/img/logo.svg';
class Header extends Component{

    constructor(props)
    {
    
        super(props);
        this.headerNavbar = React.createRef();
        this.menuWrapper = React.createRef();
        this.hamburger = React.createRef();
        this.lng = "english"
        this.state = {
            scrollCheck: false
        }
    }

    changeLanguage = (lng) =>{
       
            this.props.i18n.changeLanguage(lng);
            this.lng = lng == "en" ? "en" : "de"
      
    }
    handleHamburger = () =>
    {   
        if(window.innerWidth < 1354)
        {
  
        this.hamburger.current.classList.toggle('open');
       const submenu = this.menuWrapper.current;
       if(!submenu.classList.contains('menuWrapper_display'))
       {
            submenu.classList.add('menuWrapper_display');
            setTimeout(function(){
                submenu.classList.add('menuWrapper_fadein');
            }, 10);
       }
       else
       {
           submenu.classList.remove('menuWrapper_fadein');
           setTimeout(function(){
               submenu.classList.remove('menuWrapper_display');
           }, 500);
       }
    }
    }

    componentDidMount()
    {
        var prevScrollPos = window.pageYOffset;
        document.addEventListener('scroll', ()=>{
            let currentScrollPos = window.pageYOffset;
            if(this.headerNavbar.current)
            {
            if((currentScrollPos > prevScrollPos) && (currentScrollPos > 640))
            {
                this.headerNavbar.current.style.top = "-100px";
                this.hamburger.current.style.top = "-100px";
            }
            else{
                this.headerNavbar.current.style.top = "0px";
                this.hamburger.current.style.top = "33px";
            }
        }
         prevScrollPos = currentScrollPos;
        })
    }


    render(){
   
        const navlinks = this.props.t('common:nav', {returnObjects: true}).map((navLink)=>{
            
            return(
            <div className="navLink" onClick={this.handleHamburger}>
                <Link smooth to={`/#${navLink}`}> {navLink} </Link>
            </div>
            );
        });

    
        return(
          <>
          <div className="menuWrapper" ref={this.menuWrapper}>
              <div className="linksWrapper">
              {navlinks}
     
           
              </div>
              
          </div>
        <div className="header-wrap" ref={this.headerNavbar}>
           <div className="brandLogo">
           <Link smooth to="/#root">
          
            <img src={logo} alt="softsourced"/>
  </Link>
           </div>
         
           <div className="navLinks">
               <div className="desktopView">
               {navlinks}
       
          
               </div>
              
               </div>
               <div >
                <a style={{height: `27px`}}> 
                                    <label class="button">
                    <input type="checkbox" />
                    <span></span>
                    <span onClick={()=>this.props.i18n.changeLanguage('en')} className = {this.props.i18n.language!="de" ? "lng_selected" : ""}></span>
                    <span onClick={()=>this.props.i18n.changeLanguage('de')} className = {this.props.i18n.language=="de" ? "lng_selected" : ""}></span>
         
                    </label>
                </a>
                </div>
               
        </div>
      

        <div ref={this.hamburger} id="hamburger" onClick={this.handleHamburger}> 
                <span></span>
                <span></span>
                <span></span>
               </div>
            </>
        );
    }
}

export default withTranslation()(Header);