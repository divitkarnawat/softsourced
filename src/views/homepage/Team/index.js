import React, {Component} from 'react';
import {Container} from '@material-ui/core';
import './Team.scss';
import profile_pic from '../../../assets/img/sample_profile.jpg';
class Team extends Component
{

    render()
    {
        
            const useTagF = '<use xlink:href="#icon-facebook" />';
            const useTagG = '<use xlink:href="#icon-github" />';
            const tcontent = {
                name: ["John Doe","John Doe","John Doe","John Doe"],
                desig: ["CEO","COO","CTO","CFO"],
                loc: ["Germany","Germany","Germany","Germany"],
                slinks: [["#","#"],["#","#"],["#","#"],["#","#"]]

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
      <img src={profile_pic} alt="profile card" />
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name">{name}</div>
      <div class="profile-card__txt">{tcontent.desig[idx]} </div>
        <div class="profile-card__txt">{tcontent.loc[idx]}</div>
      
     

      <div class="profile-card-social">
        <a href={tcontent.slinks[idx][0]} class="profile-card-social__item facebook" target="_blank">
          <span class="icon-font">
             
              <svg class="icon" dangerouslySetInnerHTML={{__html: useTagF }} />
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
    

    <symbol id="icon-github" viewBox="0 0 32 32">
      <title>github</title>
      <path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"></path>
      <path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"></path>
      <path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"></path>
      <path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"></path>
      <path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"></path>
      <path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"></path>
      <path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"></path>
      <path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"></path>
    </symbol>

     

    <symbol id="icon-facebook" viewBox="0 0 32 32">
      <title>facebook</title>
      <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
    </symbol>

    

   
    
    
  </defs>
</svg>

                </Container>
            </div>
        );
    }
}



export default Team;