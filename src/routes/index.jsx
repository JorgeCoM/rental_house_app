import {createBrowserRouter} from 'react-router-dom';
import { LayoutHome } from '../home/layouts/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHome/>
    }
]);