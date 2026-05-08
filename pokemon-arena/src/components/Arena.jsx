import { useTexture, useGLTF } from '@react-three/drei'
import bakedFloor from '../assets/bakeSol.png'
import Arena from '../assets/Arena_Black_Orange.glb'

// export function ArenaWalls()
// {	
// 	const { scene } = useGLTF(Arena)
// 	return <primitive object={scene} />
// }
export function ArenaFloor()
{
	const texture = useTexture(bakedFloor)
	return (
	<mesh rotation={[-Math.PI / 2, 0, 0]} position={[19.7, 0.1, 6.8]}>
	<planeGeometry args={[79, 54.5]} />
	<meshBasicMaterial map={texture} />
	</mesh>
	)
}