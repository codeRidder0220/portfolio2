import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'

const App = () => {
  return (
    <div className=' min-h-screen bg-black text-[#f1f1f1]'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
