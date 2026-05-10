import { useContext } from "react"
import { SceneContext } from "../contexts/SceneContext"
import HomeScene from "./HomeScene"
import HubScene from "./HubScene"
import ArenaScene from "./ArenaScene"

export default function SceneRouter()
{
	const { scene } = useContext(SceneContext)
	switch (scene)
	{
		case "home":
			return <HomeScene />
		case "hub":
			return <HubScene />
		case "arena":
			return <ArenaScene />
		default:
			return <HomeScene />
	}
}