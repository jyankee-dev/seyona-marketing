import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/menu/Navbar/Navbar';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import { Routes, Route } from 'react-router-dom'
import './theme.css';
import './App.css';
function App() {
    return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
      </div>
    )
}

export default App
