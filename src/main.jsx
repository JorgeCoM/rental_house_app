import React from 'react'
import ReactDOM from 'react-dom/client'
// import {RouterProvider, router} from './routes/router'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
      path: "/",
      element: <h1>Home</h1>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
