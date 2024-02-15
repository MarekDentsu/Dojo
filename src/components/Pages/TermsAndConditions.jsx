import '../../scss/app.scss';
import { useState, useEffect, createContext } from 'react';
import useResize from '../../hooks/UseResize.js';
import StickyLogo from '../StickyLogo.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

export const ModalContext = createContext();

function TermsAndConditions() {

    // hooks
    const size = useResize();

    return (

        <div className="wrapper">

            <div className="main">
                <Navbar />
                <section classes="spacer">
                    <div className="content">

                        <div className="copy-holder">
                            <h1>Website terms and conditions of use</h1>

                            <p>These terms and conditions of use (‘Terms’) govern the use of the website located at www.dcdojo.au (the ‘Website’). The Website is provided by DENTSU CREATIVE, a trading division of Dentsu UK Limited (registered in England and Wales with company number 01939690 and with registered offices at 10 Triton Street, Regents Place, London, NW1 3BF).</p>
                            <p>In these Terms, an individual visitor to the Website is referred to as ‘you’ and DENTSU CREATIVE is referred to as ‘DENTSU CREATIVE’, ‘us’ or ‘we’. By proceeding to use the Website, you agree to be bound by these Terms, in their current form and as they may be amended by DENTSU CREATIVE from time to time. If you do not accept these Terms, you must discontinue your use of the Website immediately.</p>
                            <p>CHANGES TO THESE TERMS AND THE WEBSITE We may revise these Terms of use at any time by amending this page. Please check this page from time to time to take notice of any changes we made, as they are binding on you.</p>
                            <p>We may update the Website from time to time, and may change the content at any time. However, please note that any of the content on the Website may be out of date at any given time, and we are under no obligation to update it. We do not guarantee that the Website, or any content on it, will be free from errors or omissions.</p>

                            <h3>INFORMATION PUBLISHED ON THE WEBSITE</h3>
                            <p>We take reasonable precautions to ensure that information published on the Website is accurate but we do not guarantee or can be held liable for its accuracy or timeliness. You should take appropriate steps to verify information displayed on the Website before relying on it. Downloading material from the Website is done at your own risk and any materials provided via the Website are provided on an "as is" basis.</p>
                            <p>Any reference to any product or service which has been or may be provided by DENTSU CREATIVE or any other company in the dentsu international group does not amount to a promise that such product or service will be available at any time. Changes to or improvements in such products or services may be made at any time without notice.</p>

                            <h3>VIRUSES</h3>
                            <p>We do not guarantee that the Website will be secure or free from bugs or viruses.</p>
                            <p>You are responsible for configuring your information technology, computer programmes and platform in order to access the Website. You should use your own virus protection software.</p>
                            <p>You must not misuse the Website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to the Website, the server on which the Website is stored or any server, computer or database connected to our Website. You must not attack our Website via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use the Website will cease immediately.</p>

                            <h3>LIABILITY</h3>
                            <p>We provide the Website without warranty of any kind. We make no representations, warranties or guarantees, whether express or implied, as to the operation of the Website or that the content on the Website is accurate, complete or up-to-date.</p>
                            <p>Nothing in these Terms excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.</p>
                            <p>We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with: use of, or inability to use, the Website; or use of or reliance on any content displayed on the Website. If you are a business user, please note that in particular, we will not be liable for loss of profits, sales, business, or revenue; business interruption; loss of anticipated savings; loss of business opportunity, goodwill or reputation. We will not be liable for any indirect, consequential, special, or otherwise incidental loss or damage.</p>
                            <p>We will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of the Website or to your downloading of any content on it, or on any website linked to it.</p>
                            <p>We assume no responsibility for the content of websites linked on our site. Such links should not be interpreted as endorsement by us of those linked websites. We will not be liable for any loss or damage that may arise from your use of them.</p>
                            <p>We do not guarantee that the Website will always be available or be uninterrupted and reserve the right to suspend access to the Website without notice.</p>

                            <h3>INTELLECTUAL PROPERTY RIGHTS</h3>
                            <p>We are the owner or the licensee of all intellectual property rights on our site, and in the material published on it. Those works are protected by copyright and intellectual property laws and treaties around the world. All such rights are reserved. Nothing in these Terms operates to transfer, assign or grant any of those rights to you. You must not reproduce or use images, trademarks or names displayed on the Website other than for your personal use without written permission of the owner.</p>
                            <p>Unless specifically prohibited by a notice published on any page, you may make a print copy of any parts of the Website that you require for your own personal use, provided that in doing so you do not remove or alter any trademark, copyright or other proprietary notices contained in that part of the Website. Our status (and that of any identified contributors) as the authors of content on the Website must always be acknowledged. You must not use any part of the content on our Website for commercial purposes without obtaining a licence to do so from us or our licensors.</p>

                            <h3>DATA AND PRIVACY</h3>
                            <p>DENTSU CREATIVE, a trading division of Dentsu UK Limited is committed to protecting your privacy. Please see our Privacy Notice for details of how we treat information which you provide to us via the Website.</p>

                            <h3>COOKIES</h3>
                            <p>Cookies are small files that are left on your device while you browse the Website (such as the pages looked up, the date and time of such access, etc.) and which may be read whenever your access the same website.</p>
                            <p>For further information on the use of cookies, please consult our Cookie Notice.</p>

                            <h3>THIRD PARTY WEBSITES</h3>
                            <p>We assume no responsibility for the content of any websites linked on our Website or websites from which you have accessed our Website. Such links should not be interpreted as endorsement by us of those linked websites. We will not be liable for any loss or damage that may arise from your use of them.</p>

                            <h3>GENERAL</h3>
                            <p>These Terms are governed by the laws of England and Wales and the English courts have exclusive jurisdiction in any dispute arising out of or in connection with your use of the Website.</p>
                            <p>To the extent that any part of these Terms is found to be invalid, unlawful or unenforceable by any court of competent jurisdiction such part shall to that extent be severed from the remaining terms all of which shall remain in full force and effect as permitted by law.</p>
                            <p>If you have any queries or complaints regarding the Website or these Terms, please contact us at Legal Department, Dentsu UK Limited, 10 Triton Street, Regents Place, London, NW1 3BF.</p>
                            <p>These Terms were last updated on 20th June 2022.</p>

                        </div>

                    </div>
                </section>
            </div>
            <Footer />

            {(size.width > 1024)
                ?
                <StickyLogo />
                : null
            }
        </div>
    )
}

export default TermsAndConditions