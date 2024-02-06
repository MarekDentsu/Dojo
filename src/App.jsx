import './scss/index.scss';
import {gsap, Power2} from 'gsap';
import { ScrollTrigger } from './plugins/gsap/ScrollTrigger.js';
import { SplitText } from './plugins/gsap/SplitText.js';
import { useState, useEffect } from 'react';
import useResize from './hooks/UseResize.js';
import Loader from './components/loader/Loader.jsx';
import Main from './components/Main.jsx';
import StickyLogo from './components/StickyLogo.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {

  // states
  const [isLoading, setLoading] = useState(true)
  const [isLoaderReady, setLoaderReady] = useState(0)

  // hooks
  const size = useResize();

  // Simulate, loading
  useEffect( () => {
    setTimeout(
      () => {
        setLoading(false)
      }, 2000
    )
    setTimeout(
      () => {
        setLoaderReady(1)
      }, 250
    )
  }, [] )
  
  return (
    <>
      {isLoaderReady ? 
      <div className={"wrapper" + (isLoading ? " absolute overflow-none" : "")}>
        <Main isLoading={isLoading}/>
        {(size.width >= 1024)
          ? 
            <StickyLogo />
          : null
        }
      </div>
      : null }
      <Loader isLoading={isLoading} />
    </>
  )
}

export default App
