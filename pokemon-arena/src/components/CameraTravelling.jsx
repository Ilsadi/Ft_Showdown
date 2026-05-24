import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CameraTravelling({ phase, onMiChemin })
{
	const pointB = useRef(new THREE.Vector3(0, 0.99, 0.46))
	const pointTele = useRef(new THREE.Vector3(0, 2.66, -3.42))

	const regardActuel = useRef(new THREE.Vector3(0, 1, 0))
	const regardJoelle = useRef(new THREE.Vector3(0, 0.96, 0))
	const regardTele = useRef(new THREE.Vector3(0, 2.72, -5))

	const dialogueDeclenche = useRef(false)   // ← le drapeau "une seule fois"

	const SEUIL = 0.1   // ← à régler à l'œil

	useFrame((state) =>
	{
		if (phase === "arrivee")
		{
			state.camera.position.lerp(pointB.current, 0.008)
			regardActuel.current.lerp(regardJoelle.current, 0.008)

			// détection du mi-chemin
			if (!dialogueDeclenche.current)
			{
				const distance = state.camera.position.distanceTo(pointB.current)
				if (distance < SEUIL)
				{
					dialogueDeclenche.current = true
					onMiChemin()
				}
			}
		}
		else if (phase === "zoom")
		{
			state.camera.position.lerp(pointTele.current, 0.006)
			regardActuel.current.lerp(regardTele.current, 0.006)
		}

		state.camera.lookAt(regardActuel.current)
	})

	return null
}