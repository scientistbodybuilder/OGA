import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/landing/Landing';
import Programming from './components/programming/Programming';
import Team from './components/team/Team';
import Photos from './components/photos/Photos';
// import Gallery from './components/gallery/Gallery';

function App() {

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/programming" element={<Programming />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/photos/:albumId" element={<Photos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
