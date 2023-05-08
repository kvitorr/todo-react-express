import { useState } from 'react'
import { Outlet } from 'react-router-dom' 
import { Header } from './components/Header'
import './styles.css'

function App() {

  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
