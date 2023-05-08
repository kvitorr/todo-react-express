import React from 'react'
import ReactDOM from 'react-dom/client'

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { GlobalStyle } from './styles/global'
import { ListProvider } from './context/ListContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>  
    <GlobalStyle/>
    <ListProvider>
      <RouterProvider router={router}/>
    </ListProvider>
  </React.StrictMode>,
)
