import {createBrowserRouter} from 'react-router-dom';
import { LayoutHome } from '../home/layouts/Layout';
import { HomePage, NotFoundPage } from '../home/pages';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHome/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            }
        ]
    }
]);