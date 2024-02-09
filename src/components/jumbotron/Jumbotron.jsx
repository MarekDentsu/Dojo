import {gsap, Power2} from "gsap";
import { ScrollTrigger } from '../../plugins/gsap/ScrollTrigger.js';
import { SplitText } from '../../plugins/gsap/SplitText.js';
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);


const VideoBackground = (props) => {
    return(
      <div className="video-container flex-center overflow-none">
        <video className="video-background" poster={props.poster} autoPlay loop muted playsInline>
          {props.sources.map( (src, i) => {
            return <source key={"video" + i} src={src} type={"video/" + src.split(".")[1]} />
          })}
        </video>
        <div className="absolute video-overlay" />
      </div>
    )
}

export default function Jumbotron(props) {

  const jumboRef = useRef()

  useLayoutEffect(() => {
    // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
    
    if(!props.isLoading){
      let ctx = gsap.context(() => {

        let split = SplitText.create("h1", {type:["lines", "words"]});
        
        gsap.from(split.words, { // <- selector text, scoped to this component!
          y: 60,
          ease: Power2.easeInOut,
          duration: 0.75,
          stagger: 0.04,
          delay: 0.25
        });
        gsap.from("button", { // <- selector text, scoped to this component!
          y: 60,
          opacity: 0,
          ease: Power2.easeOut,
          duration: 0.75,
          delay: 0.75
        });
        
        return () => split.revert(); // context cleanup
      }, jumboRef.current); // <- scopes all selector text inside the context to this component (optional, default is document)
      return () => ctx.revert(); // useLayoutEffect cleanup
    }
  }, [props.isLoading]);

  return (
    <div className="jumbotron" ref={jumboRef}>
      <VideoBackground sources={[
        "Dojo_Reel_Short.mp4"
      ]} poster="work/dojo-placeholder-work-00.jpg"/>
      <div className="absolute flex-center">
        <div className="title-content">
          <h1 className="white">
            Turn tech hype <br/>
            into prototypes <br />
            that prove value
          </h1>
          <button className="white">Dojo with us</button>
        </div>
      </div>
    </div>
  )
}
