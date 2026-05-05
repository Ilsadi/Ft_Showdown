import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture, useGLTF } from '@react-three/drei'
import VictiniSprite from './assets/VictiniFront1.png'
import bakeSol from './assets/bakeSol.png'
import arenaUrl from './assets/Arena_Black_Orange.glb'
import * as THREE from 'three'



	function ArenaWalls()
{	
	const { scene } = useGLTF(arenaUrl)
	return <primitive object={scene} />
}
	function ArenaSol()
	{
		const texture = useTexture(bakeSol)
	return (
	<mesh rotation={[-Math.PI / 2, 0, 0]} position={[19.7, 0.1, 6.8]}>
	<planeGeometry args={[79, 54.5]} />
	<meshBasicMaterial map={texture} />
	</mesh>
	)
	}

	function PokemonSprite()
	{
		const texture = useTexture(VictiniSprite)
		return (
			<mesh position={[1.5, 0.72, -3.5]}>
				<planeGeometry args={[3, 3]} />
				<meshBasicMaterial map={texture} transparent />
			</mesh>
		)
	}
	function App() {
	return (
		<Canvas style={{ width: '100vw', height: '100vh', background: 'black'}}>
		<directionalLight position={[15, 10, 0]} intensity={1} />
		<ambientLight intensity={0.5} />
		<OrbitControls />
		<ArenaWalls />
		<ArenaSol />
		<PokemonSprite/>

		</Canvas>
	)
	}

	export default App
