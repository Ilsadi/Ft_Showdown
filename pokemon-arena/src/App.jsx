import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture, useGLTF } from '@react-three/drei'
import VictiniFrontImg from './assets/VictiniAnimationFront.png'
import VictiniBackImg from './assets/VictiniAnimationBack.png'
import bakeSol from './assets/bakeSol.png'
import arenaUrl from './assets/Arena_Black_Orange.glb'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'



	function ArenaWalls()
{	
	const { scene } = useGLTF(arenaUrl)
	return <primitive object={scene} />
}
	function ArenaSol()
	{
		const texture = useTexture(bakeSol)
	return (
	<mesh rotation={[-Math.PI / 2, 0, 0]} position={[19.7, 0.1, 6.8]}>
	<planeGeometry args={[79, 54.5]} />
	<meshBasicMaterial map={texture} />
	</mesh>
	)
}

function VictiniSpriteFront()
{
  const texture = useTexture(VictiniFrontImg)
  const ref = useRef()
  
  const cols = 5
  const rows = 11
  const frameRef = useRef(0)
  const timeRef = useRef(0)
  
  texture.repeat.set(1 / cols, 1 / rows)
  texture.offset.set(0, 1 - 1 / rows)
  
  useFrame((state, delta) => {
    timeRef.current += delta
    if (timeRef.current > 0.1) {
      timeRef.current = 0
      frameRef.current = (frameRef.current + 1) % (cols * rows)
      const col = frameRef.current % cols
      const row = Math.floor(frameRef.current / cols)
      texture.offset.set(col / cols, 1 - (row + 1) / rows)
    }
  })

  return (
    <mesh position={[1.5, 1.1, -3.5]}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  )
}

function VictiniSpriteBack()
{
  const texture = useTexture(VictiniBackImg)
  const ref = useRef()
  
  const cols = 5
  const rows = 11
  const frameRef = useRef(0)
  const timeRef = useRef(0)
  
  texture.repeat.set(1 / cols, 1 / rows)
  texture.offset.set(0, 1 - 1 / rows)
  
  useFrame((state, delta) => {
    timeRef.current += delta
    if (timeRef.current > 0.1) {
      timeRef.current = 0
      frameRef.current = (frameRef.current + 1) % (cols * rows)
      const col = frameRef.current % cols
      const row = Math.floor(frameRef.current / cols)
      texture.offset.set(col / cols, 1 - (row + 1) / rows)
    }
  })

  return (
     <mesh position={[1.5, 1, -3.5]} rotation={[0, Math.PI, 0]}>
    <planeGeometry args={[2, 2]} />
    <meshBasicMaterial map={texture} transparent />
  	</mesh>
  )
}

	function App() {
	return (
		<Canvas style={{ width: '100vw', height: '100vh', background: 'black'}}>
		<directionalLight position={[15, 10, 0]} intensity={1} />
		<ambientLight intensity={0.5} />
		<OrbitControls />
		<ArenaWalls />
		<ArenaSol />
		<VictiniSpriteFront/>
		<VictiniSpriteBack/>
		</Canvas>
	)
	}

	export default App
