import '../../scss/app.scss';
import { useState, useEffect, createContext } from 'react';
import useResize from '../../hooks/UseResize.js';
import StickyLogo from '../StickyLogo.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

export const ModalContext = createContext();

function CookiesNotice() {

    // hooks
    const size = useResize();

    return (

        <div className="wrapper">

            <div className="main">
                <Navbar />
                <section classes="spacer">
                    <div className="content">

                        <div className="copy-holder">
                            <h1>Cookies Notice</h1>

                            <h3>Introduction</h3>
                            <p>Dentsu International (referred to as “our”, “us” and “we” in this notice) is a global media group. We help our clients to improve how they advertise and market, whether by print, post, email or on sites. We believe that the responsible use of data supports business growth and builds strong relationships between brand and consumer. As a business, we are committed to respecting and protecting the privacy of all individuals with whom we interact. We are committed to being transparent in our handling and processing of personal data at all times in accordance with applicable privacy and data protection laws.</p>
                            <p>This Cookie Notice explains how we use cookies and the choices you have. Except as otherwise stated in this notice, the relevant dentsu privacy notice, which can be found on our privacy notice page  (“Privacy Notice”), will apply to our processing of the data that we collect via cookies including your rights regarding your personal data.</p>

                            <h3>What are “cookies”?</h3>
                            <p>Cookies are small packets of information stored by your browser when you visit certain sites, including our site. Cookies are generally used by sites to improve your user experience by enabling that site to ‘remember’ you, either strictly for the duration of your visit (using a “Session” cookie which is erased when you close your browser) or for repeat visits (using a “Permanent” cookie).</p>
                            <p>Please be advised that in some countries data such as cookie IDs and IP-/MAC- addresses are considered to be personal data. To the extent we process such data that is considered personal data, this will be done in accordance with our Privacy Notice.</p>

                            <h3>Third Parties and Information Sharing</h3>
                            <p>Our sites may include links to third party sites, plug-ins and applications. Using these facilities may allow third parties to collect or share data about you. Where you have opted-in to Functional Cookies, Performance Cookies and Targeting Cookies, it may be possible for third party sites to track your browsing behaviour when you leave our site. You are able to opt-out of these cookies at any time. For more information on these cookies, you can access granular details relating to each of the cookies, the categories, descriptions, types (first or third party) and lifespans.</p>
                            <p>For help and advice on how to do this, please follow the instructions in the ‘How to reject cookies’ section below.</p>

                            <h3>Introduction</h3>
                            <p>Dentsu International (referred to as “our”, “us” and “we” in this notice) is a global media group. We help our clients to improve how they advertise and market, whether by print, post, email or on sites. We believe that the responsible use of data supports business growth and builds strong relationships between brand and consumer. As a business, we are committed to respecting and protecting the privacy of all individuals with whom we interact. We are committed to being transparent in our handling and processing of personal data at all times in accordance with applicable privacy and data protection laws.</p>

                            <p>This Cookie Notice explains how we use cookies and the choices you have. Except as otherwise stated in this notice, the relevant dentsu privacy notice, which can be found on our privacy notice page  (“Privacy Notice”), will apply to our processing of the data that we collect via cookies including your rights regarding your personal data.</p>

                            <h3>What are “cookies”?</h3>
                            <p>Cookies are small packets of information stored by your browser when you visit certain sites, including our site. Cookies are generally used by sites to improve your user experience by enabling that site to ‘remember’ you, either strictly for the duration of your visit (using a “Session” cookie which is erased when you close your browser) or for repeat visits (using a “Permanent” cookie).</p>
                            <p>Please be advised that in some countries data such as cookie IDs and IP-/MAC- addresses are considered to be personal data. To the extent we process such data that is considered personal data, this will be done in accordance with our Privacy Notice. </p>

                            <h3>Third Parties and Information Sharing</h3>
                            <p>Our sites may include links to third party sites, plug-ins and applications. Using these facilities may allow third parties to collect or share data about you. Where you have opted-in to Functional Cookies, Performance Cookies and Targeting Cookies, it may be possible for third party sites to track your browsing behaviour when you leave our site. You are able to opt-out of these cookies at any time. For more information on these cookies, you can access granular details relating to each of the cookies, the categories, descriptions, types (first or third party) and lifespans. For help and advice on how to do this, please follow the instructions in the ‘How to reject cookies’ section below.</p>

                            <h3>How to reject cookies </h3>
                            <p>If you don’t want to receive cookies, you can update your settings in our cookie management portal here:</p>

                            <h3>Cookie Settings</h3>
                            <p>You can also alter your browser settings. The procedure for doing so varies from one browser application to another. If you wish to reject cookies from our site, but wish to accept those from other sites, you may choose the option in your browser settings to receive a notice before a cookie is stored on your device. By disabling cookies, you may be prevented from accessing some features of our site or certain content or functionality may not be available. To find out more about cookies, including how to see what cookies have been set, visit <a target='blank' rel='noopener noreferrer' href='https:/www.aboutcookies.org'>www.aboutcookies.org</a> or <a target='blank' rel='noopener noreferrer' href='https:/www.allaboutcookies.org'>www.allaboutcookies.org</a></p>
                            <p>Last updated: 12 April 2023</p>
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

export default CookiesNotice