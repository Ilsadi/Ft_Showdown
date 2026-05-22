import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import PokemonCenter from '../assets/pokemon_center_scene.glb'

export function HubCenter({ onReady })
{
	const { scene } = useGLTF(PokemonCenter)

	useEffect(() =>
	{
		if (scene && onReady) onReady()
	}, [scene, onReady])

	return <primitive object={scene} />
}