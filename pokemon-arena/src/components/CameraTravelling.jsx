import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Durées (en secondes) — à ajuster à l'œil pour le rendu cinématique
// cinematicConfig.js
export const DUREE_ARRIVEE = 3
export const DUREE_ZOOM = 4
export const RATIO_DIALOGUE = 0.85
export const RATIO_FADE = 0.50  // déclenchement du dialogue à 85% de la phase "arrivee"

export default function CameraTravelling({ phase, onMiChemin })
{
    const pointB = useRef(new THREE.Vector3(0, 0.99, 0.46))
    const pointTele = useRef(new THREE.Vector3(0, 2.66, -3.42))

    const regardJoelle = useRef(new THREE.Vector3(0, 0.96, 0))
    const regardTele = useRef(new THREE.Vector3(0, 2.72, -5))

    // États mémorisés au début de chaque phase
    const startPos = useRef(null)
    const startRegard = useRef(new THREE.Vector3(0, 1, 0))
    const regardActuel = useRef(new THREE.Vector3(0, 1, 0))

    // Le timer redémarre à chaque changement de phase
    const elapsed = useRef(0)
    const dialogueDeclenche = useRef(false)

    // Quand la phase change, on capture l'état de départ et on reset le timer
    useEffect(() =>
    {
        elapsed.current = 0
        startPos.current = null   // sera capturé à la prochaine frame
        startRegard.current.copy(regardActuel.current)
    }, [phase])

    useFrame((state, delta) =>
    {
        // Capture de la position de départ à la première frame de la phase
        if (startPos.current === null)
            startPos.current = state.camera.position.clone()

        elapsed.current += delta

        if (phase === "arrivee")
        {
            let t = elapsed.current / DUREE_ARRIVEE
            if (t > 1) t = 1
            const eased = 1 - Math.pow(1 - t, 3)   // easeOut cubique

            state.camera.position.lerpVectors(startPos.current, pointB.current, eased)
            regardActuel.current.lerpVectors(startRegard.current, regardJoelle.current, eased)

            // Déclencheur temporel (et non plus spatial)
            if (!dialogueDeclenche.current && t >= RATIO_DIALOGUE)
            {
                dialogueDeclenche.current = true
                onMiChemin()
            }
        }
        else if (phase === "zoom")
        {
            let t = elapsed.current / DUREE_ZOOM
            if (t > 1) t = 1
            const eased = 1 - Math.pow(1 - t, 3)

            state.camera.position.lerpVectors(startPos.current, pointTele.current, eased)
            regardActuel.current.lerpVectors(startRegard.current, regardTele.current, eased)
        }

        state.camera.lookAt(regardActuel.current)
    })

    return null
}