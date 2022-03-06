import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './footer/Footer';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result';
import './App.css';
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [question, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      
      console.log("e", data)
    setQuestions(data.results);
  };
  
  return(  
   <React.Fragment>
    <div className='app'>
   <Header/>
   <Routes>
    <Route path='/' element ={<Home 
    name = {name} 
    setName={setName} />}
    fetchQuestions={fetchQuestions} />
    <Route path='/quiz' element={<Quiz 
    name={name}
    question={question}
    score={score}
    setScore={setScore}
    setQuestions={setQuestions}
    
    
    />} />
    <Route path='/result' element={<Result />} />
   </Routes>
   <Footer/>
   </div>
  </React.Fragment>
  
   )
  
  

};

export default App; 
