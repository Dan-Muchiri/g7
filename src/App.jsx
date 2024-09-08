import './App.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/header/about/About';
import Footer from './components/footer/Footer';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
