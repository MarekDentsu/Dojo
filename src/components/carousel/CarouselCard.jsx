import { useRef, useContext, useState } from "react"
import { ModalContext } from '../Pages/Home.jsx'

export default function CarouselCard(props) {

    const context = useContext(ModalContext);
    const cardRef = useRef()
    const { heading, brand, copy, imageURL, videoURL } = props

    const [mouseStartX, setMouseStartX] = useState(0)
    const [mouseX, setMouseX] = useState(0)

    const mouseDown = (e) => {
        setMouseStartX(e.clientX)
    }

    const click = (e) => {
        if(e.clientX === mouseStartX){
            context.setModalVideoIsShowing(true)
            context.setVideoSource(videoURL)
        }
    }

    return (
        <div className="carousel-card" onMouseDown={mouseDown} onTouchStart={mouseDown} ref={cardRef}>
            <div className="card-image" onClick={click}>
                <img src={imageURL} alt="" />
            </div>
            <div className="description">
                <div>
                    <h3>{heading}</h3>
                    <h5>{brand}</h5>
                    <p>{copy}</p>
                </div>
                <button className="simple black" onClick={click}>Watch the video</button>
            </div>
        </div>
    )
}