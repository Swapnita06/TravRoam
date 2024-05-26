import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tour from './pages/Tour';
import Bucketlist from './pages/Bucketlist'
import './App.css';
import Admin from './components/Admin'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/tour' element={< Tour/>}/> 
      <Route path='/bucket' element={<Bucketlist/>}/>
      <Route path='/admin' element={<Admin/>}></Route>
    

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
