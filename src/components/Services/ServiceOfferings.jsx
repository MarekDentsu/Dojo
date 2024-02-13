import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from '../../plugins/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect, useRef } from 'react'
import launchURL from '../../assets/services-icon-launch.svg'
import protoURL from '../../assets/services-icon-prototypes.svg'
import sessionURL from '../../assets/services-icon-sessions.svg'
import ServicesCard from './ServicesCard.jsx'

export default function ServiceOfferings(props) {

    const servicesRef = useRef()

    useLayoutEffect(() => {
        if (servicesRef.current && servicesRef.current.children) {
            let ctx = gsap.context(() => {

                const tl = new gsap.timeline({
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 90%",
                        end: "bottom 30%",
                    },
                    delay: 0.35
                })
                .from(".services-title", {
                    y: 60,
                    opacity: 0,
                    ease: Power2.easeOut,
                    duration: 0.75,
                })
                .from(".services-card", {
                    y: 50,
                    opacity: 0,
                    ease: Power2.easeOut,
                    duration: 0.75,
                    stagger: 0.25
                }, "-=0.25")
                    

            }, servicesRef.current); 
            return () => ctx.revert();
        }
    }, [servicesRef]);

    return (
        <div className='service-offerings' {...props} ref={servicesRef}>
            <div className="services-title">
                <h3>Service Offerings</h3>
                <p>Generate new ideas, prototype and test with customers, or launch a never before experience.</p>
            </div>
            <div className='services'>
            <ServicesCard
                    title={"Sessions"}
                    subheading={"4 hour workshop"}
                    description={"Explore emerging technologies or turn a business opportunity into an exciting new digital proposition."}
                    outcomes={[
                        "Understanding of Emerging Technologies",
                        "Ideas and Opportunities",
                        "Workshop Presentation"

                    ]}
                    iconURL={sessionURL}
                />
                <ServicesCard
                    title={"Prototypes"}
                    subheading={"1-3 Sprints"}
                    description={"Create a working prototype of an idea, proven to deliver value and impact through human testing and validation."}
                    outcomes={[
                        "Prioritised Opportunities",
                        "UX/UI Concept Design",
                        "Clickable Prototype",
                        "User Feedback and Validation"
                    ]}
                    iconURL={protoURL}
                />
                <ServicesCard
                    title={"Launch"}
                    subheading={"3+ Sprints"}
                    description={"Turn an idea or prototype into an digital experience that helps your business differentiate."}
                    outcomes={[
                        "Detailed UX/UI design",
                        "Clickable prototype",
                        "User feedback and validation",
                        "Design and development sprints"
                    ]}
                    iconURL={launchURL}
                />

            </div>

        </div>
    )
}
