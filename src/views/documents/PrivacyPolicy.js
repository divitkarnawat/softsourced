import React,{Component} from 'react';
import parse from 'html-react-parser';
import {withTranslation} from 'react-i18next';
import './PrivacyPolicy.scss';
class PrivacyPolicy extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let path = this.props.match.path;
        path = path.slice(1);
        path = path.slice(0, path.length - 1);
        if(path == "privacy-policy") path = this.props.t('common:footer.pp');
        else path = this.props.t('common:footer.imprint');
       
        return(
            <div className = "section pp-s" >
                <h2 className = "title">
                    {path}
                </h2>
                <div className = "desc">
                    <div>
                        
                        <h3> {this.props.t('m_title')}</h3>
                        
                        {
                            this.props.t('m_desc', {returnObjects: true}).map(desc=>{
                                return(
                                    <p>
                                        {desc}
                                    </p>
                                );
                            })
                        }
                       
                    </div>


                <ol>
                    {
                        this.props.t('titles', {returnObjects: true}).map((title,idx)=>{
                            return(
                                <li> 
                                    <h3> {title}</h3>
                                    {parse(this.props.t(`desc.${idx}`))}
                                </li>
                            );
                        })
                    }
                                        
                </ol>

                </div>
            </div>
        );
    }
}

export default withTranslation('pp')(PrivacyPolicy);