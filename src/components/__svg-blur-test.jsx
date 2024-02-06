import {gsap, Power2} from "gsap"
import Logo from "../../common/Logo.jsx"
import videoBG from "../../assets/3002088_Dojo_Reel.jpg"
import useResize from "../../../hooks/UseResize.js"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const timeline = new gsap.timeline()

  const svgFilter = useRef()
  const size = useResize()

  const [motionBlur, setMotionBlur] = useState(0)

  const carousel = {
    blur: 0
  }
  useEffect(
    () => {
      gsap.to(carousel, {duration: 1, blur: 20, repeat: 4, yoyo: true, ease: Power2.easeInOut, onUpdate: () => {
        setMotionBlur(carousel.blur)
      }})
    }
  , [])

  const SVGImage = (props) => {
    return (
      <>
        {
          (size.ratio > props.ratio)
          ? <image href={props.src} height={size.width / props.ratio} width="100%" y={(size.height - size.width / props.ratio) * 0.5} filter="url(#motionBlur)" />
          : <image href={props.src} height="100%" width={size.height * props.ratio} x={(size.width - size.height * props.ratio) * 0.5} filter="url(#motionBlur)" />
        }
      </>
    )
  }

  return (
    <div className="hero">
      <svg width="100%" height="100%">
        <defs>
          <filter id="motionBlur">
            <feGaussianBlur 
              in="SourceGraphic"
              stdDeviation={`${motionBlur}, 0`}
            />  
          </filter>
        </defs>
        <SVGImage src={videoBG} ratio={16/9} />
      </svg>

      <div className="overlay">
        <Logo />
        <button className="white">LET’S DŌJŌ</button>
      </div>
    </div>
  )
}
