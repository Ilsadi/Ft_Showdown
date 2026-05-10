import { useContext } from "react"
import { SceneContext } from "../contexts/SceneContext"

export default function HomeScene()
{
	const { setScene } = useContext(SceneContext)
	return (
		<div>
			<h1>HOME SCENE</h1>
			<button onClick={() => setScene("hub")}>&rarr; Hub</button>
			<button onClick={() => setScene("arena")}>&rarr; Arena</button>
		</div>
	)
}