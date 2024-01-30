import React from 'react'
import { Suspense } from 'react'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'

import url from "../../assets/3002088_Dojo_Reel.mp4";
import fallbackURL from "../../assets/3002088_Dojo_Reel.jpg";

export default function VideoPlane(props) {
    const size = useAspect(1920, 1080)
    return (
        <mesh {...props}>
            <planeGeometry args={[1.92, 1.08]} />
            <Suspense fallback={<FallbackMaterial url={fallbackURL} />}>
                <VideoMaterial url={url} />
            </Suspense>
        </mesh>
    )
}
function VideoMaterial({ url }) {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}