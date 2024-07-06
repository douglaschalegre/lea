import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Students } from './Students.tsx'
import { Aside } from './Aside.tsx'
import { Header } from './Header.tsx'

import './index.css'

const router = createBrowserRouter([
    {
        path: '/alunos',
        element: <Students />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Aside/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header/>
        <RouterProvider router={router}/>
    </div>
    </div>
  </React.StrictMode>,
)
