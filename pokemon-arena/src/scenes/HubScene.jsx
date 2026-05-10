import { useContext } from "react"
import { SceneContext } from "../contexts/SceneContext"

export default function HubScene()
{
	const { setScene } = useContext(SceneContext)
	return (
		<div>
			<h1>HUB SCENE</h1>
			<button onClick={() => setScene("home")}>&rarr; Home</button>
			<button onClick={() => setScene("arena")}>&rarr; Arena</button>
		</div>
	)
}