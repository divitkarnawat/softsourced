import React, { Component } from 'react';
import parse from 'html-react-parser';
import {withTranslation} from 'react-i18next';
import './PrivacyPolicy.scss';
class TnC extends Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {


        return(
            <div className = "section tnc-s" id="tnc">
                <h2 className = "title"> {this.props.t('common:footer.tnc')}</h2>
                <div className = "desc">
                    <ol>
                {this.props.t('titles', {returnObjects: true}).map((title, idx)=>{
                    return(
                        <li>
                          <h3>  {title} </h3>
                            {parse(this.props.t(`desc.${idx}`))}
                            </li>
                        

                    );
                })}
</ol>
                </div>
            </div>
        );
    }
}


export default withTranslation('tnc')(TnC);