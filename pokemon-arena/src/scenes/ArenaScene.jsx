import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as Arena from '../components/Arena'
import * as Pokemon from '../components/Pokemon'
import * as Trainers from '../components/Trainers'
import { useContext } from "react"
import { SceneContext } from "../contexts/SceneContext"

export default function ArenaScene()
{
	const { setScene } = useContext(SceneContext)
	return (
		<div>
			<Canvas style={{ width: '100vw', height: '100vh', background: 'white'}}>
			<directionalLight position={[15, 10, 0]} intensity={1} />
			<ambientLight intensity={0.5} />
			<OrbitControls />
			{/* <Arena.ArenaWalls /> */}
			<Arena.ArenaFloor />
			<Pokemon.Victini position={[2, 0.1, -4]} scale={0.02} />
			<Pokemon.Dragapult position={[-2, 0.1, 4]} scale={0.025} />
			<Trainers.Anis position={[0, 0.1, 5]} scale={0.02} />
			<Trainers.Claire position={[0, 0.1, -5]} scale={0.02} />
			<Trainers.Joelle position={[5, 0.1, -5]} scale ={0.02} />
			<Trainers.Ilan position={[8, 0.1, -5]} scale ={0.02} />
			<Trainers.Iness position={[11, 0.1, -5]} scale ={0.02} />
			</Canvas>
			<button onClick={() => setScene("home")}>&rarr; Home</button>
			<button onClick={() => setScene("hub")}>&rarr; Hub</button>
		</div>
	)
}