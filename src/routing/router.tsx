import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import StartBroadcast from '../pages/StartBroadcast'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/start-broadcast', element: <StartBroadcast /> }
])

export default router