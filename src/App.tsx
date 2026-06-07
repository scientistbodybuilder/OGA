import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import LandingPage from './components/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
