import React  from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'



function App() {
 

  return (
    <>
      <div class="app">
        <BrowserRouter>

        <Routes>
          <Route path='/' element={<Dashboard/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
