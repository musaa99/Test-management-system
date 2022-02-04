import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './pages/home/Home';
//import Quiz from './pages/quiz/quiz';
import Result from './pages/result/Result';

const App = () => {

  
  return(  
   <React.Fragment>
    <div className='app'>
   <Header/>
   <Routes>
    <Route path='/*' element={<Home />} />
    <Route path='/result' element={<Result />} />
   </Routes>
   </div>;
  </React.Fragment>
  
   )
  
  

};

export default App; 
