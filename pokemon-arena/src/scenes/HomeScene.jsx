import { useContext } from "react"
import { SceneContext } from "../contexts/SceneContext"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D } from '@react-three/drei'

export default function HomeScene()
{
	const { setScene } = useContext(SceneContext)
	return (
		<div>
			<Canvas style={{ width: '100vw', height: '100vh', background: 'white'}}>
			<directionalLight position={[15, 10, 0]} intensity={1} />
			<ambientLight intensity={0.5} />
			<OrbitControls />
			<mesh rotation ={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
			<planeGeometry args={[20, 20]} />
			<meshBasicMaterial color="red" />
			</mesh>
			<Text3D
				font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
				size={1}
				height={0.2}
				position={[-5, 5, 0]}
			>
				FT_SHOWDOWN
				<meshStandardMaterial color="black" />
			</Text3D>
			<mesh onClick={() => setScene("hub")}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color="blue" />
			</mesh>

			</Canvas>
			<button onClick={() => setScene("hub")}>&rarr; Hub</button>
			<button onClick={() => setScene("arena")}>&rarr; Arena</button>
		</div>
	)
}