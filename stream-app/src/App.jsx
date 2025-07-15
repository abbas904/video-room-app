import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Room from './components/pages/Room'
import Pricing from './components/Pricing'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/room/:roomID" element={<Room/>}></Route>
       <Route path="/pricing" element={<Pricing/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App