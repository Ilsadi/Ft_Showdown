import { useState } from 'react'
import { useTimedProgress } from './useTimedProgress'
import { AnimatedSprite } from './Animation'

export default function TeleLogo({ phase, setMenuVisible })
{
    const fondW = 4.2
    const fondH = 2
    const logoScale = 0.01

    const [shouldFade, setShouldFade] = useState(false)
    const [menuDeclenche, setMenuDeclenche] = useState(false)

    useTimedProgress(4, phase === "zoom", (progress) =>
    {
        // Premier seuil : déclenche le fondu du logo
        if (progress >= 0.50 && !shouldFade)
            setShouldFade(true)

        // Second seuil : déclenche l'apparition du menu, après le fondu + délai
        if (progress >= 0.75 && !menuDeclenche)
        {
            setMenuDeclenche(true)
            setMenuVisible(true)
        }
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