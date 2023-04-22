import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom';
import {router as Routes} from './routes/router';
import MainLayout from './pages/MainLayout';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <MainLayout />
    <RouterProvider router={Routes} />
    <Footer />
  </React.StrictMode>,
)
