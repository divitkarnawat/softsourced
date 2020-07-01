import React, { Component } from 'react';
import './PrivacyPolicy.scss';
class TnC extends Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let path = this.props.match.path;
        path = path.slice(1);
        path = path.slice(0, path.length - 1);
        path = path.replace('-',' ');
        path = path.toUpperCase();
        return(
            <div className = "section tnc-s" id="tnc">
                <h2 className = "title"> {path}</h2>
                <div className = "desc">
                <h3>INFORMATION ACCORDING TO §5 TMG</h3>

<p>softsourced UG (haftungsbeschränkt)</p>
<p>Karlsbaderstr. 20</p>
<p>97762 Hammelburg</p>
<p>Germany</p>

<p>registered in the Commercial Register of Germany under HRB 8241,</p>
<p>represented by the managing director Marc Müller.</p>
<p>&nbsp;</p>
<h3>CONTACT</h3>

<p>Phone: +49 179 4159070</p>
<p>E-Mail: info@softsourced.de</p>
<p>&nbsp;</p>
<h3>RESPONSIBLE FOR THE CONTENT ACCORDING TO § 55 ABS. 2 RSTV</h3>

<p>Softsourced UG (haftungsbeschränkt)</p>
<p>Karlsbaderstr. 20</p>
<p>97762 Hammelburg</p>
<p>Germany</p>
<p>&nbsp;</p>
<h3>DISPUTE RESOLUTION</h3>

<p>The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr.</p>
<p>You will find our e-mail address at the top of the imprint.</p>
<p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer dispute resolution body.</p>
<p>&nbsp;</p>
<h3>LIABILITY FOR CONTENT</h3>

<p>As a service provider, we are responsible for our own contents on these pages according to § 7 para.1 TMG and the general laws. According to §§ 8 to 10 TMG, however, we are not obliged as a service provider to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity.</p>
<p>Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this respect is only possible from the time of knowledge of a concrete infringement. If we become aware of any such infringements, we will remove such content immediately.</p>
<p>&nbsp;</p>
<h3>COPYRIGHT</h3>

<p>The contents and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.</p>
<p>Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately.</p>


                </div>
            </div>
        );
    }
}


export default TnC;