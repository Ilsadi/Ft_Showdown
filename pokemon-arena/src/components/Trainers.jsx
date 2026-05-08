import { AnimatedSprite } from './Animation'

export function Anis({position = [0, 0, 0], scale = 0.05})
{
	return (
		<group position={position}>
			<AnimatedSprite
				url="/Anis.gif"
				rotation={[0, Math.PI, 0]}
				position={[0, 0, 0.01]}
				scale={scale}
			/>
		</group>
	)
}

export function Claire({position = [0, 0, 0], scale = 0.05})
{
	return (
		<group position={position}>
			<AnimatedSprite
				url="/Claire.gif"
				rotation={[0, 0, 0]}
				position={[0, 0, 0.01]}
				scale={scale}
			/>
		</group>
	)
}

export function Joelle({position = [0, 0, 0], scale = 0.05})
{
	return (
		<group position={position}>
			<AnimatedSprite
				url="/Joelle2.gif"
				rotation={[0, 0, 0]}
				position={[0, 0, 0.0,1]}
				scale={scale}
			/>
		</group>
	)
}
