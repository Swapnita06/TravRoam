import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
