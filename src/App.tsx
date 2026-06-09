import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/Landing';
import Programming from './components/programming/Programming';
import Gallery from './components/gallery/Gallery';

function App() {

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
