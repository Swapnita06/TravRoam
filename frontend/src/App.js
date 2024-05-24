import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tour from './pages/Tour';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/tour' element={< Tour/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
