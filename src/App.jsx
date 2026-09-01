import React from 'react'
import { Route , Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Project from './pages/Project'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
  return (
    <div className=' min-h-screen bg-black text-[#f1f1f1]'>

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}  />
          <Route path="/projects" element={<Project/>}  />
          <Route path="/projects/job-finder" element={<ProjectDetails/>}/>

      </Routes>
    </div>
  )
}

export default App
