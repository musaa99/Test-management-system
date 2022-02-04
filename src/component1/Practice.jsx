// import React, {useEffect, useState} from 'react'
// import styles from  "../css/Test.module.css"
// import axios  from 'axios'







// const Practice = () => {
//     const [test, setTest] = useState("");
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [questions, setQuestions] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [options, setOptions] = useState("");
//     console.log('questions', questions);
//     console.log('options', options);
    
//     const getQuestions = async() => {
        
//         const result = await axios.get("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple");
//          setQuestions(result.data.results);
         
//          console.log( "res" ,result)
//     }
    

//     const displayQuestions = () => {
//         console.log('test1111', questions[1]);
//         questions.map((data, index) => {
//             if(index <= questions.length) {
//                 setCurrentQuestion(questions);
//                 console.log('questions[index]', questions[index]);
//                 setOptions([data.correct_answer, ...data.incorrect_answers])
//                 // index++;
//                 console.log('indexIN', index);
//             }
//             console.log('index', index);
//             console.log('x', data);
//         })
//     }
//     useEffect(() => {
//         getQuestions();
//     }, [])

//     return (
//         <div>
//            <div  className= {styles.Practice}>
                  
//                  <button onClick={displayQuestions}>post</button> 
//                 { options.map((option) => {
//                    return <button >{option}</button> 
//                  })
//                  }
//            </div>
//            <button> </button>
//         </div>
//     )
// }

// export default Practice
