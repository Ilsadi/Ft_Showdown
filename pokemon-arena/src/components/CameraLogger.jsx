import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function CameraLogger()
{
	const lastLog = useRef(0)

	useFrame((state) =>
	{
		const now = state.clock.elapsedTime
		if (now - lastLog.current < 0.5) return
		lastLog.current = now

		const p = state.camera.position
		const t = state.controls?.target

		console.log(
			`position: [${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}]`,
			t ? `| target: [${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}]` : ''
		)
	})

	return null
}