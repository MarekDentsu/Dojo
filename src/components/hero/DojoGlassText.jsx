import { useGSAP } from "@gsap/react"
import { useGLTF, Float } from "@react-three/drei"
import {gsap, Power2} from "gsap"
import { useRef } from "react"
import { useFrame, useThree,  } from "@react-three/fiber"
import { useMouse } from "../../hooks/UseMouse"
import { Vector3 } from "three"


// import { useControls } from "leva"

export default function DojoGlassText(props) {
  // const { nodes } = useGLTF("/dojo-text-2.glb")
  const { nodes } = useGLTF("/dojo-text.glb")
  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 20 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   clearcoat: { value: 0, min: 0, max: 1, step: 0.1 },
  //   clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 2, min: 0.9, max: 2, step: 0.01 },
  //   ior: { value: 1.5, min: 1, max: 2.3, step: 0.05 },
  //   envMapIntensity: { value: 1.5, min: 0, max: 20, step: 1 },
  //   color: "#ffffff",
  //   attenuationTint: "#ffe79e",
  //   attenuationDistance: { value: 0.01, min: 0, max: 1 }
  // })
  const materialProps = {
    thickness: 0.5,
    roughness: 0,
    clearcoat: 0,
    clearcoatRoughness: 0,
    transmission: 1.1,
    ior: 2.0,
    envMapIntensity: 1,
    color: "#ffffff",
    attenuationTint: "#ffffff",
    attenuationDistance: 0.01
  }

  const Segment = (props) => {
    return (
      <mesh geometry={nodes.segment.geometry} {...props} >
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
    )
  }
  const segments = {
    count: 20,
    angles: new Array(20),
    angle: 0,
    radius: 2
  }
  segments.angle = (Math.PI * 2) / segments.count
  for (let i = 0; i < segments.count; ++i) {
    segments.angles.push(i * segments.angle)
  }

  const glassText = useRef()
  const dojoDJO = useRef();
  const dojoO = useRef();
  const timeline = new gsap.timeline()
  

  useGSAP(() => {
    // gsap code here...
    dojoO.current.children.map((child, i) => {
      if(child.position)
        timeline.from(child.position, {
          duration: 1.5, 
          x: Math.sin(-segments.angle * i) * segments.radius, 
          y: Math.cos(-segments.angle * i) * segments.radius,
          ease: Power2.easeInOut
        }, i * (0.5 / segments.count))
        timeline.from(child.scale, {
          duration: 1.5, 
          x: 0, z: 0,
          ease: Power2.easeInOut
        }, i * (0.5 / segments.count))
        timeline.from(child.scale, {
          duration: 1.5, 
          y: 3,
          ease: Power2.easeInOut
        }, i * (0.5 / segments.count))
    })
    dojoDJO.current.children.map((child, i) => {
      if(child.position)
        timeline.from(child.rotation, {
          duration: 1.5,
          y: Math.PI * 0.5,
          ease: Power2.easeInOut
        }, 1 + i * 0.25)
        timeline.from(child.scale, {
          duration: 1,
          x: 0,
          y: 0,
          
          ease: Power2.easeOut
        }, 1 + i * 0.25)
    })
  }, { scope: dojoO.current });


  function Rig() {
    const { normalisedPosition } = useMouse()
    const { camera } = useThree()
    const vec = new Vector3()
  
    return useFrame(() => {
      // console.log(glassText)
      if(glassText.current)
        // console.log(glassText.current.rotation)
        glassText.current.rotation.y = normalisedPosition.x * 0.3
        glassText.current.rotation.x = normalisedPosition.y * 1
        
    })
  }


  return (
    <>
      <Float
        speed={1}
        floatIntensity={0.5}
        rotationIntensity={0.4}
        floatingRange={[0, 0.3]}
      >
        <group ref={glassText} {...props}>
          
          <group ref={dojoO} position={[-0.6, 0, 0]}>
            {segments.angles.map((angle, i) => {
              return (
                <Segment key={"segment" + i} scale={1} rotation={[0, 0, angle]} />
              )
            })}
          </group>
          <group ref={dojoDJO}>
            <mesh geometry={nodes.dojoD.geometry} position={[-1.9, 0, 0]} >
              <meshPhysicalMaterial {...materialProps} />
            </mesh>
            <mesh geometry={nodes.dojoJ.geometry} position={[0, 0, 0]} >
              <meshPhysicalMaterial {...materialProps} />
            </mesh>
            <mesh geometry={nodes.dojoO.geometry} position={[1.3, 0, 0]} >
              <meshPhysicalMaterial {...materialProps} />
            </mesh>
          </group>
        </group>
      </Float>
      <Rig />
    </>
  )
}
