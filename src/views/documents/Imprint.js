import React, { Component } from 'react';
import parse from 'html-react-parser';
import {withTranslation} from 'react-i18next';

import imprint_en from '../../translations/documents/imprint/en.json';
import imprint_de from '../../translations/documents/imprint/de.json';
import './PrivacyPolicy.scss';
class Imprint extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            load: false
        }
    }

    componentDidMount()
    {
        this.props.i18n.addResourceBundle("en","imprint",imprint_en, true, false);
        this.props.i18n.addResourceBundle("de","imprint",imprint_de, true, false);
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
                <h2 className = "title"> {this.props.t('common:footer.imprint')}</h2>
                <div className = "desc">
                    
                {this.props.t('imprint:titles', {returnObjects: true}).map((title, idx)=>{
                    return(
                        <>
                          <h3>  {title} </h3>
                            {parse(this.props.t(`imprint:desc.${idx}`))}
                       </>
                        

                    );
                })  }

                </div>
            </div>
        );
    }
}


export default withTranslation()(Imprint);