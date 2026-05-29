
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export function useTimedProgress(duration, active, onProgress)
{
    const elapsedRef = useRef(0)

    // Reset du timer chaque fois que active devient true
    useEffect(() =>
    {
        if (active)
            elapsedRef.current = 0
    }, [active])

    useFrame((state, delta) =>
    {
        if (!active) return                       // ne tourne que si actif

        elapsedRef.current += delta
        let progress = elapsedRef.current / duration
        if (progress > 1) progress = 1

        onProgress(progress)
    })
}