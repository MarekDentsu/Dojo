import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Loader, Float} from "@react-three/drei"
import gsap from "gsap"
// import { useGLTF, Float, Lightformer, Text, Html, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei"
// import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"

import DojoGlassText from "./DojoGlassText.jsx"
import VideoPlane from "./VideoPlane.jsx"
import Logo from "../nav/Logo.jsx"
import envImageUrl from "../../assets/images/photo_studio_01_1k.jpg"

export default function Hero() {
    const timeline = new gsap.timeline()
    console.log(console.log(envImageUrl))
  
    return (
      <div className="hero">

        <Canvas dpr={[1, 2]} camera={{ fov: 15, position: [0, 0, 10  ] }} gl={{ alpha: false }}>
  
          <color attach="background" args={["#101010"]} />
  
          <Suspense fallback={null}>
            
            <Environment background={false} files={"photo_studio_01_512kb.hdr"} />
            <VideoPlane position={[0,0,0]} scale={3}/>

            <Float 
              speed={1}
              floatIntensity={1}
              rotationIntensity={0.3}
              floatingRange={[0.1,0.2]}
            >
              <DojoGlassText position={[0,0,2]} scale={0.5}/>
            </Float>
              
          </Suspense>
                    
          {/* <OrbitControls /> */}
        </Canvas>
        <Loader />

        

        <div className="overlay">
          <Logo />
          <button className="white">LET’S DŌJŌ</button>
        </div>
      </div>
    )
  }
  