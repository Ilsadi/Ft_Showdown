import { createContext, useState } from "react"

export const SceneContext = createContext(null)

export function SceneProvider({ children })
{
	const [scene, setScene] = useState("home")
	return (
		<SceneContext value={{scene, setScene}}>
		{ children }
		</SceneContext>
	)
}
