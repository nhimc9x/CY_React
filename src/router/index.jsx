import {createBrowserRouter} from 'react-router-dom'
import {TodoApp} from "@/pages/TodoApp/index.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <TodoApp/>,
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