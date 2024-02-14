import { useRef, useContext } from "react"
import { ModalContext } from '../../App';

export default function CarouselCard(props) {

    const context = useContext(ModalContext);
    const cardRef = useRef()
    const { heading, brand, copy, imageURL, videoURL } = props

    return (
        <div className="carousel-card" ref={cardRef}>
            <div className="card-image" onClick={() => {
                context.setModalVideoIsShowing(true)
                context.setVideoSource(videoURL)
            }}>
                <img src={imageURL} alt="" />
            </div>
            <div className="description">
                <div>
                    <h3>{heading}</h3>
                    <h5>{brand}</h5>
                    <p>{copy}</p>
                </div>
                <button className="simple black" onClick={() => {
                    context.setModalVideoIsShowing(true)
                    context.setVideoSource(videoURL)
                }}>Watch the video</button>
            </div>
        </div>
    )
}