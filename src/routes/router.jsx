import {createBrowserRouter} from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    },
    {
        path: "/other",
        element: <h1>Other</h1>
    }
  ]);