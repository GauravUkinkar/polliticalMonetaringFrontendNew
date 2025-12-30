import React  from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Header from './comp/header/Header'



function App() {
 

  return (
    <>
      <div class="app">
        <BrowserRouter>
             <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
