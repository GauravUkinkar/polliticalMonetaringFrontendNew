import React  from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import VotersList from './pages/voters_list/VotersList'
import Sidebar from './comp/sidebar/Sidebar'

function App() {
 

  return (
    <>
      <div class="app">
        <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/voterlist' element={<VotersList/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
