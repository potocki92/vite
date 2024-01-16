import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<About />}>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<About />} />
          <Route path="/projects" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
