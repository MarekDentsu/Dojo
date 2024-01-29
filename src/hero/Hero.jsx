import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Loader, Float, Html, OrbitControls } from "@react-three/drei"
// import { useGLTF, Float, Lightformer, Text, Html, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei"
// import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"

import DojoGlassText from "./../components/DojoGlassText.jsx"
import VideoPlane from "./../components/VideoPlane.jsx"

export default function Hero() {
  
    return (
      <>
        <Canvas dpr={[1, 2]} camera={{ fov: 15, position: [0, 0, 10  ] }} gl={{ alpha: false }}>
  
          <color attach="background" args={["#101010"]} />
  
          <Suspense fallback={null}>
            
            <Environment background={false} files="photo_studio_01_1k.hdr" />
  
            <Float 
              speed={1}
              floatIntensity={0.3}
              rotationIntensity={0.3}
              floatingRange={[0.2,0.5]}
            >
              <DojoGlassText position={[0,0,2]} scale={0.5}/>
            </Float>
  
            <VideoPlane position={[0,0,0]} scale={3}/>
            
          </Suspense>
          
          
          
          {/* <OrbitControls /> */}
        </Canvas>
        <Loader />
      </>
    )
  }
  