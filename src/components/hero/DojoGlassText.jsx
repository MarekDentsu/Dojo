import { useGLTF } from "@react-three/drei"
import { array } from "prop-types"
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
    return(
      <mesh geometry={nodes.segment.geometry} {...props} >
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
    )
  }
  const segmentCount = 20
  const segmentAngle = (Math.PI * 2) / segmentCount
  const segments = []
  for(let i = 0; i < segmentCount; ++i){
    segments.push(i * segmentAngle)
  }

  return (
    <>
      <group {...props}>
        <mesh geometry={nodes.dojoD.geometry} position={[-2.0,0,0]} >
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
        <group position={[-0.7,0,0]}>
          {segments.map( (angle, i) => {
            return (
              <Segment key={"segmetn" + i} rotation={[0,0,angle]}/>
            )
          })}
        </group>
        <mesh geometry={nodes.dojoJ.geometry} position={[0,0,0]} >
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
        <mesh geometry={nodes.dojoO.geometry} position={[1.3,0,0]} >
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
      </group>
    </>
  )
}
  