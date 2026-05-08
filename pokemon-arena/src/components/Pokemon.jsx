import { AnimatedSprite } from './Animation'

//					VICTINI
export function Victini({ position = [0, 0, 0], scale = 0.5 })
{
	return (
		<group position={position}>
			<AnimatedSprite
				url="/victiniFront.gif"
				rotation={[0, 0, 0]}
				position={[0, 0, 0.01]}
				scale={scale}
			/>
			<AnimatedSprite
				url="/victiniBack.gif"
				rotation={[0, Math.PI, 0]}
				position={[0, 0, -0.01]}
				scale={scale}
			/>
		</group>
	)
}

export function Dragapult({ position = [0, 0, 0], scale = 0.05 })
{
	return (
		<group position={position}>
			<AnimatedSprite
				url="/dragapultFront.gif"
				rotation={[0, Math.PI, 0]}
				position={[0, 0, 0.01]}
				scale={scale}
			/>
			<AnimatedSprite
				url="/dragapultBack.gif"
				rotation={[0, 0, 0]}
				position={[0, 0, 0.01]}
				scale={scale}
			/>
				
		</group>
	)
}


//					GENGAR

