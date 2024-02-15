import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from '../plugins/gsap/ScrollTrigger.js';
import { SplitText } from '../plugins/gsap/SplitText.js';
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import useResize from "../hooks/UseResize.js";
import Button from "./common/Button.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);

import { ModalContext } from './Pages/Home.jsx'


export default function Intro(props) {

    const intrtoRef = useRef()
    const size = useResize()
    const context = useContext(ModalContext);

    useLayoutEffect(() => {
        if (!props.isLoading) {
            let ctx = gsap.context(() => {

                let split = SplitText.create("h2", { type: ["lines", "words"] });

                const tl = new gsap.timeline({
                    scrollTrigger: intrtoRef.current,
                    delay: 0.6,
                    onComplete: () => {
                        split.revert()
                    }
                })
                    .from(split.words, { // <- selector text, scoped to this component!
                        y: 60,
                        ease: Power2.easeInOut,
                        duration: 0.75,
                        stagger: 0.04,
                    })
                    .fromTo(".intro-copy", { // <- selector text, scoped to this component!
                        y: 60,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        ease: Power2.easeOut,
                        duration: 0.75,
                        stagger: 0.1
                    }, "-=0.25")

                return () => split.revert(); // context cleanup
            }, intrtoRef.current); // <- scopes all selector text inside the context to this component (optional, default is document)
            return () => ctx.revert(); // useLayoutEffect cleanup
        }
    }, [props.isLoading]);

    return (
        <div className="intro" ref={intrtoRef}>
            <div className="flex-2-col">
                <div className="left-col">
                    <h2>
                        We create the <br />
                        never before.
                    </h2>
                </div>
                <div className="right-col">
                    <div className="intro-copy">
                        <p>We bring together our expertise in design innovation, modern creativity and emerging technologies to create  never before brand experiences.</p>
                        <p>We do this by turning ideas into prototypes, and prototypes into proofs of value that can give brands a competitive advantage.</p>
                        <Button
                            classes={"white grey-hover"}
                            onClick={
                                () => {
                                    if (!context.modalVideoIsShowing) {
                                        context.setModalVideoIsShowing(true)
                                        context.setVideoSource("Dojo_Reel_Short.mp4")
                                    }
                                }
                            }
                        >
                            Watch the video
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}