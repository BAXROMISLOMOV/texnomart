import { useState } from 'react'
import { create } from 'zustand'
import './App.css'
import NavbarTop from './Companents/Navbar/NavbarTop'
import Navbar from './Companents/Navbar/Navbar'
import NavbarBottom from './Companents/Navbar/NavbarBottom'
import Corusel from './Companents/Corusel'
import Catigories from './Companents/Catigoria'
import Cards from './Companents/Cards'

function App() {

  return (
    <div>
      <NavbarTop/>
      <Navbar/>
      <NavbarBottom/>
      <Corusel/>
      <Catigories/>
      <Cards/>
      
        
    </div>
  )
}

export default App
