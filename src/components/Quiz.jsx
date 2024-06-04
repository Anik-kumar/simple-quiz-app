import { useState } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteLogo from '../assets/quiz-complete.png';


export default function Quiz({}) {

  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prev) => { return [...prev, selectedAnswer]});
    console.log(userAnswers);
  }


  if(quizIsComplete) {
    return <div id="summary">
      <img src={quizCompleteLogo} alt="quiz complete logo"/>
      <h2>Quiz Completed!</h2>
    </div>
  }
  
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);


  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((option) => (
            <li key={option} className="answer">
              <button onClick={() => handleSelectAnswer(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
