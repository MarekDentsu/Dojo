import '../../scss/app.scss';
import { useState, useEffect, createContext } from 'react';
import useResize from '../../hooks/UseResize.js';
import Loader from '../loader/Loader.jsx';
import Main from '../Main.jsx';
import StickyLogo from '../StickyLogo.jsx';
import ModalVideo from '../ModalVideo.jsx';

export const ModalContext = createContext();

function Home() {

    // states
    const [isLoading, setLoading] = useState(true)
    const [isLoaderReady, setLoaderReady] = useState(0)
    const [modalVideoIsShowing, setModalVideoIsShowing] = useState(false)
    const [videoSource, setVideoSource] = useState("")

    // hooks
    const size = useResize();

    // Simulate, loading
    useEffect(() => {
        setTimeout(
            () => {
                setLoading(false)
            }, 250
        )
        setTimeout(
            () => {
                setLoaderReady(1)
            }, 150
        )
    }, [])

    return (
        <ModalContext.Provider value={{modalVideoIsShowing, setModalVideoIsShowing, videoSource, setVideoSource}}>
            {isLoaderReady ?
                <>
                    <div className={"wrapper" + ((isLoading) ? " absolute overflow-hidden" : "")}>
                        <Main />
                        {(size.width > 1024)
                            ?
                            <StickyLogo />
                            : null
                        }
                    </div>
                    <ModalVideo />
                </>
                : null}
            <Loader isLoading={isLoading} />
        </ModalContext.Provider>
    )
}

export default Home