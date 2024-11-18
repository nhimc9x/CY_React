import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <h1 className='underline'>Home</h1>
            </div>
        ),
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