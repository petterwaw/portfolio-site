import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import PageTransition from './components/PageTransition.jsx'
import SubPagesLayout from './layouts/SubPagesLayout.jsx'
import CustomCursor from './components/CustomCursor.jsx'

function App() {

  const [phase, setPhase]= useState('idle')
  const [direction, setDirection] = useState("forward")
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  function handleTransition(path, dir = "forward") {
    setDirection(dir)
    setIsVisible(true)
    setPhase("entering")

    setTimeout(() => {
      setPhase("center")
    }, 200)

    setTimeout(() => {
      setPhase("exiting")
      navigate(path)
    }, 1000)

    setTimeout(() => {
      setIsVisible(false)
      setPhase("idle")
    }, 1300)
  }

  return (
    <>
      <PageTransition 
      phase={phase} 
      isVisible={isVisible}
      direction={direction}
      />

      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home handleTransition={handleTransition} />} />
        <Route element={<SubPagesLayout handleTransition={handleTransition} />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
