import { AnimatedSprite } from './Animation'

export default function TeleLogo()
{
	// === RÉGLAGES À AJUSTER ===
	const posX = 0
	const posY = 2.
	const posZ = -4.9

	const fondW = 4     // largeur du fond gris
	const fondH = 2 // hauteur du fond gris
	const logoScale = 0.01

	return (
		<>
			{/* FOND GRIS - rectangulaire, taille de la télé */}
			<mesh position={[0, 2.65, -5.1]}>
				<planeGeometry args={[fondW, fondH]} />
				<meshBasicMaterial color="grey" />
			</mesh>

			{/* LOGO ANIMÉ - devant le fond */}
			<AnimatedSprite
				url="/logoMoving.gif"
				position={[0, 2, -5]}
				scale={logoScale}
				frameDuration={0.05}
			/>
		</>
	)
}