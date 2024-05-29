import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuestionList from './pages/QuestionList';
// import QuestionForm from './pages/QuestionForm';
import QuestionsForm from './pages/QuestionsForm';

function App() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    console.log('Before dark mode, dark: ', dark);
    setDark(!dark);
    console.log('After dark mode, dark: ', !dark);
  }

  // const getNextId = ((id) => () => ++id)(1);

  const [ questions, setQuestions ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/questions")
    .then((r) => r.json())
    .then((data) => setQuestions(data))
  },[]);

  function handleAddQuestion(newQuestion) {
    const addedQuestions = [...questions, newQuestion];
    setQuestions(addedQuestions)
  }

  return (
    <BrowserRouter className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} toggleMode={toggleMode}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        {/* <Route path='/question-form'  element={<QuestionForm/>}/> */}
        <Route
          path='/question-list'
          element={<QuestionList questions={questions} setQuestions={setQuestions}/>} 
        />
        <Route path='/form' element={<QuestionsForm onAddQuestion={handleAddQuestion}/>}/>
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
