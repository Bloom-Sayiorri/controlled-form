import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter className="minh-h-screen">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
