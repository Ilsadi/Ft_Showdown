import { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Un item du carousel : un mesh dont position, scale et opacité sont animés
function CarouselItem({ url, distance, basePosition, baseScale })
{
    const texture = useTexture(url)
    texture.magFilter = THREE.NearestFilter
    texture.minFilter = THREE.NearestFilter

    const meshRef = useRef()
    const matRef = useRef()

    // Calcul des valeurs CIBLES selon la distance à la sélection
    const targetY = basePosition[1] - distance * 0.4   // espacement vertical entre items
    const absD = Math.abs(distance)
    const targetScale = absD === 0 ? baseScale * 1.6 
                      : absD === 1 ? baseScale * 1.0 
                      : baseScale * 0.65
    const targetOpacity = absD === 0 ? 1 
                        : absD === 1 ? 0.45 
                        : absD === 2 ? 0.15 
                        : 0

    useFrame((state, delta) =>
    {
        if (!meshRef.current || !matRef.current) return

        // Lerp framerate-indépendant : 1 - exp(-speed * delta)
        const k = 1 - Math.exp(-8 * delta)

        // Position Y
        meshRef.current.position.y += (targetY - meshRef.current.position.y) * k

        // Scale (uniforme)
        const currentScale = meshRef.current.scale.x
        const newScale = currentScale + (targetScale - currentScale) * k
        meshRef.current.scale.set(newScale, newScale, 1)

        // Opacité
        matRef.current.opacity += (targetOpacity - matRef.current.opacity) * k
    })

    return (
        <mesh ref={meshRef} position={basePosition} scale={[baseScale, baseScale, 1]}>
            <planeGeometry args={[1, 0.25]} />  {/* ratio 256/64 = 4:1, donc 1×0.25 */}
            <meshBasicMaterial 
                ref={matRef}
                map={texture}
                transparent={true}
                opacity={0}
                alphaTest={0.01}
            />
        </mesh>
    )
}

export default function MenuCarousel({ items, position = [0, 0, 0], baseScale = 1.5, active = true })
{
    const [selected, setSelected] = useState(0)

    // Écoute de la molette globale, uniquement quand active = true
    useEffect(() =>
    {
        if (!active) return

        const handleWheel = (e) =>
        {
            if (e.deltaY > 0)
                setSelected((s) => Math.min(s + 1, items.length - 1))
            else if (e.deltaY < 0)
                setSelected((s) => Math.max(s - 1, 0))
        }

        window.addEventListener('wheel', handleWheel, { passive: true })
        return () => window.removeEventListener('wheel', handleWheel)
    }, [active, items.length])

    return (
        <group position={position}>
            {items.map((item, i) => (
                <CarouselItem
                    key={item.name}
                    url={item.url}
                    distance={i - selected}
                    basePosition={[0, 0, 0]}
                    baseScale={baseScale}
                />
            ))}
        </group>
    )
}