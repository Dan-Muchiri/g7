import './App.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/about/About';
import TestimonialsPage from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import Impacts from './components/impact/Impact';
import ContactUs from './components/contact/Contact';
import WhyGWSynergy from './components/why/Why';
import Methodology from './components/methodology/Methodology';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/impact" element={<Impacts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/why-gw-synergy" element={<WhyGWSynergy />} />
        <Route path="/success-methodology" element={<Methodology />} />
      </Routes>
    </Router>
  )
}

export default App
