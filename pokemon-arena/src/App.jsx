import { Canvas } from '@react-three/fiber'
import * as Arena from './components/Arena'
import * as Pokemon from './components/Pokemon'
import { OrbitControls, useTexture, useGLTF } from '@react-three/drei'

function App()
{
	return (
		<Canvas style={{ width: '100vw', height: '100vh', background: 'black'}}>
		<directionalLight position={[15, 10, 0]} intensity={1} />
		<ambientLight intensity={0.5} />
		<OrbitControls />
		<Arena.ArenaWalls />
		<Arena.ArenaFloor />
		<Pokemon.Victini position={[2, 0.1, -4]} scale={0.08} />
		</Canvas>
	)
}

export default App
