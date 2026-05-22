import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CameraTravelling()
{
	const pointB = useRef(new THREE.Vector3(0, 0.99, 0.46))

	useFrame((state) =>
	{
		state.camera.position.lerp(pointB.current, 0.008)
		state.camera.lookAt(0, 1, 0)
	})

	return null
}