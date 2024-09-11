import './App.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/about/Leadership';
import TestimonialsPage from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import ContactUs from './components/contact/Contact';
import WhyGWSynergy from './components/why/Why';
import Methodology from './components/methodology/Methodology';
import Leadership from './components/about/Leadership';
import CSR from './components/csr/Csr';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/why-gw-synergy" element={<WhyGWSynergy />} />
        <Route path="/success-methodology" element={<Methodology />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/csr" element={<CSR />} />
      </Routes>
    </Router>
  )
}

export default App
