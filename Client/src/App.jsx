import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AdoptPage from './Pages/AdoptPage'
import ContactPage from './Pages/ContactPage'
import LoginPage from './Pages/LoginPage'
import StoryPage from './Pages/StoryPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<AdoptPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/stories" element={<StoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

