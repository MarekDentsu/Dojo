import { useGLTF, Float } from "@react-three/drei"
import {gsap, Power2} from "gsap"

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
    radius: 1
  }
  segments.angle = (Math.PI * 2) / segments.count
  for (let i = 0; i < segments.count; ++i) {
    segments.angles.push(i * segments.angle)
  }

  gsap.to(segments, {duration: 2, radius: 0, ease: Power2.easeInOut})

  return (
    <>
      <Float
        speed={1}
        floatIntensity={0.5}
        rotationIntensity={0.4}
        floatingRange={[0, 0.3]}
      >
        <group {...props}>
          <mesh geometry={nodes.dojoD.geometry} position={[-1.9, 0, 0]} >
            <meshPhysicalMaterial {...materialProps} />
          </mesh>
          <group position={[-0.6, 0, 0]}>
            {segments.angles.map((angle, i) => {
              return (
                <Segment key={"segment" + i} scale={1} position={[Math.sin(-angle) * segments.radius, Math.cos(-angle) * segments.radius, 0]} rotation={[0, 0, angle]} />
              )
            })}
          </group>
          <mesh geometry={nodes.dojoJ.geometry} position={[0, 0, 0]} >
            <meshPhysicalMaterial {...materialProps} />
          </mesh>
          <mesh geometry={nodes.dojoO.geometry} position={[1.3, 0, 0]} >
            <meshPhysicalMaterial {...materialProps} />
          </mesh>
        </group>
      </Float>
    </>
  )
}
