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
				position={[0, 0, 0.1]}
				scale={scale}
			/>
			<AnimatedSprite
				url="/happiny.gif"
				rotation={[0, 0, 0]}
				position={[0.6, 0.6, 0.3]}
				scale= {0.0145}
			/>
		</group>
	)
}

export function Ilan({position = [0, 0, 0], scale = 0.05})
{
	return (
		<group position={position}>
			<AnimatedSprite
				url="/Ilan.gif"
				rotation={[0, 0, 0]}
				position={[0, 0, 0.01]}
				scale={scale}
			/>
			<AnimatedSprite
				url="/dragapultFront.gif"
				rotation={[0, 0, 0]}
				position={[0.6, 0.5, -0.1]}
				scale={scale}
			/>
		</group>
	)
}

export function Iness({position = [0, 0, 0], scale = 0.05})
{
	return (
		<group position={position}>
			<AnimatedSprite
				url="/Iness.gif"
				rotation={[0, 0, 0]}
				position={[0, 0, 0.1]}
				scale={scale}
			/>
			<AnimatedSprite
				url="/leafeonFront.gif"
				rotation={[0, 0, 0]}
				position={[-0.4, 0.1, -0.2]}
				scale= {scale}
			/>
		</group>
	)
}