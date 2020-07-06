import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {Container} from '@material-ui/core';
import './Team.scss';
import profile_pic_marc from '../../../assets/img/team/profile_marc_formal.png';
import profile_pic_hanush from '../../../assets/img/team/profile_hanush_formal.png';
class Team extends Component
{

    render()
    {
        
            const useTagF = '<use xlink:href="#icon-facebook" />';
            const useTagL = '<use xlink:href="#icon-linkedin" />';
            const tcontent = {
                name: ["Marc Mueller","Hanush Pillai"],
                desig: [this.props.t('common:basic.sales'),this.props.t('common:basic.technology')],
                loc: [this.props.t('common:basic.germany'),this.props.t('common:basic.india')],
                slinks: [["https://www.linkedin.com/in/marc-mueller-7a4987a3/","#"],["https://www.linkedin.com/in/hanushpillai/","#"]],
                img: [[profile_pic_marc,profile_pic_marc],[profile_pic_hanush,profile_pic_hanush]]

            }
        
        return(
            <div className = "section team_s">
                <Container>
                    <h2 className = "title">
                        TEAM
                    </h2>
                    
                    <div class="wrapper">

{
    tcontent.name.map((name, idx)=>
    {
        return(
            <div class="profile-card js-profile-card">
    <div class="profile-card__img">
      <img src={tcontent.img[idx][0]} alt="profile card" />
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name">{name}</div>
      <div class="profile-card__txt">{tcontent.desig[idx]} </div>
        <div class="profile-card__txt">{tcontent.loc[idx]}</div>
      
     

      <div class="profile-card-social">
        <a href={tcontent.slinks[idx][0]} className="profile-card-social__item facebook" target="_blank">
          <span class="icon-font">
             
              <svg class="icon" dangerouslySetInnerHTML={{__html: useTagL }} />
          </span>
        </a>

      


{/*      
        <a href={tcontent.slinks[idx][1]} class="profile-card-social__item github" target="_blank">
          <span class="icon-font">
              <svg class="icon" dangerouslySetInnerHTML={{__html: useTagG }}/>
          </span>
        </a> */}

      

      

      </div>

     
    </div>
    
    
    
    
    
    
    
    

</div>
        );
    })
}
  
  </div>
  

<svg hidden="hidden" display="none">
  <defs>
    


     

    <symbol id="icon-facebook" viewBox="0 0 32 32">
      <title>facebook</title>
      <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
    </symbol>

    <symbol id="icon-linkedin" viewBox="0 0 50 50">
    <path d="M11,37.4V19.1h6.1v18.3H11z M14.1,16.6L14.1,16.6c-2.1,0-3.4-1.4-3.4-3.1s1.3-3.1,3.4-3.1s3.4,1.4,3.4,3.1
             S16.2,16.6,14.1,16.6L14.1,16.6z"/><path id="path30" d="M20.4,37.4c0,0,0.1-16.6-0.1-18.4h6.1v2.7l0,0c0.8-1.2,2.2-3,5.5-3c4.1,0,7,2.6,7,8.2v10.5h-6.1v-9.8 c0-2.5-0.8-4.2-3-4.2c-1.7,0-2.7,1.1-3.1,2.2c-0.2,0.4-0.2,0.9-0.2,1.5v10.3H20.4L20.4,37.4z"/>
  </symbol>

    

   
    
    
  </defs>
</svg>

                </Container>
            </div>
        );
    }
}



export default withTranslation()(Team);