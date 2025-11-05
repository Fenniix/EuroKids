import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Ekcanoitas from './pages/Ek-canoitas.jsx'
import Ekmoctezuma from './pages/Ek-moctezuma.jsx'
import Eklaureles from './pages/Ek-laureles.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ekcanoitas" element={<Ekcanoitas />} />
        <Route path="/ekmoctezuma" element={<Ekmoctezuma />} />
        <Route path="/eklaureles" element={<Eklaureles />} />
      </Routes>
    </Router>
  )
}

export default App
