import React from 'react';
import {withTranslation} from 'react-i18next';
import nm1 from "../../assets/img/blog/nm/nm_2432020.jpeg";
const ADUBE_2232020 = (props) =>{
    return(
        <>
       

<p>Microsoft has issued a security guidance advisory that there are vulnerabilities in its Windows products. The security flaws are particularly present in the Adobe Type Manager Library.</p>

<p>According to Microsoft, there is a flaw in Windows Adobe Type Manager Library that that improperly handles “a specially-crafted multi-master font – Adobe Type 1 PostScript format”.</p>
 
<p>If threat actors somehow manage to persuade a user to simply open a “specially crafted” document or even preview it in Windows Explorer, they can leverage upon the flaw through remotely executed code.</p>
 
<p>The vulnerability affects various versions of Windows 10, Windows 8, Windows 7 and Microsoft’s Windows Server products. For all the products, the vulnerability has been classified as ‘critical’ and Microsoft has provided guidelines to work around it.</p>

<p>In supported versions of Windows 10, a successful attack could potentially give limited privileges and capabilities. Microsoft has also said that it is aware of limited, targeted attacks that have made attempts to leverage this vulnerability before.</p>

<p>Windows receives patches, along with updates every second Tuesday of a month. A Microsoft spokesperson told TechCrunch that this patch vulnerability would likely be patched in the next update (Tuesday, April 14). While the company is still working on the fix, it has released guidelines for users to make them more aware of the situation and secure them from the vulnerability as well.</p>

<p>For starters, Microsoft recommends disabling the Preview Pane and Details Pane in Windows Explorer which stops all OTF (Open Type Fonts) to be displayed. But, it does not stop an authenticated local user to exploit the vulnerability. The workarounds only protect the user from the exploitation of the vulnerability if they open a specially crafted document.</p>

<p>You can find the steps for mitigation and workarounds in Windows operating systems and products for the vulnerability in the guidelines here.</p>
        </>
    );
}
export default withTranslation()(ADUBE_2232020);