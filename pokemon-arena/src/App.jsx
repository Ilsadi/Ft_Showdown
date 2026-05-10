import { SceneProvider } from './contexts/SceneContext'
import SceneRouter from './scenes/SceneRouter'

function App()
{
	return (
		<SceneProvider>
			<SceneRouter />
		</SceneProvider>

	)
}

export default App
