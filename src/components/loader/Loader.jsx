import { useEffect, useRef, useState } from "react"
import "./loader.scss"
import {gsap, Sine, Linear, Power3} from 'gsap'
import { DrawSVGPlugin } from '../../plugins/gsap/DrawSVGPlugin.js';
gsap.registerPlugin(DrawSVGPlugin);

import logo1 from "../../assets/loader-dojo.svg"
import logo2 from "../../assets/loader-dc.svg"
import logo3 from "../../assets/loader-kanji.svg"

export default function Loader(props) {

  const loaderRef = useRef()
  const loaderLogo = useRef()
  const [hasInitLoading, setInitLoading] = useState(true)
  const [loadComplete, setLoadComplete] = useState(false)

  const logos = [logo1,logo2,logo3]
  const [currentLogo, setCurrentLogo] = useState(0)
  let logo = {
    index: 0
  }

  let timeline = new gsap.timeline()
  useEffect(
    () => {
      if(loaderRef.current){
        if(timeline){
          timeline.kill()
          timeline = new gsap.timeline()

          .to(logo, {
            duration: 1.0,
            repeat: 0,
            index: 6, 
            onUpdate: () => {
            // update logo
            let i = Math.floor(logo.index % 3) 
            setCurrentLogo(i)
          }, ease: Sine.easeInOut})
          .to(loaderLogo.current, {duration: 10, scale: 2, ease: Linear.easeInOut}, 0)
        }
      }
    }, [loaderRef]
  );
    
  useEffect(
    () => {
      if(!props.isLoading){
        if(timeline){
          timeline.kill()
          timeline = new gsap.timeline()
          .to(loaderLogo.current, {duration: 1, scale: 10, opacity: 0, ease: Power3.easeInOut}, 0)
          .to(loaderRef.current, {duration: 1, opacity: 0, ease: Power3.easeIn, onComplete: () => { 
            setLoadComplete(true) 
            timeline.pause()
            timeline.kill()
            timeline = null
          }}, 0.33)
          
        }
      }
    }, [props.isLoading]
  )
  

  return (
    <>
      {loadComplete ? null : 
        <div ref={loaderRef} className="absolute flex-center loader-container">
          <img ref={loaderLogo} className="loader-logo" src={logos[currentLogo]} />
        </div>
      }
    </>
  )
}
  