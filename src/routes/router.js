import {createBrowserRouter, RouterProvider} from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    }
]);

export default RouterProvider