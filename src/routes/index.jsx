import { createHashRouter } from 'react-router-dom'
import Home from '../pages/home.jsx'
import Commands from '../pages/commands.jsx'
import Distros from '../pages/distros.jsx'
import Filesystem from '../pages/filesystem.jsx'
import RootLayout from '../layouts/RootLayout.jsx'

const Routes = createHashRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            {
            },
                path: 'commands',
                element: <Commands />
            },
            {
                path: 'distros',
                element: <Distros />
            },
            {
                path: 'filesystem',
                element: <Filesystem />
            }
        ]
    }
])

export default Routes