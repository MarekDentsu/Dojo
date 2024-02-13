import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from '../../plugins/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

import { useRef, useState, useLayoutEffect } from 'react'
import arrowURL from '../../assets/arrow-left.svg'

export default function ServicesCard(props) {
    const { title, subheading, description, outcomes, iconURL } = props
    const [showOutcomes, setShowOutcomes] = useState(false)

    const cardRef = useRef()

    useLayoutEffect(() => {
        if (cardRef.current) {
            let ctx = gsap.context(() => {

                const tl = new gsap.timeline({
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 90%",
                        end: "bottom 30%",
                    },
                    delay: 0.15
                })
                .from(cardRef.current, {
                    y: 50,
                    opacity: 0,
                    ease: Power2.easeOut,
                    duration: 0.75
                })
                    

            }, cardRef.current); 
            return () => ctx.revert();
        }
    }, [cardRef]);

    return (
        <div className='services-card' ref={cardRef} onClick={() => { setShowOutcomes(!showOutcomes) }}>

            <div className='icon'>
                <img src={iconURL} alt={title} />
            </div>

            <div className={"description" + (showOutcomes ? " show-outcomes" : "")}>
                <div className='services-intro'>
                    <div>
                        <h3>{title}</h3>
                        {subheading ? <p className='small'>{subheading}</p> : null}
                        <p>{description}</p>
                        <p className='underlined'>See key outcomes</p>
                    </div>
                </div>
                <div className="outcomes">
                    <div>
                        <div className='outcome-nav'>
                            <img className='up-arrow' src={arrowURL} alt="up" />
                            <h5>Key Outcomes</h5>
                        </div>
                        <ul>
                            {outcomes.map((outcome, i) => {
                                return <li key={"outcome-" + i}>{outcome}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}