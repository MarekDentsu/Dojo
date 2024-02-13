import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from '../plugins/gsap/ScrollTrigger.js';
import { SplitText } from '../plugins/gsap/SplitText.js';
import { useLayoutEffect, useRef } from "react";
import Button from "./common/Button.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);



export default function Footer (props) {

    const footerRef = useRef()

    useLayoutEffect(() => {
        // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()

        if (!props.isLoading) {
            let ctx = gsap.context(() => {

                let split = SplitText.create("h2", { type: ["lines", "words"] });

                const tl = new gsap.timeline({
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        end: "bottom 30%",
                    },
                    delay: 0.2
                })
                .from(split.words, { // <- selector text, scoped to this component!
                    y: 60,
                    ease: Power2.easeInOut,
                    duration: 0.75,
                    stagger: 0.04,
                })
                .from("button", { // <- selector text, scoped to this component!
                    y: 60,
                    opacity: 0,
                    ease: Power2.easeOut,
                    duration: 0.75,
                    stagger: 0.1
                }, "-=0.25")
                .from("li", { // <- selector text, scoped to this component!
                    y: 60,
                    opacity: 0,
                    ease: Power2.easeOut,
                    duration: 0.75,
                    stagger: 0.1
                }, "-=0.5")

                return () => split.revert(); // context cleanup
            }, footerRef.current); // <- scopes all selector text inside the context to this component (optional, default is document)
            return () => ctx.revert(); // useLayoutEffect cleanup
        }
    }, [props.isLoading]);

    return(
        <section className="footer grey" ref={footerRef}>
            <div className="content">
                <div className="footer-content">
                    <div className="flex-align-vertical">
                        <div>
                            <h2>
                                Unleash your innovation. <br />
                                Create the never before.
                            </h2>
                            <Button 
                            classes={"white"} 
                            onClick={
                                () => {
                                    if(!props.setModalVideoIsShowing){
                                        props.setModalVideoIsShowing(true)
                                        props.setVideoSource("Dojo_Reel_Short.mp4")
                                    }
                                }
                            } 
                        >
                            Dojo with us
                        </Button>
                        
                        </div>
                    </div>
                </div>
                <div className="bottom-links">
                    <ul>
                        <li>© Dentsu Creative 2024</li>
                        <li>Privacy Notice</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
    