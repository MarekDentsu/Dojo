import { useEffect, useRef, useState } from "react"
import "./loader.scss"
import {gsap, Power2, Linear} from 'gsap'
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
gsap.registerPlugin(DrawSVGPlugin);


export default function Loader(props) {

  const loaderRef = useRef()
  const spiralRef = useRef()
  const [hasInitLoading, setInitLoading] = useState(true)
  const [loadComplete, setLoadComplete] = useState(false)

  // Draw spiral rays
  const spiral = {
    radius: 500,
    count: 60,
    rays: []
  }
  for(let i = 0; i < spiral.count; ++i){
    const angle = (Math.PI * 2) * i / spiral.count
    const {radius} = spiral
    spiral.rays.push(
      `M${radius} ${radius} L${Math.sin(angle) * radius + radius} ${Math.cos(angle) * radius + radius}`
    )
  }

  let timeline = new gsap.timeline()
  useEffect(() => {
    // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()

    if(timeline){
      timeline.kill()
      timeline = new gsap.timeline()
    }
    if(spiralRef.current){    
        const raysA = spiralRef.current.querySelectorAll(".spiralA path");
        const raysB = spiralRef.current.querySelectorAll(".spiralB path");
        const raysC = spiralRef.current.querySelectorAll(".spiralC path");

        const time = 4;
        
        raysA.forEach((ray, i) => {
          const tl = new gsap.timeline({repeat: 4})
            .set(ray, {drawSVG: "60% 60%", strokeWidth: 35})
            .to(ray, {duration: time, drawSVG: "0% 60%", ease: Power2.easeIn})
            .to(ray, {duration: time, drawSVG: "0% 60%", ease: Power2.easeIn})
            .to(ray, {duration: time * 2, strokeWidth: 0, ease: Power2.easeOut}, `-=${time * 2}`)

          timeline.add(tl, i * time * 0.5/spiral.count)
        });
        raysB.forEach((ray, i) => {
          const tl = new gsap.timeline({repeat: 4})
            .set(ray, {drawSVG: "60% 60%", strokeWidth: 35})
            .to(ray, {duration: time, drawSVG: "0% 60%", ease: Power2.easeIn})
            .to(ray, {duration: time, drawSVG: "0% 60%", ease: Power2.easeIn})
            .to(ray, {duration: time * 2, strokeWidth: 0, ease: Power2.easeOut}, `-=${time * 2}`)

          timeline.add(tl, i * time * 0.5/spiral.count + time)
        });
        raysC.forEach((ray, i) => {
          const tl = new gsap.timeline({repeat: 4})
            .set(ray, {drawSVG: "0% 40%"})
            .to(ray, {duration: time, drawSVG: "0% 100%", ease: Power2.easeInOut})
            .to(ray, {duration: time, drawSVG: "0% 40%", ease: Power2.easeInOut})

          timeline.add(tl, i * time/spiral.count + time)
        });

        timeline.fromTo(spiralRef.current, {rotation: 0 }, {duration: 32, rotation: 360, repeat: 8, ease: Linear.easeNone}, 0)
        timeline.play(12)
    }
     
  }, [spiralRef]);

  useEffect(
    () => {
      if(!props.isLoading){
        if(timeline){
          timeline.kill()
          timeline = new gsap.timeline()

          const raysA = spiralRef.current.querySelectorAll(".spiralA path");
          const raysB = spiralRef.current.querySelectorAll(".spiralB path");
          const raysC = spiralRef.current.querySelectorAll(".spiralC path");

          raysA.forEach((ray, i) => {
            const tl = new gsap.timeline({repeat: 0})
              .to(ray, {duration: 1, drawSVG: "0% 0%", strokeWidth: 1, ease: Power2.easeInOut})
            timeline.add(tl, i * 0.25/spiral.count + 0)
          });
          raysB.forEach((ray, i) => {
            const tl = new gsap.timeline({repeat: 0})
              .to(ray, {duration: 1, drawSVG: "0% 0%", strokeWidth: 1, ease: Power2.easeInOut})
            timeline.add(tl, i * 0.25/spiral.count + 0.1)
          });
          raysC.forEach((ray, i) => {
            const tl = new gsap.timeline({repeat: 0})
              .to(ray, {duration: 1, drawSVG: "0% 0%", ease: Power2.easeInOut})
            timeline.add(tl, i * 0.25/spiral.count + 0.2)
          });

          timeline.to(loaderRef.current, {duration: 1, opacity: 0, ease: Power2.easeIn, onComplete: () => { 
            setLoadComplete(true) 
            timeline.pause()
            timeline.kill()
            timeline = null
          }}, 0)
          
        }
      }
    }, [props.isLoading]
  )
  

  return (
    <>
      {loadComplete ? null : 
        <div ref={loaderRef} className="absolute flex-center loader-container">
          <svg ref={spiralRef} className="spiral" viewBox={`0 0 ${spiral.radius * 2} ${spiral.radius * 2}`}>
            <g className="spiralA">
              {spiral.rays.map((ray, i) => <path d={ray} key={"ray_A_" + i} />)}
            </g>
            <g className="spiralB">
              {spiral.rays.map((ray, i) => <path d={ray} key={"ray_B_" + i} />)}
            </g>
            <g className="spiralC">
              {spiral.rays.map((ray, i) => <path d={ray} key={"ray_B_" + i} />)}
            </g>
          </svg>
        </div>
      }
    </>
  )
}
  