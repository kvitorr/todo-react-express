import React from 'react'
import ReactDOM from 'react-dom/client'

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { GlobalStyle } from './styles/global'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>  
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
