import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { parseGIF, decompressFrames } from 'gifuct-js'

//					HOOK GIF
function useGifTexture(url)
{
	const frameRef = useRef(0)
	const timeRef = useRef(0)
	const framesRef = useRef([])
	const prevFrameRef = useRef(null)
	const [dims, setDims] = useState({ width: 1, height: 1 })

	const fullCanvasRef = useRef(null)
	const patchCanvasRef = useRef(null)
	const textureRef = useRef(null)

	if (fullCanvasRef.current === null)
	{
		fullCanvasRef.current = document.createElement('canvas')
		patchCanvasRef.current = document.createElement('canvas')
		textureRef.current = new THREE.CanvasTexture(fullCanvasRef.current)
	}

	useEffect(() =>
	{
		let cancelled = false
		fetch(url)
			.then(r => r.arrayBuffer())
			.then(buffer =>
			{
				if (cancelled) return
				const gif = parseGIF(buffer)
				const frames = decompressFrames(gif, true)
				framesRef.current = frames
				fullCanvasRef.current.width = gif.lsd.width
				fullCanvasRef.current.height = gif.lsd.height
				textureRef.current.needsUpdate = true
				setDims({ width: gif.lsd.width, height: gif.lsd.height })
			})
		return () => { cancelled = true }
	}, [url])

	useFrame((state, delta) =>
	{
		const frames = framesRef.current
		if (!frames.length) return
		timeRef.current += delta
		if (timeRef.current < 0.1) return
		timeRef.current = 0

		const frame = frames[frameRef.current]
		const fullCtx = fullCanvasRef.current.getContext('2d')
		const patchCanvas = patchCanvasRef.current
		const patchCtx = patchCanvas.getContext('2d')

		const prev = prevFrameRef.current
		if (prev && prev.disposalType === 2)
			fullCtx.clearRect(prev.dims.left, prev.dims.top, prev.dims.width, prev.dims.height)
		if (frameRef.current === 0 && !prev)
			fullCtx.clearRect(0, 0, fullCanvasRef.current.width, fullCanvasRef.current.height)

		patchCanvas.width = frame.dims.width
		patchCanvas.height = frame.dims.height
		const imageData = new ImageData(
			new Uint8ClampedArray(frame.patch),
			frame.dims.width,
			frame.dims.height
		)
		patchCtx.putImageData(imageData, 0, 0)
		fullCtx.drawImage(patchCanvas, frame.dims.left, frame.dims.top)

		textureRef.current.needsUpdate = true
		prevFrameRef.current = frame
		frameRef.current = (frameRef.current + 1) % frames.length
		if (frameRef.current === 0)
			prevFrameRef.current = null
	})
	return { texture: textureRef.current, dims }
}

//					SPRITE ANIME
function AnimatedSprite({ url, rotation = [0, 0, 0], position = [0, 0, 0], scale = 0.05 })
{
	const { texture, dims } = useGifTexture(url)
	texture.magFilter = THREE.NearestFilter
	texture.minFilter = THREE.NearestFilter

	if (dims.width === 1 && dims.height === 1) return null

	const width = dims.width * scale
	const height = dims.height * scale
	const adjustedPosition = [position[0], position[1] + height / 2, position[2]]

	return (
		<mesh rotation={rotation} position={adjustedPosition}>
			<planeGeometry args={[width, height]} />
			<meshBasicMaterial map={texture} transparent />
		</mesh>
	)
}

//					VICTINI
export function Victini({ position = [0, 0, 0], scale = 0.05 })
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
//					GENGAR

