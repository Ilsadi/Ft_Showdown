import { useState } from 'react'
import { useTimedProgress } from './useTimedProgress'
import { AnimatedSprite } from './Animation'

export default function TeleLogo({ phase })       // ← nouvelle prop
{
    const fondW = 4.2
    const fondH = 2
    const logoScale = 0.01

    const [shouldFade, setShouldFade] = useState(false)

    useTimedProgress(4, phase === "zoom", (progress) =>   // ← 4 secondes = DUREE_ZOOM
    {
        if (progress >= 0.1 && !shouldFade)
            setShouldFade(true)
    })

    return (
        <>
            <mesh position={[0, 2.75, -5.1]}>
                <planeGeometry args={[fondW, fondH]} />
                <meshBasicMaterial color="#585858" />
            </mesh>

            <AnimatedSprite
                url="/logoMoving.gif"
                position={[0, 2.14, -5]}
                scale={logoScale}
                fadable={shouldFade}
                fadeDuration={1}
            />
        </>
    )
}