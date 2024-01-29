import { useGLTF } from "@react-three/drei"
// import { useControls } from "leva"

export default function DojoGlassText(props) {
  const { nodes } = useGLTF("/dojo-text-2.glb")
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
  return (
    <>
      <mesh geometry={nodes.dojo.geometry} {...props} >
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
    </>
  )
}
  