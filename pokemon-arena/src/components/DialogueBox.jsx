import { useState, useEffect } from 'react'
import cadre from '../assets/DialogueBox.png'

export default function DialogueBox({ setPhase })
{
	const textes = [
		"Bonjour ! Bienvenue au Centre Pokémon.",
		"Je soigne tes Pokémon en un instant.",
		"Veux-tu choisir un mode de jeu ?"
	]

	const VITESSE_NORMALE = 25
	const VITESSE_RAPIDE = 6

	const [page, setPage] = useState(0)
	const [nbLettres, setNbLettres] = useState(0)
	const [vitesse, setVitesse] = useState(VITESSE_NORMALE)

	useEffect(() =>
	{
		setNbLettres(0)
		setVitesse(VITESSE_NORMALE)
	}, [page])

	useEffect(() =>
	{
		const timer = setInterval(() =>
		{
			setNbLettres((n) => n + 1)
		}, vitesse)

		return () => clearInterval(timer)
	}, [vitesse, page])

	const texteFini = nbLettres >= textes[page].length

	function handleMouseDown()
	{
		if (!texteFini)
			setVitesse(VITESSE_RAPIDE)   // texte en cours → accélère
		else
		{
			if (page < textes.length - 1)  // texte fini → avance
				setPage(page + 1)
			else
				setPhase("zoom")
		}
	}

	function handleMouseUp()
	{
		setVitesse(VITESSE_NORMALE)       // relâcher → juste revenir en vitesse normale
	}

	return (
		<div
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			style={{
				position: 'absolute',
				bottom: '40px',
				left: '50%',
				transform: 'translateX(-50%)',
				width: '60%',
				minHeight: '140px',
				borderStyle: 'solid',
				borderWidth: '60px',
				borderImageSource: `url(${cadre})`,
				borderImageSlice: '89 fill',
				borderImageRepeat: 'round',
				padding: '20px 30px',
				boxSizing: 'border-box',
				color: '#222',
				fontSize: '40px',
				fontFamily: 'PokemonFont',
				cursor: 'pointer',
				imageRendering: 'pixelated',
				userSelect: 'none',
			}}
		>
			{textes[page].slice(0, nbLettres)}
		</div>
	)
}