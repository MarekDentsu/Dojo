import { useRef } from "react"
export default function CarouselCard(props) {
    
    const cardRef = useRef()
    const {heading, brand, copy, imageURL, videoURL} = props

    return (
        <div className="carousel-card" ref={cardRef}>
            <div className="card-image">
               <img src={imageURL} alt="" />
            </div>
            <div className="description">
                <div>
                    <h3>{heading}</h3>
                    <h5>{brand}</h5>
                    <p>{copy}</p>
                </div>
                <button className="simple black">Watch the video</button>
            </div>
        </div>
    )
}