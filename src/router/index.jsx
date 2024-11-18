import { createBrowserRouter } from 'react-router-dom'
import NoteApp from "../pages/NoteApp/index.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <NoteApp />,
    },
    {
        path: '/about',
        element: (
            <div>
                <h1>About</h1>
            </div>
        ),
    }
])