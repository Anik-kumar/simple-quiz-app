import { useCallback, useState } from "react";
import QUESTIONS from '../questions.js';
// import QuestionTimer from "./QuestionTimer.jsx";
// import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";


export default function Quiz({}) {

  const [userAnswers, setUserAnswers] = useState([]);
  
  const activeQuestionIndex = userAnswers.length;
  
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    
    setUserAnswers((prev) => { return [...prev, selectedAnswer]});
    console.log(userAnswers);

  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );


  if(quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  }  


  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        questionIndex={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
