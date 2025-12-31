import React from 'react'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/adopt" replace />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App

