import { useContext, useState, useCallback } from "react"
import { SceneContext } from "../contexts/SceneContext"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as PokemonCenter from '../components/PokemonCenter'
import * as Trainers from '../components/Trainers'
import CameraTravelling from '../components/CameraTravelling'
// import CameraLogger from '../components/CameraLogger'

const TOTAL_ASSETS = 3   // HubCenter (1) + Joelle (1) + Happiny (1)

export default function HubScene()
{
	const { setScene } = useContext(SceneContext)
	const [loaded, setLoaded] = useState(0)
	const ready = loaded >= TOTAL_ASSETS

	const handleReady = useCallback(() =>
	{
		setLoaded((n) => n + 1)
	}, [])

	return (
		<div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
			<Canvas camera={{ position: [0, 5.96, 6] }} style={{ width: '100vw', height: '100vh', background: '#DEBE75'}}>
				<directionalLight position={[15, 10, 0]} intensity={1} />
				<ambientLight intensity={0.5} />
				<PokemonCenter.HubCenter onReady={handleReady} />
				<Trainers.Joelle position={[0, 0.1, -3.2]} scale={0.02} onReady={handleReady} />
				{ ready && <CameraTravelling /> }
				{/* <CameraLogger /> */}
				{/* <OrbitControls /> */}
			</Canvas>

			{/* VOILE NOIR DE TRANSITION */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: 'black',
					opacity: ready ? 0 : 1,
					transition: 'opacity 1s ease',
					pointerEvents: ready ? 'none' : 'auto',
				}}
			/>

			<button onClick={() => setScene("home")}>&rarr; Home</button>
			<button onClick={() => setScene("arena")}>&rarr; Arena</button>
		</div>
	)
}