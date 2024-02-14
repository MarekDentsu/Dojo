import './scss/app.scss';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from './plugins/gsap/ScrollTrigger.js';
import { SplitText } from './plugins/gsap/SplitText.js';
import { useState, useEffect, createContext } from 'react';
import useResize from './hooks/UseResize.js';
import Loader from './components/loader/Loader.jsx';
import Main from './components/Main.jsx';
import StickyLogo from './components/StickyLogo.jsx';
import ModalVideo from './components/ModalVideo.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);


export const ModalContext = createContext();

function App() {

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

export default App

