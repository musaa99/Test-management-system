
import React, { useEffect } from 'react'

const Quiz = ({name, score, questions, setQuestions, setScore}) => {
  useEffect(() => {
    console.log(questions)
  }, [questions]);
  
  
  return (
    <div>Quiz welcom</div>
  )
};

export default Quiz 