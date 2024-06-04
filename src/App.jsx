import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Portfolio from './Components/Portfolio'
import Service from './Components/Service'
import Footer from './Components/Footer'
import Topstrip from './Components/Topstrip'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Contactus from './Components/Contactus'
import { useSelector } from 'react-redux'

function App() {

  const isDark = useSelector(state => state.isDark)
  const openNav = useSelector(state => state.openNav)
  return (
    <div className={openNav && 'noScroll'} data-theme={isDark ? 'dark' : ''}> 
      <Topstrip />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={'/contact'} element={<Contactus />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
