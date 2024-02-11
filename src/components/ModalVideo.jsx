import { useEffect, useState } from "react";

export default function ModalVideo(props) {


    useEffect(
        () => {
            console.log("VIDEO IS SHOWING", props.isShowing)
        }, [props.isShowing]
    )
    return (
        <>
            {(props.isShowing) ?
                <div className={`absolute modal`}>
                    <div className="modal-nav">
                        X
                    </div>
                    <div className="video-container">
                        <video autoPlay loop playsInline>
                            <source src={props.src} type={"video/" + props.src.split(".")[1]} />
                        </video>
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


