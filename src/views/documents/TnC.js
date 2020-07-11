import React, { Component } from 'react';
import parse from 'html-react-parser';
import {withTranslation} from 'react-i18next';

import tnc_en from '../../translations/documents/tnc/en.json';
import tnc_de from '../../translations/documents/tnc/de.json';

import './PrivacyPolicy.scss';
class TnC extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            load: false
        }
    }
   
    componentDidMount()
    {
        this.props.i18n.addResourceBundle("en","tnc",tnc_en, true, false);
        this.props.i18n.addResourceBundle("de","tnc",tnc_de, true, false);
        this.setState({load: true})
        
    }
    
    render()
    {
        
        if(!this.state.load)
        {
            return(<div>Loading...</div>)
        }


        return(
            <div className = "section tnc-s" id="tnc">
                <h2 className = "title"> {this.props.t('common:footer.tnc')}</h2>
                <div className = "desc">
                    <ol>
                {this.props.t('tnc:titles', {returnObjects: true}).map((title, idx)=>{
                    return(
                        <li>
                          <h3>  {title} </h3>
                            {parse(this.props.t(`tnc:desc.${idx}`))}
                            </li>
                        

                    );
                })}
</ol>
                </div>
            </div>
        );
    }
}


export default withTranslation()(TnC);