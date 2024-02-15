import '../../scss/app.scss';
import { useState, useEffect, createContext } from 'react';
import useResize from '../../hooks/UseResize.js';
import StickyLogo from '../StickyLogo.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

export const ModalContext = createContext();

function PrivacyNotice() {

    // hooks
    const size = useResize();

    return (

        <div className="wrapper">

            <div className="main">
                <Navbar />
                <section classes="spacer">
                    <div className="content">

                        <div className="copy-holder">
                            <h1>Privacy Notice</h1>

                            <p>DENTSU CREATIVE (referred to as “our”, “us” and “we” in this notice) is a trading division of Dentsu UK Limited which is within the dentsu international group, which is a global media group. We help our clients to improve how they advertise and market, whether by print, post, email or on websites. We believe that the responsible use of data supports business growth and builds strong relationships between brand and consumer. As a business, we are committed to respecting and protecting the privacy of all individuals with whom we interact. We are committed to being transparent in our handling and processing of personal data at all times in accordance with applicable privacy and data protection laws.</p>

                            <p>This Privacy Notice explains in detail the types of personal data we may collect about you when you interact with us. DENTSU CREATIVE, a trading division of Dentsu UK Limited is the data controller of any personal data you provide to us, including in relation to this website. This Privacy Notice explains the following:</p>
                            
                            <ul>
                                <li>Information we may collect</li>
                                <li>How we use this information</li>
                                <li>How we store your personal data</li>
                                <li>How we secure your personal data</li>
                                <li>Information sharing and disclosure</li>
                                <li>International and group company transfers</li>
                                <li>Your rights</li>
                                <li>Our responsibility for website links</li>
                                <li>Updates</li>
                                <li>How to contact us</li>
                            </ul>
                            
                            <p>In the Supplementary Information section of this Privacy Notice, we explain what is meant by “personal data” and other terms used in this notice. The California Consumer Privacy Act of 2018 (“CCPA”) provides California residents with rights with respect to their personal information. Those rights are explained below in the Supplemental Information section below (Your California Rights).</p>

                            <h2>1. Information we may collect </h2>
                            <p>The type of information we collect will depend on the circumstances and the service you are using. Generally speaking, we will collect information relating to you and/or your use of our services in the following ways:</p>

                            <h3>Information relating to your use of the website</h3>
                            <p>We collect information about how you use our website. This includes information relating to the pages you visit on our website, the services or information your search for and the links and content you choose to access. We may also use the personal information you provide through your use of our website to provide you with relevant content and to inform our marketing strategy. This type of activity is known as “profiling” – using automated means to process your personal data to analyse or predict your personal preferences, interest or behaviours. You can object to profiling (see below).</p>

                            <h3>Technical data </h3>
                            <p>We collect information about the device(s) you use to access our site. This includes collecting unique mobile device ID or the internet protocol (IP) address online identifiers, which are numbers that can uniquely identify a specific computer or other network device on the internet. This information is linked to a cookie ID, which we receive and process. You may find more information on the cookies we use and the purposes for which we use them on our separate Cookie Notice (available here).</p>

                            <h3>Contact data</h3>
                            <p>We collect contact details when you sign-up to receive email alerts, attend one of our events, download our content, subscribe to our newsletters or where you ask us to respond to a query you have. The personal data we collect includes your name, email address, job title, and location. Marketing and communications data </p>
                            <p>We collect information about your preferences in receiving marketing information from us and your communication preferences.</p>

                            <h3>Children</h3>
                            <p>We do not actively seek to collect information about children aged 16 or under. If you have any concerns about your child’s privacy in relation to our services, or if you believe that your child may have entered personal data onto our website, please contact us at DPO@dentsu.com. We will delete such information from our records within a reasonable time.</p>

                            <h2>2. How we use this information</h2>
                            <p>Except where required by law, we use the personal data you provide for the following purposes: to deliver the specific information or services you have requested; to enable the download of our content; send you newsletters and information relating to our brand, products and services; respond to your requests and feedback; and analyse and/or improve our services.</p>

                            <p>Under data protection law we are required to advise you on the legal basis for processing your personal data. For the most part, the processing of your personal information is based either on a) our legitimate interests related to us providing you services you have requested or otherwise your customer relationship with us, or b) your consent, where requested. In the table below we set out further information about the purposes for which we use your personal data and the legal basis we rely on for its use. Note that we may process your personal data for more than one lawful basis depending on the specific purpose for which we are using your data.</p>

                            <p>Last updated: 20.06.2022</p>

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

export default PrivacyNotice




