import { useContext, useEffect, useState } from "react"
import { ModalContext } from './Pages/Home.jsx'
import crossURL from '../assets/cross.svg'

export default function ModalVideo(props) {
    const context = useContext(ModalContext);

    const [videoSource, setVideoSource] = useState(null)
    const [willClose, setWillClose] = useState(false)

    useEffect(
        () => {
            if(willClose){
                setTimeout(
                    () => {
                        context.setModalVideoIsShowing(false)
                        context.setVideoSource(null)
                        setWillClose(false)
                    }, 500
                )
            }
        }, [willClose]
    )

    return (
        <>
            {(context && context.videoSource && context.modalVideoIsShowing) ?
                <div className={`absolute modal ${willClose ? "will-close" : ""}`}>
                    <div className="modal-container">
                        <div className="video-container absolute flex-center">
                            <video autoPlay loop playsInline controls poster={`${context.videoSource.split(".")[1]}.jpg`}>
                                <source src={context.videoSource} type={`video/${context.videoSource.split(".")[1]}`} />
                            </video>
                        </div>
                        <button className="image-button opacity-hover grey-to-white" onClick={
                            () => {
                                if(!willClose){
                                    setWillClose(true)
                                }
                            }
                        }>
                            <img src={crossURL} alt="x" />
                        </button>
                    </div>
                </div>
                :
                null
            }
        </>
    )
}

export function useModal() {
    const [modal, setModal] = useState({
        showing: false
    });

    return {
        modal,
        setModal
    };
}


