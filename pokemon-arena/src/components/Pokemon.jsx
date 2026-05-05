import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import VictiniBackImg from '../assets/VictiniAnimationBack.png'
import VictiniFrontImg from '../assets/VictiniAnimationFront.png'



//					VICTINI

export function VictiniSpriteFront()
{
	const texture = useTexture(VictiniFrontImg)
	const cols = 5
	const rows = 11
	const frameRef = useRef(0)
	const timeRef = useRef(0)
  
	texture.repeat.set(0.98 / cols, 0.98 / rows)
	texture.offset.set(0, 1 - 1 / rows)
  
	useFrame((state, delta) =>
  	{
		timeRef.current += delta
		if (timeRef.current > 0.1)
		{
			timeRef.current = 0
			frameRef.current = (frameRef.current + 1) % (cols * rows)
			const col = frameRef.current % cols
			const row = Math.floor(frameRef.current / cols)
			texture.offset.set(col / cols, 1 - (row + 1) / rows)
		}
	})
	return (
		<mesh position={[1.5, 0.6, -3.5]}>
		<planeGeometry args={[1, 1]} />
		<meshBasicMaterial map={texture} transparent />
		</mesh>
	)
}

export function VictiniSpriteBack()
{
	const texture = useTexture(VictiniBackImg)
	const cols = 5
	const rows = 11
	const frameRef = useRef(0)
	const timeRef = useRef(0)

	texture.repeat.set(1 / cols, 1 / rows)
	texture.offset.set(0, 1 - 1 / rows)
  
  useFrame((state, delta) => {
	timeRef.current += delta
	if (timeRef.current > 0.1) {
	  timeRef.current = 0
	  frameRef.current = (frameRef.current + 1) % (cols * rows)
	  const col = frameRef.current % cols
	  const row = Math.floor(frameRef.current / cols)
	  texture.offset.set(col / cols, 1 - (row + 1) / rows + 0.016 / rows)
	}
  })

  return (
	 <mesh position={[1.5, 0.6, -3.5]} rotation={[0, Math.PI, 0]}>
	<planeGeometry args={[1, 1]} />
	<meshBasicMaterial map={texture} transparent />
	</mesh>
  )
}

//					GENGAR

