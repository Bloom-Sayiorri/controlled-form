import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuestionForm from './pages/QuestionForm';
// import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";


function App() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    console.log('Before dark mode, dark: ', dark);
    setDark(!dark);
    console.log('After dark mode, dark: ', !dark);
  }

  return (
    <BrowserRouter className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} toggleMode={toggleMode}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/question-form' element={<QuestionForm/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    // <div className={`App ${dark ? 'dark' : 'light'}`}>
    //   <nav className={dark ? 'bg-slate-800 text-white' : 'bg-white text-black'}>
    //     <button onClick={toggleMode}>
    //       {dark ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}
    //     </button>
    //   </nav>
      
    //   <Navbar toggleMode={toggleMode} dark={dark}/>
    //   {/* <Home /> */}
    //   <Footer/>
    // </div>
    
  );
}

export default App;
