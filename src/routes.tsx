import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Project from './pages/Project'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Portfolio" element={<Portfolio />} />
    <Route path="/Portfolio/:id" element={<Project />} />
  </Routes>
)

export default Rotas
