import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result';

const App = () => {
  const [name, setName] = useState("");
  const fetchQuestions =(category,difficulty)=> {
    console.log('fetchq')
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
    <Route path='/quiz' element={<Quiz />} />
    <Route path='/result' element={<Result />} />
   </Routes>
   </div>;
  </React.Fragment>
  
   )
  
  

};

export default App; 
