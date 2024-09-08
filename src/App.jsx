import './App.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/about/About';
import TestimonialsPage from './components/testimonials/Testimonials';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </Router>
  )
}

export default App
