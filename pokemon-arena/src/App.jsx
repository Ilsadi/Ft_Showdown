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
	<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 4.12, 0]}>
	<planeGeometry args={[20, 14]} />
	<meshBasicMaterial map={texture} />
	</mesh>
	)
	}

	function PokemonSprite()
	{
		const texture = useTexture(VictiniSprite)
		return (
			<mesh position={[0, 2.80, 0]}>
				<planeGeometry args={[10, 10]} />
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
